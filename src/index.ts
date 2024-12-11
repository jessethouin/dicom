import express, {Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";
import {Tspec, TspecDocsMiddleware} from "tspec";
import * as controller from "./controller";
import {DefaultResponse} from "./controller";

export const chunkDir = __dirname + "/chunks";
export const mergedFilePath = __dirname + "/merged_files";
export const imageNotFound = __dirname + "/images/image-not-found.png";

//noinspection JSUnusedGlobalSymbols
export type GetImageApiSpec = Tspec.DefineApiSpec<{
    paths: {
        "/image/fileName/{fileName}": {
            get: {
                summary: "Get image by file name",
                handler: typeof controller.getImage,
            },
        },
    },
}>;

//noinspection JSUnusedGlobalSymbols
export type GetTagValueFromFullTagSpec = Tspec.DefineApiSpec<{
    paths: {
        "/tag/fileName/{fileName}/tag/{tag}": {
            get: {
                summary: "Get tag value by full tag (x00000000)",
                handler: typeof controller.getTagValueFromFullTag,
            },
        },
    },
}>;

//noinspection JSUnusedGlobalSymbols
export type GetTagValueFromGroupAndElementSpec = Tspec.DefineApiSpec<{
    paths: {
        "/tag/fileName/{fileName}/group/{group}/element/{element}": {
            get: {
                summary: "Get tag value by group (0x0000) and element (0x0000)",
                handler: typeof controller.getTagValueFromGroupAndElement,
            },
        },
    },
}>;

//noinspection JSUnusedGlobalSymbols
export type PostFileSpec = Tspec.DefineApiSpec<{
    paths: {
        "/upload": {
            post: {
                summary: "Upload file",
                /** @mediaType multipart/form-data */
                body: {
                    file: Tspec.BinaryString,
                    originalName: string,
                    chunkNumber: string,
                    totalChunks: string,
                },
                responses: { 200: DefaultResponse, 400: DefaultResponse, 422: DefaultResponse, 500: DefaultResponse },
            },
        },
    },
}>;

dotenv.config();

const initServer = async () => {
    const app: Express = express();
    const storage = multer.memoryStorage();
    const upload = multer({storage: storage});
    const port = process.env.PORT || 3000;

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    const a = await TspecDocsMiddleware({ openapi: { title: "DICOM Image Viewer", version: "1.0.0" } });
    // @ts-ignore
    app.use("/docs", a);

    app.get("/image/fileName/:fileName", controller.getImage);
    app.get("/tag/fileName/:fileName/group/:group/element/:element", controller.getTagValueFromGroupAndElement);
    app.get("/tag/fileName/:fileName/tag/:tag", controller.getTagValueFromFullTag);
    app.post("/upload", upload.single("file"), controller.postFile);

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

initServer()
    .catch((err: Error) => {
        console.error(err);
    });