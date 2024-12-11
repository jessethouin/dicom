import chai, {expect} from "chai";
import request from "supertest";
import {app} from "../index"
import { chaiImage } from "chai-image";
import sharp from "sharp";
import supertest from "supertest";

chai.use(chaiImage);

describe("Express App", () => {
    it("should error 500 on test file upload", async () => {
        const response = await supertest(app)
            .post("/upload")
            .field("chunkNumber", "0")
            .field("totalChunks", "1")
            .field("originalName", "IM000001.test")
            .attach("files", `${__dirname}/IM000001.test`);
        expect(response.status).to.equal(500);
    });

    it("should error 400 on test file upload", async () => {
        const response = await supertest(app)
            .post("/upload")
            .field("chunkNumber", "0")
            .field("totalChunks", "1")
            .field("originalName", "IM000001.test")
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("No file was uploaded");
    });

    it("should error Invalid chunkNumber 422 on test file upload", async () => {
        const response = await supertest(app)
            .post("/upload")
            .field("chunkNumber", "not a number")
            .field("totalChunks", "1")
            .field("originalName", "IM000001.test")
            .attach("file", `${__dirname}/IM000001.test`);
        expect(response.status).to.equal(422);
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("Invalid chunkNumber");
    });

    it("should error Invalid totalChunks 422 on test file upload", async () => {
        const response = await supertest(app)
            .post("/upload")
            .field("chunkNumber", "0")
            .field("totalChunks", "not a number")
            .field("originalName", "IM000001.test")
            .attach("file", `${__dirname}/IM000001.test`);
        expect(response.status).to.equal(422);
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("Invalid totalChunks");
    });

    it("should error Invalid originalName 422 on test file upload", async () => {
        const response = await supertest(app)
            .post("/upload")
            .field("chunkNumber", "0")
            .field("totalChunks", "1")
            .field("originalName", "")
            .attach("file", `${__dirname}/IM000001.test`);
        expect(response.status).to.equal(422);
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("Invalid originalName");
    });

    it("should upload the test file", async () => {
        const response = await supertest(app)
            .post("/upload")
            .field("chunkNumber", "0")
            .field("totalChunks", "1")
            .field("originalName", "IM000001.test")
            .attach("file", `${__dirname}/IM000001.test`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.true;
    });

    it("should respond with png image that is 512px x 512px", async () => {
        request(app).get("/image/fileName/IM000001.test")
            .then( response => {
                expect(response.status).to.equal(200);
                const img = sharp();
                response.pipe(img);
                img.metadata().then(metadata => {
                    expect(metadata.width).equal(512);
                    expect(metadata.height).equal(512);
                });
            }
        );
    });

    it("should respond with \"Sunnyvale Imaging Center\"", async () => {
        const response = await request(app).get("/tag/fileName/IM000001.test/tag/x00080080");
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.true;
        expect(response.body).to.have.property("tag");
        expect(response.body.tag).to.equal("Sunnyvale Imaging Center");
    });

    it("should respond with 422 error message", async () => {
        const response = await request(app).get("/tag/fileName/IM000001.test/tag/xFFFFFFFF");
        expect(response.status).to.equal(422);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("Hm, it looks like the tag you specified isn't valid.");
    });

    it("should respond with 404 error message", async () => {
        const response = await request(app).get("/tag/fileName/UNKNOWN.test/tag/x00080080");
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("File didn't exist on the server or the file is not a DICOM file.");
    });

    it("should respond with [\"Sunnyvale Imaging Center\"]", async () => {
        const response = await request(app).get("/tag/fileName/IM000001.test/group/0x0008/element/0x0080");
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.true;
        expect(response.body).to.have.property("tag");
        expect(response.body.tag).to.have.members(["Sunnyvale Imaging Center"]);
    });

    it("should respond with 422 error message", async () => {
        const response = await request(app).get("/tag/fileName/IM000001.test/group/0xFFFF/element/0xFFFF");
        expect(response.status).to.equal(422);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("Hm, it looks like the group and element combination you specified isn't valid.");
    });

    it("should respond with 404 error message", async () => {
        const response = await request(app).get("/tag/fileName/UNKNOWN.test/group/0x0008/element/0x0080");
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property("success");
        expect(response.body.success).to.be.false;
        expect(response.body).to.have.property("error");
        expect(response.body.error).to.equal("File didn't exist on the server or the file is not a DICOM file.");
    });
});
