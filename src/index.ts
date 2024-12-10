import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import fs from "fs";
import multer from "multer";
import {convertToHex, convertToTag, getDICOMDataFromString, getDICOMDataFromTuple, getDICOMImage, mergeChunks, validateDICOMTag, validateDICOMTuple} from "./utils/utils";

export const chunkDir = __dirname + "/chunks";
export const mergedFilePath = __dirname + "/merged_files";
export const imageNotFound = __dirname + "/images/image-not-found.png";

dotenv.config();

const app: Express = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
    res.json({success: true});
});

app.get("/image/fileName/:fileName", async (req: Request, res: Response) => {
    const fileName = req.params.fileName;
    const dicomData = await getDICOMImage(fileName);

    if (dicomData) {
        res.sendFile(dicomData.image);
    } else {
        res.status(404).json({ success: false, error: "File didn't exist on the server or it's not a DICOM file." });
    }
});

app.get("/tag/fileName/:fileName/group/:group/element/:element", async (req: Request, res: Response) => {
    const fileName = req.params.fileName;
    const group = req.params.group;
    const element = req.params.element;

    const groupHex = convertToHex(group);
    if (!groupHex) {
        res.status(422).json({ success: false, error: "Hm, it looks like the group you specified isn't valid." });
        return;
    }

    const elementHex = convertToHex(element);
    if (!elementHex) {
        res.status(422).json({ success: false, error: "Hm, it looks like the element you specified isn't valid." });
        return;
    }

    if (!validateDICOMTuple([groupHex, elementHex])) {
        res.status(422).json({ success: false, error: "Hm, it looks like the group and element combination you specified isn't valid." });
        return;
    }

    const data = await getDICOMDataFromTuple(fileName, [groupHex, elementHex]);

    if (data) {
        res.json({success: true, tag: data.tagValue});
    } else {
        res.status(404).json({ success: false, error: "File didn't exist on the server or the file is not a DICOM file." });
    }
});

app.get("/tag/fileName/:fileName/tag/:tag", async (req: Request, res: Response) => {
    const fileName = req.params.fileName;
    const tag = req.params.tag;

    const tagString = convertToTag(tag);
    if (!tagString || !validateDICOMTag(tagString)) {
        res.status(422).json({ success: false, error: "Hm, it looks like the tag you specified isn't valid." });
        return;
    }

    const data = await getDICOMDataFromString(fileName, tagString);

    if (data) {
        res.json({success: true, tag: data.tagValue});
    } else {
        res.status(404).json({ success: false, error: "File didn't exist on the server or the file is not a DICOM file." });
    }
});

app.post("/upload", upload.single("file"), async (req, res) => {
    const f = req.file;
    if (!f) {
        res.status(400).json({ success: false, error: "No file was uploaded" });
        return;
    }

    const chunkNumber = Number(req.body.chunkNumber);
    if (isNaN(chunkNumber)) {
        res.status(422).json({ success: false, error: "Invalid chunkNumber" });
        return;
    }

    const totalChunks = Number(req.body.totalChunks);
    if (isNaN(totalChunks)) {
        res.status(422).json({ success: false, error: "Invalid totalChunks" });
        return;
    }

    const fileName = req.body.originalName;
    if (!fileName) {
        res.status(422).json({ success: false, error: "Invalid originalName" });
        return;
    }

    if (!fs.existsSync(chunkDir)) {
        fs.mkdirSync(chunkDir);
    }

    try {
        const chunkFilePath = `${chunkDir}/${fileName}.part_${chunkNumber}`;
        const chunk = f.buffer;
        await fs.promises.writeFile(chunkFilePath, chunk);

        if (chunkNumber === totalChunks - 1) {
            await mergeChunks(fileName, totalChunks);
        }

        res.status(200).json({ success: true });
    } catch (e: any) {
        console.error("Error saving chunk:", e.message);
        res.status(500).json({ success: false, error: "Error saving chunk" });
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

