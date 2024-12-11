import chai from "chai";
import {getDICOMDataFromTuple, getDICOMDataFromString, getDICOMImage, convertToHex, convertToTag, validateDICOMTag, validateDICOMTuple} from "../utils/utils";
import {mergedFilePath} from "../index";
import fs from "fs";

const expect = chai.expect;

before("before", () => {
    console.log(`Copying ${__dirname}/IM000001.test to ${mergedFilePath}`);
    fs.copyFileSync(`${__dirname}/IM000001.test`, `${mergedFilePath}/IM000001.test`);
});

describe("Test getDICOMDataFromTuple", async () => {
    it("Tag value should be array [\"Sunnyvale Imaging Center\"]", async () => {
        const actualResult = await getDICOMDataFromTuple("IM000001.test", [0x0008, 0x0080]);
        expect(actualResult?.tagValue).to.have.members(["Sunnyvale Imaging Center"]);
    });
});

describe("Test getDICOMDataFromString", async () => {
    it("Tag value should be \"Sunnyvale Imaging Center\"", async () => {
        const actualResult = await getDICOMDataFromString("IM000001.test", "x00080080");
        expect(actualResult?.tagValue).to.equal("Sunnyvale Imaging Center");
    });
});

describe("Test getDICOMImage", async () => {
    it("Image file name should be \"IM000001.test.png\"", async () => {
        const actualResult = await getDICOMImage("IM000001.test");
        expect(actualResult?.image).to.equal(`${mergedFilePath}/IM000001.test.png`);
    });
});

describe("Test convertToHex", () => {
    it("String \"0x0080\" should be hex 0x0080", () => {
        const actualResult = convertToHex("0x0080");
        expect(actualResult).to.equal(0x0080);
    });
    it("String \"0080\" should be hex 0x0080", () => {
        const actualResult = convertToHex("0080");
        expect(actualResult).to.equal(0x0080);
    });
    it("String \"00800\" should be undefined", () => {
        const actualResult = convertToHex("00800");
        expect(actualResult).to.be.undefined;
    });
});

describe("Test convertToTag", () => {
    it("String \"x00800080\" should be string \"x00800080\"", () => {
        const actualResult = convertToTag("x00800080");
        expect(actualResult).to.equal("x00800080");
    });
    it("String \"00800080\" should be string \"x00800080\"", () => {
        const actualResult = convertToTag("00800080");
        expect(actualResult).to.equal("x00800080");
    });
    it("String \"00800\" should be undefined", () => {
        const actualResult = convertToTag("00800");
        expect(actualResult).to.be.undefined;
    });
});

describe("Test validateDICOMTag", () => {
    it("Tag \"x00080080\" should be valid", () => {
        const actualResult = validateDICOMTag("x00080080");
        expect(actualResult).to.be.true;
    });
    it("Tag \"xFFFFFFFF\" should be invalid", () => {
        const actualResult = validateDICOMTag("xFFFFFFFF");
        expect(actualResult).to.be.false;
    });
    it("String \"00800\" should be invalid", () => {
        const actualResult = validateDICOMTag("00800");
        expect(actualResult).to.be.false;
    });
});

describe("Test validateDICOMTuple", () => {
    it("Tuple [0x0008,0x0080] should be valid", () => {
        const actualResult = validateDICOMTuple([0x0008,0x0080]);
        expect(actualResult).to.be.true;
    });
    it("Tuple [0xFFFF,0xFFFF] should be invalid", () => {
        const actualResult = validateDICOMTuple([0xFFFF,0xFFFF]);
        expect(actualResult).to.be.false;
    });
});

