import fs from "fs";
import dicomjs from "dicom.ts"
import {TagTupleID} from "dicom.ts/dist/parser/tag";
import dicomParser from "dicom-parser";
import dcmjsImaging from 'dcmjs-imaging';
import {encode} from "fast-png";
import {DicomData, DicomImage} from "./types";
import {chunkDir, imageNotFound, mergedFilePath} from "../index";
import {tags} from "./dicomTags";

export const mergeChunks = async (fileName: string, totalChunks: number) => {
    if (!fs.existsSync(mergedFilePath)) {
        fs.mkdirSync(mergedFilePath);
    }

    const writeStream = fs.createWriteStream(`${mergedFilePath}/${fileName}`);
    for (let i = 0; i < totalChunks; i++) {
        const chunkFilePath = `${chunkDir}/${fileName}.part_${i}`;
        const chunkBuffer = await fs.promises.readFile(chunkFilePath);
        writeStream.write(chunkBuffer);
        fs.unlinkSync(chunkFilePath);
    }

    writeStream.end();
};

export const getDICOMDataFromTuple = async (fileName: string, tag: TagTupleID): Promise<DicomData | undefined> => {
    try {
        const buffer = await fs.promises.readFile(`${mergedFilePath}/${fileName}`);

        const dcmImage = dicomjs.parseImage(buffer.buffer);

        if (dcmImage) {
            const group = tag[0];
            const element = tag[1];
            const tagValue = dcmImage.getTagValue([group, element]);

            return { tagValue: tagValue };
        }
    } catch (e: any) {
        console.error(e.message);
    }
}

export const getDICOMDataFromString = async (fileName: string, tag: string): Promise<DicomData | undefined> => {
    try {
        const buffer = await fs.promises.readFile(`${mergedFilePath}/${fileName}`);

        const dataSet = dicomParser.parseDicom(buffer);
        const tagValue = dataSet.string(tag);
        return {tagValue: tagValue};
    } catch (e: any) {
        console.error(e.message);
    }
}

export const getDICOMImage = async (fileName: string): Promise<DicomImage | undefined> => {
    try {
        const buffer = await fs.promises.readFile(`${mergedFilePath}/${fileName}`);

        const {DicomImage} = dcmjsImaging;
        const image = new DicomImage(
            buffer.buffer.slice(
                buffer.byteOffset,
                buffer.byteOffset + buffer.byteLength
            )
        );
        const renderingResult = image.render();

        const pngBuffer = encode({
            data: Buffer.from(renderingResult.pixels),
            width: renderingResult.width,
            height: renderingResult.height,
        });
        fs.writeFileSync(`${mergedFilePath}/${fileName}.png`, pngBuffer, { flag: "w" });

        return {image: `${mergedFilePath}/${fileName}.png`};
    } catch (e: any) {
        console.error(e.message);
        return {image: imageNotFound};
    }
}

export const convertToHex = (str: string) => {
    if (str.length === 6 && str.toLowerCase().match(/^0x[0-9a-f]+$/i)) {
        return Number(str)
    }
    if (str.length === 4 && str.toLowerCase().match(/^[0-9a-f]+$/i)) {
        return Number(`0x${str}`)
    }
}

export const convertToTag = (str: string) => {
    if (str.length === 9 && str.toLowerCase().match(/^x[0-9a-f]+$/i)) {
        return str.toLowerCase();
    }
    if (str.length === 8 && str.toLowerCase().match(/^[0-9a-f]+$/i)) {
        return `x${str.toLowerCase()}`;
    }
}

export const validateDICOMTag = (tag: string) => {
    const tagGroup = tag.substring(1, 5);
    const tagElement = tag.substring(5);

    const foundIndex = tags.findIndex(t => {
        const { group, element } = parseDICOMTag(t.Tag);
        return group === tagGroup && element === tagElement;
    })

    return foundIndex > -1;
}

export const validateDICOMTuple = (tag: TagTupleID) => {
    const tagGroup = tag[0];
    const tagElement = tag[1];

    const foundIndex = tags.findIndex(t => {
        const tagTupleId = parseDICOMTagToTuple(t.Tag);
        return tagTupleId && tagTupleId[0] === tagGroup && tagTupleId[1] === tagElement;
    })

    return foundIndex > -1;
}

const parseDICOMTag = (tag: string) => {
    const group = tag.substring(1, 5).toLowerCase();
    const element = tag.substring(6, 10).toLowerCase();
    return { group, element };
}

const parseDICOMTagToTuple = (tag: string): TagTupleID | undefined => {
    const group = tag.substring(1, 5).toLowerCase();
    const groupHex = convertToHex(group);
    const element = tag.substring(6, 10).toLowerCase();
    const elementHex = convertToHex(element);

    if (groupHex && elementHex) {
        return [ groupHex, elementHex];
    }
}