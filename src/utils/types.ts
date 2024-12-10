import {TagValue} from "dicom.ts/dist/parser/tag";

export type DICOMTag = {
    "Tag": string,
    "Name": string,
    "Keyword": string,
    "VR": string,
    "VM": string,
    "Retired": "RET" | "DICONDE" | "DICOS" | ""
}

export type DicomImage = {
    image: string,
}

export type DicomData = {
    tagValue: TagValue | undefined,
}

