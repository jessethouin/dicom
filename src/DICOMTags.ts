﻿import {DICOMTag} from "./types";

export const tags: DICOMTag[] = [
  {
    "Tag": "(0008,0001)",
    "Name": "Length to End",
    "Keyword": "Length​ToEnd",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0005)",
    "Name": "Specific Character Set",
    "Keyword": "Specific​Character​Set",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0006)",
    "Name": "Language Code Sequence",
    "Keyword": "Language​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0008)",
    "Name": "Image Type",
    "Keyword": "Image​Type",
    "VR": "CS",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0010)",
    "Name": "Recognition Code",
    "Keyword": "Recognition​Code",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0012)",
    "Name": "Instance Creation Date",
    "Keyword": "Instance​Creation​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0013)",
    "Name": "Instance Creation Time",
    "Keyword": "Instance​Creation​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0014)",
    "Name": "Instance Creator UID",
    "Keyword": "Instance​CreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0015)",
    "Name": "Instance Coercion DateTime",
    "Keyword": "Instance​Coercion​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0016)",
    "Name": "SOP Class UID",
    "Keyword": "SOP​ClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0018)",
    "Name": "SOP Instance UID",
    "Keyword": "SOP​InstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,001A)",
    "Name": "Related General SOP Class UID",
    "Keyword": "Related​GeneralSOP​ClassUID",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,001B)",
    "Name": "Original Specialized SOP Class UID",
    "Keyword": "Original​SpecializedSOP​ClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0020)",
    "Name": "Study Date",
    "Keyword": "Study​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0021)",
    "Name": "Series Date",
    "Keyword": "Series​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0022)",
    "Name": "Acquisition Date",
    "Keyword": "Acquisition​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0023)",
    "Name": "Content Date",
    "Keyword": "Content​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0024)",
    "Name": "Overlay Date",
    "Keyword": "Overlay​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0025)",
    "Name": "Curve Date",
    "Keyword": "Curve​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,002A)",
    "Name": "Acquisition DateTime",
    "Keyword": "Acquisition​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0030)",
    "Name": "Study Time",
    "Keyword": "Study​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0031)",
    "Name": "Series Time",
    "Keyword": "Series​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0032)",
    "Name": "Acquisition Time",
    "Keyword": "Acquisition​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0033)",
    "Name": "Content Time",
    "Keyword": "Content​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0034)",
    "Name": "Overlay Time",
    "Keyword": "Overlay​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0035)",
    "Name": "Curve Time",
    "Keyword": "Curve​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0040)",
    "Name": "Data Set Type",
    "Keyword": "Data​Set​Type",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0041)",
    "Name": "Data Set Subtype",
    "Keyword": "Data​Set​Subtype",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0042)",
    "Name": "Nuclear Medicine Series Type",
    "Keyword": "Nuclear​Medicine​Series​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,0050)",
    "Name": "Accession Number",
    "Keyword": "Accession​Number",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0051)",
    "Name": "Issuer of Accession Number Sequence",
    "Keyword": "Issuer​OfAccession​Number​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0052)",
    "Name": "Query/Retrieve Level",
    "Keyword": "Query​Retrieve​Level",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0053)",
    "Name": "Query/Retrieve View",
    "Keyword": "Query​Retrieve​View",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0054)",
    "Name": "Retrieve AE Title",
    "Keyword": "RetrieveAE​Title",
    "VR": "AE",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0056)",
    "Name": "Instance Availability",
    "Keyword": "Instance​Availability",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0058)",
    "Name": "Failed SOP Instance UID List",
    "Keyword": "FailedSOP​InstanceUID​List",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0060)",
    "Name": "Modality",
    "Keyword": "Modality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0061)",
    "Name": "Modalities in Study",
    "Keyword": "Modalities​InStudy",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0062)",
    "Name": "SOP Classes in Study",
    "Keyword": "SOP​Classes​InStudy",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0064)",
    "Name": "Conversion Type",
    "Keyword": "Conversion​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0068)",
    "Name": "Presentation Intent Type",
    "Keyword": "Presentation​Intent​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0070)",
    "Name": "Manufacturer",
    "Keyword": "Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0080)",
    "Name": "Institution Name",
    "Keyword": "Institution​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0081)",
    "Name": "Institution Address",
    "Keyword": "Institution​Address",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0082)",
    "Name": "Institution Code Sequence",
    "Keyword": "Institution​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0090)",
    "Name": "Referring Physician's Name",
    "Keyword": "Referring​Physician​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0092)",
    "Name": "Referring Physician's Address",
    "Keyword": "Referring​Physician​Address",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0094)",
    "Name": "Referring Physician's Telephone Numbers",
    "Keyword": "Referring​Physician​Telephone​Numbers",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,0096)",
    "Name": "Referring Physician Identification Sequence",
    "Keyword": "Referring​Physician​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0100)",
    "Name": "Code Value",
    "Keyword": "Code​Value",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0101)",
    "Name": "Extended Code Value",
    "Keyword": "Extended​Code​Value",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(0008,0102)",
    "Name": "Coding Scheme Designator",
    "Keyword": "Coding​Scheme​Designator",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0103)",
    "Name": "Coding Scheme Version",
    "Keyword": "Coding​Scheme​Version",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0104)",
    "Name": "Code Meaning",
    "Keyword": "Code​Meaning",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0105)",
    "Name": "Mapping Resource",
    "Keyword": "Mapping​Resource",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0106)",
    "Name": "Context Group Version",
    "Keyword": "Context​Group​Version",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0107)",
    "Name": "Context Group Local Version",
    "Keyword": "Context​Group​Local​Version",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0108)",
    "Name": "Extended Code Meaning",
    "Keyword": "Extended​Code​Meaning",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(0008,010B)",
    "Name": "Context Group Extension Flag",
    "Keyword": "Context​Group​Extension​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,010C)",
    "Name": "Coding Scheme UID",
    "Keyword": "Coding​SchemeUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,010D)",
    "Name": "Context Group Extension Creator UID",
    "Keyword": "Context​Group​Extension​CreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,010F)",
    "Name": "Context Identifier",
    "Keyword": "Context​Identifier",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0110)",
    "Name": "Coding Scheme Identification Sequence",
    "Keyword": "Coding​Scheme​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0112)",
    "Name": "Coding Scheme Registry",
    "Keyword": "Coding​Scheme​Registry",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0114)",
    "Name": "Coding Scheme External ID",
    "Keyword": "Coding​Scheme​ExternalID",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0115)",
    "Name": "Coding Scheme Name",
    "Keyword": "Coding​Scheme​Name",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0116)",
    "Name": "Coding Scheme Responsible Organization",
    "Keyword": "Coding​Scheme​Responsible​Organization",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0117)",
    "Name": "Context UID",
    "Keyword": "ContextUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,0201)",
    "Name": "Timezone Offset From UTC",
    "Keyword": "Timezone​Offset​FromUTC",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1000)",
    "Name": "Network ID",
    "Keyword": "NetworkID",
    "VR": "AE",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,1010)",
    "Name": "Station Name",
    "Keyword": "Station​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1030)",
    "Name": "Study Description",
    "Keyword": "Study​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1032)",
    "Name": "Procedure Code Sequence",
    "Keyword": "Procedure​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,103E)",
    "Name": "Series Description",
    "Keyword": "Series​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,103F)",
    "Name": "Series Description Code Sequence",
    "Keyword": "Series​Description​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1040)",
    "Name": "Institutional Department Name",
    "Keyword": "Institutional​Department​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1048)",
    "Name": "Physician(s) of Record",
    "Keyword": "Physicians​OfRecord",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1049)",
    "Name": "Physician(s) of Record Identification Sequence",
    "Keyword": "Physicians​OfRecord​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1050)",
    "Name": "Performing Physician's Name",
    "Keyword": "Performing​Physician​Name",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1052)",
    "Name": "Performing Physician Identification Sequence",
    "Keyword": "Performing​Physician​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1060)",
    "Name": "Name of Physician(s) Reading Study",
    "Keyword": "Name​OfPhysicians​Reading​Study",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1062)",
    "Name": "Physician(s) Reading Study Identification Sequence",
    "Keyword": "Physicians​Reading​Study​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1070)",
    "Name": "Operators' Name",
    "Keyword": "Operators​Name",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1072)",
    "Name": "Operator Identification Sequence",
    "Keyword": "Operator​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1080)",
    "Name": "Admitting Diagnoses Description",
    "Keyword": "Admitting​Diagnoses​Description",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1084)",
    "Name": "Admitting Diagnoses Code Sequence",
    "Keyword": "Admitting​Diagnoses​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1090)",
    "Name": "Manufacturer's Model Name",
    "Keyword": "Manufacturer​Model​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1100)",
    "Name": "Referenced Results Sequence",
    "Keyword": "Referenced​Results​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,1110)",
    "Name": "Referenced Study Sequence",
    "Keyword": "Referenced​Study​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1111)",
    "Name": "Referenced Performed Procedure Step Sequence",
    "Keyword": "Referenced​Performed​Procedure​Step​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1115)",
    "Name": "Referenced Series Sequence",
    "Keyword": "Referenced​Series​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1120)",
    "Name": "Referenced Patient Sequence",
    "Keyword": "Referenced​Patient​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1125)",
    "Name": "Referenced Visit Sequence",
    "Keyword": "Referenced​Visit​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1130)",
    "Name": "Referenced Overlay Sequence",
    "Keyword": "Referenced​Overlay​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,1134)",
    "Name": "Referenced Stereometric Instance Sequence",
    "Keyword": "Referenced​Stereometric​Instance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,113A)",
    "Name": "Referenced Waveform Sequence",
    "Keyword": "Referenced​Waveform​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1140)",
    "Name": "Referenced Image Sequence",
    "Keyword": "Referenced​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1145)",
    "Name": "Referenced Curve Sequence",
    "Keyword": "Referenced​Curve​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,114A)",
    "Name": "Referenced Instance Sequence",
    "Keyword": "Referenced​Instance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,114B)",
    "Name": "Referenced Real World Value Mapping Instance Sequence",
    "Keyword": "Referenced​Real​World​Value​Mapping​Instance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1150)",
    "Name": "Referenced SOP Class UID",
    "Keyword": "ReferencedSOP​ClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1155)",
    "Name": "Referenced SOP Instance UID",
    "Keyword": "ReferencedSOP​InstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,115A)",
    "Name": "SOP Classes Supported",
    "Keyword": "SOP​Classes​Supported",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1160)",
    "Name": "Referenced Frame Number",
    "Keyword": "Referenced​Frame​Number",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1161)",
    "Name": "Simple Frame List",
    "Keyword": "Simple​Frame​List",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1162)",
    "Name": "Calculated Frame List",
    "Keyword": "Calculated​Frame​List",
    "VR": "UL",
    "VM": "3-3n",
    "Retired": ""
  },
  {
    "Tag": "(0008,1163)",
    "Name": "Time​Range",
    "Keyword": "Time​Range",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0008,1164)",
    "Name": "Frame Extraction Sequence",
    "Keyword": "Frame​Extraction​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1167)",
    "Name": "Multi-frame Source SOP Instance UID",
    "Keyword": "Multi​Frame​SourceSOP​InstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1190)",
    "Name": "Retrieve URL",
    "Keyword": "RetrieveURL",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1195)",
    "Name": "Transaction UID",
    "Keyword": "TransactionUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1196)",
    "Name": "Warning Reason",
    "Keyword": "Warning​Reason",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1197)",
    "Name": "Failure Reason",
    "Keyword": "Failure​Reason",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1198)",
    "Name": "Failed SOP Sequence",
    "Keyword": "FailedSOP​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1199)",
    "Name": "Referenced SOP Sequence",
    "Keyword": "ReferencedSOP​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1200)",
    "Name": "Studies Containing Other Referenced Instances Sequence",
    "Keyword": "Studies​Containing​Other​Referenced​Instances​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,1250)",
    "Name": "Related Series Sequence",
    "Keyword": "Related​Series​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2110)",
    "Name": "Lossy Image Compression (Retired)",
    "Keyword": "Lossy​Image​Compression​Retired",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2111)",
    "Name": "Derivation Description",
    "Keyword": "Derivation​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2112)",
    "Name": "Source Image Sequence",
    "Keyword": "Source​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2120)",
    "Name": "Stage Name",
    "Keyword": "Stage​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2122)",
    "Name": "Stage Number",
    "Keyword": "Stage​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2124)",
    "Name": "Number of Stages",
    "Keyword": "Number​OfStages",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2127)",
    "Name": "View Name",
    "Keyword": "View​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2128)",
    "Name": "View Number",
    "Keyword": "View​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2129)",
    "Name": "Number of Event Timers",
    "Keyword": "Number​OfEvent​Timers",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,212A)",
    "Name": "Number of Views in Stage",
    "Keyword": "Number​OfViews​InStage",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2130)",
    "Name": "Event Elapsed Time(s)",
    "Keyword": "Event​Elapsed​Times",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,2132)",
    "Name": "Event Timer Name(s)",
    "Keyword": "Event​Timer​Names",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,2133)",
    "Name": "Event Timer Sequence",
    "Keyword": "Event​Timer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2134)",
    "Name": "Event Time Offset",
    "Keyword": "Event​Time​Offset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2135)",
    "Name": "Event Code Sequence",
    "Keyword": "Event​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2142)",
    "Name": "Start Trim",
    "Keyword": "Start​Trim",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2143)",
    "Name": "Stop Trim",
    "Keyword": "Stop​Trim",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2144)",
    "Name": "Recommended Display Frame Rate",
    "Keyword": "Recommended​Display​Frame​Rate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2200)",
    "Name": "Transducer Position",
    "Keyword": "Transducer​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2204)",
    "Name": "Transducer Orientation",
    "Keyword": "Transducer​Orientation",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2208)",
    "Name": "Anatomic Structure",
    "Keyword": "Anatomic​Structure",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2218)",
    "Name": "Anatomic Region Sequence",
    "Keyword": "Anatomic​Region​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2220)",
    "Name": "Anatomic Region Modifier Sequence",
    "Keyword": "Anatomic​Region​Modifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2228)",
    "Name": "Primary Anatomic Structure Sequence",
    "Keyword": "Primary​Anatomic​Structure​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2229)",
    "Name": "Anatomic Structure, Space or Region Sequence",
    "Keyword": "Anatomic​Structure​Space​OrRegion​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2230)",
    "Name": "Primary Anatomic Structure Modifier Sequence",
    "Keyword": "Primary​Anatomic​Structure​Modifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,2240)",
    "Name": "Transducer Position Sequence",
    "Keyword": "Transducer​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2242)",
    "Name": "Transducer Position Modifier Sequence",
    "Keyword": "Transducer​Position​Modifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2244)",
    "Name": "Transducer Orientation Sequence",
    "Keyword": "Transducer​Orientation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2246)",
    "Name": "Transducer Orientation Modifier Sequence",
    "Keyword": "Transducer​Orientation​Modifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2251)",
    "Name": "Anatomic Structure Space Or Region Code Sequence (Trial)",
    "Keyword": "Anatomic​Structure​Space​OrRegion​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2253)",
    "Name": "Anatomic Portal Of Entrance Code Sequence (Trial)",
    "Keyword": "Anatomic​Portal​OfEntrance​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2255)",
    "Name": "Anatomic Approach Direction Code Sequence (Trial)",
    "Keyword": "Anatomic​Approach​Direction​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2256)",
    "Name": "Anatomic Perspective Description (Trial)",
    "Keyword": "Anatomic​Perspective​Description​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2257)",
    "Name": "Anatomic Perspective Code Sequence (Trial)",
    "Keyword": "Anatomic​Perspective​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2258)",
    "Name": "Anatomic Location Of Examining Instrument Description (Trial)",
    "Keyword": "Anatomic​Location​OfExamining​Instrument​Description​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,2259)",
    "Name": "Anatomic Location Of Examining Instrument Code Sequence (Trial)",
    "Keyword": "Anatomic​Location​OfExamining​Instrument​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,225A)",
    "Name": "Anatomic Structure Space Or Region Modifier Code Sequence (Trial)",
    "Keyword": "Anatomic​Structure​Space​OrRegion​Modifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,225C)",
    "Name": "On​Axis Background Anatomic Structure Code Sequence (Trial)",
    "Keyword": "On​Axis​Background​Anatomic​Structure​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,3001)",
    "Name": "Alternate Representation Sequence",
    "Keyword": "Alternate​Representation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,3010)",
    "Name": "Irradiation Event UID",
    "Keyword": "Irradiation​EventUID",
    "VR": "UI",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0008,4000)",
    "Name": "Identifying Comments",
    "Keyword": "Identifying​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0008,9007)",
    "Name": "Frame Type",
    "Keyword": "Frame​Type",
    "VR": "CS",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0008,9092)",
    "Name": "Referenced Image Evidence Sequence",
    "Keyword": "Referenced​Image​Evidence​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9121)",
    "Name": "Referenced Raw Data Sequence",
    "Keyword": "Referenced​Raw​Data​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9123)",
    "Name": "Creator-Version UID",
    "Keyword": "Creator​VersionUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9124)",
    "Name": "Derivation Image Sequence",
    "Keyword": "Derivation​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9154)",
    "Name": "Source Image Evidence Sequence",
    "Keyword": "Source​Image​Evidence​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9205)",
    "Name": "Pixel Presentation",
    "Keyword": "Pixel​Presentation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9206)",
    "Name": "Volumetric Properties",
    "Keyword": "Volumetric​Properties",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9207)",
    "Name": "Volume Based Calculation Technique",
    "Keyword": "Volume​Based​Calculation​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9208)",
    "Name": "Complex Image Component",
    "Keyword": "Complex​Image​Component",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9209)",
    "Name": "Acquisition Contrast",
    "Keyword": "Acquisition​Contrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9215)",
    "Name": "Derivation Code Sequence",
    "Keyword": "Derivation​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9237)",
    "Name": "Referenced Presentation State Sequence",
    "Keyword": "Referenced​Presentation​State​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9410)",
    "Name": "Referenced Other Plane Sequence",
    "Keyword": "Referenced​Other​Plane​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9458)",
    "Name": "Frame Display Sequence",
    "Keyword": "Frame​Display​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9459)",
    "Name": "Recommended Display Frame Rate in Float",
    "Keyword": "Recommended​Display​Frame​Rate​InFloat",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0008,9460)",
    "Name": "Skip Frame Range Flag",
    "Keyword": "Skip​Frame​Range​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0010)",
    "Name": "Patient's Name",
    "Keyword": "Patient​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0020)",
    "Name": "Patient ID",
    "Keyword": "PatientID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0021)",
    "Name": "Issuer of Patient ID",
    "Keyword": "Issuer​OfPatientID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0022)",
    "Name": "Type of Patient ID",
    "Keyword": "Type​OfPatientID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0024)",
    "Name": "Issuer of Patient ID Qualifiers Sequence",
    "Keyword": "Issuer​OfPatientID​Qualifiers​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0030)",
    "Name": "Patient's Birth Date",
    "Keyword": "Patient​Birth​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0032)",
    "Name": "Patient's Birth Time",
    "Keyword": "Patient​Birth​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0040)",
    "Name": "Patient's Sex",
    "Keyword": "Patient​Sex",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0050)",
    "Name": "Patient's Insurance Plan Code Sequence",
    "Keyword": "Patient​Insurance​Plan​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0101)",
    "Name": "Patient's Primary Language Code Sequence",
    "Keyword": "Patient​Primary​Language​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0102)",
    "Name": "Patient's Primary Language Modifier Code Sequence",
    "Keyword": "Patient​Primary​Language​Modifier​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0200)",
    "Name": "Quality Control Subject",
    "Keyword": "Quality​Control​Subject",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,0201)",
    "Name": "Quality Control Subject Type Code Sequence",
    "Keyword": "Quality​Control​Subject​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1000)",
    "Name": "Other Patient I​Ds",
    "Keyword": "Other​PatientI​Ds",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,1001)",
    "Name": "Other Patient Names",
    "Keyword": "Other​Patient​Names",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,1002)",
    "Name": "Other Patient I​Ds Sequence",
    "Keyword": "Other​PatientI​DsSequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1005)",
    "Name": "Patient's Birth Name",
    "Keyword": "Patient​Birth​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1010)",
    "Name": "Patient's Age",
    "Keyword": "Patient​Age",
    "VR": "AS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1020)",
    "Name": "Patient's Size",
    "Keyword": "Patient​Size",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1021)",
    "Name": "Patient's Size Code Sequence",
    "Keyword": "Patient​Size​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1030)",
    "Name": "Patient's Weight",
    "Keyword": "Patient​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1040)",
    "Name": "Patient's Address",
    "Keyword": "Patient​Address",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1050)",
    "Name": "Insurance Plan Identification",
    "Keyword": "Insurance​Plan​Identification",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0010,1060)",
    "Name": "Patient's Mother's Birth Name",
    "Keyword": "Patient​Mother​Birth​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1080)",
    "Name": "Military Rank",
    "Keyword": "Military​Rank",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1081)",
    "Name": "Branch of Service",
    "Keyword": "Branch​OfService",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,1090)",
    "Name": "Medical Record Locator",
    "Keyword": "Medical​Record​Locator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2000)",
    "Name": "Medical Alerts",
    "Keyword": "Medical​Alerts",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,2110)",
    "Name": "Allergies",
    "Keyword": "Allergies",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,2150)",
    "Name": "Country of Residence",
    "Keyword": "Country​OfResidence",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2152)",
    "Name": "Region of Residence",
    "Keyword": "Region​OfResidence",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2154)",
    "Name": "Patient's Telephone Numbers",
    "Keyword": "Patient​Telephone​Numbers",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0010,2160)",
    "Name": "Ethnic Group",
    "Keyword": "Ethnic​Group",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2180)",
    "Name": "Occupation",
    "Keyword": "Occupation",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21A0)",
    "Name": "Smoking Status",
    "Keyword": "Smoking​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21B0)",
    "Name": "Additional Patient History",
    "Keyword": "Additional​Patient​History",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21C0)",
    "Name": "Pregnancy Status",
    "Keyword": "Pregnancy​Status",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21D0)",
    "Name": "Last Menstrual Date",
    "Keyword": "Last​Menstrual​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,21F0)",
    "Name": "Patient's Religious Preference",
    "Keyword": "Patient​Religious​Preference",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2201)",
    "Name": "Patient Species Description",
    "Keyword": "Patient​Species​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2202)",
    "Name": "Patient Species Code Sequence",
    "Keyword": "Patient​Species​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2203)",
    "Name": "Patient's Sex Neutered",
    "Keyword": "Patient​Sex​Neutered",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2210)",
    "Name": "Anatomical Orientation Type",
    "Keyword": "Anatomical​Orientation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2292)",
    "Name": "Patient Breed Description",
    "Keyword": "Patient​Breed​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2293)",
    "Name": "Patient Breed Code Sequence",
    "Keyword": "Patient​Breed​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2294)",
    "Name": "Breed Registration Sequence",
    "Keyword": "Breed​Registration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2295)",
    "Name": "Breed Registration Number",
    "Keyword": "Breed​Registration​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2296)",
    "Name": "Breed Registry Code Sequence",
    "Keyword": "Breed​Registry​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2297)",
    "Name": "Responsible Person",
    "Keyword": "Responsible​Person",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2298)",
    "Name": "Responsible Person Role",
    "Keyword": "Responsible​Person​Role",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,2299)",
    "Name": "Responsible Organization",
    "Keyword": "Responsible​Organization",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,4000)",
    "Name": "Patient Comments",
    "Keyword": "Patient​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0010,9431)",
    "Name": "Examined Body Thickness",
    "Keyword": "Examined​Body​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0010)",
    "Name": "Clinical Trial Sponsor Name",
    "Keyword": "Clinical​Trial​Sponsor​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0020)",
    "Name": "Clinical Trial Protocol ID",
    "Keyword": "Clinical​Trial​ProtocolID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0021)",
    "Name": "Clinical Trial Protocol Name",
    "Keyword": "Clinical​Trial​Protocol​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0030)",
    "Name": "Clinical Trial Site ID",
    "Keyword": "Clinical​Trial​SiteID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0031)",
    "Name": "Clinical Trial Site Name",
    "Keyword": "Clinical​Trial​Site​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0040)",
    "Name": "Clinical Trial Subject ID",
    "Keyword": "Clinical​Trial​SubjectID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0042)",
    "Name": "Clinical Trial Subject Reading ID",
    "Keyword": "Clinical​Trial​Subject​ReadingID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0050)",
    "Name": "Clinical Trial Time Point ID",
    "Keyword": "Clinical​Trial​Time​PointID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0051)",
    "Name": "Clinical Trial Time Point Description",
    "Keyword": "Clinical​Trial​Time​Point​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0060)",
    "Name": "Clinical Trial Coordinating Center Name",
    "Keyword": "Clinical​Trial​Coordinating​Center​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0062)",
    "Name": "Patient Identity Removed",
    "Keyword": "Patient​Identity​Removed",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0063)",
    "Name": "De-identification Method",
    "Keyword": "Deidentification​Method",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0012,0064)",
    "Name": "De-identification Method Code Sequence",
    "Keyword": "Deidentification​Method​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0071)",
    "Name": "Clinical Trial Series ID",
    "Keyword": "Clinical​Trial​SeriesID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0072)",
    "Name": "Clinical Trial Series Description",
    "Keyword": "Clinical​Trial​Series​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0081)",
    "Name": "Clinical Trial Protocol Ethics Committee Name",
    "Keyword": "Clinical​Trial​Protocol​Ethics​Committee​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0082)",
    "Name": "Clinical Trial Protocol Ethics Committee Approval Number",
    "Keyword": "Clinical​Trial​Protocol​Ethics​Committee​Approval​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0083)",
    "Name": "Consent for Clinical Trial Use Sequence",
    "Keyword": "Consent​For​Clinical​Trial​Use​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0084)",
    "Name": "Distribution Type",
    "Keyword": "Distribution​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0012,0085)",
    "Name": "Consent for Distribution Flag",
    "Keyword": "Consent​For​Distribution​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0014,0023)",
    "Name": "CAD File Format",
    "Keyword": "CAD​File​Format",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0014,0024)",
    "Name": "Component Reference System",
    "Keyword": "Component​Reference​System",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0014,0025)",
    "Name": "Component Manufacturing Procedure",
    "Keyword": "Component​Manufacturing​Procedure",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0028)",
    "Name": "Component Manufacturer",
    "Keyword": "Component​Manufacturer",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0030)",
    "Name": "Material Thickness",
    "Keyword": "Material​Thickness",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0032)",
    "Name": "Material Pipe Diameter",
    "Keyword": "Material​Pipe​Diameter",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0034)",
    "Name": "Material Isolation Diameter",
    "Keyword": "Material​Isolation​Diameter",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0042)",
    "Name": "Material Grade",
    "Keyword": "Material​Grade",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0044)",
    "Name": "Material Properties Description",
    "Keyword": "Material​Properties​Description",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0045)",
    "Name": "Material Properties File Format (Retired)",
    "Keyword": "Material​Properties​File​Format​Retired",
    "VR": "ST",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0014,0046)",
    "Name": "Material Notes",
    "Keyword": "Material​Notes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0050)",
    "Name": "Component Shape",
    "Keyword": "Component​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0052)",
    "Name": "Curvature Type",
    "Keyword": "Curvature​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0054)",
    "Name": "Outer Diameter",
    "Keyword": "Outer​Diameter",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,0056)",
    "Name": "Inner Diameter",
    "Keyword": "Inner​Diameter",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,1010)",
    "Name": "Actual Environmental Conditions",
    "Keyword": "Actual​Environmental​Conditions",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,1020)",
    "Name": "Expiry Date",
    "Keyword": "Expiry​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,1040)",
    "Name": "Environmental Conditions",
    "Keyword": "Environmental​Conditions",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2002)",
    "Name": "Evaluator Sequence",
    "Keyword": "Evaluator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2004)",
    "Name": "Evaluator Number",
    "Keyword": "Evaluator​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2006)",
    "Name": "Evaluator Name",
    "Keyword": "Evaluator​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2008)",
    "Name": "Evaluation Attempt",
    "Keyword": "Evaluation​Attempt",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2012)",
    "Name": "Indication Sequence",
    "Keyword": "Indication​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2014)",
    "Name": "Indication Number",
    "Keyword": "Indication​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2016)",
    "Name": "Indication Label",
    "Keyword": "Indication​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2018)",
    "Name": "Indication Description",
    "Keyword": "Indication​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,201A)",
    "Name": "Indication Type",
    "Keyword": "Indication​Type",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,201C)",
    "Name": "Indication Disposition",
    "Keyword": "Indication​Disposition",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,201E)",
    "Name": "Indication ROI Sequence",
    "Keyword": "IndicationROI​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2030)",
    "Name": "Indication Physical Property Sequence",
    "Keyword": "Indication​Physical​Property​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2032)",
    "Name": "Property Label",
    "Keyword": "Property​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2202)",
    "Name": "Coordinate System Number of Axes",
    "Keyword": "Coordinate​System​Number​OfAxes",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2204)",
    "Name": "Coordinate System Axes Sequence",
    "Keyword": "Coordinate​System​Axes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2206)",
    "Name": "Coordinate System Axis Description",
    "Keyword": "Coordinate​System​Axis​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2208)",
    "Name": "Coordinate System Data Set Mapping",
    "Keyword": "Coordinate​System​Data​Set​Mapping",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,220A)",
    "Name": "Coordinate System Axis Number",
    "Keyword": "Coordinate​System​Axis​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,220C)",
    "Name": "Coordinate System Axis Type",
    "Keyword": "Coordinate​System​Axis​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,220E)",
    "Name": "Coordinate System Axis Units",
    "Keyword": "Coordinate​System​Axis​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2210)",
    "Name": "Coordinate System Axis Values",
    "Keyword": "Coordinate​System​Axis​Values",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2220)",
    "Name": "Coordinate System Transform Sequence",
    "Keyword": "Coordinate​System​Transform​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2222)",
    "Name": "Transform Description",
    "Keyword": "Transform​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2224)",
    "Name": "Transform Number of Axes",
    "Keyword": "Transform​Number​OfAxes",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2226)",
    "Name": "Transform Order of Axes",
    "Keyword": "Transform​Order​OfAxes",
    "VR": "IS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,2228)",
    "Name": "Transformed Axis Units",
    "Keyword": "Transformed​Axis​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,222A)",
    "Name": "Coordinate System Transform Rotation and Scale Matrix",
    "Keyword": "Coordinate​System​Transform​Rotation​And​Scale​Matrix",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,222C)",
    "Name": "Coordinate System Transform Translation Matrix",
    "Keyword": "Coordinate​System​Transform​Translation​Matrix",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3011)",
    "Name": "Internal Detector Frame Time",
    "Keyword": "Internal​Detector​Frame​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3012)",
    "Name": "Number of Frames Integrated",
    "Keyword": "Number​OfFrames​Integrated",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3020)",
    "Name": "Detector Temperature Sequence",
    "Keyword": "Detector​Temperature​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3022)",
    "Name": "Sensor Name",
    "Keyword": "Sensor​Name",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3024)",
    "Name": "Horizontal Offset of Sensor",
    "Keyword": "Horizontal​Offset​OfSensor",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3026)",
    "Name": "Vertical Offset of Sensor",
    "Keyword": "Vertical​Offset​OfSensor",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3028)",
    "Name": "Sensor Temperature",
    "Keyword": "Sensor​Temperature",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3040)",
    "Name": "Dark Current Sequence",
    "Keyword": "Dark​Current​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3050)",
    "Name": "Dark Current Counts",
    "Keyword": "Dark​Current​Counts",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3060)",
    "Name": "Gain Correction Reference Sequence",
    "Keyword": "Gain​Correction​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3070)",
    "Name": "Air Counts",
    "Keyword": "Air​Counts",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3071)",
    "Name": "KV Used in Gain Calibration",
    "Keyword": "KV​Used​InGain​Calibration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3072)",
    "Name": "MA Used in Gain Calibration",
    "Keyword": "MA​Used​InGain​Calibration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3073)",
    "Name": "Number of Frames Used for Integration",
    "Keyword": "Number​OfFrames​Used​For​Integration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3074)",
    "Name": "Filter Material Used in Gain Calibration",
    "Keyword": "Filter​Material​Used​InGain​Calibration",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3075)",
    "Name": "Filter Thickness Used in Gain Calibration",
    "Keyword": "Filter​Thickness​Used​InGain​Calibration",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3076)",
    "Name": "Date of Gain Calibration",
    "Keyword": "Date​OfGain​Calibration",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3077)",
    "Name": "Time of Gain Calibration",
    "Keyword": "Time​OfGain​Calibration",
    "VR": "TM",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3080)",
    "Name": "Bad Pixel Image",
    "Keyword": "Bad​Pixel​Image",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,3099)",
    "Name": "Calibration Notes",
    "Keyword": "Calibration​Notes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4002)",
    "Name": "Pulser Equipment Sequence",
    "Keyword": "Pulser​Equipment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4004)",
    "Name": "Pulser Type",
    "Keyword": "Pulser​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4006)",
    "Name": "Pulser Notes",
    "Keyword": "Pulser​Notes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4008)",
    "Name": "Receiver Equipment Sequence",
    "Keyword": "Receiver​Equipment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400A)",
    "Name": "Amplifier Type",
    "Keyword": "Amplifier​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400C)",
    "Name": "Receiver Notes",
    "Keyword": "Receiver​Notes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400E)",
    "Name": "Pre-Amplifier Equipment Sequence",
    "Keyword": "Pre​Amplifier​Equipment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,400F)",
    "Name": "Pre-Amplifier Notes",
    "Keyword": "Pre​Amplifier​Notes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4010)",
    "Name": "Transmit Transducer Sequence",
    "Keyword": "Transmit​Transducer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4011)",
    "Name": "Receive Transducer Sequence",
    "Keyword": "Receive​Transducer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4012)",
    "Name": "Number of Elements",
    "Keyword": "Number​OfElements",
    "VR": "US",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4013)",
    "Name": "Element Shape",
    "Keyword": "Element​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4014)",
    "Name": "Element Dimension A",
    "Keyword": "Element​DimensionA",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4015)",
    "Name": "Element Dimension B",
    "Keyword": "Element​DimensionB",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4016)",
    "Name": "Element Pitch A",
    "Keyword": "Element​PitchA",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4017)",
    "Name": "Measured Beam Dimension A",
    "Keyword": "Measured​Beam​DimensionA",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4018)",
    "Name": "Measured Beam Dimension B",
    "Keyword": "Measured​Beam​DimensionB",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4019)",
    "Name": "Location of Measured Beam Diameter",
    "Keyword": "Location​OfMeasured​Beam​Diameter",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401A)",
    "Name": "Nominal Frequency",
    "Keyword": "Nominal​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401B)",
    "Name": "Measured Center Frequency",
    "Keyword": "Measured​Center​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401C)",
    "Name": "Measured Bandwidth",
    "Keyword": "Measured​Bandwidth",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,401D)",
    "Name": "Element Pitch B",
    "Keyword": "Element​PitchB",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4020)",
    "Name": "Pulser Settings Sequence",
    "Keyword": "Pulser​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4022)",
    "Name": "Pulse Width",
    "Keyword": "Pulse​Width",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4024)",
    "Name": "Excitation Frequency",
    "Keyword": "Excitation​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4026)",
    "Name": "Modulation Type",
    "Keyword": "Modulation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4028)",
    "Name": "Damping",
    "Keyword": "Damping",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4030)",
    "Name": "Receiver Settings Sequence",
    "Keyword": "Receiver​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4031)",
    "Name": "Acquired Soundpath Length",
    "Keyword": "Acquired​Soundpath​Length",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4032)",
    "Name": "Acquisition Compression Type",
    "Keyword": "Acquisition​Compression​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4033)",
    "Name": "Acquisition Sample Size",
    "Keyword": "Acquisition​Sample​Size",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4034)",
    "Name": "Rectifier Smoothing",
    "Keyword": "Rectifier​Smoothing",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4035)",
    "Name": "DAC Sequence",
    "Keyword": "DAC​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4036)",
    "Name": "DAC Type",
    "Keyword": "DAC​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4038)",
    "Name": "DAC Gain Points",
    "Keyword": "DAC​Gain​Points",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,403A)",
    "Name": "DAC Time Points",
    "Keyword": "DAC​Time​Points",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,403C)",
    "Name": "DAC Amplitude",
    "Keyword": "DAC​Amplitude",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4040)",
    "Name": "Pre-Amplifier Settings Sequence",
    "Keyword": "Pre​Amplifier​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4050)",
    "Name": "Transmit Transducer Settings Sequence",
    "Keyword": "Transmit​Transducer​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4051)",
    "Name": "Receive Transducer Settings Sequence",
    "Keyword": "Receive​Transducer​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4052)",
    "Name": "Incident Angle",
    "Keyword": "Incident​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4054)",
    "Name": "Coupling Technique",
    "Keyword": "Coupling​Technique",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4056)",
    "Name": "Coupling Medium",
    "Keyword": "Coupling​Medium",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4057)",
    "Name": "Coupling Velocity",
    "Keyword": "Coupling​Velocity",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4058)",
    "Name": "Probe Center Location X",
    "Keyword": "Probe​Center​LocationX",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4059)",
    "Name": "Probe Center Location Z",
    "Keyword": "Probe​Center​LocationZ",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,405A)",
    "Name": "Sound Path Length",
    "Keyword": "Sound​Path​Length",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,405C)",
    "Name": "Delay Law Identifier",
    "Keyword": "Delay​Law​Identifier",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4060)",
    "Name": "Gate Settings Sequence",
    "Keyword": "Gate​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4062)",
    "Name": "Gate Threshold",
    "Keyword": "Gate​Threshold",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4064)",
    "Name": "Velocity of Sound",
    "Keyword": "Velocity​OfSound",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4070)",
    "Name": "Calibration Settings Sequence",
    "Keyword": "Calibration​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4072)",
    "Name": "Calibration Procedure",
    "Keyword": "Calibration​Procedure",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4074)",
    "Name": "Procedure Version",
    "Keyword": "Procedure​Version",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4076)",
    "Name": "Procedure Creation Date",
    "Keyword": "Procedure​Creation​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4078)",
    "Name": "Procedure Expiration Date",
    "Keyword": "Procedure​Expiration​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,407A)",
    "Name": "Procedure Last Modified Date",
    "Keyword": "Procedure​Last​Modified​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,407C)",
    "Name": "Calibration Time",
    "Keyword": "Calibration​Time",
    "VR": "TM",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,407E)",
    "Name": "Calibration Date",
    "Keyword": "Calibration​Date",
    "VR": "DA",
    "VM": "1-n",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4080)",
    "Name": "Probe Drive Equipment Sequence",
    "Keyword": "Probe​Drive​Equipment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4081)",
    "Name": "Drive Type",
    "Keyword": "Drive​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4082)",
    "Name": "Probe Drive Notes",
    "Keyword": "Probe​Drive​Notes",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4083)",
    "Name": "Drive Probe Sequence",
    "Keyword": "Drive​Probe​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4084)",
    "Name": "Probe Inductance",
    "Keyword": "Probe​Inductance",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4085)",
    "Name": "Probe Resistance",
    "Keyword": "Probe​Resistance",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4086)",
    "Name": "Receive Probe Sequence",
    "Keyword": "Receive​Probe​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4087)",
    "Name": "Probe Drive Settings Sequence",
    "Keyword": "Probe​Drive​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4088)",
    "Name": "Bridge Resistors",
    "Keyword": "Bridge​Resistors",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4089)",
    "Name": "Probe Orientation Angle",
    "Keyword": "Probe​Orientation​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408B)",
    "Name": "User Selected Gain Y",
    "Keyword": "User​Selected​GainY",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408C)",
    "Name": "User Selected Phase",
    "Keyword": "User​Selected​Phase",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408D)",
    "Name": "User Selected Offset X",
    "Keyword": "User​Selected​OffsetX",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,408E)",
    "Name": "User Selected Offset Y",
    "Keyword": "User​Selected​OffsetY",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4091)",
    "Name": "Channel Settings Sequence",
    "Keyword": "Channel​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,4092)",
    "Name": "Channel Threshold",
    "Keyword": "Channel​Threshold",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409A)",
    "Name": "Scanner Settings Sequence",
    "Keyword": "Scanner​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409B)",
    "Name": "Scan Procedure",
    "Keyword": "Scan​Procedure",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409C)",
    "Name": "Translation Rate X",
    "Keyword": "Translation​RateX",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409D)",
    "Name": "Translation Rate Y",
    "Keyword": "Translation​RateY",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,409F)",
    "Name": "Channel Overlap",
    "Keyword": "Channel​Overlap",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,40A0)",
    "Name": "Image Quality Indicator Type",
    "Keyword": "Image​Quality​Indicator​Type",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,40A1)",
    "Name": "Image Quality Indicator Material",
    "Keyword": "Image​Quality​Indicator​Material",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,40A2)",
    "Name": "Image Quality Indicator Size",
    "Keyword": "Image​Quality​Indicator​Size",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,5002)",
    "Name": "LINAC Energy",
    "Keyword": "LINAC​Energy",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0014,5004)",
    "Name": "LINAC Output",
    "Keyword": "LINAC​Output",
    "VR": "IS",
    "VM": "1",
    "Retired": "DICONDE"
  },
  {
    "Tag": "(0018,0010)",
    "Name": "Contrast/Bolus Agent",
    "Keyword": "Contrast​Bolus​Agent",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0012)",
    "Name": "Contrast/Bolus Agent Sequence",
    "Keyword": "Contrast​Bolus​Agent​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0014)",
    "Name": "Contrast/Bolus Administration Route Sequence",
    "Keyword": "Contrast​Bolus​Administration​Route​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0015)",
    "Name": "Body Part Examined",
    "Keyword": "Body​Part​Examined",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0020)",
    "Name": "Scanning Sequence",
    "Keyword": "Scanning​Sequence",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0021)",
    "Name": "Sequence Variant",
    "Keyword": "Sequence​Variant",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0022)",
    "Name": "Scan Options",
    "Keyword": "Scan​Options",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0023)",
    "Name": "MR Acquisition Type",
    "Keyword": "MR​Acquisition​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0024)",
    "Name": "Sequence Name",
    "Keyword": "Sequence​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0025)",
    "Name": "Angio Flag",
    "Keyword": "Angio​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0026)",
    "Name": "Intervention Drug Information Sequence",
    "Keyword": "Intervention​Drug​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0027)",
    "Name": "Intervention Drug Stop Time",
    "Keyword": "Intervention​Drug​Stop​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0028)",
    "Name": "Intervention Drug Dose",
    "Keyword": "Intervention​Drug​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0029)",
    "Name": "Intervention Drug Code Sequence",
    "Keyword": "Intervention​Drug​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,002A)",
    "Name": "Additional Drug Sequence",
    "Keyword": "Additional​Drug​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0030)",
    "Name": "Radionuclide",
    "Keyword": "Radionuclide",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0031)",
    "Name": "Radio​pharmaceutical",
    "Keyword": "Radio​pharmaceutical",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0032)",
    "Name": "Energy Window Centerline",
    "Keyword": "Energy​Window​Centerline",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0033)",
    "Name": "Energy Window Total Width",
    "Keyword": "Energy​Window​Total​Width",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0034)",
    "Name": "Intervention Drug Name",
    "Keyword": "Intervention​Drug​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0035)",
    "Name": "Intervention Drug Start Time",
    "Keyword": "Intervention​Drug​Start​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0036)",
    "Name": "Intervention Sequence",
    "Keyword": "Intervention​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0037)",
    "Name": "Therapy Type",
    "Keyword": "Therapy​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,0038)",
    "Name": "Intervention Status",
    "Keyword": "Intervention​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0039)",
    "Name": "Therapy Description",
    "Keyword": "Therapy​Description",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,003A)",
    "Name": "Intervention Description",
    "Keyword": "Intervention​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0040)",
    "Name": "Cine Rate",
    "Keyword": "Cine​Rate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0042)",
    "Name": "Initial Cine Run State",
    "Keyword": "Initial​Cine​Run​State",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0050)",
    "Name": "Slice Thickness",
    "Keyword": "Slice​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0060)",
    "Name": "KVP",
    "Keyword": "KVP",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0070)",
    "Name": "Counts Accumulated",
    "Keyword": "Counts​Accumulated",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0071)",
    "Name": "Acquisition Termination Condition",
    "Keyword": "Acquisition​Termination​Condition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0072)",
    "Name": "Effective Duration",
    "Keyword": "Effective​Duration",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0073)",
    "Name": "Acquisition Start Condition",
    "Keyword": "Acquisition​Start​Condition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0074)",
    "Name": "Acquisition Start Condition Data",
    "Keyword": "Acquisition​Start​Condition​Data",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0075)",
    "Name": "Acquisition Termination Condition Data",
    "Keyword": "Acquisition​Termination​Condition​Data",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0080)",
    "Name": "Repetition Time",
    "Keyword": "Repetition​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0081)",
    "Name": "Echo Time",
    "Keyword": "Echo​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0082)",
    "Name": "Inversion Time",
    "Keyword": "Inversion​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0083)",
    "Name": "Number of Averages",
    "Keyword": "Number​OfAverages",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0084)",
    "Name": "Imaging Frequency",
    "Keyword": "Imaging​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0085)",
    "Name": "Imaged Nucleus",
    "Keyword": "Imaged​Nucleus",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0086)",
    "Name": "Echo Number(s)",
    "Keyword": "Echo​Numbers",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,0087)",
    "Name": "Magnetic Field Strength",
    "Keyword": "Magnetic​Field​Strength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0088)",
    "Name": "Spacing Between Slices",
    "Keyword": "Spacing​Between​Slices",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0089)",
    "Name": "Number of Phase Encoding Steps",
    "Keyword": "Number​OfPhase​Encoding​Steps",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0090)",
    "Name": "Data Collection Diameter",
    "Keyword": "Data​Collection​Diameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0091)",
    "Name": "Echo Train Length",
    "Keyword": "Echo​Train​Length",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0093)",
    "Name": "Percent Sampling",
    "Keyword": "Percent​Sampling",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0094)",
    "Name": "Percent Phase Field of View",
    "Keyword": "Percent​Phase​Field​OfView",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,0095)",
    "Name": "Pixel Bandwidth",
    "Keyword": "Pixel​Bandwidth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1000)",
    "Name": "Device Serial Number",
    "Keyword": "Device​Serial​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1002)",
    "Name": "Device UID",
    "Keyword": "DeviceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1003)",
    "Name": "Device ID",
    "Keyword": "DeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1004)",
    "Name": "Plate ID",
    "Keyword": "PlateID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1005)",
    "Name": "Generator ID",
    "Keyword": "GeneratorID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1006)",
    "Name": "Grid ID",
    "Keyword": "GridID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1007)",
    "Name": "Cassette ID",
    "Keyword": "CassetteID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1008)",
    "Name": "Gantry ID",
    "Keyword": "GantryID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1010)",
    "Name": "Secondary Capture Device ID",
    "Keyword": "Secondary​Capture​DeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1011)",
    "Name": "Hardcopy Creation Device ID",
    "Keyword": "Hardcopy​Creation​DeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1012)",
    "Name": "Date of Secondary Capture",
    "Keyword": "Date​OfSecondary​Capture",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1014)",
    "Name": "Time of Secondary Capture",
    "Keyword": "Time​OfSecondary​Capture",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1016)",
    "Name": "Secondary Capture Device Manufacturer",
    "Keyword": "Secondary​Capture​Device​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1017)",
    "Name": "Hardcopy Device Manufacturer",
    "Keyword": "Hardcopy​Device​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1018)",
    "Name": "Secondary Capture Device Manufacturer's Model Name",
    "Keyword": "Secondary​Capture​Device​Manufacturer​Model​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1019)",
    "Name": "Secondary Capture Device Software Versions",
    "Keyword": "Secondary​Capture​Device​Software​Versions",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,101A)",
    "Name": "Hardcopy Device Software Version",
    "Keyword": "Hardcopy​Device​Software​Version",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,101B)",
    "Name": "Hardcopy Device Manufacturer's Model Name",
    "Keyword": "Hardcopy​Device​Manufacturer​Model​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1020)",
    "Name": "Software Version(s)",
    "Keyword": "Software​Versions",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1022)",
    "Name": "Video Image Format Acquired",
    "Keyword": "Video​Image​Format​Acquired",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1023)",
    "Name": "Digital Image Format Acquired",
    "Keyword": "Digital​Image​Format​Acquired",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1030)",
    "Name": "Protocol Name",
    "Keyword": "Protocol​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1040)",
    "Name": "Contrast/Bolus Route",
    "Keyword": "Contrast​Bolus​Route",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1041)",
    "Name": "Contrast/Bolus Volume",
    "Keyword": "Contrast​Bolus​Volume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1042)",
    "Name": "Contrast/Bolus Start Time",
    "Keyword": "Contrast​Bolus​Start​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1043)",
    "Name": "Contrast/Bolus Stop Time",
    "Keyword": "Contrast​Bolus​Stop​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1044)",
    "Name": "Contrast/Bolus Total Dose",
    "Keyword": "Contrast​Bolus​Total​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1045)",
    "Name": "Syringe Counts",
    "Keyword": "Syringe​Counts",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1046)",
    "Name": "Contrast Flow Rate",
    "Keyword": "Contrast​Flow​Rate",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1047)",
    "Name": "Contrast Flow Duration",
    "Keyword": "Contrast​Flow​Duration",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1048)",
    "Name": "Contrast/Bolus Ingredient",
    "Keyword": "Contrast​Bolus​Ingredient",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1049)",
    "Name": "Contrast/Bolus Ingredient Concentration",
    "Keyword": "Contrast​Bolus​Ingredient​Concentration",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1050)",
    "Name": "Spatial Resolution",
    "Keyword": "Spatial​Resolution",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1060)",
    "Name": "Trigger Time",
    "Keyword": "Trigger​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1061)",
    "Name": "Trigger Source or Type",
    "Keyword": "Trigger​Source​OrType",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1062)",
    "Name": "Nominal Interval",
    "Keyword": "Nominal​Interval",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1063)",
    "Name": "Frame Time",
    "Keyword": "Frame​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1064)",
    "Name": "Cardiac Framing Type",
    "Keyword": "Cardiac​Framing​Type",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1065)",
    "Name": "Frame Time Vector",
    "Keyword": "Frame​Time​Vector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1066)",
    "Name": "Frame Delay",
    "Keyword": "Frame​Delay",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1067)",
    "Name": "Image Trigger Delay",
    "Keyword": "Image​Trigger​Delay",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1068)",
    "Name": "Multiplex Group Time Offset",
    "Keyword": "Multiplex​Group​Time​Offset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1069)",
    "Name": "Trigger Time Offset",
    "Keyword": "Trigger​Time​Offset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,106A)",
    "Name": "Synchronization Trigger",
    "Keyword": "Synchronization​Trigger",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,106C)",
    "Name": "Synchronization Channel",
    "Keyword": "Synchronization​Channel",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,106E)",
    "Name": "Trigger Sample Position",
    "Keyword": "Trigger​Sample​Position",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1070)",
    "Name": "Radio​pharmaceutical Route",
    "Keyword": "Radio​pharmaceutical​Route",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1071)",
    "Name": "Radio​pharmaceutical Volume",
    "Keyword": "Radio​pharmaceutical​Volume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1072)",
    "Name": "Radio​pharmaceutical Start Time",
    "Keyword": "Radio​pharmaceutical​Start​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1073)",
    "Name": "Radio​pharmaceutical Stop Time",
    "Keyword": "Radio​pharmaceutical​Stop​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1074)",
    "Name": "Radionuclide Total Dose",
    "Keyword": "Radionuclide​Total​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1075)",
    "Name": "Radionuclide Half Life",
    "Keyword": "Radionuclide​Half​Life",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1076)",
    "Name": "Radionuclide Positron Fraction",
    "Keyword": "Radionuclide​Positron​Fraction",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1077)",
    "Name": "Radio​pharmaceutical Specific Activity",
    "Keyword": "Radio​pharmaceutical​Specific​Activity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1078)",
    "Name": "Radio​pharmaceutical Start DateTime",
    "Keyword": "Radio​pharmaceutical​Start​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1079)",
    "Name": "Radio​pharmaceutical Stop DateTime",
    "Keyword": "Radio​pharmaceutical​Stop​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1080)",
    "Name": "Beat Rejection Flag",
    "Keyword": "Beat​Rejection​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1081)",
    "Name": "Low R-R Value",
    "Keyword": "LowRR​Value",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1082)",
    "Name": "High R-R Value",
    "Keyword": "HighRR​Value",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1083)",
    "Name": "Intervals Acquired",
    "Keyword": "Intervals​Acquired",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1084)",
    "Name": "Intervals Rejected",
    "Keyword": "Intervals​Rejected",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1085)",
    "Name": "PVC Rejection",
    "Keyword": "PVC​Rejection",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1086)",
    "Name": "Skip Beats",
    "Keyword": "Skip​Beats",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1088)",
    "Name": "Heart Rate",
    "Keyword": "Heart​Rate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1090)",
    "Name": "Cardiac Number of Images",
    "Keyword": "Cardiac​Number​OfImages",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1094)",
    "Name": "Trigger Window",
    "Keyword": "Trigger​Window",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1100)",
    "Name": "Reconstruction Diameter",
    "Keyword": "Reconstruction​Diameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1110)",
    "Name": "Distance Source to Detector",
    "Keyword": "Distance​Source​ToDetector",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1111)",
    "Name": "Distance Source to Patient",
    "Keyword": "Distance​Source​ToPatient",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1114)",
    "Name": "Estimated Radiographic Magnification Factor",
    "Keyword": "Estimated​Radiographic​Magnification​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1120)",
    "Name": "Gantry/Detector Tilt",
    "Keyword": "Gantry​Detector​Tilt",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1121)",
    "Name": "Gantry/Detector Slew",
    "Keyword": "Gantry​Detector​Slew",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1130)",
    "Name": "Table Height",
    "Keyword": "Table​Height",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1131)",
    "Name": "Table Traverse",
    "Keyword": "Table​Traverse",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1134)",
    "Name": "Table Motion",
    "Keyword": "Table​Motion",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1135)",
    "Name": "Table Vertical Increment",
    "Keyword": "Table​Vertical​Increment",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1136)",
    "Name": "Table Lateral Increment",
    "Keyword": "Table​Lateral​Increment",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1137)",
    "Name": "Table Longitudinal Increment",
    "Keyword": "Table​Longitudinal​Increment",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1138)",
    "Name": "Table Angle",
    "Keyword": "Table​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,113A)",
    "Name": "Table Type",
    "Keyword": "Table​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1140)",
    "Name": "Rotation Direction",
    "Keyword": "Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1141)",
    "Name": "Angular Position",
    "Keyword": "Angular​Position",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1142)",
    "Name": "Radial Position",
    "Keyword": "Radial​Position",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1143)",
    "Name": "Scan Arc",
    "Keyword": "Scan​Arc",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1144)",
    "Name": "Angular Step",
    "Keyword": "Angular​Step",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1145)",
    "Name": "Center of Rotation Offset",
    "Keyword": "Center​OfRotation​Offset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1146)",
    "Name": "Rotation Offset",
    "Keyword": "Rotation​Offset",
    "VR": "DS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1147)",
    "Name": "Field of View Shape",
    "Keyword": "Field​OfView​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1149)",
    "Name": "Field of View Dimension(s)",
    "Keyword": "Field​OfView​Dimensions",
    "VR": "IS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1150)",
    "Name": "Exposure Time",
    "Keyword": "Exposure​Time",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1151)",
    "Name": "X-Ray Tube Current",
    "Keyword": "X​Ray​Tube​Current",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1152)",
    "Name": "Exposure",
    "Keyword": "Exposure",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1153)",
    "Name": "Exposure in µAs",
    "Keyword": "Exposure​Inu​As",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1154)",
    "Name": "Average Pulse Width",
    "Keyword": "Average​Pulse​Width",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1155)",
    "Name": "Radiation Setting",
    "Keyword": "Radiation​Setting",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1156)",
    "Name": "Rectification Type",
    "Keyword": "Rectification​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,115A)",
    "Name": "Radiation Mode",
    "Keyword": "Radiation​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,115E)",
    "Name": "Image and Fluoroscopy Area Dose Product",
    "Keyword": "Image​And​Fluoroscopy​Area​Dose​Product",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1160)",
    "Name": "Filter Type",
    "Keyword": "Filter​Type",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1161)",
    "Name": "Type of Filters",
    "Keyword": "Type​OfFilters",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1162)",
    "Name": "Intensifier Size",
    "Keyword": "Intensifier​Size",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1164)",
    "Name": "Imager Pixel Spacing",
    "Keyword": "Imager​Pixel​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1166)",
    "Name": "Grid",
    "Keyword": "Grid",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1170)",
    "Name": "Generator Power",
    "Keyword": "Generator​Power",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1180)",
    "Name": "Collimator/grid Name",
    "Keyword": "Collimator​Grid​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1181)",
    "Name": "Collimator Type",
    "Keyword": "Collimator​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1182)",
    "Name": "Focal Distance",
    "Keyword": "Focal​Distance",
    "VR": "IS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1183)",
    "Name": "X Focus Center",
    "Keyword": "X​Focus​Center",
    "VR": "DS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1184)",
    "Name": "Y Focus Center",
    "Keyword": "Y​Focus​Center",
    "VR": "DS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1190)",
    "Name": "Focal Spot(s)",
    "Keyword": "Focal​Spots",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1191)",
    "Name": "Anode Target Material",
    "Keyword": "Anode​Target​Material",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,11A0)",
    "Name": "Body Part Thickness",
    "Keyword": "Body​Part​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,11A2)",
    "Name": "Compression Force",
    "Keyword": "Compression​Force",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,11A4)",
    "Name": "Paddle Description",
    "Keyword": "Paddle​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1200)",
    "Name": "Date of Last Calibration",
    "Keyword": "Date​OfLast​Calibration",
    "VR": "DA",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1201)",
    "Name": "Time of Last Calibration",
    "Keyword": "Time​OfLast​Calibration",
    "VR": "TM",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1210)",
    "Name": "Convolution Kernel",
    "Keyword": "Convolution​Kernel",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1240)",
    "Name": "Upper/Lower Pixel Values",
    "Keyword": "Upper​Lower​Pixel​Values",
    "VR": "IS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,1242)",
    "Name": "Actual Frame Duration",
    "Keyword": "Actual​Frame​Duration",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1243)",
    "Name": "Count Rate",
    "Keyword": "Count​Rate",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1244)",
    "Name": "Preferred Playback Sequencing",
    "Keyword": "Preferred​Playback​Sequencing",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1250)",
    "Name": "Receive Coil Name",
    "Keyword": "Receive​Coil​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1251)",
    "Name": "Transmit Coil Name",
    "Keyword": "Transmit​Coil​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1260)",
    "Name": "Plate Type",
    "Keyword": "Plate​Type",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1261)",
    "Name": "Phosphor Type",
    "Keyword": "Phosphor​Type",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1300)",
    "Name": "Scan Velocity",
    "Keyword": "Scan​Velocity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1301)",
    "Name": "Whole Body Technique",
    "Keyword": "Whole​Body​Technique",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1302)",
    "Name": "Scan Length",
    "Keyword": "Scan​Length",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1310)",
    "Name": "Acquisition Matrix",
    "Keyword": "Acquisition​Matrix",
    "VR": "US",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0018,1312)",
    "Name": "In-plane Phase Encoding Direction",
    "Keyword": "In​Plane​Phase​Encoding​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1314)",
    "Name": "Flip Angle",
    "Keyword": "Flip​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1315)",
    "Name": "Variable Flip Angle Flag",
    "Keyword": "Variable​Flip​Angle​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1316)",
    "Name": "SAR",
    "Keyword": "SAR",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1318)",
    "Name": "dB/dt",
    "Keyword": "d​Bdt",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1400)",
    "Name": "Acquisition Device Processing Description",
    "Keyword": "Acquisition​Device​Processing​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1401)",
    "Name": "Acquisition Device Processing Code",
    "Keyword": "Acquisition​Device​Processing​Code",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1402)",
    "Name": "Cassette Orientation",
    "Keyword": "Cassette​Orientation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1403)",
    "Name": "Cassette Size",
    "Keyword": "Cassette​Size",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1404)",
    "Name": "Exposures on Plate",
    "Keyword": "Exposures​OnPlate",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1405)",
    "Name": "Relative X-Ray Exposure",
    "Keyword": "RelativeX​Ray​Exposure",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1411)",
    "Name": "Exposure Index",
    "Keyword": "Exposure​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1412)",
    "Name": "Target Exposure Index",
    "Keyword": "Target​Exposure​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1413)",
    "Name": "Deviation Index",
    "Keyword": "Deviation​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1450)",
    "Name": "Column Angulation",
    "Keyword": "Column​Angulation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1460)",
    "Name": "Tomo Layer Height",
    "Keyword": "Tomo​Layer​Height",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1470)",
    "Name": "Tomo Angle",
    "Keyword": "Tomo​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1480)",
    "Name": "Tomo Time",
    "Keyword": "Tomo​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1490)",
    "Name": "Tomo Type",
    "Keyword": "Tomo​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1491)",
    "Name": "Tomo Class",
    "Keyword": "Tomo​Class",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1495)",
    "Name": "Number of Tomosynthesis Source Images",
    "Keyword": "Number​OfTomosynthesis​Source​Images",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1500)",
    "Name": "Positioner Motion",
    "Keyword": "Positioner​Motion",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1508)",
    "Name": "Positioner Type",
    "Keyword": "Positioner​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1510)",
    "Name": "Positioner Primary Angle",
    "Keyword": "Positioner​Primary​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1511)",
    "Name": "Positioner Secondary Angle",
    "Keyword": "Positioner​Secondary​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1520)",
    "Name": "Positioner Primary Angle Increment",
    "Keyword": "Positioner​Primary​Angle​Increment",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1521)",
    "Name": "Positioner Secondary Angle Increment",
    "Keyword": "Positioner​Secondary​Angle​Increment",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1530)",
    "Name": "Detector Primary Angle",
    "Keyword": "Detector​Primary​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1531)",
    "Name": "Detector Secondary Angle",
    "Keyword": "Detector​Secondary​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1600)",
    "Name": "Shutter Shape",
    "Keyword": "Shutter​Shape",
    "VR": "CS",
    "VM": "1-3",
    "Retired": ""
  },
  {
    "Tag": "(0018,1602)",
    "Name": "Shutter Left Vertical Edge",
    "Keyword": "Shutter​Left​Vertical​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1604)",
    "Name": "Shutter Right Vertical Edge",
    "Keyword": "Shutter​Right​Vertical​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1606)",
    "Name": "Shutter Upper Horizontal Edge",
    "Keyword": "Shutter​Upper​Horizontal​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1608)",
    "Name": "Shutter Lower Horizontal Edge",
    "Keyword": "Shutter​Lower​Horizontal​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1610)",
    "Name": "Center of Circular Shutter",
    "Keyword": "Center​OfCircular​Shutter",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1612)",
    "Name": "Radius of Circular Shutter",
    "Keyword": "Radius​OfCircular​Shutter",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1620)",
    "Name": "Vertices of the Polygonal Shutter",
    "Keyword": "Vertices​OfThe​Polygonal​Shutter",
    "VR": "IS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1622)",
    "Name": "Shutter Presentation Value",
    "Keyword": "Shutter​Presentation​Value",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1623)",
    "Name": "Shutter Overlay Group",
    "Keyword": "Shutter​Overlay​Group",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1624)",
    "Name": "Shutter Presentation Color CIE​Lab Value",
    "Keyword": "Shutter​Presentation​ColorCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,1700)",
    "Name": "Collimator Shape",
    "Keyword": "Collimator​Shape",
    "VR": "CS",
    "VM": "1-3",
    "Retired": ""
  },
  {
    "Tag": "(0018,1702)",
    "Name": "Collimator Left Vertical Edge",
    "Keyword": "Collimator​Left​Vertical​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1704)",
    "Name": "Collimator Right Vertical Edge",
    "Keyword": "Collimator​Right​Vertical​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1706)",
    "Name": "Collimator Upper Horizontal Edge",
    "Keyword": "Collimator​Upper​Horizontal​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1708)",
    "Name": "Collimator Lower Horizontal Edge",
    "Keyword": "Collimator​Lower​Horizontal​Edge",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1710)",
    "Name": "Center of Circular Collimator",
    "Keyword": "Center​OfCircular​Collimator",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,1712)",
    "Name": "Radius of Circular Collimator",
    "Keyword": "Radius​OfCircular​Collimator",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1720)",
    "Name": "Vertices of the Polygonal Collimator",
    "Keyword": "Vertices​OfThe​Polygonal​Collimator",
    "VR": "IS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0018,1800)",
    "Name": "Acquisition Time Synchronized",
    "Keyword": "Acquisition​Time​Synchronized",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1801)",
    "Name": "Time Source",
    "Keyword": "Time​Source",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1802)",
    "Name": "Time Distribution Protocol",
    "Keyword": "Time​Distribution​Protocol",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,1803)",
    "Name": "NTP Source Address",
    "Keyword": "NTP​Source​Address",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2001)",
    "Name": "Page Number Vector",
    "Keyword": "Page​Number​Vector",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2002)",
    "Name": "Frame Label Vector",
    "Keyword": "Frame​Label​Vector",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2003)",
    "Name": "Frame Primary Angle Vector",
    "Keyword": "Frame​Primary​Angle​Vector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2004)",
    "Name": "Frame Secondary Angle Vector",
    "Keyword": "Frame​Secondary​Angle​Vector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2005)",
    "Name": "Slice Location Vector",
    "Keyword": "Slice​Location​Vector",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2006)",
    "Name": "Display Window Label Vector",
    "Keyword": "Display​Window​Label​Vector",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,2010)",
    "Name": "Nominal Scanned Pixel Spacing",
    "Keyword": "Nominal​Scanned​Pixel​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,2020)",
    "Name": "Digitizing Device Transport Direction",
    "Keyword": "Digitizing​Device​Transport​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2030)",
    "Name": "Rotation of Scanned Film",
    "Keyword": "Rotation​OfScanned​Film",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2041)",
    "Name": "Biopsy Target Sequence",
    "Keyword": "Biopsy​Target​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2042)",
    "Name": "Target UID",
    "Keyword": "TargetUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2043)",
    "Name": "Localizing Cursor Position",
    "Keyword": "Localizing​Cursor​Position",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,2044)",
    "Name": "Calculated Target Position",
    "Keyword": "Calculated​Target​Position",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,2045)",
    "Name": "Target Label",
    "Keyword": "Target​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,2046)",
    "Name": "Displayed Z Value",
    "Keyword": "DisplayedZ​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3100)",
    "Name": "IVUS Acquisition",
    "Keyword": "IVUS​Acquisition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3101)",
    "Name": "IVUS Pullback Rate",
    "Keyword": "IVUS​Pullback​Rate",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3102)",
    "Name": "IVUS Gated Rate",
    "Keyword": "IVUS​Gated​Rate",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3103)",
    "Name": "IVUS Pullback Start Frame Number",
    "Keyword": "IVUS​Pullback​Start​Frame​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3104)",
    "Name": "IVUS Pullback Stop Frame Number",
    "Keyword": "IVUS​Pullback​Stop​Frame​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,3105)",
    "Name": "Lesion Number",
    "Keyword": "Lesion​Number",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,4000)",
    "Name": "Acquisition Comments",
    "Keyword": "Acquisition​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5000)",
    "Name": "Output Power",
    "Keyword": "Output​Power",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,5010)",
    "Name": "Transducer Data",
    "Keyword": "Transducer​Data",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,5012)",
    "Name": "Focus Depth",
    "Keyword": "Focus​Depth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5020)",
    "Name": "Processing Function",
    "Keyword": "Processing​Function",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5021)",
    "Name": "Postprocessing Function",
    "Keyword": "Postprocessing​Function",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5022)",
    "Name": "Mechanical Index",
    "Keyword": "Mechanical​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5024)",
    "Name": "Bone Thermal Index",
    "Keyword": "Bone​Thermal​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5026)",
    "Name": "Cranial Thermal Index",
    "Keyword": "Cranial​Thermal​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5027)",
    "Name": "Soft Tissue Thermal Index",
    "Keyword": "Soft​Tissue​Thermal​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5028)",
    "Name": "Soft Tissue-focus Thermal Index",
    "Keyword": "Soft​Tissue​Focus​Thermal​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5029)",
    "Name": "Soft Tissue-surface Thermal Index",
    "Keyword": "Soft​Tissue​Surface​Thermal​Index",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5030)",
    "Name": "Dynamic Range",
    "Keyword": "Dynamic​Range",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5040)",
    "Name": "Total Gain",
    "Keyword": "Total​Gain",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5050)",
    "Name": "Depth of Scan Field",
    "Keyword": "Depth​OfScan​Field",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5100)",
    "Name": "Patient Position",
    "Keyword": "Patient​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5101)",
    "Name": "View Position",
    "Keyword": "View​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5104)",
    "Name": "Projection Eponymous Name Code Sequence",
    "Keyword": "Projection​Eponymous​Name​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,5210)",
    "Name": "Image Transformation Matrix",
    "Keyword": "Image​Transformation​Matrix",
    "VR": "DS",
    "VM": "6",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,5212)",
    "Name": "Image Translation Vector",
    "Keyword": "Image​Translation​Vector",
    "VR": "DS",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6000)",
    "Name": "Sensitivity",
    "Keyword": "Sensitivity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6011)",
    "Name": "Sequence of Ultrasound Regions",
    "Keyword": "Sequence​OfUltrasound​Regions",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6012)",
    "Name": "Region Spatial Format",
    "Keyword": "Region​Spatial​Format",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6014)",
    "Name": "Region Data Type",
    "Keyword": "Region​Data​Type",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6016)",
    "Name": "Region Flags",
    "Keyword": "Region​Flags",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6018)",
    "Name": "Region Location Min X0",
    "Keyword": "Region​Location​MinX0",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,601A)",
    "Name": "Region Location Min Y0",
    "Keyword": "Region​Location​MinY0",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,601C)",
    "Name": "Region Location Max X1",
    "Keyword": "Region​Location​MaxX1",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,601E)",
    "Name": "Region Location Max Y1",
    "Keyword": "Region​Location​MaxY1",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6020)",
    "Name": "Reference Pixel X0",
    "Keyword": "Reference​PixelX0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6022)",
    "Name": "Reference Pixel Y0",
    "Keyword": "Reference​PixelY0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6024)",
    "Name": "Physical Units X Direction",
    "Keyword": "Physical​UnitsX​Direction",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6026)",
    "Name": "Physical Units Y Direction",
    "Keyword": "Physical​UnitsY​Direction",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6028)",
    "Name": "Reference Pixel Physical Value X",
    "Keyword": "Reference​Pixel​Physical​ValueX",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,602A)",
    "Name": "Reference Pixel Physical Value Y",
    "Keyword": "Reference​Pixel​Physical​ValueY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,602C)",
    "Name": "Physical Delta X",
    "Keyword": "Physical​DeltaX",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,602E)",
    "Name": "Physical Delta Y",
    "Keyword": "Physical​DeltaY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6030)",
    "Name": "Transducer Frequency",
    "Keyword": "Transducer​Frequency",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6031)",
    "Name": "Transducer Type",
    "Keyword": "Transducer​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6032)",
    "Name": "Pulse Repetition Frequency",
    "Keyword": "Pulse​Repetition​Frequency",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6034)",
    "Name": "Doppler Correction Angle",
    "Keyword": "Doppler​Correction​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6036)",
    "Name": "Steering Angle",
    "Keyword": "Steering​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6038)",
    "Name": "Doppler Sample Volume X Position (Retired)",
    "Keyword": "Doppler​Sample​VolumeX​Position​Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6039)",
    "Name": "Doppler Sample Volume X Position",
    "Keyword": "Doppler​Sample​VolumeX​Position",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,603A)",
    "Name": "Doppler Sample Volume Y Position (Retired)",
    "Keyword": "Doppler​Sample​VolumeY​Position​Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,603B)",
    "Name": "Doppler Sample Volume Y Position",
    "Keyword": "Doppler​Sample​VolumeY​Position",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,603C)",
    "Name": "TM-Line Position X0 (Retired)",
    "Keyword": "TM​Line​PositionX0Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,603D)",
    "Name": "TM-Line Position X0",
    "Keyword": "TM​Line​PositionX0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,603E)",
    "Name": "TM-Line Position Y0 (Retired)",
    "Keyword": "TM​Line​PositionY0Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,603F)",
    "Name": "TM-Line Position Y0",
    "Keyword": "TM​Line​PositionY0",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6040)",
    "Name": "TM-Line Position X1 (Retired)",
    "Keyword": "TM​Line​PositionX1Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6041)",
    "Name": "TM-Line Position X1",
    "Keyword": "TM​Line​PositionX1",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6042)",
    "Name": "TM-Line Position Y1 (Retired)",
    "Keyword": "TM​Line​PositionY1Retired",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,6043)",
    "Name": "TM-Line Position Y1",
    "Keyword": "TM​Line​PositionY1",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6044)",
    "Name": "Pixel Component Organization",
    "Keyword": "Pixel​Component​Organization",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6046)",
    "Name": "Pixel Component Mask",
    "Keyword": "Pixel​Component​Mask",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6048)",
    "Name": "Pixel Component Range Start",
    "Keyword": "Pixel​Component​Range​Start",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,604A)",
    "Name": "Pixel Component Range Stop",
    "Keyword": "Pixel​Component​Range​Stop",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,604C)",
    "Name": "Pixel Component Physical Units",
    "Keyword": "Pixel​Component​Physical​Units",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,604E)",
    "Name": "Pixel Component Data Type",
    "Keyword": "Pixel​Component​Data​Type",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6050)",
    "Name": "Number of Table Break Points",
    "Keyword": "Number​OfTable​Break​Points",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6052)",
    "Name": "Table of X Break Points",
    "Keyword": "Table​OfX​Break​Points",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,6054)",
    "Name": "Table of Y Break Points",
    "Keyword": "Table​OfY​Break​Points",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,6056)",
    "Name": "Number of Table Entries",
    "Keyword": "Number​OfTable​Entries",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,6058)",
    "Name": "Table of Pixel Values",
    "Keyword": "Table​OfPixel​Values",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,605A)",
    "Name": "Table of Parameter Values",
    "Keyword": "Table​OfParameter​Values",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,6060)",
    "Name": "R Wave Time Vector",
    "Keyword": "R​Wave​Time​Vector",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7000)",
    "Name": "Detector Conditions Nominal Flag",
    "Keyword": "Detector​Conditions​Nominal​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7001)",
    "Name": "Detector Temperature",
    "Keyword": "Detector​Temperature",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7004)",
    "Name": "Detector Type",
    "Keyword": "Detector​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7005)",
    "Name": "Detector Configuration",
    "Keyword": "Detector​Configuration",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7006)",
    "Name": "Detector Description",
    "Keyword": "Detector​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7008)",
    "Name": "Detector Mode",
    "Keyword": "Detector​Mode",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,700A)",
    "Name": "Detector ID",
    "Keyword": "DetectorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,700C)",
    "Name": "Date of Last Detector Calibration",
    "Keyword": "Date​OfLast​Detector​Calibration",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,700E)",
    "Name": "Time of Last Detector Calibration",
    "Keyword": "Time​OfLast​Detector​Calibration",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7010)",
    "Name": "Exposures on Detector Since Last Calibration",
    "Keyword": "Exposures​OnDetector​Since​Last​Calibration",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7011)",
    "Name": "Exposures on Detector Since Manufactured",
    "Keyword": "Exposures​OnDetector​Since​Manufactured",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7012)",
    "Name": "Detector Time Since Last Exposure",
    "Keyword": "Detector​Time​Since​Last​Exposure",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7014)",
    "Name": "Detector Active Time",
    "Keyword": "Detector​Active​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7016)",
    "Name": "Detector Activation Offset From Exposure",
    "Keyword": "Detector​Activation​Offset​From​Exposure",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,701A)",
    "Name": "Detector Binning",
    "Keyword": "Detector​Binning",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7020)",
    "Name": "Detector Element Physical Size",
    "Keyword": "Detector​Element​Physical​Size",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7022)",
    "Name": "Detector Element Spacing",
    "Keyword": "Detector​Element​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7024)",
    "Name": "Detector Active Shape",
    "Keyword": "Detector​Active​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7026)",
    "Name": "Detector Active Dimension(s)",
    "Keyword": "Detector​Active​Dimensions",
    "VR": "DS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7028)",
    "Name": "Detector Active Origin",
    "Keyword": "Detector​Active​Origin",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,702A)",
    "Name": "Detector Manufacturer Name",
    "Keyword": "Detector​Manufacturer​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,702B)",
    "Name": "Detector Manufacturer's Model Name",
    "Keyword": "Detector​Manufacturer​Model​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7030)",
    "Name": "Field of View Origin",
    "Keyword": "Field​OfView​Origin",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7032)",
    "Name": "Field of View Rotation",
    "Keyword": "Field​OfView​Rotation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7034)",
    "Name": "Field of View Horizontal Flip",
    "Keyword": "Field​OfView​Horizontal​Flip",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7036)",
    "Name": "Pixel Data Area Origin Relative To FOV",
    "Keyword": "Pixel​Data​Area​Origin​Relative​ToFOV",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7038)",
    "Name": "Pixel Data Area Rotation Angle Relative To FOV",
    "Keyword": "Pixel​Data​Area​Rotation​Angle​Relative​ToFOV",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7040)",
    "Name": "Grid Absorbing Material",
    "Keyword": "Grid​Absorbing​Material",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7041)",
    "Name": "Grid Spacing Material",
    "Keyword": "Grid​Spacing​Material",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7042)",
    "Name": "Grid Thickness",
    "Keyword": "Grid​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7044)",
    "Name": "Grid Pitch",
    "Keyword": "Grid​Pitch",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7046)",
    "Name": "Grid Aspect Ratio",
    "Keyword": "Grid​Aspect​Ratio",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,7048)",
    "Name": "Grid Period",
    "Keyword": "Grid​Period",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,704C)",
    "Name": "Grid Focal Distance",
    "Keyword": "Grid​Focal​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7050)",
    "Name": "Filter Material",
    "Keyword": "Filter​Material",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7052)",
    "Name": "Filter Thickness Minimum",
    "Keyword": "Filter​Thickness​Minimum",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7054)",
    "Name": "Filter Thickness Maximum",
    "Keyword": "Filter​Thickness​Maximum",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7056)",
    "Name": "Filter Beam Path Length Minimum",
    "Keyword": "Filter​Beam​Path​Length​Minimum",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7058)",
    "Name": "Filter Beam Path Length Maximum",
    "Keyword": "Filter​Beam​Path​Length​Maximum",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,7060)",
    "Name": "Exposure Control Mode",
    "Keyword": "Exposure​Control​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7062)",
    "Name": "Exposure Control Mode Description",
    "Keyword": "Exposure​Control​Mode​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7064)",
    "Name": "Exposure Status",
    "Keyword": "Exposure​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,7065)",
    "Name": "Phototimer Setting",
    "Keyword": "Phototimer​Setting",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,8150)",
    "Name": "Exposure Time in µS",
    "Keyword": "Exposure​Time​InuS",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,8151)",
    "Name": "X-Ray Tube Current in µA",
    "Keyword": "X​Ray​Tube​Current​InuA",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9004)",
    "Name": "Content Qualification",
    "Keyword": "Content​Qualification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9005)",
    "Name": "Pulse Sequence Name",
    "Keyword": "Pulse​Sequence​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9006)",
    "Name": "MR Imaging Modifier Sequence",
    "Keyword": "MR​Imaging​Modifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9008)",
    "Name": "Echo Pulse Sequence",
    "Keyword": "Echo​Pulse​Sequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9009)",
    "Name": "Inversion Recovery",
    "Keyword": "Inversion​Recovery",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9010)",
    "Name": "Flow Compensation",
    "Keyword": "Flow​Compensation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9011)",
    "Name": "Multiple Spin Echo",
    "Keyword": "Multiple​Spin​Echo",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9012)",
    "Name": "Multi-planar Excitation",
    "Keyword": "Multi​Planar​Excitation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9014)",
    "Name": "Phase Contrast",
    "Keyword": "Phase​Contrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9015)",
    "Name": "Time of Flight Contrast",
    "Keyword": "Time​OfFlight​Contrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9016)",
    "Name": "Spoiling",
    "Keyword": "Spoiling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9017)",
    "Name": "Steady State Pulse Sequence",
    "Keyword": "Steady​State​Pulse​Sequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9018)",
    "Name": "Echo Planar Pulse Sequence",
    "Keyword": "Echo​Planar​Pulse​Sequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9019)",
    "Name": "Tag Angle First Axis",
    "Keyword": "Tag​Angle​First​Axis",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9020)",
    "Name": "Magnetization Transfer",
    "Keyword": "Magnetization​Transfer",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9021)",
    "Name": "T2 Preparation",
    "Keyword": "T2Preparation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9022)",
    "Name": "Blood Signal Nulling",
    "Keyword": "Blood​Signal​Nulling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9024)",
    "Name": "Saturation Recovery",
    "Keyword": "Saturation​Recovery",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9025)",
    "Name": "Spectrally Selected Suppression",
    "Keyword": "Spectrally​Selected​Suppression",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9026)",
    "Name": "Spectrally Selected Excitation",
    "Keyword": "Spectrally​Selected​Excitation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9027)",
    "Name": "Spatial Pre-saturation",
    "Keyword": "Spatial​Presaturation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9028)",
    "Name": "Tagging",
    "Keyword": "Tagging",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9029)",
    "Name": "Oversampling Phase",
    "Keyword": "Oversampling​Phase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9030)",
    "Name": "Tag Spacing First Dimension",
    "Keyword": "Tag​Spacing​First​Dimension",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9032)",
    "Name": "Geometry of k-Space Traversal",
    "Keyword": "Geometry​OfK​Space​Traversal",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9033)",
    "Name": "Segmented k-Space Traversal",
    "Keyword": "SegmentedK​Space​Traversal",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9034)",
    "Name": "Rectilinear Phase Encode Reordering",
    "Keyword": "Rectilinear​Phase​Encode​Reordering",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9035)",
    "Name": "Tag Thickness",
    "Keyword": "Tag​Thickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9036)",
    "Name": "Partial Fourier Direction",
    "Keyword": "Partial​Fourier​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9037)",
    "Name": "Cardiac Synchronization Technique",
    "Keyword": "Cardiac​Synchronization​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9041)",
    "Name": "Receive Coil Manufacturer Name",
    "Keyword": "Receive​Coil​Manufacturer​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9042)",
    "Name": "MR Receive Coil Sequence",
    "Keyword": "MR​Receive​Coil​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9043)",
    "Name": "Receive Coil Type",
    "Keyword": "Receive​Coil​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9044)",
    "Name": "Quadrature Receive Coil",
    "Keyword": "Quadrature​Receive​Coil",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9045)",
    "Name": "Multi-Coil Definition Sequence",
    "Keyword": "Multi​Coil​Definition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9046)",
    "Name": "Multi-Coil Configuration",
    "Keyword": "Multi​Coil​Configuration",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9047)",
    "Name": "Multi-Coil Element Name",
    "Keyword": "Multi​Coil​Element​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9048)",
    "Name": "Multi-Coil Element Used",
    "Keyword": "Multi​Coil​Element​Used",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9049)",
    "Name": "MR Transmit Coil Sequence",
    "Keyword": "MR​Transmit​Coil​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9050)",
    "Name": "Transmit Coil Manufacturer Name",
    "Keyword": "Transmit​Coil​Manufacturer​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9051)",
    "Name": "Transmit Coil Type",
    "Keyword": "Transmit​Coil​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9052)",
    "Name": "Spectral Width",
    "Keyword": "Spectral​Width",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9053)",
    "Name": "Chemical Shift Reference",
    "Keyword": "Chemical​Shift​Reference",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9054)",
    "Name": "Volume Localization Technique",
    "Keyword": "Volume​Localization​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9058)",
    "Name": "MR Acquisition Frequency Encoding Steps",
    "Keyword": "MR​Acquisition​Frequency​Encoding​Steps",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9059)",
    "Name": "De-coupling",
    "Keyword": "Decoupling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9060)",
    "Name": "De-coupled Nucleus",
    "Keyword": "Decoupled​Nucleus",
    "VR": "CS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9061)",
    "Name": "De-coupling Frequency",
    "Keyword": "Decoupling​Frequency",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9062)",
    "Name": "De-coupling Method",
    "Keyword": "Decoupling​Method",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9063)",
    "Name": "De-coupling Chemical Shift Reference",
    "Keyword": "Decoupling​Chemical​Shift​Reference",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9064)",
    "Name": "k-space Filtering",
    "Keyword": "K​Space​Filtering",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9065)",
    "Name": "Time Domain Filtering",
    "Keyword": "Time​Domain​Filtering",
    "VR": "CS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9066)",
    "Name": "Number of Zero Fills",
    "Keyword": "Number​OfZero​Fills",
    "VR": "US",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9067)",
    "Name": "Baseline Correction",
    "Keyword": "Baseline​Correction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9069)",
    "Name": "Parallel Reduction Factor In-plane",
    "Keyword": "Parallel​Reduction​Factor​InPlane",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9070)",
    "Name": "Cardiac R-R Interval Specified",
    "Keyword": "CardiacRR​Interval​Specified",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9073)",
    "Name": "Acquisition Duration",
    "Keyword": "Acquisition​Duration",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9074)",
    "Name": "Frame Acquisition DateTime",
    "Keyword": "Frame​Acquisition​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9075)",
    "Name": "Diffusion Directionality",
    "Keyword": "Diffusion​Directionality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9076)",
    "Name": "Diffusion Gradient Direction Sequence",
    "Keyword": "Diffusion​Gradient​Direction​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9077)",
    "Name": "Parallel Acquisition",
    "Keyword": "Parallel​Acquisition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9078)",
    "Name": "Parallel Acquisition Technique",
    "Keyword": "Parallel​Acquisition​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9079)",
    "Name": "Inversion Times",
    "Keyword": "Inversion​Times",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,9080)",
    "Name": "Metabolite Map Description",
    "Keyword": "Metabolite​Map​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9081)",
    "Name": "Partial Fourier",
    "Keyword": "Partial​Fourier",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9082)",
    "Name": "Effective Echo Time",
    "Keyword": "Effective​Echo​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9083)",
    "Name": "Metabolite Map Code Sequence",
    "Keyword": "Metabolite​Map​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9084)",
    "Name": "Chemical Shift Sequence",
    "Keyword": "Chemical​Shift​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9085)",
    "Name": "Cardiac Signal Source",
    "Keyword": "Cardiac​Signal​Source",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9087)",
    "Name": "Diffusion b-value",
    "Keyword": "DiffusionB​Value",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9089)",
    "Name": "Diffusion Gradient Orientation",
    "Keyword": "Diffusion​Gradient​Orientation",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9090)",
    "Name": "Velocity Encoding Direction",
    "Keyword": "Velocity​Encoding​Direction",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9091)",
    "Name": "Velocity Encoding Minimum Value",
    "Keyword": "Velocity​Encoding​Minimum​Value",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9092)",
    "Name": "Velocity Encoding Acquisition Sequence",
    "Keyword": "Velocity​Encoding​Acquisition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9093)",
    "Name": "Number of k-Space Trajectories",
    "Keyword": "Number​OfK​Space​Trajectories",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9094)",
    "Name": "Coverage of k-Space",
    "Keyword": "Coverage​OfK​Space",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9095)",
    "Name": "Spectroscopy Acquisition Phase Rows",
    "Keyword": "Spectroscopy​Acquisition​Phase​Rows",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9096)",
    "Name": "Parallel Reduction Factor In-plane (Retired)",
    "Keyword": "Parallel​Reduction​Factor​InPlane​Retired",
    "VR": "FD",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9098)",
    "Name": "Transmitter Frequency",
    "Keyword": "Transmitter​Frequency",
    "VR": "FD",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9100)",
    "Name": "Resonant Nucleus",
    "Keyword": "Resonant​Nucleus",
    "VR": "CS",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9101)",
    "Name": "Frequency Correction",
    "Keyword": "Frequency​Correction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9103)",
    "Name": "MR Spectroscopy FOV/Geometry Sequence",
    "Keyword": "MR​SpectroscopyFOV​Geometry​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9104)",
    "Name": "Slab Thickness",
    "Keyword": "Slab​Thickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9105)",
    "Name": "Slab Orientation",
    "Keyword": "Slab​Orientation",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9106)",
    "Name": "Mid Slab Position",
    "Keyword": "Mid​Slab​Position",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9107)",
    "Name": "MR Spatial Saturation Sequence",
    "Keyword": "MR​Spatial​Saturation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9112)",
    "Name": "MR Timing and Related Parameters Sequence",
    "Keyword": "MR​Timing​And​Related​Parameters​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9114)",
    "Name": "MR Echo Sequence",
    "Keyword": "MR​Echo​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9115)",
    "Name": "MR Modifier Sequence",
    "Keyword": "MR​Modifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9117)",
    "Name": "MR Diffusion Sequence",
    "Keyword": "MR​Diffusion​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9118)",
    "Name": "Cardiac Synchronization Sequence",
    "Keyword": "Cardiac​Synchronization​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9119)",
    "Name": "MR Averages Sequence",
    "Keyword": "MR​Averages​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9125)",
    "Name": "MR FOV/Geometry Sequence",
    "Keyword": "MRFOV​Geometry​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9126)",
    "Name": "Volume Localization Sequence",
    "Keyword": "Volume​Localization​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9127)",
    "Name": "Spectroscopy Acquisition Data Columns",
    "Keyword": "Spectroscopy​Acquisition​Data​Columns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9147)",
    "Name": "Diffusion Anisotropy Type",
    "Keyword": "Diffusion​Anisotropy​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9151)",
    "Name": "Frame Reference DateTime",
    "Keyword": "Frame​Reference​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9152)",
    "Name": "MR Metabolite Map Sequence",
    "Keyword": "MR​Metabolite​Map​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9155)",
    "Name": "Parallel Reduction Factor out-of-plane",
    "Keyword": "Parallel​Reduction​Factor​Out​OfPlane",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9159)",
    "Name": "Spectroscopy Acquisition Out-of-plane Phase Steps",
    "Keyword": "Spectroscopy​Acquisition​Out​OfPlane​Phase​Steps",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9166)",
    "Name": "Bulk Motion Status",
    "Keyword": "Bulk​Motion​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9168)",
    "Name": "Parallel Reduction Factor Second In-plane",
    "Keyword": "Parallel​Reduction​Factor​Second​InPlane",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9169)",
    "Name": "Cardiac Beat Rejection Technique",
    "Keyword": "Cardiac​Beat​Rejection​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9170)",
    "Name": "Respiratory Motion Compensation Technique",
    "Keyword": "Respiratory​Motion​Compensation​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9171)",
    "Name": "Respiratory Signal Source",
    "Keyword": "Respiratory​Signal​Source",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9172)",
    "Name": "Bulk Motion Compensation Technique",
    "Keyword": "Bulk​Motion​Compensation​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9173)",
    "Name": "Bulk Motion Signal Source",
    "Keyword": "Bulk​Motion​Signal​Source",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9174)",
    "Name": "Applicable Safety Standard Agency",
    "Keyword": "Applicable​Safety​Standard​Agency",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9175)",
    "Name": "Applicable Safety Standard Description",
    "Keyword": "Applicable​Safety​Standard​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9176)",
    "Name": "Operating Mode Sequence",
    "Keyword": "Operating​Mode​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9177)",
    "Name": "Operating Mode Type",
    "Keyword": "Operating​Mode​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9178)",
    "Name": "Operating Mode",
    "Keyword": "Operating​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9179)",
    "Name": "Specific Absorption Rate Definition",
    "Keyword": "Specific​Absorption​Rate​Definition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9180)",
    "Name": "Gradient Output Type",
    "Keyword": "Gradient​Output​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9181)",
    "Name": "Specific Absorption Rate Value",
    "Keyword": "Specific​Absorption​Rate​Value",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9182)",
    "Name": "Gradient Output",
    "Keyword": "Gradient​Output",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9183)",
    "Name": "Flow Compensation Direction",
    "Keyword": "Flow​Compensation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9184)",
    "Name": "Tagging Delay",
    "Keyword": "Tagging​Delay",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9185)",
    "Name": "Respiratory Motion Compensation Technique Description",
    "Keyword": "Respiratory​Motion​Compensation​Technique​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9186)",
    "Name": "Respiratory Signal Source ID",
    "Keyword": "Respiratory​Signal​SourceID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9195)",
    "Name": "Chemical Shift Minimum Integration Limit in Hz",
    "Keyword": "Chemical​Shift​Minimum​Integration​Limit​InHz",
    "VR": "FD",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9196)",
    "Name": "Chemical Shift Maximum Integration Limit in Hz",
    "Keyword": "Chemical​Shift​Maximum​Integration​Limit​InHz",
    "VR": "FD",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9197)",
    "Name": "MR Velocity Encoding Sequence",
    "Keyword": "MR​Velocity​Encoding​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9198)",
    "Name": "First Order Phase Correction",
    "Keyword": "First​Order​Phase​Correction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9199)",
    "Name": "Water Referenced Phase Correction",
    "Keyword": "Water​Referenced​Phase​Correction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9200)",
    "Name": "MR Spectroscopy Acquisition Type",
    "Keyword": "MR​Spectroscopy​Acquisition​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9214)",
    "Name": "Respiratory Cycle Position",
    "Keyword": "Respiratory​Cycle​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9217)",
    "Name": "Velocity Encoding Maximum Value",
    "Keyword": "Velocity​Encoding​Maximum​Value",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9218)",
    "Name": "Tag Spacing Second Dimension",
    "Keyword": "Tag​Spacing​Second​Dimension",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9219)",
    "Name": "Tag Angle Second Axis",
    "Keyword": "Tag​Angle​Second​Axis",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9220)",
    "Name": "Frame Acquisition Duration",
    "Keyword": "Frame​Acquisition​Duration",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9226)",
    "Name": "MR Image Frame Type Sequence",
    "Keyword": "MR​Image​Frame​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9227)",
    "Name": "MR Spectroscopy Frame Type Sequence",
    "Keyword": "MR​Spectroscopy​Frame​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9231)",
    "Name": "MR Acquisition Phase Encoding Steps in-plane",
    "Keyword": "MR​Acquisition​Phase​Encoding​Steps​InPlane",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9232)",
    "Name": "MR Acquisition Phase Encoding Steps out-of-plane",
    "Keyword": "MR​Acquisition​Phase​Encoding​Steps​Out​OfPlane",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9234)",
    "Name": "Spectroscopy Acquisition Phase Columns",
    "Keyword": "Spectroscopy​Acquisition​Phase​Columns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9236)",
    "Name": "Cardiac Cycle Position",
    "Keyword": "Cardiac​Cycle​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9239)",
    "Name": "Specific Absorption Rate Sequence",
    "Keyword": "Specific​Absorption​Rate​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9240)",
    "Name": "RF Echo Train Length",
    "Keyword": "RF​Echo​Train​Length",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9241)",
    "Name": "Gradient Echo Train Length",
    "Keyword": "Gradient​Echo​Train​Length",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9250)",
    "Name": "Arterial Spin Labeling Contrast",
    "Keyword": "Arterial​Spin​Labeling​Contrast",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9251)",
    "Name": "MR Arterial Spin Labeling Sequence",
    "Keyword": "MR​Arterial​Spin​Labeling​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9252)",
    "Name": "ASL Technique Description",
    "Keyword": "ASL​Technique​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9253)",
    "Name": "ASL Slab Number",
    "Keyword": "ASL​Slab​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9254)",
    "Name": "ASL Slab Thickness",
    "Keyword": "ASL​Slab​Thickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9255)",
    "Name": "ASL Slab Orientation",
    "Keyword": "ASL​Slab​Orientation",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9256)",
    "Name": "ASL Mid Slab Position",
    "Keyword": "ASL​Mid​Slab​Position",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9257)",
    "Name": "ASL Context",
    "Keyword": "ASL​Context",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9258)",
    "Name": "ASL Pulse Train Duration",
    "Keyword": "ASL​Pulse​Train​Duration",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9259)",
    "Name": "ASL Crusher Flag",
    "Keyword": "ASL​Crusher​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925A)",
    "Name": "ASL Crusher Flow Limit",
    "Keyword": "ASL​Crusher​Flow​Limit",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925B)",
    "Name": "ASL Crusher Description",
    "Keyword": "ASL​Crusher​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925C)",
    "Name": "ASL Bolus Cut-off Flag",
    "Keyword": "ASL​Bolus​Cutoff​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925D)",
    "Name": "ASL Bolus Cut-off Timing Sequence",
    "Keyword": "ASL​Bolus​Cutoff​Timing​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925E)",
    "Name": "ASL Bolus Cut-off Technique",
    "Keyword": "ASL​Bolus​Cutoff​Technique",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,925F)",
    "Name": "ASL Bolus Cut-off Delay Time",
    "Keyword": "ASL​Bolus​Cutoff​Delay​Time",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9260)",
    "Name": "ASL Slab Sequence",
    "Keyword": "ASL​Slab​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9295)",
    "Name": "Chemical Shift Minimum Integration Limit in ppm",
    "Keyword": "Chemical​Shift​Minimum​Integration​Limit​Inppm",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9296)",
    "Name": "Chemical Shift Maximum Integration Limit in ppm",
    "Keyword": "Chemical​Shift​Maximum​Integration​Limit​Inppm",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9301)",
    "Name": "CT Acquisition Type Sequence",
    "Keyword": "CT​Acquisition​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9302)",
    "Name": "Acquisition Type",
    "Keyword": "Acquisition​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9303)",
    "Name": "Tube Angle",
    "Keyword": "Tube​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9304)",
    "Name": "CT Acquisition Details Sequence",
    "Keyword": "CT​Acquisition​Details​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9305)",
    "Name": "Revolution Time",
    "Keyword": "Revolution​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9306)",
    "Name": "Single Collimation Width",
    "Keyword": "Single​Collimation​Width",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9307)",
    "Name": "Total Collimation Width",
    "Keyword": "Total​Collimation​Width",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9308)",
    "Name": "CT Table Dynamics Sequence",
    "Keyword": "CT​Table​Dynamics​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9309)",
    "Name": "Table Speed",
    "Keyword": "Table​Speed",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9310)",
    "Name": "Table Feed per Rotation",
    "Keyword": "Table​Feed​Per​Rotation",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9311)",
    "Name": "Spiral Pitch Factor",
    "Keyword": "Spiral​Pitch​Factor",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9312)",
    "Name": "CT Geometry Sequence",
    "Keyword": "CT​Geometry​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9313)",
    "Name": "Data Collection Center (Patient)",
    "Keyword": "Data​Collection​Center​Patient",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9314)",
    "Name": "CT Reconstruction Sequence",
    "Keyword": "CT​Reconstruction​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9315)",
    "Name": "Reconstruction Algorithm",
    "Keyword": "Reconstruction​Algorithm",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9316)",
    "Name": "Convolution Kernel Group",
    "Keyword": "Convolution​Kernel​Group",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9317)",
    "Name": "Reconstruction Field of View",
    "Keyword": "Reconstruction​Field​OfView",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9318)",
    "Name": "Reconstruction Target Center (Patient)",
    "Keyword": "Reconstruction​Target​Center​Patient",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9319)",
    "Name": "Reconstruction Angle",
    "Keyword": "Reconstruction​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9320)",
    "Name": "Image Filter",
    "Keyword": "Image​Filter",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9321)",
    "Name": "CT Exposure Sequence",
    "Keyword": "CT​Exposure​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9322)",
    "Name": "Reconstruction Pixel Spacing",
    "Keyword": "Reconstruction​Pixel​Spacing",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9323)",
    "Name": "Exposure Modulation Type",
    "Keyword": "Exposure​Modulation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9324)",
    "Name": "Estimated Dose Saving",
    "Keyword": "Estimated​Dose​Saving",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9325)",
    "Name": "CT X-Ray Details Sequence",
    "Keyword": "CTX​Ray​Details​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9326)",
    "Name": "CT Position Sequence",
    "Keyword": "CT​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9327)",
    "Name": "Table Position",
    "Keyword": "Table​Position",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9328)",
    "Name": "Exposure Time in ms",
    "Keyword": "Exposure​Time​Inms",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9329)",
    "Name": "CT Image Frame Type Sequence",
    "Keyword": "CT​Image​Frame​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9330)",
    "Name": "X-Ray Tube Current in mA",
    "Keyword": "X​Ray​Tube​Current​InmA",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9332)",
    "Name": "Exposure in mAs",
    "Keyword": "Exposure​Inm​As",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9333)",
    "Name": "Constant Volume Flag",
    "Keyword": "Constant​Volume​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9334)",
    "Name": "Fluoroscopy Flag",
    "Keyword": "Fluoroscopy​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9335)",
    "Name": "Distance Source to Data Collection Center",
    "Keyword": "Distance​Source​ToData​Collection​Center",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9337)",
    "Name": "Contrast/Bolus Agent Number",
    "Keyword": "Contrast​Bolus​Agent​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9338)",
    "Name": "Contrast/Bolus Ingredient Code Sequence",
    "Keyword": "Contrast​Bolus​Ingredient​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9340)",
    "Name": "Contrast Administration Profile Sequence",
    "Keyword": "Contrast​Administration​Profile​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9341)",
    "Name": "Contrast/Bolus Usage Sequence",
    "Keyword": "Contrast​Bolus​Usage​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9342)",
    "Name": "Contrast/Bolus Agent Administered",
    "Keyword": "Contrast​Bolus​Agent​Administered",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9343)",
    "Name": "Contrast/Bolus Agent Detected",
    "Keyword": "Contrast​Bolus​Agent​Detected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9344)",
    "Name": "Contrast/Bolus Agent Phase",
    "Keyword": "Contrast​Bolus​Agent​Phase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9345)",
    "Name": "CTD​Ivol",
    "Keyword": "CTD​Ivol",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9346)",
    "Name": "CTDI Phantom Type Code Sequence",
    "Keyword": "CTDI​Phantom​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9351)",
    "Name": "Calcium Scoring Mass Factor Patient",
    "Keyword": "Calcium​Scoring​Mass​Factor​Patient",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9352)",
    "Name": "Calcium Scoring Mass Factor Device",
    "Keyword": "Calcium​Scoring​Mass​Factor​Device",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0018,9353)",
    "Name": "Energy Weighting Factor",
    "Keyword": "Energy​Weighting​Factor",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9360)",
    "Name": "CT Additional X-Ray Source Sequence",
    "Keyword": "CT​AdditionalX​Ray​Source​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9401)",
    "Name": "Projection Pixel Calibration Sequence",
    "Keyword": "Projection​Pixel​Calibration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9402)",
    "Name": "Distance Source to Isocenter",
    "Keyword": "Distance​Source​ToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9403)",
    "Name": "Distance Object to Table Top",
    "Keyword": "Distance​Object​ToTable​Top",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9404)",
    "Name": "Object Pixel Spacing in Center of Beam",
    "Keyword": "Object​Pixel​Spacing​InCenter​OfBeam",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9405)",
    "Name": "Positioner Position Sequence",
    "Keyword": "Positioner​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9406)",
    "Name": "Table Position Sequence",
    "Keyword": "Table​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9407)",
    "Name": "Collimator Shape Sequence",
    "Keyword": "Collimator​Shape​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9410)",
    "Name": "Planes in Acquisition",
    "Keyword": "Planes​InAcquisition",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9412)",
    "Name": "XA/XRF Frame Characteristics Sequence",
    "Keyword": "XAXRF​Frame​Characteristics​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9417)",
    "Name": "Frame Acquisition Sequence",
    "Keyword": "Frame​Acquisition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9420)",
    "Name": "X-Ray Receptor Type",
    "Keyword": "X​Ray​Receptor​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9423)",
    "Name": "Acquisition Protocol Name",
    "Keyword": "Acquisition​Protocol​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9424)",
    "Name": "Acquisition Protocol Description",
    "Keyword": "Acquisition​Protocol​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9425)",
    "Name": "Contrast/Bolus Ingredient Opaque",
    "Keyword": "Contrast​Bolus​Ingredient​Opaque",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9426)",
    "Name": "Distance Receptor Plane to Detector Housing",
    "Keyword": "Distance​Receptor​Plane​ToDetector​Housing",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9427)",
    "Name": "Intensifier Active Shape",
    "Keyword": "Intensifier​Active​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9428)",
    "Name": "Intensifier Active Dimension(s)",
    "Keyword": "Intensifier​Active​Dimensions",
    "VR": "FL",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9429)",
    "Name": "Physical Detector Size",
    "Keyword": "Physical​Detector​Size",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9430)",
    "Name": "Position of Isocenter Projection",
    "Keyword": "Position​OfIsocenter​Projection",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9432)",
    "Name": "Field of View Sequence",
    "Keyword": "Field​OfView​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9433)",
    "Name": "Field of View Description",
    "Keyword": "Field​OfView​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9434)",
    "Name": "Exposure Control Sensing Regions Sequence",
    "Keyword": "Exposure​Control​Sensing​Regions​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9435)",
    "Name": "Exposure Control Sensing Region Shape",
    "Keyword": "Exposure​Control​Sensing​Region​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9436)",
    "Name": "Exposure Control Sensing Region Left Vertical Edge",
    "Keyword": "Exposure​Control​Sensing​Region​Left​Vertical​Edge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9437)",
    "Name": "Exposure Control Sensing Region Right Vertical Edge",
    "Keyword": "Exposure​Control​Sensing​Region​Right​Vertical​Edge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9438)",
    "Name": "Exposure Control Sensing Region Upper Horizontal Edge",
    "Keyword": "Exposure​Control​Sensing​Region​Upper​Horizontal​Edge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9439)",
    "Name": "Exposure Control Sensing Region Lower Horizontal Edge",
    "Keyword": "Exposure​Control​Sensing​Region​Lower​Horizontal​Edge",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9440)",
    "Name": "Center of Circular Exposure Control Sensing Region",
    "Keyword": "Center​OfCircular​Exposure​Control​Sensing​Region",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9441)",
    "Name": "Radius of Circular Exposure Control Sensing Region",
    "Keyword": "Radius​OfCircular​Exposure​Control​Sensing​Region",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9442)",
    "Name": "Vertices of the Polygonal Exposure Control Sensing Region",
    "Keyword": "Vertices​OfThe​Polygonal​Exposure​Control​Sensing​Region",
    "VR": "SS",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,9445)",
    "Name": "",
    "Keyword": "",
    "VR": "",
    "VM": "",
    "Retired": "RET"
  },
  {
    "Tag": "(0018,9447)",
    "Name": "Column Angulation (Patient)",
    "Keyword": "Column​Angulation​Patient",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9449)",
    "Name": "Beam Angle",
    "Keyword": "Beam​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9451)",
    "Name": "Frame Detector Parameters Sequence",
    "Keyword": "Frame​Detector​Parameters​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9452)",
    "Name": "Calculated Anatomy Thickness",
    "Keyword": "Calculated​Anatomy​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9455)",
    "Name": "Calibration Sequence",
    "Keyword": "Calibration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9456)",
    "Name": "Object Thickness Sequence",
    "Keyword": "Object​Thickness​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9457)",
    "Name": "Plane Identification",
    "Keyword": "Plane​Identification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9461)",
    "Name": "Field of View Dimension(s) in Float",
    "Keyword": "Field​OfView​Dimensions​InFloat",
    "VR": "FL",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0018,9462)",
    "Name": "Isocenter Reference System Sequence",
    "Keyword": "Isocenter​Reference​System​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9463)",
    "Name": "Positioner Isocenter Primary Angle",
    "Keyword": "Positioner​Isocenter​Primary​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9464)",
    "Name": "Positioner Isocenter Secondary Angle",
    "Keyword": "Positioner​Isocenter​Secondary​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9465)",
    "Name": "Positioner Isocenter Detector Rotation Angle",
    "Keyword": "Positioner​Isocenter​Detector​Rotation​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9466)",
    "Name": "Table X Position to Isocenter",
    "Keyword": "TableX​Position​ToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9467)",
    "Name": "Table Y Position to Isocenter",
    "Keyword": "TableY​Position​ToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9468)",
    "Name": "Table Z Position to Isocenter",
    "Keyword": "TableZ​Position​ToIsocenter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9469)",
    "Name": "Table Horizontal Rotation Angle",
    "Keyword": "Table​Horizontal​Rotation​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9470)",
    "Name": "Table Head Tilt Angle",
    "Keyword": "Table​Head​Tilt​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9471)",
    "Name": "Table Cradle Tilt Angle",
    "Keyword": "Table​Cradle​Tilt​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9472)",
    "Name": "Frame Display Shutter Sequence",
    "Keyword": "Frame​Display​Shutter​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9473)",
    "Name": "Acquired Image Area Dose Product",
    "Keyword": "Acquired​Image​Area​Dose​Product",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9474)",
    "Name": "C-arm Positioner Tabletop Relationship",
    "Keyword": "C​Arm​Positioner​Tabletop​Relationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9476)",
    "Name": "X-Ray Geometry Sequence",
    "Keyword": "X​Ray​Geometry​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9477)",
    "Name": "Irradiation Event Identification Sequence",
    "Keyword": "Irradiation​Event​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9504)",
    "Name": "X-Ray 3D Frame Type Sequence",
    "Keyword": "X​Ray3D​Frame​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9506)",
    "Name": "Contributing Sources Sequence",
    "Keyword": "Contributing​Sources​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9507)",
    "Name": "X-Ray 3D Acquisition Sequence",
    "Keyword": "X​Ray3D​Acquisition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9508)",
    "Name": "Primary Positioner Scan Arc",
    "Keyword": "Primary​Positioner​Scan​Arc",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9509)",
    "Name": "Secondary Positioner Scan Arc",
    "Keyword": "Secondary​Positioner​Scan​Arc",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9510)",
    "Name": "Primary Positioner Scan Start Angle",
    "Keyword": "Primary​Positioner​Scan​Start​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9511)",
    "Name": "Secondary Positioner Scan Start Angle",
    "Keyword": "Secondary​Positioner​Scan​Start​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9514)",
    "Name": "Primary Positioner Increment",
    "Keyword": "Primary​Positioner​Increment",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9515)",
    "Name": "Secondary Positioner Increment",
    "Keyword": "Secondary​Positioner​Increment",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9516)",
    "Name": "Start Acquisition DateTime",
    "Keyword": "Start​Acquisition​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9517)",
    "Name": "End Acquisition DateTime",
    "Keyword": "End​Acquisition​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9524)",
    "Name": "Application Name",
    "Keyword": "Application​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9525)",
    "Name": "Application Version",
    "Keyword": "Application​Version",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9526)",
    "Name": "Application Manufacturer",
    "Keyword": "Application​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9527)",
    "Name": "Algorithm Type",
    "Keyword": "Algorithm​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9528)",
    "Name": "Algorithm Description",
    "Keyword": "Algorithm​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9530)",
    "Name": "X-Ray 3D Reconstruction Sequence",
    "Keyword": "X​Ray3D​Reconstruction​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9531)",
    "Name": "Reconstruction Description",
    "Keyword": "Reconstruction​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9538)",
    "Name": "Per Projection Acquisition Sequence",
    "Keyword": "Per​Projection​Acquisition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9601)",
    "Name": "Diffusion b-matrix Sequence",
    "Keyword": "DiffusionB​Matrix​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9602)",
    "Name": "Diffusion b-value XX",
    "Keyword": "DiffusionB​ValueXX",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9603)",
    "Name": "Diffusion b-value XY",
    "Keyword": "DiffusionB​ValueXY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9604)",
    "Name": "Diffusion b-value XZ",
    "Keyword": "DiffusionB​ValueXZ",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9605)",
    "Name": "Diffusion b-value YY",
    "Keyword": "DiffusionB​ValueYY",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9606)",
    "Name": "Diffusion b-value YZ",
    "Keyword": "DiffusionB​ValueYZ",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9607)",
    "Name": "Diffusion b-value ZZ",
    "Keyword": "DiffusionB​ValueZZ",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9701)",
    "Name": "Decay Correction DateTime",
    "Keyword": "Decay​Correction​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9715)",
    "Name": "Start Density Threshold",
    "Keyword": "Start​Density​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9716)",
    "Name": "Start Relative Density Difference Threshold",
    "Keyword": "Start​Relative​Density​Difference​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9717)",
    "Name": "Start Cardiac Trigger Count Threshold",
    "Keyword": "Start​Cardiac​Trigger​Count​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9718)",
    "Name": "Start Respiratory Trigger Count Threshold",
    "Keyword": "Start​Respiratory​Trigger​Count​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9719)",
    "Name": "Termination Counts Threshold",
    "Keyword": "Termination​Counts​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9720)",
    "Name": "Termination Density Threshold",
    "Keyword": "Termination​Density​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9721)",
    "Name": "Termination Relative Density Threshold",
    "Keyword": "Termination​Relative​Density​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9722)",
    "Name": "Termination Time Threshold",
    "Keyword": "Termination​Time​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9723)",
    "Name": "Termination Cardiac Trigger Count Threshold",
    "Keyword": "Termination​Cardiac​Trigger​Count​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9724)",
    "Name": "Termination Respiratory Trigger Count Threshold",
    "Keyword": "Termination​Respiratory​Trigger​Count​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9725)",
    "Name": "Detector Geometry",
    "Keyword": "Detector​Geometry",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9726)",
    "Name": "Transverse Detector Separation",
    "Keyword": "Transverse​Detector​Separation",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9727)",
    "Name": "Axial Detector Dimension",
    "Keyword": "Axial​Detector​Dimension",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9729)",
    "Name": "Radio​pharmaceutical Agent Number",
    "Keyword": "Radio​pharmaceutical​Agent​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9732)",
    "Name": "PET Frame Acquisition Sequence",
    "Keyword": "PET​Frame​Acquisition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9733)",
    "Name": "PET Detector Motion Details Sequence",
    "Keyword": "PET​Detector​Motion​Details​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9734)",
    "Name": "PET Table Dynamics Sequence",
    "Keyword": "PET​Table​Dynamics​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9735)",
    "Name": "PET Position Sequence",
    "Keyword": "PET​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9736)",
    "Name": "PET Frame Correction Factors Sequence",
    "Keyword": "PET​Frame​Correction​Factors​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9737)",
    "Name": "Radio​pharmaceutical Usage Sequence",
    "Keyword": "Radio​pharmaceutical​Usage​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9738)",
    "Name": "Attenuation Correction Source",
    "Keyword": "Attenuation​Correction​Source",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9739)",
    "Name": "Number of Iterations",
    "Keyword": "Number​OfIterations",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9740)",
    "Name": "Number of Subsets",
    "Keyword": "Number​OfSubsets",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9749)",
    "Name": "PET Reconstruction Sequence",
    "Keyword": "PET​Reconstruction​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9751)",
    "Name": "PET Frame Type Sequence",
    "Keyword": "PET​Frame​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9755)",
    "Name": "Time of Flight Information Used",
    "Keyword": "Time​OfFlight​Information​Used",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9756)",
    "Name": "Reconstruction Type",
    "Keyword": "Reconstruction​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9758)",
    "Name": "Decay Corrected",
    "Keyword": "Decay​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9759)",
    "Name": "Attenuation Corrected",
    "Keyword": "Attenuation​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9760)",
    "Name": "Scatter Corrected",
    "Keyword": "Scatter​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9761)",
    "Name": "Dead Time Corrected",
    "Keyword": "Dead​Time​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9762)",
    "Name": "Gantry Motion Corrected",
    "Keyword": "Gantry​Motion​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9763)",
    "Name": "Patient Motion Corrected",
    "Keyword": "Patient​Motion​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9764)",
    "Name": "Count Loss Normalization Corrected",
    "Keyword": "Count​Loss​Normalization​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9765)",
    "Name": "Randoms Corrected",
    "Keyword": "Randoms​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9766)",
    "Name": "Non-uniform Radial Sampling Corrected",
    "Keyword": "Non​Uniform​Radial​Sampling​Corrected",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9767)",
    "Name": "Sensitivity Calibrated",
    "Keyword": "Sensitivity​Calibrated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9768)",
    "Name": "Detector Normalization Correction",
    "Keyword": "Detector​Normalization​Correction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9769)",
    "Name": "Iterative Reconstruction Method",
    "Keyword": "Iterative​Reconstruction​Method",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9770)",
    "Name": "Attenuation Correction Temporal Relationship",
    "Keyword": "Attenuation​Correction​Temporal​Relationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9771)",
    "Name": "Patient Physiological State Sequence",
    "Keyword": "Patient​Physiological​State​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9772)",
    "Name": "Patient Physiological State Code Sequence",
    "Keyword": "Patient​Physiological​State​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9801)",
    "Name": "Depth(s) of Focus",
    "Keyword": "Depths​OfFocus",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0018,9803)",
    "Name": "Excluded Intervals Sequence",
    "Keyword": "Excluded​Intervals​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9804)",
    "Name": "Exclusion Start DateTime",
    "Keyword": "Exclusion​Start​DateTime",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9805)",
    "Name": "Exclusion Duration",
    "Keyword": "Exclusion​Duration",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9806)",
    "Name": "US Image Description Sequence",
    "Keyword": "US​Image​Description​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9807)",
    "Name": "Image Data Type Sequence",
    "Keyword": "Image​Data​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9808)",
    "Name": "Data Type",
    "Keyword": "Data​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9809)",
    "Name": "Transducer Scan Pattern Code Sequence",
    "Keyword": "Transducer​Scan​Pattern​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980B)",
    "Name": "Aliased Data Type",
    "Keyword": "Aliased​Data​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980C)",
    "Name": "Position Measuring Device Used",
    "Keyword": "Position​Measuring​Device​Used",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980D)",
    "Name": "Transducer Geometry Code Sequence",
    "Keyword": "Transducer​Geometry​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980E)",
    "Name": "Transducer Beam Steering Code Sequence",
    "Keyword": "Transducer​Beam​Steering​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,980F)",
    "Name": "Transducer Application Code Sequence",
    "Keyword": "Transducer​Application​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,9810)",
    "Name": "Zero Velocity Pixel Value",
    "Keyword": "Zero​Velocity​Pixel​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,A001)",
    "Name": "Contributing Equipment Sequence",
    "Keyword": "Contributing​Equipment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,A002)",
    "Name": "Contribution DateTime",
    "Keyword": "Contribution​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0018,A003)",
    "Name": "Contribution Description",
    "Keyword": "Contribution​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,000D)",
    "Name": "Study Instance UID",
    "Keyword": "Study​InstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,000E)",
    "Name": "Series Instance UID",
    "Keyword": "Series​InstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0010)",
    "Name": "Study ID",
    "Keyword": "StudyID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0011)",
    "Name": "Series Number",
    "Keyword": "Series​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0012)",
    "Name": "Acquisition Number",
    "Keyword": "Acquisition​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0013)",
    "Name": "Instance Number",
    "Keyword": "Instance​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0014)",
    "Name": "Isotope Number",
    "Keyword": "Isotope​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0015)",
    "Name": "Phase Number",
    "Keyword": "Phase​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0016)",
    "Name": "Interval Number",
    "Keyword": "Interval​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0017)",
    "Name": "Time Slot Number",
    "Keyword": "Time​Slot​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0018)",
    "Name": "Angle Number",
    "Keyword": "Angle​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0019)",
    "Name": "Item Number",
    "Keyword": "Item​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0020)",
    "Name": "Patient Orientation",
    "Keyword": "Patient​Orientation",
    "VR": "CS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0020,0022)",
    "Name": "Overlay Number",
    "Keyword": "Overlay​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0024)",
    "Name": "Curve Number",
    "Keyword": "Curve​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0026)",
    "Name": "LUT Number",
    "Keyword": "LUT​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0030)",
    "Name": "Image Position",
    "Keyword": "Image​Position",
    "VR": "DS",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0032)",
    "Name": "Image Position (Patient)",
    "Keyword": "Image​Position​Patient",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0020,0035)",
    "Name": "Image Orientation",
    "Keyword": "Image​Orientation",
    "VR": "DS",
    "VM": "6",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0037)",
    "Name": "Image Orientation (Patient)",
    "Keyword": "Image​Orientation​Patient",
    "VR": "DS",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0020,0050)",
    "Name": "Location",
    "Keyword": "Location",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0052)",
    "Name": "Frame of Reference UID",
    "Keyword": "Frame​OfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0060)",
    "Name": "Laterality",
    "Keyword": "Laterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0062)",
    "Name": "Image Laterality",
    "Keyword": "Image​Laterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0070)",
    "Name": "Image Geometry Type",
    "Keyword": "Image​Geometry​Type",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0080)",
    "Name": "Masking Image",
    "Keyword": "Masking​Image",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,00AA)",
    "Name": "Report Number",
    "Keyword": "Report​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,0100)",
    "Name": "Temporal Position Identifier",
    "Keyword": "Temporal​Position​Identifier",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0105)",
    "Name": "Number of Temporal Positions",
    "Keyword": "Number​OfTemporal​Positions",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0110)",
    "Name": "Temporal Resolution",
    "Keyword": "Temporal​Resolution",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0200)",
    "Name": "Synchronization Frame of Reference UID",
    "Keyword": "Synchronization​Frame​OfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,0242)",
    "Name": "SOP Instance UID of Concatenation Source",
    "Keyword": "SOP​InstanceUID​OfConcatenation​Source",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1000)",
    "Name": "Series in Study",
    "Keyword": "Series​InStudy",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1001)",
    "Name": "Acquisitions in Series",
    "Keyword": "Acquisitions​InSeries",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1002)",
    "Name": "Images in Acquisition",
    "Keyword": "Images​InAcquisition",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1003)",
    "Name": "Images in Series",
    "Keyword": "Images​InSeries",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1004)",
    "Name": "Acquisitions in Study",
    "Keyword": "Acquisitions​InStudy",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1005)",
    "Name": "Images in Study",
    "Keyword": "Images​InStudy",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1020)",
    "Name": "Reference",
    "Keyword": "Reference",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1040)",
    "Name": "Position Reference Indicator",
    "Keyword": "Position​Reference​Indicator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1041)",
    "Name": "Slice Location",
    "Keyword": "Slice​Location",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1070)",
    "Name": "Other Study Numbers",
    "Keyword": "Other​Study​Numbers",
    "VR": "IS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,1200)",
    "Name": "Number of Patient Related Studies",
    "Keyword": "Number​OfPatient​Related​Studies",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1202)",
    "Name": "Number of Patient Related Series",
    "Keyword": "Number​OfPatient​Related​Series",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1204)",
    "Name": "Number of Patient Related Instances",
    "Keyword": "Number​OfPatient​Related​Instances",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1206)",
    "Name": "Number of Study Related Series",
    "Keyword": "Number​OfStudy​Related​Series",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1208)",
    "Name": "Number of Study Related Instances",
    "Keyword": "Number​OfStudy​Related​Instances",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,1209)",
    "Name": "Number of Series Related Instances",
    "Keyword": "Number​OfSeries​Related​Instances",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,31xx)",
    "Name": "Source Image I​Ds",
    "Keyword": "Source​ImageI​Ds",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3401)",
    "Name": "Modifying Device ID",
    "Keyword": "Modifying​DeviceID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3402)",
    "Name": "Modified Image ID",
    "Keyword": "Modified​ImageID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3403)",
    "Name": "Modified Image Date",
    "Keyword": "Modified​Image​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3404)",
    "Name": "Modifying Device Manufacturer",
    "Keyword": "Modifying​Device​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3405)",
    "Name": "Modified Image Time",
    "Keyword": "Modified​Image​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,3406)",
    "Name": "Modified Image Description",
    "Keyword": "Modified​Image​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,4000)",
    "Name": "Image Comments",
    "Keyword": "Image​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,5000)",
    "Name": "Original Image Identification",
    "Keyword": "Original​Image​Identification",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,5002)",
    "Name": "Original Image Identification Nomenclature",
    "Keyword": "Original​Image​Identification​Nomenclature",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0020,9056)",
    "Name": "Stack ID",
    "Keyword": "StackID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9057)",
    "Name": "In-Stack Position Number",
    "Keyword": "In​Stack​Position​Number",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9071)",
    "Name": "Frame Anatomy Sequence",
    "Keyword": "Frame​Anatomy​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9072)",
    "Name": "Frame Laterality",
    "Keyword": "Frame​Laterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9111)",
    "Name": "Frame Content Sequence",
    "Keyword": "Frame​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9113)",
    "Name": "Plane Position Sequence",
    "Keyword": "Plane​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9116)",
    "Name": "Plane Orientation Sequence",
    "Keyword": "Plane​Orientation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9128)",
    "Name": "Temporal Position Index",
    "Keyword": "Temporal​Position​Index",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9153)",
    "Name": "Nominal Cardiac Trigger Delay Time",
    "Keyword": "Nominal​Cardiac​Trigger​Delay​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9154)",
    "Name": "Nominal Cardiac Trigger Time Prior To R-Peak",
    "Keyword": "Nominal​Cardiac​Trigger​Time​Prior​ToR​Peak",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9155)",
    "Name": "Actual Cardiac Trigger Time Prior To R-Peak",
    "Keyword": "Actual​Cardiac​Trigger​Time​Prior​ToR​Peak",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9156)",
    "Name": "Frame Acquisition Number",
    "Keyword": "Frame​Acquisition​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9157)",
    "Name": "Dimension Index Values",
    "Keyword": "Dimension​Index​Values",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0020,9158)",
    "Name": "Frame Comments",
    "Keyword": "Frame​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9161)",
    "Name": "Concatenation UID",
    "Keyword": "ConcatenationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9162)",
    "Name": "In-concatenation Number",
    "Keyword": "In​Concatenation​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9163)",
    "Name": "In-concatenation Total Number",
    "Keyword": "In​Concatenation​Total​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9164)",
    "Name": "Dimension Organization UID",
    "Keyword": "Dimension​OrganizationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9165)",
    "Name": "Dimension Index Pointer",
    "Keyword": "Dimension​Index​Pointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9167)",
    "Name": "Functional Group Pointer",
    "Keyword": "Functional​Group​Pointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9170)",
    "Name": "Unassigned Shared Converted Attributes Sequence",
    "Keyword": "Unassigned​Shared​Converted​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9171)",
    "Name": "Unassigned Per-Frame Converted Attributes Sequence",
    "Keyword": "Unassigned​Per​Frame​Converted​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9172)",
    "Name": "Conversion Source Attributes Sequence",
    "Keyword": "Conversion​Source​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9213)",
    "Name": "Dimension Index Private Creator",
    "Keyword": "Dimension​Index​Private​Creator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9221)",
    "Name": "Dimension Organization Sequence",
    "Keyword": "Dimension​Organization​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9222)",
    "Name": "Dimension Index Sequence",
    "Keyword": "Dimension​Index​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9228)",
    "Name": "Concatenation Frame Offset Number",
    "Keyword": "Concatenation​Frame​Offset​Number",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9238)",
    "Name": "Functional Group Private Creator",
    "Keyword": "Functional​Group​Private​Creator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9241)",
    "Name": "Nominal Percentage of Cardiac Phase",
    "Keyword": "Nominal​Percentage​OfCardiac​Phase",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9245)",
    "Name": "Nominal Percentage of Respiratory Phase",
    "Keyword": "Nominal​Percentage​OfRespiratory​Phase",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9246)",
    "Name": "Starting Respiratory Amplitude",
    "Keyword": "Starting​Respiratory​Amplitude",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9247)",
    "Name": "Starting Respiratory Phase",
    "Keyword": "Starting​Respiratory​Phase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9248)",
    "Name": "Ending Respiratory Amplitude",
    "Keyword": "Ending​Respiratory​Amplitude",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9249)",
    "Name": "Ending Respiratory Phase",
    "Keyword": "Ending​Respiratory​Phase",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9250)",
    "Name": "Respiratory Trigger Type",
    "Keyword": "Respiratory​Trigger​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9251)",
    "Name": "R-R Interval Time Nominal",
    "Keyword": "RR​Interval​Time​Nominal",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9252)",
    "Name": "Actual Cardiac Trigger Delay Time",
    "Keyword": "Actual​Cardiac​Trigger​Delay​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9253)",
    "Name": "Respiratory Synchronization Sequence",
    "Keyword": "Respiratory​Synchronization​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9254)",
    "Name": "Respiratory Interval Time",
    "Keyword": "Respiratory​Interval​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9255)",
    "Name": "Nominal Respiratory Trigger Delay Time",
    "Keyword": "Nominal​Respiratory​Trigger​Delay​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9256)",
    "Name": "Respiratory Trigger Delay Threshold",
    "Keyword": "Respiratory​Trigger​Delay​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9257)",
    "Name": "Actual Respiratory Trigger Delay Time",
    "Keyword": "Actual​Respiratory​Trigger​Delay​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9301)",
    "Name": "Image Position (Volume)",
    "Keyword": "Image​Position​Volume",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0020,9302)",
    "Name": "Image Orientation (Volume)",
    "Keyword": "Image​Orientation​Volume",
    "VR": "FD",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0020,9307)",
    "Name": "Ultrasound Acquisition Geometry",
    "Keyword": "Ultrasound​Acquisition​Geometry",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9308)",
    "Name": "Apex Position",
    "Keyword": "Apex​Position",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0020,9309)",
    "Name": "Volume to Transducer Mapping Matrix",
    "Keyword": "Volume​ToTransducer​Mapping​Matrix",
    "VR": "FD",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(0020,930A)",
    "Name": "Volume to Table Mapping Matrix",
    "Keyword": "Volume​ToTable​Mapping​Matrix",
    "VR": "FD",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(0020,930C)",
    "Name": "Patient Frame of Reference Source",
    "Keyword": "Patient​Frame​OfReference​Source",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,930D)",
    "Name": "Temporal Position Time Offset",
    "Keyword": "Temporal​Position​Time​Offset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,930E)",
    "Name": "Plane Position (Volume) Sequence",
    "Keyword": "Plane​Position​Volume​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,930F)",
    "Name": "Plane Orientation (Volume) Sequence",
    "Keyword": "Plane​Orientation​Volume​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9310)",
    "Name": "Temporal Position Sequence",
    "Keyword": "Temporal​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9311)",
    "Name": "Dimension Organization Type",
    "Keyword": "Dimension​Organization​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9312)",
    "Name": "Volume Frame of Reference UID",
    "Keyword": "Volume​Frame​OfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9313)",
    "Name": "Table Frame of Reference UID",
    "Keyword": "Table​Frame​OfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9421)",
    "Name": "Dimension Description Label",
    "Keyword": "Dimension​Description​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9450)",
    "Name": "Patient Orientation in Frame Sequence",
    "Keyword": "Patient​Orientation​InFrame​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9453)",
    "Name": "Frame Label",
    "Keyword": "Frame​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9518)",
    "Name": "Acquisition Index",
    "Keyword": "Acquisition​Index",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0020,9529)",
    "Name": "Contributing SOP Instances Reference Sequence",
    "Keyword": "ContributingSOP​Instances​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0020,9536)",
    "Name": "Reconstruction Index",
    "Keyword": "Reconstruction​Index",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0001)",
    "Name": "Light Path Filter Pass-Through Wavelength",
    "Keyword": "Light​Path​Filter​Pass​Through​Wavelength",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0002)",
    "Name": "Light Path Filter Pass Band",
    "Keyword": "Light​Path​Filter​Pass​Band",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,0003)",
    "Name": "Image Path Filter Pass-Through Wavelength",
    "Keyword": "Image​Path​Filter​Pass​Through​Wavelength",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0004)",
    "Name": "Image Path Filter Pass Band",
    "Keyword": "Image​Path​Filter​Pass​Band",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,0005)",
    "Name": "Patient Eye Movement Commanded",
    "Keyword": "Patient​Eye​Movement​Commanded",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0006)",
    "Name": "Patient Eye Movement Command Code Sequence",
    "Keyword": "Patient​Eye​Movement​Command​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0007)",
    "Name": "Spherical Lens Power",
    "Keyword": "Spherical​Lens​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0008)",
    "Name": "Cylinder Lens Power",
    "Keyword": "Cylinder​Lens​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0009)",
    "Name": "Cylinder Axis",
    "Keyword": "Cylinder​Axis",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000A)",
    "Name": "Emmetropic Magnification",
    "Keyword": "Emmetropic​Magnification",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000B)",
    "Name": "Intra Ocular Pressure",
    "Keyword": "Intra​Ocular​Pressure",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000C)",
    "Name": "Horizontal Field of View",
    "Keyword": "Horizontal​Field​OfView",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000D)",
    "Name": "Pupil Dilated",
    "Keyword": "Pupil​Dilated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,000E)",
    "Name": "Degree of Dilation",
    "Keyword": "Degree​OfDilation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0010)",
    "Name": "Stereo Baseline Angle",
    "Keyword": "Stereo​Baseline​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0011)",
    "Name": "Stereo Baseline Displacement",
    "Keyword": "Stereo​Baseline​Displacement",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0012)",
    "Name": "Stereo Horizontal Pixel Offset",
    "Keyword": "Stereo​Horizontal​Pixel​Offset",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0013)",
    "Name": "Stereo Vertical Pixel Offset",
    "Keyword": "Stereo​Vertical​Pixel​Offset",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0014)",
    "Name": "Stereo Rotation",
    "Keyword": "Stereo​Rotation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0015)",
    "Name": "Acquisition Device Type Code Sequence",
    "Keyword": "Acquisition​Device​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0016)",
    "Name": "Illumination Type Code Sequence",
    "Keyword": "Illumination​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0017)",
    "Name": "Light Path Filter Type Stack Code Sequence",
    "Keyword": "Light​Path​Filter​Type​Stack​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0018)",
    "Name": "Image Path Filter Type Stack Code Sequence",
    "Keyword": "Image​Path​Filter​Type​Stack​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0019)",
    "Name": "Lenses Code Sequence",
    "Keyword": "Lenses​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001A)",
    "Name": "Channel Description Code Sequence",
    "Keyword": "Channel​Description​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001B)",
    "Name": "Refractive State Sequence",
    "Keyword": "Refractive​State​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001C)",
    "Name": "Mydriatic Agent Code Sequence",
    "Keyword": "Mydriatic​Agent​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001D)",
    "Name": "Relative Image Position Code Sequence",
    "Keyword": "Relative​Image​Position​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,001E)",
    "Name": "Camera Angle of View",
    "Keyword": "Camera​Angle​OfView",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0020)",
    "Name": "Stereo Pairs Sequence",
    "Keyword": "Stereo​Pairs​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0021)",
    "Name": "Left Image Sequence",
    "Keyword": "Left​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0022)",
    "Name": "Right Image Sequence",
    "Keyword": "Right​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0030)",
    "Name": "Axial Length of the Eye",
    "Keyword": "Axial​Length​OfThe​Eye",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0031)",
    "Name": "Ophthalmic Frame Location Sequence",
    "Keyword": "Ophthalmic​Frame​Location​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0032)",
    "Name": "Reference Coordinates",
    "Keyword": "Reference​Coordinates",
    "VR": "FL",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0022,0035)",
    "Name": "Depth Spatial Resolution",
    "Keyword": "Depth​Spatial​Resolution",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0036)",
    "Name": "Maximum Depth Distortion",
    "Keyword": "Maximum​Depth​Distortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0037)",
    "Name": "Along-scan Spatial Resolution",
    "Keyword": "Along​Scan​Spatial​Resolution",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0038)",
    "Name": "Maximum Along-scan Distortion",
    "Keyword": "Maximum​Along​Scan​Distortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0039)",
    "Name": "Ophthalmic Image Orientation",
    "Keyword": "Ophthalmic​Image​Orientation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0041)",
    "Name": "Depth of Transverse Image",
    "Keyword": "Depth​OfTransverse​Image",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0042)",
    "Name": "Mydriatic Agent Concentration Units Sequence",
    "Keyword": "Mydriatic​Agent​Concentration​Units​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0048)",
    "Name": "Across-scan Spatial Resolution",
    "Keyword": "Across​Scan​Spatial​Resolution",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0049)",
    "Name": "Maximum Across-scan Distortion",
    "Keyword": "Maximum​Across​Scan​Distortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,004E)",
    "Name": "Mydriatic Agent Concentration",
    "Keyword": "Mydriatic​Agent​Concentration",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0055)",
    "Name": "Illumination Wave Length",
    "Keyword": "Illumination​Wave​Length",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0056)",
    "Name": "Illumination Power",
    "Keyword": "Illumination​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0057)",
    "Name": "Illumination Bandwidth",
    "Keyword": "Illumination​Bandwidth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,0058)",
    "Name": "Mydriatic Agent Sequence",
    "Keyword": "Mydriatic​Agent​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1007)",
    "Name": "Ophthalmic Axial Measurements Right Eye Sequence",
    "Keyword": "Ophthalmic​Axial​Measurements​Right​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1008)",
    "Name": "Ophthalmic Axial Measurements Left Eye Sequence",
    "Keyword": "Ophthalmic​Axial​Measurements​Left​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1009)",
    "Name": "Ophthalmic Axial Measurements Device Type",
    "Keyword": "Ophthalmic​Axial​Measurements​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1010)",
    "Name": "Ophthalmic Axial Length Measurements Type",
    "Keyword": "Ophthalmic​Axial​Length​Measurements​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1012)",
    "Name": "Ophthalmic Axial Length Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1019)",
    "Name": "Ophthalmic Axial Length",
    "Keyword": "Ophthalmic​Axial​Length",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1024)",
    "Name": "Lens Status Code Sequence",
    "Keyword": "Lens​Status​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1025)",
    "Name": "Vitreous Status Code Sequence",
    "Keyword": "Vitreous​Status​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1028)",
    "Name": "IOL Formula Code Sequence",
    "Keyword": "IOL​Formula​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1029)",
    "Name": "IOL Formula Detail",
    "Keyword": "IOL​Formula​Detail",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1033)",
    "Name": "Keratometer Index",
    "Keyword": "Keratometer​Index",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1035)",
    "Name": "Source of Ophthalmic Axial Length Code Sequence",
    "Keyword": "Source​OfOphthalmic​Axial​Length​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1037)",
    "Name": "Target Refraction",
    "Keyword": "Target​Refraction",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1039)",
    "Name": "Refractive Procedure Occurred",
    "Keyword": "Refractive​Procedure​Occurred",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1040)",
    "Name": "Refractive Surgery Type Code Sequence",
    "Keyword": "Refractive​Surgery​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1044)",
    "Name": "Ophthalmic Ultrasound Method Code Sequence",
    "Keyword": "Ophthalmic​Ultrasound​Method​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1050)",
    "Name": "Ophthalmic Axial Length Measurements Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Measurements​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1053)",
    "Name": "IOL Power",
    "Keyword": "IOL​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1054)",
    "Name": "Predicted Refractive Error",
    "Keyword": "Predicted​Refractive​Error",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1059)",
    "Name": "Ophthalmic Axial Length Velocity",
    "Keyword": "Ophthalmic​Axial​Length​Velocity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1065)",
    "Name": "Lens Status Description",
    "Keyword": "Lens​Status​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1066)",
    "Name": "Vitreous Status Description",
    "Keyword": "Vitreous​Status​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1090)",
    "Name": "IOL Power Sequence",
    "Keyword": "IOL​Power​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1092)",
    "Name": "Lens Constant Sequence",
    "Keyword": "Lens​Constant​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1093)",
    "Name": "IOL Manufacturer",
    "Keyword": "IOL​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1094)",
    "Name": "Lens Constant Description",
    "Keyword": "Lens​Constant​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1095)",
    "Name": "Implant Name",
    "Keyword": "Implant​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1096)",
    "Name": "Keratometry Measurement Type Code Sequence",
    "Keyword": "Keratometry​Measurement​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1097)",
    "Name": "Implant Part Number",
    "Keyword": "Implant​Part​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1100)",
    "Name": "Referenced Ophthalmic Axial Measurements Sequence",
    "Keyword": "Referenced​Ophthalmic​Axial​Measurements​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1101)",
    "Name": "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Measurements​Segment​Name​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1103)",
    "Name": "Refractive Error Before Refractive Surgery Code Sequence",
    "Keyword": "Refractive​Error​Before​Refractive​Surgery​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1121)",
    "Name": "IOL Power For Exact Emmetropia",
    "Keyword": "IOL​Power​For​Exact​Emmetropia",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1122)",
    "Name": "IOL Power For Exact Target Refraction",
    "Keyword": "IOL​Power​For​Exact​Target​Refraction",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1125)",
    "Name": "Anterior Chamber Depth Definition Code Sequence",
    "Keyword": "Anterior​Chamber​Depth​Definition​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1127)",
    "Name": "Lens Thickness Sequence",
    "Keyword": "Lens​Thickness​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1128)",
    "Name": "Anterior Chamber Depth Sequence",
    "Keyword": "Anterior​Chamber​Depth​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1130)",
    "Name": "Lens Thickness",
    "Keyword": "Lens​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1131)",
    "Name": "Anterior Chamber Depth",
    "Keyword": "Anterior​Chamber​Depth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1132)",
    "Name": "Source of Lens Thickness Data Code Sequence",
    "Keyword": "Source​Of​Lens​Thickness​Data​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1133)",
    "Name": "Source of Anterior Chamber Depth Data Code Sequence",
    "Keyword": "Source​Of​Anterior​Chamber​Depth​Data​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1134)",
    "Name": "Source of Refractive Measurements Sequence",
    "Keyword": "Source​Of​Refractive​Measurements​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1135)",
    "Name": "Source of Refractive Measurements Code Sequence",
    "Keyword": "Source​Of​Refractive​Measurements​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1140)",
    "Name": "Ophthalmic Axial Length Measurement Modified",
    "Keyword": "Ophthalmic​Axial​Length​Measurement​Modified",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1150)",
    "Name": "Ophthalmic Axial Length Data Source Code Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Data​Source​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1153)",
    "Name": "Ophthalmic Axial Length Acquisition Method Code Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Acquisition​Method​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1155)",
    "Name": "Signal to Noise Ratio",
    "Keyword": "Signal​To​Noise​Ratio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1159)",
    "Name": "Ophthalmic Axial Length Data Source Description",
    "Keyword": "Ophthalmic​Axial​Length​Data​Source​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1210)",
    "Name": "Ophthalmic Axial Length Measurements Total Length Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Measurements​Total​Length​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1211)",
    "Name": "Ophthalmic Axial Length Measurements Segmental Length Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Measurements​Segmental​Length​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1212)",
    "Name": "Ophthalmic Axial Length Measurements Length Summation Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Measurements​Length​Summation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1220)",
    "Name": "Ultrasound Ophthalmic Axial Length Measurements Sequence",
    "Keyword": "Ultrasound​Ophthalmic​Axial​Length​Measurements​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1225)",
    "Name": "Optical Ophthalmic Axial Length Measurements Sequence",
    "Keyword": "Optical​Ophthalmic​Axial​Length​Measurements​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1230)",
    "Name": "Ultrasound Selected Ophthalmic Axial Length Sequence",
    "Keyword": "Ultrasound​Selected​Ophthalmic​Axial​Length​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1250)",
    "Name": "Ophthalmic Axial Length Selection Method Code Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Selection​Method​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1255)",
    "Name": "Optical Selected Ophthalmic Axial Length Sequence",
    "Keyword": "Optical​Selected​Ophthalmic​Axial​Length​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1257)",
    "Name": "Selected Segmental Ophthalmic Axial Length Sequence",
    "Keyword": "Selected​Segmental​Ophthalmic​Axial​Length​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1260)",
    "Name": "Selected Total Ophthalmic Axial Length Sequence",
    "Keyword": "Selected​Total​Ophthalmic​Axial​Length​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1262)",
    "Name": "Ophthalmic Axial Length Quality Metric Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Quality​Metric​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1265)",
    "Name": "Ophthalmic Axial Length Quality Metric Type Code Sequence",
    "Keyword": "Ophthalmic​Axial​Length​Quality​Metric​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1273)",
    "Name": "Ophthalmic Axial Length Quality Metric Type Description",
    "Keyword": "Ophthalmic​Axial​Length​Quality​Metric​Type​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0022,1300)",
    "Name": "Intraocular Lens Calculations Right Eye Sequence",
    "Keyword": "Intraocular​Lens​Calculations​Right​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1310)",
    "Name": "Intraocular Lens Calculations Left Eye Sequence",
    "Keyword": "Intraocular​Lens​Calculations​Left​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1330)",
    "Name": "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
    "Keyword": "Referenced​Ophthalmic​Axial​Length​MeasurementQC​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1415)",
    "Name": "Ophthalmic Mapping Device Type",
    "Keyword": "Ophthalmic​Mapping​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1420)",
    "Name": "Acquisition Method Code Sequence",
    "Keyword": "Acquisition​Method​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1423)",
    "Name": "Acquisition Method Algorithm Sequence",
    "Keyword": "Acquisition​Method​Algorithm​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1436)",
    "Name": "Ophthalmic Thickness Map Type Code Sequence",
    "Keyword": "Ophthalmic​Thickness​Map​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1443)",
    "Name": "Ophthalmic Thickness Mapping Normals Sequence",
    "Keyword": "Ophthalmic​Thickness​Mapping​Normals​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1445)",
    "Name": "Retinal Thickness Definition Code Sequence",
    "Keyword": "Retinal​Thickness​Definition​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1450)",
    "Name": "Pixel Value Mapping to Coded Concept Sequence",
    "Keyword": "Pixel​Value​Mapping​To​Coded​Concept​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1452)",
    "Name": "Mapped Pixel Value",
    "Keyword": "Mapped​Pixel​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1454)",
    "Name": "Pixel Value Mapping Explanation",
    "Keyword": "Pixel​Value​Mapping​Explanation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1458)",
    "Name": "Ophthalmic Thickness Map Quality Threshold Sequence",
    "Keyword": "Ophthalmic​Thickness​Map​Quality​Threshold​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1460)",
    "Name": "Ophthalmic Thickness Map Threshold Quality Rating",
    "Keyword": "Ophthalmic​Thickness​Map​Threshold​Quality​Rating",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1463)",
    "Name": "Anatomic Structure Reference Point",
    "Keyword": "Anatomic​Structure​Reference​Point",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,1465)",
    "Name": "Registration to Localizer Sequence",
    "Keyword": "Registration​To​Localizer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1466)",
    "Name": "Registered Localizer Units",
    "Keyword": "Registered​Localizer​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1467)",
    "Name": "Registered Localizer Top Left Hand Corner",
    "Keyword": "Registered​Localizer​Top​Left​Hand​Corner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,1468)",
    "Name": "Registered Localizer Bottom Right Hand Corner",
    "Keyword": "Registered​Localizer​Bottom​Right​Hand​Corner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0022,1470)",
    "Name": "Ophthalmic Thickness Map Quality Rating Sequence",
    "Keyword": "Ophthalmic​Thickness​Map​Quality​Rating​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0022,1472)",
    "Name": "Relevant OPT Attributes Sequence",
    "Keyword": "RelevantOPT​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0010)",
    "Name": "Visual Field Horizontal Extent",
    "Keyword": "Visual​Field​Horizontal​Extent",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0011)",
    "Name": "Visual Field Vertical Extent",
    "Keyword": "Visual​Field​Vertical​Extent",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0012)",
    "Name": "Visual Field Shape",
    "Keyword": "Visual​Field​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0016)",
    "Name": "Screening Test Mode Code Sequence",
    "Keyword": "Screening​Test​Mode​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0018)",
    "Name": "Maximum Stimulus Luminance",
    "Keyword": "Maximum​Stimulus​Luminance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0020)",
    "Name": "Background Luminance",
    "Keyword": "Background​Luminance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0021)",
    "Name": "Stimulus Color Code Sequence",
    "Keyword": "Stimulus​Color​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0024)",
    "Name": "Background Illumination Color Code Sequence",
    "Keyword": "Background​Illumination​Color​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0025)",
    "Name": "Stimulus Area",
    "Keyword": "Stimulus​Area",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0028)",
    "Name": "Stimulus Presentation Time",
    "Keyword": "Stimulus​Presentation​Time",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0032)",
    "Name": "Fixation Sequence",
    "Keyword": "Fixation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0033)",
    "Name": "Fixation Monitoring Code Sequence",
    "Keyword": "Fixation​Monitoring​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0034)",
    "Name": "Visual Field Catch Trial Sequence",
    "Keyword": "Visual​Field​Catch​Trial​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0035)",
    "Name": "Fixation Checked Quantity",
    "Keyword": "Fixation​Checked​Quantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0036)",
    "Name": "Patient Not Properly Fixated Quantity",
    "Keyword": "Patient​Not​Properly​Fixated​Quantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0037)",
    "Name": "Presented Visual Stimuli Data Flag",
    "Keyword": "Presented​Visual​Stimuli​Data​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0038)",
    "Name": "Number of Visual Stimuli",
    "Keyword": "Number​OfVisual​Stimuli",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0039)",
    "Name": "Excessive Fixation Losses Data Flag",
    "Keyword": "Excessive​Fixation​Losses​Data​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0040)",
    "Name": "Excessive Fixation Losses",
    "Keyword": "Excessive​Fixation​Losses",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0042)",
    "Name": "Stimuli Retesting Quantity",
    "Keyword": "Stimuli​Retesting​Quantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0044)",
    "Name": "Comments on Patient's Performance of Visual Field",
    "Keyword": "Comments​OnPatient​Performance​OfVisual​Field",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0045)",
    "Name": "False Negatives Estimate Flag",
    "Keyword": "False​Negatives​Estimate​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0046)",
    "Name": "False Negatives Estimate",
    "Keyword": "False​Negatives​Estimate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0048)",
    "Name": "Negative Catch Trials Quantity",
    "Keyword": "Negative​Catch​Trials​Quantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0050)",
    "Name": "False Negatives Quantity",
    "Keyword": "False​Negatives​Quantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0051)",
    "Name": "Excessive False Negatives Data Flag",
    "Keyword": "Excessive​False​Negatives​Data​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0052)",
    "Name": "Excessive False Negatives",
    "Keyword": "Excessive​False​Negatives",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0053)",
    "Name": "False Positives Estimate Flag",
    "Keyword": "False​Positives​Estimate​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0054)",
    "Name": "False Positives Estimate",
    "Keyword": "False​Positives​Estimate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0055)",
    "Name": "Catch Trials Data Flag",
    "Keyword": "Catch​Trials​Data​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0056)",
    "Name": "Positive Catch Trials Quantity",
    "Keyword": "Positive​Catch​Trials​Quantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0057)",
    "Name": "Test Point Normals Data Flag",
    "Keyword": "Test​Point​Normals​Data​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0058)",
    "Name": "Test Point Normals Sequence",
    "Keyword": "Test​Point​Normals​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0059)",
    "Name": "Global Deviation Probability Normals Flag",
    "Keyword": "Global​Deviation​Probability​Normals​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0060)",
    "Name": "False Positives Quantity",
    "Keyword": "False​Positives​Quantity",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0061)",
    "Name": "Excessive False Positives Data Flag",
    "Keyword": "Excessive​False​Positives​Data​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0062)",
    "Name": "Excessive False Positives",
    "Keyword": "Excessive​False​Positives",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0063)",
    "Name": "Visual Field Test Normals Flag",
    "Keyword": "Visual​Field​Test​Normals​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0064)",
    "Name": "Results Normals Sequence",
    "Keyword": "Results​Normals​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0065)",
    "Name": "Age Corrected Sensitivity Deviation Algorithm Sequence",
    "Keyword": "Age​Corrected​Sensitivity​Deviation​Algorithm​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0066)",
    "Name": "Global Deviation From Normal",
    "Keyword": "Global​Deviation​From​Normal",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0067)",
    "Name": "Generalized Defect Sensitivity Deviation Algorithm Sequence",
    "Keyword": "Generalized​Defect​Sensitivity​Deviation​Algorithm​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0068)",
    "Name": "Localized Deviation From Normal",
    "Keyword": "Localized​DeviationFrom​Normal",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0069)",
    "Name": "Patient Reliability Indicator",
    "Keyword": "Patient​Reliability​Indicator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0070)",
    "Name": "Visual Field Mean Sensitivity",
    "Keyword": "Visual​Field​Mean​Sensitivity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0071)",
    "Name": "Global Deviation Probability",
    "Keyword": "Global​Deviation​Probability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0072)",
    "Name": "Local Deviation Probability Normals Flag",
    "Keyword": "Local​Deviation​Probability​Normals​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0073)",
    "Name": "Localized Deviation Probability",
    "Keyword": "Localized​Deviation​Probability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0074)",
    "Name": "Short Term Fluctuation Calculated",
    "Keyword": "Short​Term​Fluctuation​Calculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0075)",
    "Name": "Short Term Fluctuation",
    "Keyword": "Short​Term​Fluctuation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0076)",
    "Name": "Short Term Fluctuation Probability Calculated",
    "Keyword": "Short​Term​Fluctuation​Probability​Calculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0077)",
    "Name": "Short Term Fluctuation Probability",
    "Keyword": "Short​Term​Fluctuation​Probability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0078)",
    "Name": "Corrected Localized Deviation From Normal Calculated",
    "Keyword": "Corrected​Localized​Deviation​From​Normal​Calculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0079)",
    "Name": "Corrected Localized Deviation From Normal",
    "Keyword": "Corrected​Localized​Deviation​From​Normal",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0080)",
    "Name": "Corrected Localized Deviation From Normal Probability Calculated",
    "Keyword": "Corrected​Localized​Deviation​From​Normal​Probability​Calculated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0081)",
    "Name": "Corrected Localized Deviation From Normal Probability",
    "Keyword": "Corrected​Localized​Deviation​From​Normal​Probability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0083)",
    "Name": "Global Deviation Probability Sequence",
    "Keyword": "Global​Deviation​Probability​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0085)",
    "Name": "Localized Deviation Probability Sequence",
    "Keyword": "Localized​Deviation​Probability​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0086)",
    "Name": "Foveal Sensitivity Measured",
    "Keyword": "Foveal​Sensitivity​Measured",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0087)",
    "Name": "Foveal Sensitivity",
    "Keyword": "Foveal​Sensitivity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0088)",
    "Name": "Visual Field Test Duration",
    "Keyword": "Visual​Field​Test​Duration",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0089)",
    "Name": "Visual Field Test Point Sequence",
    "Keyword": "Visual​Field​Test​Point​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0090)",
    "Name": "Visual Field Test Point X-Coordinate",
    "Keyword": "Visual​Field​Test​PointX​Coordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0091)",
    "Name": "Visual Field Test Point Y-Coordinate",
    "Keyword": "Visual​Field​Test​PointY​Coordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0092)",
    "Name": "Age Corrected Sensitivity Deviation Value",
    "Keyword": "Age​Corrected​Sensitivity​Deviation​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0093)",
    "Name": "Stimulus Results",
    "Keyword": "Stimulus​Results",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0094)",
    "Name": "Sensitivity Value",
    "Keyword": "Sensitivity​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0095)",
    "Name": "Retest Stimulus Seen",
    "Keyword": "Retest​Stimulus​Seen",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0096)",
    "Name": "Retest Sensitivity Value",
    "Keyword": "Retest​Sensitivity​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0097)",
    "Name": "Visual Field Test Point Normals Sequence",
    "Keyword": "Visual​Field​Test​Point​Normals​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0098)",
    "Name": "Quantified Defect",
    "Keyword": "Quantified​Defect",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0100)",
    "Name": "Age Corrected Sensitivity Deviation Probability Value",
    "Keyword": "Age​Corrected​Sensitivity​Deviation​Probability​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0102)",
    "Name": "Generalized Defect Corrected Sensitivity Deviation Flag",
    "Keyword": "Generalized​Defect​Corrected​Sensitivity​Deviation​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0103)",
    "Name": "Generalized Defect Corrected Sensitivity Deviation Value",
    "Keyword": "Generalized​Defect​Corrected​Sensitivity​Deviation​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0104)",
    "Name": "Generalized Defect Corrected Sensitivity Deviation Probability Value",
    "Keyword": "Generalized​Defect​Corrected​Sensitivity​Deviation​Probability​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0105)",
    "Name": "Minimum Sensitivity Value",
    "Keyword": "Minimum​Sensitivity​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0106)",
    "Name": "Blind Spot Localized",
    "Keyword": "Blind​Spot​Localized",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0107)",
    "Name": "Blind Spot X-Coordinate",
    "Keyword": "Blind​SpotX​Coordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0108)",
    "Name": "Blind Spot Y-Coordinate",
    "Keyword": "Blind​SpotY​Coordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0110)",
    "Name": "Visual Acuity Measurement Sequence",
    "Keyword": "Visual​Acuity​Measurement​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0112)",
    "Name": "Refractive Parameters Used on Patient Sequence",
    "Keyword": "Refractive​Parameters​Used​OnPatient​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0113)",
    "Name": "Measurement Laterality",
    "Keyword": "Measurement​Laterality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0114)",
    "Name": "Ophthalmic Patient Clinical Information Left Eye Sequence",
    "Keyword": "Ophthalmic​Patient​Clinical​Information​Left​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0115)",
    "Name": "Ophthalmic Patient Clinical Information Right Eye Sequence",
    "Keyword": "Ophthalmic​Patient​Clinical​Information​Right​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0117)",
    "Name": "Foveal Point Normative Data Flag",
    "Keyword": "Foveal​Point​Normative​Data​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0118)",
    "Name": "Foveal Point Probability Value",
    "Keyword": "Foveal​Point​Probability​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0120)",
    "Name": "Screening Baseline Measured",
    "Keyword": "Screening​Baseline​Measured",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0122)",
    "Name": "Screening Baseline Measured Sequence",
    "Keyword": "Screening​Baseline​Measured​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0124)",
    "Name": "Screening Baseline Type",
    "Keyword": "Screening​Baseline​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0126)",
    "Name": "Screening Baseline Value",
    "Keyword": "Screening​Baseline​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0202)",
    "Name": "Algorithm Source",
    "Keyword": "Algorithm​Source",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0306)",
    "Name": "Data Set Name",
    "Keyword": "Data​Set​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0307)",
    "Name": "Data Set Version",
    "Keyword": "Data​Set​Version",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0308)",
    "Name": "Data Set Source",
    "Keyword": "Data​Set​Source",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0309)",
    "Name": "Data Set Description",
    "Keyword": "Data​Set​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0317)",
    "Name": "Visual Field Test Reliability Global Index Sequence",
    "Keyword": "Visual​Field​Test​Reliability​Global​Index​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0320)",
    "Name": "Visual Field Global Results Index Sequence",
    "Keyword": "Visual​Field​Global​Results​Index​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0325)",
    "Name": "Data Observation Sequence",
    "Keyword": "Data​Observation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0338)",
    "Name": "Index Normals Flag",
    "Keyword": "Index​Normals​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0341)",
    "Name": "Index Probability",
    "Keyword": "Index​Probability",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0024,0344)",
    "Name": "Index Probability Sequence",
    "Keyword": "Index​Probability​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0002)",
    "Name": "Samples per Pixel",
    "Keyword": "Samples​Per​Pixel",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0003)",
    "Name": "Samples per Pixel Used",
    "Keyword": "Samples​Per​Pixel​Used",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0004)",
    "Name": "Photometric Interpretation",
    "Keyword": "Photometric​Interpretation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0005)",
    "Name": "Image Dimensions",
    "Keyword": "Image​Dimensions",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0006)",
    "Name": "Planar Configuration",
    "Keyword": "Planar​Configuration",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0008)",
    "Name": "Number of Frames",
    "Keyword": "Number​OfFrames",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0009)",
    "Name": "Frame Increment Pointer",
    "Keyword": "Frame​Increment​Pointer",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,000A)",
    "Name": "Frame Dimension Pointer",
    "Keyword": "Frame​Dimension​Pointer",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,0010)",
    "Name": "Rows",
    "Keyword": "Rows",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0011)",
    "Name": "Columns",
    "Keyword": "Columns",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0012)",
    "Name": "Planes",
    "Keyword": "Planes",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0014)",
    "Name": "Ultrasound Color Data Present",
    "Keyword": "Ultrasound​Color​Data​Present",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0020)",
    "Name": "",
    "Keyword": "",
    "VR": "",
    "VM": "",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0030)",
    "Name": "Pixel Spacing",
    "Keyword": "Pixel​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0031)",
    "Name": "Zoom Factor",
    "Keyword": "Zoom​Factor",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0032)",
    "Name": "Zoom Center",
    "Keyword": "Zoom​Center",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0034)",
    "Name": "Pixel Aspect Ratio",
    "Keyword": "Pixel​Aspect​Ratio",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,0040)",
    "Name": "Image Format",
    "Keyword": "Image​Format",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0050)",
    "Name": "Manipulated Image",
    "Keyword": "Manipulated​Image",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0051)",
    "Name": "Corrected Image",
    "Keyword": "Corrected​Image",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,005F)",
    "Name": "Compression Recognition Code",
    "Keyword": "Compression​Recognition​Code",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0060)",
    "Name": "Compression Code",
    "Keyword": "Compression​Code",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0061)",
    "Name": "Compression Originator",
    "Keyword": "Compression​Originator",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0062)",
    "Name": "Compression Label",
    "Keyword": "Compression​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0063)",
    "Name": "Compression Description",
    "Keyword": "Compression​Description",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0065)",
    "Name": "Compression Sequence",
    "Keyword": "Compression​Sequence",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0066)",
    "Name": "Compression Step Pointers",
    "Keyword": "Compression​Step​Pointers",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0068)",
    "Name": "Repeat Interval",
    "Keyword": "Repeat​Interval",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0069)",
    "Name": "Bits Grouped",
    "Keyword": "Bits​Grouped",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0070)",
    "Name": "Perimeter Table",
    "Keyword": "Perimeter​Table",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0071)",
    "Name": "Perimeter Value",
    "Keyword": "Perimeter​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0080)",
    "Name": "Predictor Rows",
    "Keyword": "Predictor​Rows",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0081)",
    "Name": "Predictor Columns",
    "Keyword": "Predictor​Columns",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0082)",
    "Name": "Predictor Constants",
    "Keyword": "Predictor​Constants",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0090)",
    "Name": "Blocked Pixels",
    "Keyword": "Blocked​Pixels",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0091)",
    "Name": "Block Rows",
    "Keyword": "Block​Rows",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0092)",
    "Name": "Block Columns",
    "Keyword": "Block​Columns",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0093)",
    "Name": "Row Overlap",
    "Keyword": "Row​Overlap",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0094)",
    "Name": "Column Overlap",
    "Keyword": "Column​Overlap",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0100)",
    "Name": "Bits Allocated",
    "Keyword": "Bits​Allocated",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0101)",
    "Name": "Bits Stored",
    "Keyword": "Bits​Stored",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0102)",
    "Name": "High Bit",
    "Keyword": "High​Bit",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0103)",
    "Name": "Pixel Representation",
    "Keyword": "Pixel​Representation",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0104)",
    "Name": "Smallest Valid Pixel Value",
    "Keyword": "Smallest​Valid​Pixel​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0105)",
    "Name": "Largest Valid Pixel Value",
    "Keyword": "Largest​Valid​Pixel​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0106)",
    "Name": "Smallest Image Pixel Value",
    "Keyword": "Smallest​Image​Pixel​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0107)",
    "Name": "Largest Image Pixel Value",
    "Keyword": "Largest​Image​Pixel​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0108)",
    "Name": "Smallest Pixel Value in Series",
    "Keyword": "Smallest​Pixel​Value​InSeries",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0109)",
    "Name": "Largest Pixel Value in Series",
    "Keyword": "Largest​Pixel​Value​InSeries",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0110)",
    "Name": "Smallest Image Pixel Value in Plane",
    "Keyword": "Smallest​Image​Pixel​Value​InPlane",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0111)",
    "Name": "Largest Image Pixel Value in Plane",
    "Keyword": "Largest​Image​Pixel​Value​InPlane",
    "VR": "US or SS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0120)",
    "Name": "Pixel Padding Value",
    "Keyword": "Pixel​Padding​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0121)",
    "Name": "Pixel Padding Range Limit",
    "Keyword": "Pixel​Padding​Range​Limit",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0200)",
    "Name": "Image Location",
    "Keyword": "Image​Location",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0300)",
    "Name": "Quality Control Image",
    "Keyword": "Quality​Control​Image",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0301)",
    "Name": "Burned In Annotation",
    "Keyword": "Burned​InAnnotation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0302)",
    "Name": "Recognizable Visual Features",
    "Keyword": "Recognizable​Visual​Features",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0303)",
    "Name": "Longitudinal Temporal Information Modified",
    "Keyword": "Longitudinal​Temporal​Information​Modified",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0304)",
    "Name": "Referenced Color Palette Instance UID",
    "Keyword": "Referenced​Color​Palette​InstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0400)",
    "Name": "Transform Label",
    "Keyword": "Transform​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0401)",
    "Name": "Transform Version Number",
    "Keyword": "Transform​Version​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0402)",
    "Name": "Number of Transform Steps",
    "Keyword": "Number​OfTransform​Steps",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0403)",
    "Name": "Sequence of Compressed Data",
    "Keyword": "Sequence​OfCompressed​Data",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0404)",
    "Name": "Details of Coefficients",
    "Keyword": "Details​OfCoefficients",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x0)",
    "Name": "Rows For Nth Order Coefficients",
    "Keyword": "Rows​For​Nth​Order​Coefficients",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x1)",
    "Name": "Columns For Nth Order Coefficients",
    "Keyword": "Columns​For​Nth​Order​Coefficients",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x2)",
    "Name": "Coefficient Coding",
    "Keyword": "Coefficient​Coding",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,04x3)",
    "Name": "Coefficient Coding Pointers",
    "Keyword": "Coefficient​Coding​Pointers",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0700)",
    "Name": "DCT Label",
    "Keyword": "DCT​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0701)",
    "Name": "Data Block Description",
    "Keyword": "Data​Block​Description",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0702)",
    "Name": "Data Block",
    "Keyword": "Data​Block",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0710)",
    "Name": "Normalization Factor Format",
    "Keyword": "Normalization​Factor​Format",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0720)",
    "Name": "Zonal Map Number Format",
    "Keyword": "Zonal​Map​Number​Format",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0721)",
    "Name": "Zonal Map Location",
    "Keyword": "Zonal​Map​Location",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0722)",
    "Name": "Zonal Map Format",
    "Keyword": "Zonal​Map​Format",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0730)",
    "Name": "Adaptive Map Format",
    "Keyword": "Adaptive​Map​Format",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0740)",
    "Name": "Code Number Format",
    "Keyword": "Code​Number​Format",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x0)",
    "Name": "Code Label",
    "Keyword": "Code​Label",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x2)",
    "Name": "Number of Tables",
    "Keyword": "Number​OfTables",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x3)",
    "Name": "Code Table Location",
    "Keyword": "Code​Table​Location",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x4)",
    "Name": "Bits For Code Word",
    "Keyword": "Bits​For​Code​Word",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,08x8)",
    "Name": "Image Data Location",
    "Keyword": "Image​Data​Location",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,0A02)",
    "Name": "Pixel Spacing Calibration Type",
    "Keyword": "Pixel​Spacing​Calibration​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,0A04)",
    "Name": "Pixel Spacing Calibration Description",
    "Keyword": "Pixel​Spacing​Calibration​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1040)",
    "Name": "Pixel Intensity Relationship",
    "Keyword": "Pixel​Intensity​Relationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1041)",
    "Name": "Pixel Intensity Relationship Sign",
    "Keyword": "Pixel​Intensity​Relationship​Sign",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1050)",
    "Name": "Window Center",
    "Keyword": "Window​Center",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,1051)",
    "Name": "Window Width",
    "Keyword": "Window​Width",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,1052)",
    "Name": "Rescale Intercept",
    "Keyword": "Rescale​Intercept",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1053)",
    "Name": "Rescale Slope",
    "Keyword": "Rescale​Slope",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1054)",
    "Name": "Rescale Type",
    "Keyword": "Rescale​Type",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1055)",
    "Name": "Window Center & Width Explanation",
    "Keyword": "Window​Center​Width​Explanation",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,1056)",
    "Name": "VOI LUT Function",
    "Keyword": "VOILUT​Function",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1080)",
    "Name": "Gray Scale",
    "Keyword": "Gray​Scale",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1090)",
    "Name": "Recommended Viewing Mode",
    "Keyword": "Recommended​Viewing​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1100)",
    "Name": "Gray Lookup Table Descriptor",
    "Keyword": "Gray​Lookup​Table​Descriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1101)",
    "Name": "Red Palette Color Lookup Table Descriptor",
    "Keyword": "Red​Palette​Color​Lookup​Table​Descriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1102)",
    "Name": "Green Palette Color Lookup Table Descriptor",
    "Keyword": "Green​Palette​Color​Lookup​Table​Descriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1103)",
    "Name": "Blue Palette Color Lookup Table Descriptor",
    "Keyword": "Blue​Palette​Color​Lookup​Table​Descriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1104)",
    "Name": "Alpha​Palette Color​Lookup Table Descriptor",
    "Keyword": "Alpha​Palette​Color​Lookup​Table​Descriptor",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1111)",
    "Name": "Large Red Palette Color Lookup Table Descriptor",
    "Keyword": "Large​Red​Palette​Color​Lookup​Table​Descriptor",
    "VR": "US or SS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1112)",
    "Name": "Large Green Palette Color Lookup Table Descriptor",
    "Keyword": "Large​Green​Palette​Color​Lookup​Table​Descriptor",
    "VR": "US or SS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1113)",
    "Name": "Large Blue Palette Color Lookup Table Descriptor",
    "Keyword": "Large​Blue​Palette​Color​Lookup​Table​Descriptor",
    "VR": "US or SS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1199)",
    "Name": "Palette Color Lookup Table UID",
    "Keyword": "Palette​Color​Lookup​TableUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1200)",
    "Name": "Gray Lookup Table Data",
    "Keyword": "Gray​Lookup​Table​Data",
    "VR": "US or SS or OW",
    "VM": "1-n or 1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1201)",
    "Name": "Red Palette Color Lookup Table Data",
    "Keyword": "Red​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1202)",
    "Name": "Green Palette Color Lookup Table Data",
    "Keyword": "Green​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1203)",
    "Name": "Blue Palette Color Lookup Table Data",
    "Keyword": "Blue​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1204)",
    "Name": "Alpha Palette Color Lookup Table Data",
    "Keyword": "Alpha​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1211)",
    "Name": "Large Red Palette Color Lookup Table Data",
    "Keyword": "Large​Red​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1212)",
    "Name": "Large Green Palette Color Lookup Table Data",
    "Keyword": "Large​Green​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1213)",
    "Name": "Large Blue Palette Color Lookup Table Data",
    "Keyword": "Large​Blue​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1214)",
    "Name": "Large Palette Color Lookup Table UID",
    "Keyword": "Large​Palette​Color​Lookup​TableUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,1221)",
    "Name": "Segmented Red Palette Color Lookup Table Data",
    "Keyword": "Segmented​Red​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1222)",
    "Name": "Segmented Green Palette Color Lookup Table Data",
    "Keyword": "Segmented​Green​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1223)",
    "Name": "Segmented Blue Palette Color Lookup Table Data",
    "Keyword": "Segmented​Blue​Palette​Color​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1300)",
    "Name": "Breast Implant Present",
    "Keyword": "Breast​Implant​Present",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1350)",
    "Name": "Partial View",
    "Keyword": "Partial​View",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1351)",
    "Name": "Partial View Description",
    "Keyword": "Partial​View​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1352)",
    "Name": "Partial View Code Sequence",
    "Keyword": "Partial​View​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,135A)",
    "Name": "Spatial Locations Preserved",
    "Keyword": "Spatial​Locations​Preserved",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1401)",
    "Name": "Data Frame Assignment Sequence",
    "Keyword": "Data​Frame​Assignment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1402)",
    "Name": "Data Path Assignment",
    "Keyword": "Data​Path​Assignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1403)",
    "Name": "Bits Mapped to Color Lookup Table",
    "Keyword": "Bits​Mapped​ToColor​Lookup​Table",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1404)",
    "Name": "Blending LUT 1 Sequence",
    "Keyword": "Blending​LUT1Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1405)",
    "Name": "Blending LUT 1 Transfer Function",
    "Keyword": "Blending​LUT1Transfer​Function",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1406)",
    "Name": "Blending Weight Constant",
    "Keyword": "Blending​Weight​Constant",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1407)",
    "Name": "Blending Lookup Table Descriptor",
    "Keyword": "Blending​Lookup​Table​Descriptor",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,1408)",
    "Name": "Blending Lookup Table Data",
    "Keyword": "Blending​Lookup​Table​Data",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140B)",
    "Name": "Enhanced Palette Color Lookup Table Sequence",
    "Keyword": "Enhanced​Palette​Color​Lookup​Table​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140C)",
    "Name": "Blending LUT 2 Sequence",
    "Keyword": "Blending​LUT2Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140D)",
    "Name": "Blending LUT 2 Transfer Function",
    "Keyword": "Blending​LUT2Transfer​Function",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140E)",
    "Name": "Data Path ID",
    "Keyword": "Data​PathID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,140F)",
    "Name": "RGB LUT Transfer Function",
    "Keyword": "RGBLUT​Transfer​Function",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,1410)",
    "Name": "Alpha LUT Transfer Function",
    "Keyword": "AlphaLUT​Transfer​Function",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,2000)",
    "Name": "ICC Profile",
    "Keyword": "ICC​Profile",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,2110)",
    "Name": "Lossy Image Compression",
    "Keyword": "Lossy​Image​Compression",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,2112)",
    "Name": "Lossy Image Compression Ratio",
    "Keyword": "Lossy​Image​Compression​Ratio",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,2114)",
    "Name": "Lossy Image Compression Method",
    "Keyword": "Lossy​Image​Compression​Method",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,3000)",
    "Name": "Modality LUT Sequence",
    "Keyword": "ModalityLUT​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3002)",
    "Name": "LUT Descriptor",
    "Keyword": "LUT​Descriptor",
    "VR": "US or SS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0028,3003)",
    "Name": "LUT Explanation",
    "Keyword": "LUT​Explanation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3004)",
    "Name": "Modality LUT Type",
    "Keyword": "ModalityLUT​Type",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3006)",
    "Name": "LUT Data",
    "Keyword": "LUT​Data",
    "VR": "US or OW",
    "VM": "1-n or 1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3010)",
    "Name": "VOI LUT Sequence",
    "Keyword": "VOILUT​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,3110)",
    "Name": "Softcopy VOI LUT Sequence",
    "Keyword": "SoftcopyVOILUT​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,4000)",
    "Name": "Image Presentation Comments",
    "Keyword": "Image​Presentation​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,5000)",
    "Name": "Bi-Plane Acquisition Sequence",
    "Keyword": "Bi​Plane​Acquisition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,6010)",
    "Name": "Representative Frame Number",
    "Keyword": "Representative​Frame​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6020)",
    "Name": "Frame Numbers of Interest (FOI)",
    "Keyword": "Frame​Numbers​OfInterest",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6022)",
    "Name": "Frame of Interest Description",
    "Keyword": "Frame​OfInterest​Description",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6023)",
    "Name": "Frame of Interest Type",
    "Keyword": "Frame​OfInterest​Type",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6030)",
    "Name": "Mask Pointer(s)",
    "Keyword": "Mask​Pointers",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,6040)",
    "Name": "R Wave Pointer",
    "Keyword": "R​Wave​Pointer",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6100)",
    "Name": "Mask Subtraction Sequence",
    "Keyword": "Mask​Subtraction​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6101)",
    "Name": "Mask Operation",
    "Keyword": "Mask​Operation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6102)",
    "Name": "Applicable Frame Range",
    "Keyword": "Applicable​Frame​Range",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6110)",
    "Name": "Mask Frame Numbers",
    "Keyword": "Mask​Frame​Numbers",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,6112)",
    "Name": "Contrast Frame Averaging",
    "Keyword": "Contrast​Frame​Averaging",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6114)",
    "Name": "Mask Sub-pixel Shift",
    "Keyword": "Mask​Sub​Pixel​Shift",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0028,6120)",
    "Name": "TID Offset",
    "Keyword": "TID​Offset",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,6190)",
    "Name": "Mask Operation Explanation",
    "Keyword": "Mask​Operation​Explanation",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,7FE0)",
    "Name": "Pixel Data Provider URL",
    "Keyword": "Pixel​Data​ProviderURL",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9001)",
    "Name": "Data Point Rows",
    "Keyword": "Data​Point​Rows",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9002)",
    "Name": "Data Point Columns",
    "Keyword": "Data​Point​Columns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9003)",
    "Name": "Signal Domain Columns",
    "Keyword": "Signal​Domain​Columns",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9099)",
    "Name": "Largest Monochrome Pixel Value",
    "Keyword": "Largest​Monochrome​Pixel​Value",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0028,9108)",
    "Name": "Data Representation",
    "Keyword": "Data​Representation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9110)",
    "Name": "Pixel Measures Sequence",
    "Keyword": "Pixel​Measures​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9132)",
    "Name": "Frame VOI LUT Sequence",
    "Keyword": "FrameVOILUT​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9145)",
    "Name": "Pixel Value Transformation Sequence",
    "Keyword": "Pixel​Value​Transformation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9235)",
    "Name": "Signal Domain Rows",
    "Keyword": "Signal​Domain​Rows",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9411)",
    "Name": "Display Filter Percentage",
    "Keyword": "Display​Filter​Percentage",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9415)",
    "Name": "Frame Pixel Shift Sequence",
    "Keyword": "Frame​Pixel​Shift​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9416)",
    "Name": "Subtraction Item ID",
    "Keyword": "Subtraction​ItemID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9422)",
    "Name": "Pixel Intensity Relationship LUT Sequence",
    "Keyword": "Pixel​Intensity​RelationshipLUT​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9443)",
    "Name": "Frame Pixel Data Properties Sequence",
    "Keyword": "Frame​Pixel​Data​Properties​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9444)",
    "Name": "Geometrical Properties",
    "Keyword": "Geometrical​Properties",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9445)",
    "Name": "Geometric Maximum Distortion",
    "Keyword": "Geometric​Maximum​Distortion",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9446)",
    "Name": "Image Processing Applied",
    "Keyword": "Image​Processing​Applied",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9454)",
    "Name": "Mask Selection Mode",
    "Keyword": "Mask​Selection​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9474)",
    "Name": "LUT Function",
    "Keyword": "LUT​Function",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9478)",
    "Name": "Mask Visibility Percentage",
    "Keyword": "Mask​Visibility​Percentage",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9501)",
    "Name": "Pixel Shift Sequence",
    "Keyword": "Pixel​Shift​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9502)",
    "Name": "Region Pixel Shift Sequence",
    "Keyword": "Region​Pixel​Shift​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9503)",
    "Name": "Vertices of the Region",
    "Keyword": "Vertices​OfThe​Region",
    "VR": "SS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9505)",
    "Name": "Multi-frame Presentation Sequence",
    "Keyword": "Multi​Frame​Presentation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0028,9506)",
    "Name": "Pixel Shift Frame Range",
    "Keyword": "Pixel​Shift​Frame​Range",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9507)",
    "Name": "LUT Frame Range",
    "Keyword": "LUT​Frame​Range",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0028,9520)",
    "Name": "Image to Equipment Mapping Matrix",
    "Keyword": "Image​ToEquipment​Mapping​Matrix",
    "VR": "DS",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(0028,9537)",
    "Name": "Equipment Coordinate System Identification",
    "Keyword": "Equipment​Coordinate​System​Identification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,000A)",
    "Name": "Study Status ID",
    "Keyword": "Study​StatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,000C)",
    "Name": "Study Priority ID",
    "Keyword": "Study​PriorityID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0012)",
    "Name": "Study ID Issuer",
    "Keyword": "StudyID​Issuer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0032)",
    "Name": "Study Verified Date",
    "Keyword": "Study​Verified​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0033)",
    "Name": "Study Verified Time",
    "Keyword": "Study​Verified​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0034)",
    "Name": "Study Read Date",
    "Keyword": "Study​Read​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,0035)",
    "Name": "Study Read Time",
    "Keyword": "Study​Read​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1000)",
    "Name": "Scheduled Study Start Date",
    "Keyword": "Scheduled​Study​Start​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1001)",
    "Name": "Scheduled Study Start Time",
    "Keyword": "Scheduled​Study​Start​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1010)",
    "Name": "Scheduled Study Stop Date",
    "Keyword": "Scheduled​Study​Stop​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1011)",
    "Name": "Scheduled Study Stop Time",
    "Keyword": "Scheduled​Study​Stop​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1020)",
    "Name": "Scheduled Study Location",
    "Keyword": "Scheduled​Study​Location",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1021)",
    "Name": "Scheduled Study Location AE Title",
    "Keyword": "Scheduled​Study​LocationAE​Title",
    "VR": "AE",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1030)",
    "Name": "Reason for Study",
    "Keyword": "Reason​For​Study",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1031)",
    "Name": "Requesting Physician Identification Sequence",
    "Keyword": "Requesting​Physician​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1032)",
    "Name": "Requesting Physician",
    "Keyword": "Requesting​Physician",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1033)",
    "Name": "Requesting Service",
    "Keyword": "Requesting​Service",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1034)",
    "Name": "Requesting Service Code Sequence",
    "Keyword": "Requesting​Service​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1040)",
    "Name": "Study Arrival Date",
    "Keyword": "Study​Arrival​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1041)",
    "Name": "Study Arrival Time",
    "Keyword": "Study​Arrival​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1050)",
    "Name": "Study Completion Date",
    "Keyword": "Study​Completion​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1051)",
    "Name": "Study Completion Time",
    "Keyword": "Study​Completion​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1055)",
    "Name": "Study Component Status ID",
    "Keyword": "Study​Component​StatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0032,1060)",
    "Name": "Requested Procedure Description",
    "Keyword": "Requested​Procedure​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1064)",
    "Name": "Requested Procedure Code Sequence",
    "Keyword": "Requested​Procedure​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,1070)",
    "Name": "Requested Contrast Agent",
    "Keyword": "Requested​Contrast​Agent",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0032,4000)",
    "Name": "Study Comments",
    "Keyword": "Study​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0004)",
    "Name": "Referenced Patient Alias Sequence",
    "Keyword": "Referenced​Patient​Alias​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0008)",
    "Name": "Visit Status ID",
    "Keyword": "Visit​StatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0010)",
    "Name": "Admission ID",
    "Keyword": "AdmissionID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0011)",
    "Name": "Issuer of Admission ID",
    "Keyword": "Issuer​OfAdmissionID",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0014)",
    "Name": "Issuer of Admission ID Sequence",
    "Keyword": "Issuer​OfAdmissionID​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0016)",
    "Name": "Route of Admissions",
    "Keyword": "Route​OfAdmissions",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,001A)",
    "Name": "Scheduled Admission Date",
    "Keyword": "Scheduled​Admission​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001B)",
    "Name": "Scheduled Admission Time",
    "Keyword": "Scheduled​Admission​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001C)",
    "Name": "Scheduled Discharge Date",
    "Keyword": "Scheduled​Discharge​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001D)",
    "Name": "Scheduled Discharge Time",
    "Keyword": "Scheduled​Discharge​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,001E)",
    "Name": "Scheduled Patient Institution Residence",
    "Keyword": "Scheduled​Patient​Institution​Residence",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0020)",
    "Name": "Admitting Date",
    "Keyword": "Admitting​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0021)",
    "Name": "Admitting Time",
    "Keyword": "Admitting​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0030)",
    "Name": "Discharge Date",
    "Keyword": "Discharge​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0032)",
    "Name": "Discharge Time",
    "Keyword": "Discharge​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0040)",
    "Name": "Discharge Diagnosis Description",
    "Keyword": "Discharge​Diagnosis​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0044)",
    "Name": "Discharge Diagnosis Code Sequence",
    "Keyword": "Discharge​Diagnosis​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0050)",
    "Name": "Special Needs",
    "Keyword": "Special​Needs",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0060)",
    "Name": "Service Episode ID",
    "Keyword": "Service​EpisodeID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0061)",
    "Name": "Issuer of Service Episode ID",
    "Keyword": "Issuer​OfService​EpisodeID",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0038,0062)",
    "Name": "Service Episode Description",
    "Keyword": "Service​Episode​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0064)",
    "Name": "Issuer of Service Episode ID Sequence",
    "Keyword": "Issuer​OfService​EpisodeID​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0100)",
    "Name": "Pertinent Documents Sequence",
    "Keyword": "Pertinent​Documents​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0300)",
    "Name": "Current Patient Location",
    "Keyword": "Current​Patient​Location",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0400)",
    "Name": "Patient's Institution Residence",
    "Keyword": "Patient​Institution​Residence",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0500)",
    "Name": "Patient State",
    "Keyword": "Patient​State",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,0502)",
    "Name": "Patient Clinical Trial Participation Sequence",
    "Keyword": "Patient​Clinical​Trial​Participation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0038,4000)",
    "Name": "Visit Comments",
    "Keyword": "Visit​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0004)",
    "Name": "Waveform Originality",
    "Keyword": "Waveform​Originality",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0005)",
    "Name": "Number of Waveform Channels",
    "Keyword": "Number​OfWaveform​Channels",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0010)",
    "Name": "Number of Waveform Samples",
    "Keyword": "Number​OfWaveform​Samples",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,001A)",
    "Name": "Sampling Frequency",
    "Keyword": "Sampling​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0020)",
    "Name": "Multiplex Group Label",
    "Keyword": "Multiplex​Group​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0200)",
    "Name": "Channel Definition Sequence",
    "Keyword": "Channel​Definition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0202)",
    "Name": "Waveform Channel Number",
    "Keyword": "Waveform​Channel​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0203)",
    "Name": "Channel Label",
    "Keyword": "Channel​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0205)",
    "Name": "Channel Status",
    "Keyword": "Channel​Status",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(003A,0208)",
    "Name": "Channel Source Sequence",
    "Keyword": "Channel​Source​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0209)",
    "Name": "Channel Source Modifiers Sequence",
    "Keyword": "Channel​Source​Modifiers​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,020A)",
    "Name": "Source Waveform Sequence",
    "Keyword": "Source​Waveform​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,020C)",
    "Name": "Channel Derivation Description",
    "Keyword": "Channel​Derivation​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0210)",
    "Name": "Channel Sensitivity",
    "Keyword": "Channel​Sensitivity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0211)",
    "Name": "Channel Sensitivity Units Sequence",
    "Keyword": "Channel​Sensitivity​Units​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0212)",
    "Name": "Channel Sensitivity Correction Factor",
    "Keyword": "Channel​Sensitivity​Correction​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0213)",
    "Name": "Channel Baseline",
    "Keyword": "Channel​Baseline",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0214)",
    "Name": "Channel Time Skew",
    "Keyword": "Channel​Time​Skew",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0215)",
    "Name": "Channel Sample Skew",
    "Keyword": "Channel​Sample​Skew",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0218)",
    "Name": "Channel Offset",
    "Keyword": "Channel​Offset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,021A)",
    "Name": "Waveform Bits Stored",
    "Keyword": "Waveform​Bits​Stored",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0220)",
    "Name": "Filter Low Frequency",
    "Keyword": "Filter​Low​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0221)",
    "Name": "Filter High Frequency",
    "Keyword": "Filter​High​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0222)",
    "Name": "Notch Filter Frequency",
    "Keyword": "Notch​Filter​Frequency",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0223)",
    "Name": "Notch Filter Bandwidth",
    "Keyword": "Notch​Filter​Bandwidth",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0230)",
    "Name": "Waveform Data Display Scale",
    "Keyword": "Waveform​Data​Display​Scale",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0231)",
    "Name": "Waveform Display Background CIE​Lab Value",
    "Keyword": "Waveform​Display​BackgroundCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(003A,0240)",
    "Name": "Waveform Presentation Group Sequence",
    "Keyword": "Waveform​Presentation​Group​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0241)",
    "Name": "Presentation Group Number",
    "Keyword": "Presentation​Group​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0242)",
    "Name": "Channel Display Sequence",
    "Keyword": "Channel​Display​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0244)",
    "Name": "Channel Recommended Display CIE​Lab Value",
    "Keyword": "Channel​Recommended​DisplayCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(003A,0245)",
    "Name": "Channel Position",
    "Keyword": "Channel​Position",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0246)",
    "Name": "Display Shading Flag",
    "Keyword": "Display​Shading​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0247)",
    "Name": "Fractional Channel Display Scale",
    "Keyword": "Fractional​Channel​Display​Scale",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0248)",
    "Name": "Absolute Channel Display Scale",
    "Keyword": "Absolute​Channel​Display​Scale",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0300)",
    "Name": "Multiplexed Audio Channels Description Code Sequence",
    "Keyword": "Multiplexed​Audio​Channels​Description​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0301)",
    "Name": "Channel Identification Code",
    "Keyword": "Channel​Identification​Code",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(003A,0302)",
    "Name": "Channel Mode",
    "Keyword": "Channel​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0001)",
    "Name": "Scheduled Station AE Title",
    "Keyword": "Scheduled​StationAE​Title",
    "VR": "AE",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,0002)",
    "Name": "Scheduled Procedure Step Start Date",
    "Keyword": "Scheduled​Procedure​Step​Start​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0003)",
    "Name": "Scheduled Procedure Step Start Time",
    "Keyword": "Scheduled​Procedure​Step​Start​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0004)",
    "Name": "Scheduled Procedure Step End Date",
    "Keyword": "Scheduled​Procedure​Step​End​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0005)",
    "Name": "Scheduled Procedure Step End Time",
    "Keyword": "Scheduled​Procedure​Step​End​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0006)",
    "Name": "Scheduled Performing Physician's Name",
    "Keyword": "Scheduled​Performing​Physician​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0007)",
    "Name": "Scheduled Procedure Step Description",
    "Keyword": "Scheduled​Procedure​Step​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0008)",
    "Name": "Scheduled Protocol Code Sequence",
    "Keyword": "Scheduled​Protocol​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0009)",
    "Name": "Scheduled Procedure Step ID",
    "Keyword": "Scheduled​Procedure​StepID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,000A)",
    "Name": "Stage Code Sequence",
    "Keyword": "Stage​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,000B)",
    "Name": "Scheduled Performing Physician Identification Sequence",
    "Keyword": "Scheduled​Performing​Physician​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0010)",
    "Name": "Scheduled Station Name",
    "Keyword": "Scheduled​Station​Name",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,0011)",
    "Name": "Scheduled Procedure Step Location",
    "Keyword": "Scheduled​Procedure​Step​Location",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0012)",
    "Name": "Pre-Medication",
    "Keyword": "Pre​Medication",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0020)",
    "Name": "Scheduled Procedure Step Status",
    "Keyword": "Scheduled​Procedure​Step​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0026)",
    "Name": "Order Placer Identifier Sequence",
    "Keyword": "Order​Placer​Identifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0027)",
    "Name": "Order Filler Identifier Sequence",
    "Keyword": "Order​Filler​Identifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0031)",
    "Name": "Local Namespace Entity ID",
    "Keyword": "Local​Namespace​EntityID",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0032)",
    "Name": "Universal Entity ID",
    "Keyword": "Universal​EntityID",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0033)",
    "Name": "Universal Entity ID Type",
    "Keyword": "Universal​EntityID​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0035)",
    "Name": "Identifier Type Code",
    "Keyword": "Identifier​Type​Code",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0036)",
    "Name": "Assigning Facility Sequence",
    "Keyword": "Assigning​Facility​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0039)",
    "Name": "Assigning Jurisdiction Code Sequence",
    "Keyword": "Assigning​Jurisdiction​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,003A)",
    "Name": "Assigning Agency or Department Code Sequence",
    "Keyword": "Assigning​Agency​OrDepartment​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0100)",
    "Name": "Scheduled Procedure Step Sequence",
    "Keyword": "Scheduled​Procedure​Step​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0220)",
    "Name": "Referenced Non-Image Composite SOP Instance Sequence",
    "Keyword": "Referenced​Non​Image​CompositeSOP​Instance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0241)",
    "Name": "Performed Station AE Title",
    "Keyword": "Performed​StationAE​Title",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0242)",
    "Name": "Performed Station Name",
    "Keyword": "Performed​Station​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0243)",
    "Name": "Performed Location",
    "Keyword": "Performed​Location",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0244)",
    "Name": "Performed Procedure Step Start Date",
    "Keyword": "Performed​Procedure​Step​Start​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0245)",
    "Name": "Performed Procedure Step Start Time",
    "Keyword": "Performed​Procedure​Step​Start​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0250)",
    "Name": "Performed Procedure Step End Date",
    "Keyword": "Performed​Procedure​Step​End​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0251)",
    "Name": "Performed Procedure Step End Time",
    "Keyword": "Performed​Procedure​Step​End​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0252)",
    "Name": "Performed Procedure Step Status",
    "Keyword": "Performed​Procedure​Step​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0253)",
    "Name": "Performed Procedure Step ID",
    "Keyword": "Performed​Procedure​StepID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0254)",
    "Name": "Performed Procedure Step Description",
    "Keyword": "Performed​Procedure​Step​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0255)",
    "Name": "Performed Procedure Type Description",
    "Keyword": "Performed​Procedure​Type​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0260)",
    "Name": "Performed Protocol Code Sequence",
    "Keyword": "Performed​Protocol​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0261)",
    "Name": "Performed Protocol Type",
    "Keyword": "Performed​Protocol​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0270)",
    "Name": "Scheduled Step Attributes Sequence",
    "Keyword": "Scheduled​Step​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0275)",
    "Name": "Request Attributes Sequence",
    "Keyword": "Request​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0280)",
    "Name": "Comments on the Performed Procedure Step",
    "Keyword": "Comments​OnThe​Performed​Procedure​Step",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0281)",
    "Name": "Performed Procedure Step Discontinuation Reason Code Sequence",
    "Keyword": "Performed​Procedure​Step​Discontinuation​Reason​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0293)",
    "Name": "Quantity Sequence",
    "Keyword": "Quantity​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0294)",
    "Name": "Quantity",
    "Keyword": "Quantity",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0295)",
    "Name": "Measuring Units Sequence",
    "Keyword": "Measuring​Units​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0296)",
    "Name": "Billing Item Sequence",
    "Keyword": "Billing​Item​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0300)",
    "Name": "Total Time of Fluoroscopy",
    "Keyword": "Total​Time​OfFluoroscopy",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0301)",
    "Name": "Total Number of Exposures",
    "Keyword": "Total​Number​OfExposures",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0302)",
    "Name": "Entrance Dose",
    "Keyword": "Entrance​Dose",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0303)",
    "Name": "Exposed Area",
    "Keyword": "Exposed​Area",
    "VR": "US",
    "VM": "1-2",
    "Retired": ""
  },
  {
    "Tag": "(0040,0306)",
    "Name": "Distance Source to Entrance",
    "Keyword": "Distance​Source​ToEntrance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0307)",
    "Name": "Distance Source to Support",
    "Keyword": "Distance​Source​ToSupport",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,030E)",
    "Name": "Exposure Dose Sequence",
    "Keyword": "Exposure​Dose​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0310)",
    "Name": "Comments on Radiation Dose",
    "Keyword": "Comments​OnRadiation​Dose",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0312)",
    "Name": "X-Ray Output",
    "Keyword": "X​Ray​Output",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0314)",
    "Name": "Half Value Layer",
    "Keyword": "Half​Value​Layer",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0316)",
    "Name": "Organ Dose",
    "Keyword": "Organ​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0318)",
    "Name": "Organ Exposed",
    "Keyword": "Organ​Exposed",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0320)",
    "Name": "Billing Procedure Step Sequence",
    "Keyword": "Billing​Procedure​Step​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0321)",
    "Name": "Film Consumption Sequence",
    "Keyword": "Film​Consumption​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0324)",
    "Name": "Billing Supplies and Devices Sequence",
    "Keyword": "Billing​Supplies​And​Devices​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0330)",
    "Name": "Referenced Procedure Step Sequence",
    "Keyword": "Referenced​Procedure​Step​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0340)",
    "Name": "Performed Series Sequence",
    "Keyword": "Performed​Series​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0400)",
    "Name": "Comments on the Scheduled Procedure Step",
    "Keyword": "Comments​OnThe​Scheduled​Procedure​Step",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0440)",
    "Name": "Protocol Context Sequence",
    "Keyword": "Protocol​Context​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0441)",
    "Name": "Content Item Modifier Sequence",
    "Keyword": "Content​Item​Modifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0500)",
    "Name": "Scheduled Specimen Sequence",
    "Keyword": "Scheduled​Specimen​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,050A)",
    "Name": "Specimen Accession Number",
    "Keyword": "Specimen​Accession​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0512)",
    "Name": "Container Identifier",
    "Keyword": "Container​Identifier",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0513)",
    "Name": "Issuer of the Container Identifier Sequence",
    "Keyword": "Issuer​OfThe​Container​Identifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0515)",
    "Name": "Alternate Container Identifier Sequence",
    "Keyword": "Alternate​Container​Identifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0518)",
    "Name": "Container Type Code Sequence",
    "Keyword": "Container​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,051A)",
    "Name": "Container Description",
    "Keyword": "Container​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0520)",
    "Name": "Container Component Sequence",
    "Keyword": "Container​Component​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0550)",
    "Name": "Specimen Sequence",
    "Keyword": "Specimen​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0551)",
    "Name": "Specimen Identifier",
    "Keyword": "Specimen​Identifier",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0552)",
    "Name": "Specimen Description Sequence (Trial)",
    "Keyword": "Specimen​Description​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0553)",
    "Name": "Specimen Description (Trial)",
    "Keyword": "Specimen​Description​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,0554)",
    "Name": "Specimen UID",
    "Keyword": "SpecimenUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0555)",
    "Name": "Acquisition Context Sequence",
    "Keyword": "Acquisition​Context​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0556)",
    "Name": "Acquisition Context Description",
    "Keyword": "Acquisition​Context​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,059A)",
    "Name": "Specimen Type Code Sequence",
    "Keyword": "Specimen​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0560)",
    "Name": "Specimen Description Sequence",
    "Keyword": "Specimen​Description​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0562)",
    "Name": "Issuer of the Specimen Identifier Sequence",
    "Keyword": "Issuer​OfThe​Specimen​Identifier​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0600)",
    "Name": "Specimen Short Description",
    "Keyword": "Specimen​Short​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0602)",
    "Name": "Specimen Detailed Description",
    "Keyword": "Specimen​Detailed​Description",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0610)",
    "Name": "Specimen Preparation Sequence",
    "Keyword": "Specimen​Preparation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0612)",
    "Name": "Specimen Preparation Step Content Item Sequence",
    "Keyword": "Specimen​Preparation​Step​Content​Item​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,0620)",
    "Name": "Specimen Localization Content Item Sequence",
    "Keyword": "Specimen​Localization​Content​Item​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,06FA)",
    "Name": "Slide Identifier",
    "Keyword": "Slide​Identifier",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,071A)",
    "Name": "Image Center Point Coordinates Sequence",
    "Keyword": "Image​Center​Point​Coordinates​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,072A)",
    "Name": "X Offset in Slide Coordinate System",
    "Keyword": "X​Offset​InSlide​Coordinate​System",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,073A)",
    "Name": "Y Offset in Slide Coordinate System",
    "Keyword": "Y​Offset​InSlide​Coordinate​System",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,074A)",
    "Name": "Z Offset in Slide Coordinate System",
    "Keyword": "Z​Offset​InSlide​Coordinate​System",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,08D8)",
    "Name": "Pixel Spacing Sequence",
    "Keyword": "Pixel​Spacing​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,08DA)",
    "Name": "Coordinate System Axis Code Sequence",
    "Keyword": "Coordinate​System​Axis​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,08EA)",
    "Name": "Measurement Units Code Sequence",
    "Keyword": "Measurement​Units​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,09F8)",
    "Name": "Vital Stain Code Sequence (Trial)",
    "Keyword": "Vital​Stain​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1001)",
    "Name": "Requested Procedure ID",
    "Keyword": "Requested​ProcedureID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1002)",
    "Name": "Reason for the Requested Procedure",
    "Keyword": "Reason​For​The​Requested​Procedure",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1003)",
    "Name": "Requested Procedure Priority",
    "Keyword": "Requested​Procedure​Priority",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1004)",
    "Name": "Patient Transport Arrangements",
    "Keyword": "Patient​Transport​Arrangements",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1005)",
    "Name": "Requested Procedure Location",
    "Keyword": "Requested​Procedure​Location",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1006)",
    "Name": "Placer Order Number / Procedure",
    "Keyword": "Placer​Order​Number​Procedure",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1007)",
    "Name": "Filler Order Number / Procedure",
    "Keyword": "Filler​Order​Number​Procedure",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1008)",
    "Name": "Confidentiality Code",
    "Keyword": "Confidentiality​Code",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1009)",
    "Name": "Reporting Priority",
    "Keyword": "Reporting​Priority",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,100A)",
    "Name": "Reason for Requested Procedure Code Sequence",
    "Keyword": "Reason​For​Requested​Procedure​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1010)",
    "Name": "Names of Intended Recipients of Results",
    "Keyword": "Names​OfIntended​Recipients​OfResults",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,1011)",
    "Name": "Intended Recipients of Results Identification Sequence",
    "Keyword": "Intended​Recipients​OfResults​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1012)",
    "Name": "Reason For Performed Procedure Code Sequence",
    "Keyword": "Reason​For​Performed​Procedure​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1060)",
    "Name": "Requested Procedure Description (Trial)",
    "Keyword": "Requested​Procedure​Description​Trial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,1101)",
    "Name": "Person Identification Code Sequence",
    "Keyword": "Person​Identification​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1102)",
    "Name": "Person's Address",
    "Keyword": "Person​Address",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,1103)",
    "Name": "Person's Telephone Numbers",
    "Keyword": "Person​Telephone​Numbers",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,1400)",
    "Name": "Requested Procedure Comments",
    "Keyword": "Requested​Procedure​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2001)",
    "Name": "Reason for the Imaging Service Request",
    "Keyword": "Reason​For​The​Imaging​Service​Request",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,2004)",
    "Name": "Issue Date of Imaging Service Request",
    "Keyword": "Issue​Date​OfImaging​Service​Request",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2005)",
    "Name": "Issue Time of Imaging Service Request",
    "Keyword": "Issue​Time​OfImaging​Service​Request",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2006)",
    "Name": "Placer Order Number / Imaging Service Request (Retired)",
    "Keyword": "Placer​Order​Number​Imaging​Service​Request​Retired",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,2007)",
    "Name": "Filler Order Number / Imaging Service Request (Retired)",
    "Keyword": "Filler​Order​Number​Imaging​Service​Request​Retired",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,2008)",
    "Name": "Order Entered By",
    "Keyword": "Order​Entered​By",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2009)",
    "Name": "Order Enterer's Location",
    "Keyword": "Order​Enterer​Location",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2010)",
    "Name": "Order Callback Phone Number",
    "Keyword": "Order​Callback​Phone​Number",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2016)",
    "Name": "Placer Order Number / Imaging Service Request",
    "Keyword": "Placer​Order​Number​Imaging​Service​Request",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2017)",
    "Name": "Filler Order Number / Imaging Service Request",
    "Keyword": "Filler​Order​Number​Imaging​Service​Request",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,2400)",
    "Name": "Imaging Service Request Comments",
    "Keyword": "Imaging​Service​Request​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,3001)",
    "Name": "Confidentiality Constraint on Patient Data Description",
    "Keyword": "Confidentiality​Constraint​OnPatient​Data​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4001)",
    "Name": "General Purpose Scheduled Procedure Step Status",
    "Keyword": "General​Purpose​Scheduled​Procedure​Step​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4002)",
    "Name": "General Purpose Performed Procedure Step Status",
    "Keyword": "General​Purpose​Performed​Procedure​Step​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4003)",
    "Name": "General Purpose Scheduled Procedure Step Priority",
    "Keyword": "General​Purpose​Scheduled​Procedure​Step​Priority",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4004)",
    "Name": "Scheduled Processing Applications Code Sequence",
    "Keyword": "Scheduled​Processing​Applications​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4005)",
    "Name": "Scheduled Procedure Step Start DateTime",
    "Keyword": "Scheduled​Procedure​Step​Start​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4006)",
    "Name": "Multiple Copies Flag",
    "Keyword": "Multiple​Copies​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4007)",
    "Name": "Performed Processing Applications Code Sequence",
    "Keyword": "Performed​Processing​Applications​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4009)",
    "Name": "Human Performer Code Sequence",
    "Keyword": "Human​Performer​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4010)",
    "Name": "Scheduled Procedure Step Modification DateTime",
    "Keyword": "Scheduled​Procedure​Step​Modification​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4011)",
    "Name": "Expected Completion DateTime",
    "Keyword": "Expected​Completion​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4015)",
    "Name": "Resulting General Purpose Performed Procedure Steps Sequence",
    "Keyword": "Resulting​General​Purpose​Performed​Procedure​Steps​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4016)",
    "Name": "Referenced General Purpose Scheduled Procedure Step Sequence",
    "Keyword": "Referenced​General​Purpose​Scheduled​Procedure​Step​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4018)",
    "Name": "Scheduled Workitem Code Sequence",
    "Keyword": "Scheduled​Workitem​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4019)",
    "Name": "Performed Workitem Code Sequence",
    "Keyword": "Performed​Workitem​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4020)",
    "Name": "Input Availability Flag",
    "Keyword": "Input​Availability​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4021)",
    "Name": "Input Information Sequence",
    "Keyword": "Input​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4022)",
    "Name": "Relevant Information Sequence",
    "Keyword": "Relevant​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4023)",
    "Name": "Referenced General Purpose Scheduled Procedure Step Transaction UID",
    "Keyword": "Referenced​General​Purpose​Scheduled​Procedure​Step​TransactionUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4025)",
    "Name": "Scheduled Station Name Code Sequence",
    "Keyword": "Scheduled​Station​Name​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4026)",
    "Name": "Scheduled Station Class Code Sequence",
    "Keyword": "Scheduled​Station​Class​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4027)",
    "Name": "Scheduled Station Geographic Location Code Sequence",
    "Keyword": "Scheduled​Station​Geographic​Location​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4028)",
    "Name": "Performed Station Name Code Sequence",
    "Keyword": "Performed​Station​Name​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4029)",
    "Name": "Performed Station Class Code Sequence",
    "Keyword": "Performed​Station​Class​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4030)",
    "Name": "Performed Station Geographic Location Code Sequence",
    "Keyword": "Performed​Station​Geographic​Location​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4031)",
    "Name": "Requested Subsequent Workitem Code Sequence",
    "Keyword": "Requested​Subsequent​Workitem​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4032)",
    "Name": "Non-DICOM Output Code Sequence",
    "Keyword": "NonDICOM​Output​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,4033)",
    "Name": "Output Information Sequence",
    "Keyword": "Output​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4034)",
    "Name": "Scheduled Human Performers Sequence",
    "Keyword": "Scheduled​Human​Performers​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4035)",
    "Name": "Actual Human Performers Sequence",
    "Keyword": "Actual​Human​Performers​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4036)",
    "Name": "Human Performer's Organization",
    "Keyword": "Human​Performer​Organization",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4037)",
    "Name": "Human Performer's Name",
    "Keyword": "Human​Performer​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4040)",
    "Name": "Raw Data Handling",
    "Keyword": "Raw​Data​Handling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4041)",
    "Name": "Input Readiness State",
    "Keyword": "Input​Readiness​State",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4050)",
    "Name": "Performed Procedure Step Start DateTime",
    "Keyword": "Performed​Procedure​Step​Start​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4051)",
    "Name": "Performed Procedure Step End DateTime",
    "Keyword": "Performed​Procedure​Step​End​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,4052)",
    "Name": "Procedure Step Cancellation DateTime",
    "Keyword": "Procedure​Step​Cancellation​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,8302)",
    "Name": "Entrance Dose in m​Gy",
    "Keyword": "Entrance​Dose​Inm​Gy",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9094)",
    "Name": "Referenced Image Real World Value Mapping Sequence",
    "Keyword": "Referenced​Image​Real​World​Value​Mapping​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9096)",
    "Name": "Real World Value Mapping Sequence",
    "Keyword": "Real​World​Value​Mapping​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9098)",
    "Name": "Pixel Value Mapping Code Sequence",
    "Keyword": "Pixel​Value​Mapping​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9210)",
    "Name": "LUT Label",
    "Keyword": "LUT​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9211)",
    "Name": "Real World Value Last Value Mapped",
    "Keyword": "Real​World​Value​Last​Value​Mapped",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9212)",
    "Name": "Real World Value LUT Data",
    "Keyword": "Real​World​ValueLUT​Data",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,9216)",
    "Name": "Real World Value First Value Mapped",
    "Keyword": "Real​World​Value​First​Value​Mapped",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9224)",
    "Name": "Real World Value Intercept",
    "Keyword": "Real​World​Value​Intercept",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,9225)",
    "Name": "Real World Value Slope",
    "Keyword": "Real​World​Value​Slope",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A007)",
    "Name": "Findings Flag (Trial)",
    "Keyword": "Findings​Flag​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A010)",
    "Name": "Relationship Type",
    "Keyword": "Relationship​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A020)",
    "Name": "Findings Sequence (Trial)",
    "Keyword": "Findings​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A021)",
    "Name": "Findings Group UID (Trial)",
    "Keyword": "Findings​GroupUID​Trial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A022)",
    "Name": "Referenced Findings Group UID (Trial)",
    "Keyword": "Referenced​Findings​GroupUID​Trial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A023)",
    "Name": "Findings Group Recording Date (Trial)",
    "Keyword": "Findings​Group​Recording​Date​Trial",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A024)",
    "Name": "Findings Group Recording Time (Trial)",
    "Keyword": "Findings​Group​Recording​Time​Trial",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A026)",
    "Name": "Findings Source Category Code Sequence (Trial)",
    "Keyword": "Findings​Source​Category​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A027)",
    "Name": "Verifying Organization",
    "Keyword": "Verifying​Organization",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A028)",
    "Name": "Documenting Organization Identifier Code Sequence (Trial)",
    "Keyword": "Documenting​Organization​Identifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A030)",
    "Name": "Verification DateTime",
    "Keyword": "Verification​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A032)",
    "Name": "Observation DateTime",
    "Keyword": "Observation​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A040)",
    "Name": "Value Type",
    "Keyword": "Value​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A043)",
    "Name": "Concept Name Code Sequence",
    "Keyword": "Concept​Name​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A047)",
    "Name": "Measurement Precision Description (Trial)",
    "Keyword": "Measurement​Precision​Description​Trial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A050)",
    "Name": "Continuity Of Content",
    "Keyword": "Continuity​OfContent",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A057)",
    "Name": "Urgency or Priority Alerts (Trial)",
    "Keyword": "Urgency​OrPriority​Alerts​Trial",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A060)",
    "Name": "Sequencing Indicator (Trial)",
    "Keyword": "Sequencing​Indicator​Trial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A066)",
    "Name": "Document Identifier Code Sequence (Trial)",
    "Keyword": "Document​Identifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A067)",
    "Name": "Document Author (Trial)",
    "Keyword": "Document​Author​Trial",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A068)",
    "Name": "Document Author Identifier Code Sequence (Trial)",
    "Keyword": "Document​Author​Identifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A070)",
    "Name": "Identifier Code Sequence (Trial)",
    "Keyword": "Identifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A073)",
    "Name": "Verifying Observer Sequence",
    "Keyword": "Verifying​Observer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A074)",
    "Name": "Object Binary Identifier (Trial)",
    "Keyword": "Object​Binary​Identifier​Trial",
    "VR": "OB",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A075)",
    "Name": "Verifying Observer Name",
    "Keyword": "Verifying​Observer​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A076)",
    "Name": "Documenting Observer Identifier Code Sequence (Trial)",
    "Keyword": "Documenting​Observer​Identifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A078)",
    "Name": "Author Observer Sequence",
    "Keyword": "Author​Observer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A07A)",
    "Name": "Participant Sequence",
    "Keyword": "Participant​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A07C)",
    "Name": "Custodial Organization Sequence",
    "Keyword": "Custodial​Organization​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A080)",
    "Name": "Participation Type",
    "Keyword": "Participation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A082)",
    "Name": "Participation DateTime",
    "Keyword": "Participation​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A084)",
    "Name": "Observer Type",
    "Keyword": "Observer​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A085)",
    "Name": "Procedure Identifier Code Sequence (Trial)",
    "Keyword": "Procedure​Identifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A088)",
    "Name": "Verifying Observer Identification Code Sequence",
    "Keyword": "Verifying​Observer​Identification​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A089)",
    "Name": "Object Directory Binary Identifier (Trial)",
    "Keyword": "Object​Directory​Binary​Identifier​Trial",
    "VR": "OB",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A090)",
    "Name": "Equivalent CDA Document Sequence",
    "Keyword": "EquivalentCDA​Document​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A0B0)",
    "Name": "Referenced Waveform Channels",
    "Keyword": "Referenced​Waveform​Channels",
    "VR": "US",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A110)",
    "Name": "Date of Document or Verbal Transaction (Trial)",
    "Keyword": "Date​OfDocument​OrVerbal​Transaction​Trial",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A112)",
    "Name": "Time of Document Creation or Verbal Transaction (Trial)",
    "Keyword": "Time​OfDocument​Creation​OrVerbal​Transaction​Trial",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A120)",
    "Name": "Date​Time",
    "Keyword": "Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A121)",
    "Name": "Date",
    "Keyword": "Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A122)",
    "Name": "Time",
    "Keyword": "Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A123)",
    "Name": "Person Name",
    "Keyword": "Person​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A124)",
    "Name": "UID",
    "Keyword": "UID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A125)",
    "Name": "Report Status ID (Trial)",
    "Keyword": "Report​StatusID​Trial",
    "VR": "CS",
    "VM": "2",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A130)",
    "Name": "Temporal Range Type",
    "Keyword": "Temporal​Range​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A132)",
    "Name": "Referenced Sample Positions",
    "Keyword": "Referenced​Sample​Positions",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A136)",
    "Name": "Referenced Frame Numbers",
    "Keyword": "Referenced​Frame​Numbers",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A138)",
    "Name": "Referenced Time Offsets",
    "Keyword": "Referenced​Time​Offsets",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A13A)",
    "Name": "Referenced DateTime",
    "Keyword": "Referenced​Date​Time",
    "VR": "DT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A160)",
    "Name": "Text Value",
    "Keyword": "Text​Value",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A161)",
    "Name": "Floating Point Value",
    "Keyword": "Floating​Point​Value",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A162)",
    "Name": "Rational Numerator Value",
    "Keyword": "Rational​Numerator​Value",
    "VR": "SL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A163)",
    "Name": "Rational Denominator Value",
    "Keyword": "Rational​Denominator​Value",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A167)",
    "Name": "Observation Category Code Sequence (Trial)",
    "Keyword": "Observation​Category​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A168)",
    "Name": "Concept Code Sequence",
    "Keyword": "Concept​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A16A)",
    "Name": "Bibliographic Citation (Trial)",
    "Keyword": "Bibliographic​Citation​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A170)",
    "Name": "Purpose of Reference Code Sequence",
    "Keyword": "Purpose​OfReference​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A171)",
    "Name": "Observation UID",
    "Keyword": "ObservationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A172)",
    "Name": "Referenced Observation UID (Trial)",
    "Keyword": "Referenced​ObservationUID​Trial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A173)",
    "Name": "Referenced Observation Class (Trial)",
    "Keyword": "Referenced​Observation​Class​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A174)",
    "Name": "Referenced Object Observation Class (Trial)",
    "Keyword": "Referenced​Object​Observation​Class​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A180)",
    "Name": "Annotation Group Number",
    "Keyword": "Annotation​Group​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A192)",
    "Name": "Observation Date (Trial)",
    "Keyword": "Observation​Date​Trial",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A193)",
    "Name": "Observation Time (Trial)",
    "Keyword": "Observation​Time​Trial",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A194)",
    "Name": "Measurement Automation (Trial)",
    "Keyword": "Measurement​Automation​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A195)",
    "Name": "Modifier Code Sequence",
    "Keyword": "Modifier​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A224)",
    "Name": "Identification Description (Trial)",
    "Keyword": "Identification​Description​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A290)",
    "Name": "Coordinates Set Geometric Type (Trial)",
    "Keyword": "Coordinates​Set​Geometric​Type​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A296)",
    "Name": "Algorithm Code Sequence (Trial)",
    "Keyword": "Algorithm​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A297)",
    "Name": "Algorithm Description (Trial)",
    "Keyword": "Algorithm​Description​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A29A)",
    "Name": "Pixel Coordinates Set (Trial)",
    "Keyword": "Pixel​Coordinates​Set​Trial",
    "VR": "SL",
    "VM": "2-2n",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A300)",
    "Name": "Measured Value Sequence",
    "Keyword": "Measured​Value​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A301)",
    "Name": "Numeric Value Qualifier Code Sequence",
    "Keyword": "Numeric​Value​Qualifier​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A307)",
    "Name": "Current Observer (Trial)",
    "Keyword": "Current​Observer​Trial",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A30A)",
    "Name": "Numeric Value",
    "Keyword": "Numeric​Value",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,A313)",
    "Name": "Referenced Accession Sequence (Trial)",
    "Keyword": "Referenced​Accession​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A33A)",
    "Name": "Report Status Comment (Trial)",
    "Keyword": "Report​Status​Comment​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A340)",
    "Name": "Procedure Context Sequence (Trial)",
    "Keyword": "Procedure​Context​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A352)",
    "Name": "Verbal Source (Trial)",
    "Keyword": "Verbal​Source​Trial",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A353)",
    "Name": "Address (Trial)",
    "Keyword": "Address​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A354)",
    "Name": "Telephone Number (Trial)",
    "Keyword": "Telephone​Number​Trial",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A358)",
    "Name": "Verbal Source Identifier Code Sequence (Trial)",
    "Keyword": "Verbal​Source​Identifier​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A360)",
    "Name": "Predecessor Documents Sequence",
    "Keyword": "Predecessor​Documents​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A370)",
    "Name": "Referenced Request Sequence",
    "Keyword": "Referenced​Request​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A372)",
    "Name": "Performed Procedure Code Sequence",
    "Keyword": "Performed​Procedure​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A375)",
    "Name": "Current Requested Procedure Evidence Sequence",
    "Keyword": "Current​Requested​Procedure​Evidence​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A380)",
    "Name": "Report Detail Sequence (Trial)",
    "Keyword": "Report​Detail​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A385)",
    "Name": "Pertinent Other Evidence Sequence",
    "Keyword": "Pertinent​Other​Evidence​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A390)",
    "Name": "HL7 Structured Document Reference Sequence",
    "Keyword": "HL7Structured​Document​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A402)",
    "Name": "Observation Subject UID (Trial)",
    "Keyword": "Observation​SubjectUID​Trial",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A403)",
    "Name": "Observation Subject Class (Trial)",
    "Keyword": "Observation​Subject​Class​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A404)",
    "Name": "Observation Subject Type Code Sequence (Trial)",
    "Keyword": "Observation​Subject​Type​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A491)",
    "Name": "Completion Flag",
    "Keyword": "Completion​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A492)",
    "Name": "Completion Flag Description",
    "Keyword": "Completion​Flag​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A493)",
    "Name": "Verification Flag",
    "Keyword": "Verification​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A494)",
    "Name": "Archive Requested",
    "Keyword": "Archive​Requested",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A496)",
    "Name": "Preliminary Flag",
    "Keyword": "Preliminary​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A504)",
    "Name": "Content Template Sequence",
    "Keyword": "Content​Template​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A525)",
    "Name": "Identical Documents Sequence",
    "Keyword": "Identical​Documents​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A600)",
    "Name": "Observation Subject Context Flag (Trial)",
    "Keyword": "Observation​Subject​Context​Flag​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A601)",
    "Name": "Observer Context Flag (Trial)",
    "Keyword": "Observer​Context​Flag​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A603)",
    "Name": "Procedure Context Flag (Trial)",
    "Keyword": "Procedure​Context​Flag​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A730)",
    "Name": "Content Sequence",
    "Keyword": "Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,A731)",
    "Name": "Relationship Sequence (Trial)",
    "Keyword": "Relationship​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A732)",
    "Name": "Relationship Type Code Sequence (Trial)",
    "Keyword": "Relationship​Type​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A744)",
    "Name": "Language Code Sequence (Trial)",
    "Keyword": "Language​Code​Sequence​Trial",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,A992)",
    "Name": "Uniform Resource Locator (Trial)",
    "Keyword": "Uniform​Resource​Locator​Trial",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,B020)",
    "Name": "Waveform Annotation Sequence",
    "Keyword": "Waveform​Annotation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,DB00)",
    "Name": "Template Identifier",
    "Keyword": "Template​Identifier",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,DB06)",
    "Name": "Template Version",
    "Keyword": "Template​Version",
    "VR": "DT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB07)",
    "Name": "Template Local Version",
    "Keyword": "Template​Local​Version",
    "VR": "DT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB0B)",
    "Name": "Template Extension Flag",
    "Keyword": "Template​Extension​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB0C)",
    "Name": "Template Extension Organization UID",
    "Keyword": "Template​Extension​OrganizationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB0D)",
    "Name": "Template Extension Creator UID",
    "Keyword": "Template​Extension​CreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0040,DB73)",
    "Name": "Referenced Content Item Identifier",
    "Keyword": "Referenced​Content​Item​Identifier",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0040,E001)",
    "Name": "HL7 Instance Identifier",
    "Keyword": "HL7Instance​Identifier",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E004)",
    "Name": "HL7 Document Effective Time",
    "Keyword": "HL7Document​Effective​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E006)",
    "Name": "HL7 Document Type Code Sequence",
    "Keyword": "HL7Document​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E008)",
    "Name": "Document Class Code Sequence",
    "Keyword": "Document​Class​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E010)",
    "Name": "Retrieve URI",
    "Keyword": "RetrieveURI",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E011)",
    "Name": "Retrieve Location UID",
    "Keyword": "Retrieve​LocationUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E020)",
    "Name": "Type of Instances",
    "Keyword": "Type​OfInstances",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E021)",
    "Name": "DICOM Retrieval Sequence",
    "Keyword": "DICOM​Retrieval​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E022)",
    "Name": "DICOM Media Retrieval Sequence",
    "Keyword": "DICOM​Media​Retrieval​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E023)",
    "Name": "WADO Retrieval Sequence",
    "Keyword": "WADO​Retrieval​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E024)",
    "Name": "XDS Retrieval Sequence",
    "Keyword": "XDS​Retrieval​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E030)",
    "Name": "Repository Unique ID",
    "Keyword": "Repository​UniqueID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0040,E031)",
    "Name": "Home Community ID",
    "Keyword": "Home​CommunityID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0010)",
    "Name": "Document Title",
    "Keyword": "Document​Title",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0011)",
    "Name": "Encapsulated Document",
    "Keyword": "Encapsulated​Document",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0012)",
    "Name": "MIME Type of Encapsulated Document",
    "Keyword": "MIME​Type​OfEncapsulated​Document",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0013)",
    "Name": "Source Instance Sequence",
    "Keyword": "Source​Instance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0042,0014)",
    "Name": "List of MIME Types",
    "Keyword": "List​OfMIME​Types",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0044,0001)",
    "Name": "Product Package Identifier",
    "Keyword": "Product​Package​Identifier",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0002)",
    "Name": "Substance Administration Approval",
    "Keyword": "Substance​Administration​Approval",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0003)",
    "Name": "Approval Status Further Description",
    "Keyword": "Approval​Status​Further​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0004)",
    "Name": "Approval Status DateTime",
    "Keyword": "Approval​Status​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0007)",
    "Name": "Product Type Code Sequence",
    "Keyword": "Product​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0008)",
    "Name": "Product Name",
    "Keyword": "Product​Name",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0044,0009)",
    "Name": "Product Description",
    "Keyword": "Product​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,000A)",
    "Name": "Product Lot Identifier",
    "Keyword": "Product​Lot​Identifier",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,000B)",
    "Name": "Product Expiration DateTime",
    "Keyword": "Product​Expiration​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0010)",
    "Name": "Substance Administration DateTime",
    "Keyword": "Substance​Administration​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0011)",
    "Name": "Substance Administration Notes",
    "Keyword": "Substance​Administration​Notes",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0012)",
    "Name": "Substance Administration Device ID",
    "Keyword": "Substance​Administration​DeviceID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0013)",
    "Name": "Product Parameter Sequence",
    "Keyword": "Product​Parameter​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0044,0019)",
    "Name": "Substance Administration Parameter Sequence",
    "Keyword": "Substance​Administration​Parameter​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0012)",
    "Name": "Lens Description",
    "Keyword": "Lens​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0014)",
    "Name": "Right Lens Sequence",
    "Keyword": "Right​Lens​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0015)",
    "Name": "Left Lens Sequence",
    "Keyword": "Left​Lens​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0016)",
    "Name": "Unspecified Laterality Lens Sequence",
    "Keyword": "Unspecified​Laterality​Lens​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0018)",
    "Name": "Cylinder Sequence",
    "Keyword": "Cylinder​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0028)",
    "Name": "Prism Sequence",
    "Keyword": "Prism​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0030)",
    "Name": "Horizontal Prism Power",
    "Keyword": "Horizontal​Prism​Power",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0032)",
    "Name": "Horizontal Prism Base",
    "Keyword": "Horizontal​Prism​Base",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0034)",
    "Name": "Vertical Prism Power",
    "Keyword": "Vertical​Prism​Power",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0036)",
    "Name": "Vertical Prism Base",
    "Keyword": "Vertical​Prism​Base",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0038)",
    "Name": "Lens Segment Type",
    "Keyword": "Lens​Segment​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0040)",
    "Name": "Optical Transmittance",
    "Keyword": "Optical​Transmittance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0042)",
    "Name": "Channel Width",
    "Keyword": "Channel​Width",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0044)",
    "Name": "Pupil Size",
    "Keyword": "Pupil​Size",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0046)",
    "Name": "Corneal Size",
    "Keyword": "Corneal​Size",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0050)",
    "Name": "Autorefraction Right Eye Sequence",
    "Keyword": "Autorefraction​Right​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0052)",
    "Name": "Autorefraction Left Eye Sequence",
    "Keyword": "Autorefraction​Left​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0060)",
    "Name": "Distance Pupillary Distance",
    "Keyword": "Distance​Pupillary​Distance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0062)",
    "Name": "Near Pupillary Distance",
    "Keyword": "Near​Pupillary​Distance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0063)",
    "Name": "Intermediate Pupillary Distance",
    "Keyword": "Intermediate​Pupillary​Distance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0064)",
    "Name": "Other Pupillary Distance",
    "Keyword": "Other​Pupillary​Distance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0070)",
    "Name": "Keratometry Right Eye Sequence",
    "Keyword": "Keratometry​Right​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0071)",
    "Name": "Keratometry Left Eye Sequence",
    "Keyword": "Keratometry​Left​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0074)",
    "Name": "Steep Keratometric Axis Sequence",
    "Keyword": "Steep​Keratometric​Axis​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0075)",
    "Name": "Radius of Curvature",
    "Keyword": "Radius​OfCurvature",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0076)",
    "Name": "Keratometric Power",
    "Keyword": "Keratometric​Power",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0077)",
    "Name": "Keratometric Axis",
    "Keyword": "Keratometric​Axis",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0080)",
    "Name": "Flat Keratometric Axis Sequence",
    "Keyword": "Flat​Keratometric​Axis​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0092)",
    "Name": "Background Color",
    "Keyword": "Background​Color",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0094)",
    "Name": "Optotype",
    "Keyword": "Optotype",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0095)",
    "Name": "Optotype Presentation",
    "Keyword": "Optotype​Presentation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0097)",
    "Name": "Subjective Refraction Right Eye Sequence",
    "Keyword": "Subjective​Refraction​Right​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0098)",
    "Name": "Subjective Refraction Left Eye Sequence",
    "Keyword": "Subjective​Refraction​Left​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0100)",
    "Name": "Add Near Sequence",
    "Keyword": "Add​Near​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0101)",
    "Name": "Add Intermediate Sequence",
    "Keyword": "Add​Intermediate​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0102)",
    "Name": "Add Other Sequence",
    "Keyword": "Add​Other​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0104)",
    "Name": "Add Power",
    "Keyword": "Add​Power",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0106)",
    "Name": "Viewing Distance",
    "Keyword": "Viewing​Distance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0121)",
    "Name": "Visual Acuity Type Code Sequence",
    "Keyword": "Visual​Acuity​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0122)",
    "Name": "Visual Acuity Right Eye Sequence",
    "Keyword": "Visual​Acuity​Right​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0123)",
    "Name": "Visual Acuity Left Eye Sequence",
    "Keyword": "Visual​Acuity​Left​Eye​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0124)",
    "Name": "Visual Acuity Both Eyes Open Sequence",
    "Keyword": "Visual​Acuity​Both​Eyes​Open​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0125)",
    "Name": "Viewing Distance Type",
    "Keyword": "Viewing​Distance​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0135)",
    "Name": "Visual Acuity Modifiers",
    "Keyword": "Visual​Acuity​Modifiers",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0046,0137)",
    "Name": "Decimal Visual Acuity",
    "Keyword": "Decimal​Visual​Acuity",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0139)",
    "Name": "Optotype Detailed Definition",
    "Keyword": "Optotype​Detailed​Definition",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0145)",
    "Name": "Referenced Refractive Measurements Sequence",
    "Keyword": "Referenced​Refractive​Measurements​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0146)",
    "Name": "Sphere Power",
    "Keyword": "Sphere​Power",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0147)",
    "Name": "Cylinder Power",
    "Keyword": "Cylinder​Power",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0201)",
    "Name": "Corneal Topography Surface",
    "Keyword": "Corneal​Topography​Surface",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0202)",
    "Name": "Corneal Vertex Location",
    "Keyword": "Corneal​Vertex​Location",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0046,0203)",
    "Name": "Pupil Centroid X-Coordinate",
    "Keyword": "Pupil​CentroidX​Coordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0204)",
    "Name": "Pupil Centroid Y-Coordinate",
    "Keyword": "Pupil​CentroidY​Coordinate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0205)",
    "Name": "Equivalent Pupil Radius",
    "Keyword": "Equivalent​Pupil​Radius",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0207)",
    "Name": "Corneal Topography Map Type Code Sequence",
    "Keyword": "Corneal​Topography​Map​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0208)",
    "Name": "Vertices of the Outline of Pupil",
    "Keyword": "Vertices​OfThe​Outline​OfPupil",
    "VR": "IS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(0046,0210)",
    "Name": "Corneal Topography Mapping Normals Sequence",
    "Keyword": "Corneal​Topography​Mapping​Normals​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0211)",
    "Name": "Maximum Corneal Curvature Sequence",
    "Keyword": "Maximum​Corneal​Curvature​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0212)",
    "Name": "Maximum Corneal Curvature",
    "Keyword": "Maximum​Corneal​Curvature",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0213)",
    "Name": "Maximum Corneal Curvature Location",
    "Keyword": "Maximum​Corneal​Curvature​Location",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0046,0215)",
    "Name": "Minimum Keratometric Sequence",
    "Keyword": "Minimum​Keratometric​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0218)",
    "Name": "Simulated Keratometric Cylinder Sequence",
    "Keyword": "Simulated​Keratometric​Cylinder​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0220)",
    "Name": "Average Corneal Power",
    "Keyword": "Average​Corneal​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0224)",
    "Name": "Corneal I-S Value",
    "Keyword": "CornealIS​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0227)",
    "Name": "Analyzed Area",
    "Keyword": "Analyzed​Area",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0230)",
    "Name": "Surface Regularity Index",
    "Keyword": "Surface​Regularity​Index",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0232)",
    "Name": "Surface Asymmetry Index",
    "Keyword": "Surface​Asymmetry​Index",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0234)",
    "Name": "Corneal Eccentricity Index",
    "Keyword": "Corneal​Eccentricity​Index",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0236)",
    "Name": "Keratoconus Prediction Index",
    "Keyword": "Keratoconus​Prediction​Index",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0238)",
    "Name": "Decimal Potential Visual Acuity",
    "Keyword": "Decimal​Potential​Visual​Acuity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0242)",
    "Name": "Corneal Topography Map Quality Evaluation",
    "Keyword": "Corneal​Topography​Map​Quality​Evaluation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0244)",
    "Name": "Source Image Corneal Processed Data Sequence",
    "Keyword": "Source​Image​Corneal​Processed​Data​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0247)",
    "Name": "Corneal Point Location",
    "Keyword": "Corneal​Point​Location",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0046,0248)",
    "Name": "Corneal Point Estimated",
    "Keyword": "Corneal​Point​Estimated",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0249)",
    "Name": "Axial Power",
    "Keyword": "Axial​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0250)",
    "Name": "Tangential Power",
    "Keyword": "Tangential​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0251)",
    "Name": "Refractive Power",
    "Keyword": "Refractive​Power",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0252)",
    "Name": "Relative Elevation",
    "Keyword": "Relative​Elevation",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0046,0253)",
    "Name": "Corneal Wavefront",
    "Keyword": "Corneal​Wavefront",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0001)",
    "Name": "Imaged Volume Width",
    "Keyword": "Imaged​Volume​Width",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0002)",
    "Name": "Imaged Volume Height",
    "Keyword": "Imaged​Volume​Height",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0003)",
    "Name": "Imaged Volume Depth",
    "Keyword": "Imaged​Volume​Depth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0006)",
    "Name": "Total Pixel Matrix Columns",
    "Keyword": "Total​Pixel​Matrix​Columns",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0007)",
    "Name": "Total Pixel Matrix Rows",
    "Keyword": "Total​Pixel​Matrix​Rows",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0008)",
    "Name": "Total Pixel Matrix Origin Sequence",
    "Keyword": "Total​Pixel​Matrix​Origin​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0010)",
    "Name": "Specimen Label in Image",
    "Keyword": "Specimen​Label​InImage",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0011)",
    "Name": "Focus Method",
    "Keyword": "Focus​Method",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0012)",
    "Name": "Extended Depth of Field",
    "Keyword": "Extended​Depth​OfField",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0013)",
    "Name": "Number of Focal Planes",
    "Keyword": "Number​OfFocal​Planes",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0014)",
    "Name": "Distance Between Focal Planes",
    "Keyword": "Distance​Between​Focal​Planes",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0015)",
    "Name": "Recommended Absent Pixel CIE​Lab Value",
    "Keyword": "Recommended​Absent​PixelCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0048,0100)",
    "Name": "Illuminator Type Code Sequence",
    "Keyword": "Illuminator​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0102)",
    "Name": "Image Orientation (Slide)",
    "Keyword": "Image​Orientation​Slide",
    "VR": "DS",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0048,0105)",
    "Name": "Optical Path Sequence",
    "Keyword": "Optical​Path​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0106)",
    "Name": "Optical Path Identifier",
    "Keyword": "Optical​Path​Identifier",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0107)",
    "Name": "Optical Path Description",
    "Keyword": "Optical​Path​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0108)",
    "Name": "Illumination Color Code Sequence",
    "Keyword": "Illumination​Color​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0110)",
    "Name": "Specimen Reference Sequence",
    "Keyword": "Specimen​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0111)",
    "Name": "Condenser Lens Power",
    "Keyword": "Condenser​Lens​Power",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0112)",
    "Name": "Objective Lens Power",
    "Keyword": "Objective​Lens​Power",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0113)",
    "Name": "Objective Lens Numerical Aperture",
    "Keyword": "Objective​Lens​Numerical​Aperture",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0120)",
    "Name": "Palette Color Lookup Table Sequence",
    "Keyword": "Palette​Color​Lookup​Table​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0200)",
    "Name": "Referenced Image Navigation Sequence",
    "Keyword": "Referenced​Image​Navigation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0201)",
    "Name": "Top Left Hand Corner of Localizer Area",
    "Keyword": "Top​Left​Hand​Corner​OfLocalizer​Area",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0048,0202)",
    "Name": "Bottom Right Hand Corner of Localizer Area",
    "Keyword": "Bottom​Right​Hand​Corner​OfLocalizer​Area",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0048,0207)",
    "Name": "Optical Path Identification Sequence",
    "Keyword": "Optical​Path​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,021A)",
    "Name": "Plane Position (Slide) Sequence",
    "Keyword": "Plane​Position​Slide​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,021E)",
    "Name": "Column Position In Total Image Pixel Matrix",
    "Keyword": "Column​Position​InTotal​Image​Pixel​Matrix",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,021F)",
    "Name": "Row Position In Total Image Pixel Matrix",
    "Keyword": "Row​Position​InTotal​Image​Pixel​Matrix",
    "VR": "SL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0048,0301)",
    "Name": "Pixel Origin Interpretation",
    "Keyword": "Pixel​Origin​Interpretation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0004)",
    "Name": "Calibration Image",
    "Keyword": "Calibration​Image",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0010)",
    "Name": "Device Sequence",
    "Keyword": "Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0012)",
    "Name": "Container Component Type Code Sequence",
    "Keyword": "Container​Component​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0013)",
    "Name": "Container Component Thickness",
    "Keyword": "Container​Component​Thickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0014)",
    "Name": "Device Length",
    "Keyword": "Device​Length",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0015)",
    "Name": "Container Component Width",
    "Keyword": "Container​Component​Width",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0016)",
    "Name": "Device Diameter",
    "Keyword": "Device​Diameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0017)",
    "Name": "Device Diameter Units",
    "Keyword": "Device​Diameter​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0018)",
    "Name": "Device Volume",
    "Keyword": "Device​Volume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0019)",
    "Name": "Inter-Marker Distance",
    "Keyword": "Inter​Marker​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001A)",
    "Name": "Container Component Material",
    "Keyword": "Container​Component​Material",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001B)",
    "Name": "Container Component ID",
    "Keyword": "Container​ComponentID",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001C)",
    "Name": "Container Component Length",
    "Keyword": "Container​Component​Length",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001D)",
    "Name": "Container Component Diameter",
    "Keyword": "Container​Component​Diameter",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,001E)",
    "Name": "Container Component Description",
    "Keyword": "Container​Component​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0050,0020)",
    "Name": "Device Description",
    "Keyword": "Device​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0001)",
    "Name": "Contrast/Bolus Ingredient Percent by Volume",
    "Keyword": "Contrast​Bolus​Ingredient​Percent​ByVolume",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0002)",
    "Name": "OCT Focal Distance",
    "Keyword": "OCT​Focal​Distance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0003)",
    "Name": "Beam Spot Size",
    "Keyword": "Beam​Spot​Size",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0004)",
    "Name": "Effective Refractive Index",
    "Keyword": "Effective​Refractive​Index",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0006)",
    "Name": "OCT Acquisition Domain",
    "Keyword": "OCT​Acquisition​Domain",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0007)",
    "Name": "OCT Optical Center Wavelength",
    "Keyword": "OCT​Optical​Center​Wavelength",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0008)",
    "Name": "Axial Resolution",
    "Keyword": "Axial​Resolution",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0009)",
    "Name": "Ranging Depth",
    "Keyword": "Ranging​Depth",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0011)",
    "Name": "A-line Rate",
    "Keyword": "A​Line​Rate",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0012)",
    "Name": "A-lines Per Frame",
    "Keyword": "A​Lines​Per​Frame",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0013)",
    "Name": "Catheter Rotational Rate",
    "Keyword": "Catheter​Rotational​Rate",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0014)",
    "Name": "A-line Pixel Spacing",
    "Keyword": "A​Line​Pixel​Spacing",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0016)",
    "Name": "Mode of Percutaneous Access Sequence",
    "Keyword": "Mode​OfPercutaneous​Access​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0025)",
    "Name": "Intravascular OCT Frame Type Sequence",
    "Keyword": "IntravascularOCT​Frame​Type​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0026)",
    "Name": "OCT Z Offset Applied",
    "Keyword": "OCTZ​Offset​Applied",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0027)",
    "Name": "Intravascular Frame Content Sequence",
    "Keyword": "Intravascular​Frame​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0028)",
    "Name": "Intravascular Longitudinal Distance",
    "Keyword": "Intravascular​Longitudinal​Distance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0029)",
    "Name": "Intravascular OCT Frame Content Sequence",
    "Keyword": "IntravascularOCT​Frame​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0030)",
    "Name": "OCT Z Offset Correction",
    "Keyword": "OCTZ​Offset​Correction",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0031)",
    "Name": "Catheter Direction of Rotation",
    "Keyword": "Catheter​Direction​OfRotation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0033)",
    "Name": "Seam Line Location",
    "Keyword": "Seam​Line​Location",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0034)",
    "Name": "First A-line Location",
    "Keyword": "FirstA​Line​Location",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0036)",
    "Name": "Seam Line Index",
    "Keyword": "Seam​Line​Index",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0038)",
    "Name": "Number of Padded A-lines",
    "Keyword": "Number​Of​Padded​ALines",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,0039)",
    "Name": "Interpolation Type",
    "Keyword": "Interpolation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0052,003A)",
    "Name": "Refractive Index Applied",
    "Keyword": "Refractive​Index​Applied",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0010)",
    "Name": "Energy Window Vector",
    "Keyword": "Energy​Window​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0011)",
    "Name": "Number of Energy Windows",
    "Keyword": "Number​OfEnergy​Windows",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0012)",
    "Name": "Energy Window Information Sequence",
    "Keyword": "Energy​Window​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0013)",
    "Name": "Energy Window Range Sequence",
    "Keyword": "Energy​Window​Range​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0014)",
    "Name": "Energy Window Lower Limit",
    "Keyword": "Energy​Window​Lower​Limit",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0015)",
    "Name": "Energy Window Upper Limit",
    "Keyword": "Energy​Window​Upper​Limit",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0016)",
    "Name": "Radio​pharmaceutical Information Sequence",
    "Keyword": "Radio​pharmaceutical​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0017)",
    "Name": "Residual Syringe Counts",
    "Keyword": "Residual​Syringe​Counts",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0018)",
    "Name": "Energy Window Name",
    "Keyword": "Energy​Window​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0020)",
    "Name": "Detector Vector",
    "Keyword": "Detector​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0021)",
    "Name": "Number of Detectors",
    "Keyword": "Number​OfDetectors",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0022)",
    "Name": "Detector Information Sequence",
    "Keyword": "Detector​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0030)",
    "Name": "Phase Vector",
    "Keyword": "Phase​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0031)",
    "Name": "Number of Phases",
    "Keyword": "Number​OfPhases",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0032)",
    "Name": "Phase Information Sequence",
    "Keyword": "Phase​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0033)",
    "Name": "Number of Frames in Phase",
    "Keyword": "Number​OfFrames​InPhase",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0036)",
    "Name": "Phase Delay",
    "Keyword": "Phase​Delay",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0038)",
    "Name": "Pause Between Frames",
    "Keyword": "Pause​Between​Frames",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0039)",
    "Name": "Phase Description",
    "Keyword": "Phase​Description",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0050)",
    "Name": "Rotation Vector",
    "Keyword": "Rotation​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0051)",
    "Name": "Number of Rotations",
    "Keyword": "Number​OfRotations",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0052)",
    "Name": "Rotation Information Sequence",
    "Keyword": "Rotation​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0053)",
    "Name": "Number of Frames in Rotation",
    "Keyword": "Number​OfFrames​InRotation",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0060)",
    "Name": "R-R Interval Vector",
    "Keyword": "RR​Interval​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0061)",
    "Name": "Number of R-R Intervals",
    "Keyword": "Number​OfRR​Intervals",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0062)",
    "Name": "Gated Information Sequence",
    "Keyword": "Gated​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0063)",
    "Name": "Data Information Sequence",
    "Keyword": "Data​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0070)",
    "Name": "Time Slot Vector",
    "Keyword": "Time​Slot​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0071)",
    "Name": "Number of Time Slots",
    "Keyword": "Number​OfTime​Slots",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0072)",
    "Name": "Time Slot Information Sequence",
    "Keyword": "Time​Slot​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0073)",
    "Name": "Time Slot Time",
    "Keyword": "Time​Slot​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0080)",
    "Name": "Slice Vector",
    "Keyword": "Slice​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0081)",
    "Name": "Number of Slices",
    "Keyword": "Number​OfSlices",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0090)",
    "Name": "Angular View Vector",
    "Keyword": "Angular​View​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0100)",
    "Name": "Time Slice Vector",
    "Keyword": "Time​Slice​Vector",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0101)",
    "Name": "Number of Time Slices",
    "Keyword": "Number​OfTime​Slices",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0200)",
    "Name": "Start Angle",
    "Keyword": "Start​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0202)",
    "Name": "Type of Detector Motion",
    "Keyword": "Type​OfDetector​Motion",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0210)",
    "Name": "Trigger Vector",
    "Keyword": "Trigger​Vector",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,0211)",
    "Name": "Number of Triggers in Phase",
    "Keyword": "Number​OfTriggers​InPhase",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0220)",
    "Name": "View Code Sequence",
    "Keyword": "View​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0222)",
    "Name": "View Modifier Code Sequence",
    "Keyword": "View​Modifier​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0300)",
    "Name": "Radionuclide Code Sequence",
    "Keyword": "Radionuclide​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0302)",
    "Name": "Administration Route Code Sequence",
    "Keyword": "Administration​Route​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0304)",
    "Name": "Radio​pharmaceutical Code Sequence",
    "Keyword": "Radio​pharmaceutical​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0306)",
    "Name": "Calibration Data Sequence",
    "Keyword": "Calibration​Data​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0308)",
    "Name": "Energy Window Number",
    "Keyword": "Energy​Window​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0400)",
    "Name": "Image ID",
    "Keyword": "ImageID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0410)",
    "Name": "Patient Orientation Code Sequence",
    "Keyword": "Patient​Orientation​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0412)",
    "Name": "Patient Orientation Modifier Code Sequence",
    "Keyword": "Patient​Orientation​Modifier​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0414)",
    "Name": "Patient Gantry Relationship Code Sequence",
    "Keyword": "Patient​Gantry​Relationship​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,0500)",
    "Name": "Slice Progression Direction",
    "Keyword": "Slice​Progression​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1000)",
    "Name": "Series Type",
    "Keyword": "Series​Type",
    "VR": "CS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0054,1001)",
    "Name": "Units",
    "Keyword": "Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1002)",
    "Name": "Counts Source",
    "Keyword": "Counts​Source",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1004)",
    "Name": "Reprojection Method",
    "Keyword": "Reprojection​Method",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1006)",
    "Name": "SUV Type",
    "Keyword": "SUV​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1100)",
    "Name": "Randoms Correction Method",
    "Keyword": "Randoms​Correction​Method",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1101)",
    "Name": "Attenuation Correction Method",
    "Keyword": "Attenuation​Correction​Method",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1102)",
    "Name": "Decay Correction",
    "Keyword": "Decay​Correction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1103)",
    "Name": "Reconstruction Method",
    "Keyword": "Reconstruction​Method",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1104)",
    "Name": "Detector Lines of Response Used",
    "Keyword": "Detector​Lines​OfResponse​Used",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1105)",
    "Name": "Scatter Correction Method",
    "Keyword": "Scatter​Correction​Method",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1200)",
    "Name": "Axial Acceptance",
    "Keyword": "Axial​Acceptance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1201)",
    "Name": "Axial Mash",
    "Keyword": "Axial​Mash",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0054,1202)",
    "Name": "Transverse Mash",
    "Keyword": "Transverse​Mash",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1203)",
    "Name": "Detector Element Size",
    "Keyword": "Detector​Element​Size",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0054,1210)",
    "Name": "Coincidence Window Width",
    "Keyword": "Coincidence​Window​Width",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1220)",
    "Name": "Secondary Counts Type",
    "Keyword": "Secondary​Counts​Type",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,1300)",
    "Name": "Frame Reference Time",
    "Keyword": "Frame​Reference​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1310)",
    "Name": "Primary (Prompts) Counts Accumulated",
    "Keyword": "Primary​Prompts​Counts​Accumulated",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1311)",
    "Name": "Secondary Counts Accumulated",
    "Keyword": "Secondary​Counts​Accumulated",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0054,1320)",
    "Name": "Slice Sensitivity Factor",
    "Keyword": "Slice​Sensitivity​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1321)",
    "Name": "Decay Factor",
    "Keyword": "Decay​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1322)",
    "Name": "Dose Calibration Factor",
    "Keyword": "Dose​Calibration​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1323)",
    "Name": "Scatter Fraction Factor",
    "Keyword": "Scatter​Fraction​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1324)",
    "Name": "Dead Time Factor",
    "Keyword": "Dead​Time​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1330)",
    "Name": "Image Index",
    "Keyword": "Image​Index",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0054,1400)",
    "Name": "Counts Included",
    "Keyword": "Counts​Included",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(0054,1401)",
    "Name": "Dead Time Correction Flag",
    "Keyword": "Dead​Time​Correction​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0060,3000)",
    "Name": "Histogram Sequence",
    "Keyword": "Histogram​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3002)",
    "Name": "Histogram Number of Bins",
    "Keyword": "Histogram​Number​OfBins",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3004)",
    "Name": "Histogram First Bin Value",
    "Keyword": "Histogram​First​Bin​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3006)",
    "Name": "Histogram Last Bin Value",
    "Keyword": "Histogram​Last​Bin​Value",
    "VR": "US or SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3008)",
    "Name": "Histogram Bin Width",
    "Keyword": "Histogram​Bin​Width",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3010)",
    "Name": "Histogram Explanation",
    "Keyword": "Histogram​Explanation",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0060,3020)",
    "Name": "Histogram Data",
    "Keyword": "Histogram​Data",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0062,0001)",
    "Name": "Segmentation Type",
    "Keyword": "Segmentation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0002)",
    "Name": "Segment Sequence",
    "Keyword": "Segment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0003)",
    "Name": "Segmented Property Category Code Sequence",
    "Keyword": "Segmented​Property​Category​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0004)",
    "Name": "Segment Number",
    "Keyword": "Segment​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0005)",
    "Name": "Segment Label",
    "Keyword": "Segment​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0006)",
    "Name": "Segment Description",
    "Keyword": "Segment​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0008)",
    "Name": "Segment Algorithm Type",
    "Keyword": "Segment​Algorithm​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0009)",
    "Name": "Segment Algorithm Name",
    "Keyword": "Segment​Algorithm​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000A)",
    "Name": "Segment Identification Sequence",
    "Keyword": "Segment​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000B)",
    "Name": "Referenced Segment Number",
    "Keyword": "Referenced​Segment​Number",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0062,000C)",
    "Name": "Recommended Display Grayscale Value",
    "Keyword": "Recommended​Display​Grayscale​Value",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000D)",
    "Name": "Recommended Display CIE​Lab Value",
    "Keyword": "Recommended​DisplayCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0062,000E)",
    "Name": "Maximum Fractional Value",
    "Keyword": "Maximum​Fractional​Value",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,000F)",
    "Name": "Segmented Property Type Code Sequence",
    "Keyword": "Segmented​Property​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0010)",
    "Name": "Segmentation Fractional Type",
    "Keyword": "Segmentation​Fractional​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0011)",
    "Name": "Segmented Property Type Modifier Code Sequence",
    "Keyword": "Segmented​Property​Type​Modifier​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0062,0012)",
    "Name": "Used Segments Sequence",
    "Keyword": "Used​Segments​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0002)",
    "Name": "Deformable Registration Sequence",
    "Keyword": "Deformable​Registration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0003)",
    "Name": "Source Frame of Reference UID",
    "Keyword": "Source​Frame​OfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0005)",
    "Name": "Deformable Registration Grid Sequence",
    "Keyword": "Deformable​Registration​Grid​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0007)",
    "Name": "Grid Dimensions",
    "Keyword": "Grid​Dimensions",
    "VR": "UL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0064,0008)",
    "Name": "Grid Resolution",
    "Keyword": "Grid​Resolution",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0064,0009)",
    "Name": "Vector Grid Data",
    "Keyword": "Vector​Grid​Data",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,000F)",
    "Name": "Pre Deformation Matrix Registration Sequence",
    "Keyword": "Pre​Deformation​Matrix​Registration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0064,0010)",
    "Name": "Post Deformation Matrix Registration Sequence",
    "Keyword": "Post​Deformation​Matrix​Registration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0001)",
    "Name": "Number of Surfaces",
    "Keyword": "Number​OfSurfaces",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0002)",
    "Name": "Surface Sequence",
    "Keyword": "Surface​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0003)",
    "Name": "Surface Number",
    "Keyword": "Surface​Number",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0004)",
    "Name": "Surface Comments",
    "Keyword": "Surface​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0009)",
    "Name": "Surface Processing",
    "Keyword": "Surface​Processing",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000A)",
    "Name": "Surface Processing Ratio",
    "Keyword": "Surface​Processing​Ratio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000B)",
    "Name": "Surface Processing Description",
    "Keyword": "Surface​Processing​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000C)",
    "Name": "Recommended Presentation Opacity",
    "Keyword": "Recommended​Presentation​Opacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000D)",
    "Name": "Recommended Presentation Type",
    "Keyword": "Recommended​Presentation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,000E)",
    "Name": "Finite Volume",
    "Keyword": "Finite​Volume",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0010)",
    "Name": "Manifold",
    "Keyword": "Manifold",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0011)",
    "Name": "Surface Points Sequence",
    "Keyword": "Surface​Points​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0012)",
    "Name": "Surface Points Normals Sequence",
    "Keyword": "Surface​Points​Normals​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0013)",
    "Name": "Surface Mesh Primitives Sequence",
    "Keyword": "Surface​Mesh​Primitives​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0015)",
    "Name": "Number of Surface Points",
    "Keyword": "Number​OfSurface​Points",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0016)",
    "Name": "Point Coordinates Data",
    "Keyword": "Point​Coordinates​Data",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0017)",
    "Name": "Point Position Accuracy",
    "Keyword": "Point​Position​Accuracy",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0066,0018)",
    "Name": "Mean Point Distance",
    "Keyword": "Mean​Point​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0019)",
    "Name": "Maximum Point Distance",
    "Keyword": "Maximum​Point​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,001A)",
    "Name": "Points Bounding Box Coordinates",
    "Keyword": "Points​Bounding​Box​Coordinates",
    "VR": "FL",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0066,001B)",
    "Name": "Axis of Rotation",
    "Keyword": "Axis​OfRotation",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0066,001C)",
    "Name": "Center of Rotation",
    "Keyword": "Center​OfRotation",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0066,001E)",
    "Name": "Number of Vectors",
    "Keyword": "Number​OfVectors",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,001F)",
    "Name": "Vector Dimensionality",
    "Keyword": "Vector​Dimensionality",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0020)",
    "Name": "Vector Accuracy",
    "Keyword": "Vector​Accuracy",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0066,0021)",
    "Name": "Vector Coordinate Data",
    "Keyword": "Vector​Coordinate​Data",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0023)",
    "Name": "Triangle Point Index List",
    "Keyword": "Triangle​Point​Index​List",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0024)",
    "Name": "Edge Point Index List",
    "Keyword": "Edge​Point​Index​List",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0025)",
    "Name": "Vertex Point Index List",
    "Keyword": "Vertex​Point​Index​List",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0026)",
    "Name": "Triangle Strip Sequence",
    "Keyword": "Triangle​Strip​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0027)",
    "Name": "Triangle Fan Sequence",
    "Keyword": "Triangle​Fan​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0028)",
    "Name": "Line Sequence",
    "Keyword": "Line​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0029)",
    "Name": "Primitive Point Index List",
    "Keyword": "Primitive​Point​Index​List",
    "VR": "OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002A)",
    "Name": "Surface Count",
    "Keyword": "Surface​Count",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002B)",
    "Name": "Referenced Surface Sequence",
    "Keyword": "Referenced​Surface​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002C)",
    "Name": "Referenced Surface Number",
    "Keyword": "Referenced​Surface​Number",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002D)",
    "Name": "Segment Surface Generation Algorithm Identification Sequence",
    "Keyword": "Segment​Surface​Generation​Algorithm​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002E)",
    "Name": "Segment Surface Source Instance Sequence",
    "Keyword": "Segment​Surface​Source​Instance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,002F)",
    "Name": "Algorithm Family Code Sequence",
    "Keyword": "Algorithm​Family​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0030)",
    "Name": "Algorithm Name Code Sequence",
    "Keyword": "Algorithm​Name​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0031)",
    "Name": "Algorithm Version",
    "Keyword": "Algorithm​Version",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0032)",
    "Name": "Algorithm Parameters",
    "Keyword": "Algorithm​Parameters",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0034)",
    "Name": "Facet Sequence",
    "Keyword": "Facet​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0035)",
    "Name": "Surface Processing Algorithm Identification Sequence",
    "Keyword": "Surface​Processing​Algorithm​Identification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0036)",
    "Name": "Algorithm Name",
    "Keyword": "Algorithm​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0037)",
    "Name": "Recommended Point Radius",
    "Keyword": "Recommended​Point​Radius",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0066,0038)",
    "Name": "Recommended Line Thickness",
    "Keyword": "Recommended​Line​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6210)",
    "Name": "Implant Size",
    "Keyword": "Implant​Size",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6221)",
    "Name": "Implant Template Version",
    "Keyword": "Implant​Template​Version",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6222)",
    "Name": "Replaced Implant Template Sequence",
    "Keyword": "Replaced​Implant​Template​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6223)",
    "Name": "Implant Type",
    "Keyword": "Implant​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6224)",
    "Name": "Derivation Implant Template Sequence",
    "Keyword": "Derivation​Implant​Template​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6225)",
    "Name": "Original Implant Template Sequence",
    "Keyword": "Original​Implant​Template​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6226)",
    "Name": "Effective DateTime",
    "Keyword": "Effective​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6230)",
    "Name": "Implant Target Anatomy Sequence",
    "Keyword": "Implant​Target​Anatomy​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6260)",
    "Name": "Information From Manufacturer Sequence",
    "Keyword": "Information​From​Manufacturer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6265)",
    "Name": "Notification From Manufacturer Sequence",
    "Keyword": "Notification​From​Manufacturer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6270)",
    "Name": "Information Issue DateTime",
    "Keyword": "Information​Issue​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6280)",
    "Name": "Information Summary",
    "Keyword": "Information​Summary",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62A0)",
    "Name": "Implant Regulatory Disapproval Code Sequence",
    "Keyword": "Implant​Regulatory​Disapproval​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62A5)",
    "Name": "Overall Template Spatial Tolerance",
    "Keyword": "Overall​Template​Spatial​Tolerance",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62C0)",
    "Name": "HPGL Document Sequence",
    "Keyword": "HPGL​Document​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62D0)",
    "Name": "HPGL Document ID",
    "Keyword": "HPGL​DocumentID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62D5)",
    "Name": "HPGL Document Label",
    "Keyword": "HPGL​Document​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62E0)",
    "Name": "View Orientation Code Sequence",
    "Keyword": "View​Orientation​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,62F0)",
    "Name": "View Orientation Modifier",
    "Keyword": "View​Orientation​Modifier",
    "VR": "FD",
    "VM": "9",
    "Retired": ""
  },
  {
    "Tag": "(0068,62F2)",
    "Name": "HPGL Document Scaling",
    "Keyword": "HPGL​Document​Scaling",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6300)",
    "Name": "HPGL Document",
    "Keyword": "HPGL​Document",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6310)",
    "Name": "HPGL Contour Pen Number",
    "Keyword": "HPGL​Contour​Pen​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6320)",
    "Name": "HPGL Pen Sequence",
    "Keyword": "HPGL​Pen​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6330)",
    "Name": "HPGL Pen Number",
    "Keyword": "HPGL​Pen​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6340)",
    "Name": "HPGL Pen Label",
    "Keyword": "HPGL​Pen​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6345)",
    "Name": "HPGL Pen Description",
    "Keyword": "HPGL​Pen​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6346)",
    "Name": "Recommended Rotation Point",
    "Keyword": "Recommended​Rotation​Point",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,6347)",
    "Name": "Bounding Rectangle",
    "Keyword": "Bounding​Rectangle",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,6350)",
    "Name": "Implant Template 3D Model Surface Number",
    "Keyword": "Implant​Template3D​Model​Surface​Number",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0068,6360)",
    "Name": "Surface Model Description Sequence",
    "Keyword": "Surface​Model​Description​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6380)",
    "Name": "Surface Model Label",
    "Keyword": "Surface​Model​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6390)",
    "Name": "Surface Model Scaling Factor",
    "Keyword": "Surface​Model​Scaling​Factor",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63A0)",
    "Name": "Materials Code Sequence",
    "Keyword": "Materials​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63A4)",
    "Name": "Coating Materials Code Sequence",
    "Keyword": "Coating​Materials​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63A8)",
    "Name": "Implant Type Code Sequence",
    "Keyword": "Implant​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63AC)",
    "Name": "Fixation Method Code Sequence",
    "Keyword": "Fixation​Method​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63B0)",
    "Name": "Mating Feature Sets Sequence",
    "Keyword": "Mating​Feature​Sets​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63C0)",
    "Name": "Mating Feature Set ID",
    "Keyword": "Mating​Feature​SetID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63D0)",
    "Name": "Mating Feature Set Label",
    "Keyword": "Mating​Feature​Set​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63E0)",
    "Name": "Mating Feature Sequence",
    "Keyword": "Mating​Feature​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,63F0)",
    "Name": "Mating Feature ID",
    "Keyword": "Mating​FeatureID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6400)",
    "Name": "Mating Feature Degree of Freedom Sequence",
    "Keyword": "Mating​Feature​Degree​OfFreedom​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6410)",
    "Name": "Degree of Freedom ID",
    "Keyword": "Degree​OfFreedomID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6420)",
    "Name": "Degree of Freedom Type",
    "Keyword": "Degree​OfFreedom​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6430)",
    "Name": "2D Mating Feature Coordinates Sequence",
    "Keyword": "TwoD​Mating​Feature​Coordinates​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6440)",
    "Name": "Referenced HPGL Document ID",
    "Keyword": "ReferencedHPGL​DocumentID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6450)",
    "Name": "2D Mating Point",
    "Keyword": "TwoD​Mating​Point",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,6460)",
    "Name": "2D Mating Axes",
    "Keyword": "TwoD​Mating​Axes",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,6470)",
    "Name": "2D Degree of Freedom Sequence",
    "Keyword": "TwoD​Degree​OfFreedom​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6490)",
    "Name": "3D Degree of Freedom Axis",
    "Keyword": "ThreeD​Degree​OfFreedom​Axis",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,64A0)",
    "Name": "Range of Freedom",
    "Keyword": "Range​OfFreedom",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,64C0)",
    "Name": "3D Mating Point",
    "Keyword": "ThreeD​Mating​Point",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,64D0)",
    "Name": "3D Mating Axes",
    "Keyword": "ThreeD​Mating​Axes",
    "VR": "FD",
    "VM": "9",
    "Retired": ""
  },
  {
    "Tag": "(0068,64F0)",
    "Name": "2D Degree of Freedom Axis",
    "Keyword": "TwoD​Degree​OfFreedom​Axis",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,6500)",
    "Name": "Planning Landmark Point Sequence",
    "Keyword": "Planning​Landmark​Point​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6510)",
    "Name": "Planning Landmark Line Sequence",
    "Keyword": "Planning​Landmark​Line​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6520)",
    "Name": "Planning Landmark Plane Sequence",
    "Keyword": "Planning​Landmark​Plane​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6530)",
    "Name": "Planning Landmark ID",
    "Keyword": "Planning​LandmarkID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6540)",
    "Name": "Planning Landmark Description",
    "Keyword": "Planning​Landmark​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6545)",
    "Name": "Planning Landmark Identification Code Sequence",
    "Keyword": "Planning​Landmark​Identification​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6550)",
    "Name": "2D Point Coordinates Sequence",
    "Keyword": "TwoD​Point​Coordinates​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,6560)",
    "Name": "2D Point Coordinates",
    "Keyword": "TwoD​Point​Coordinates",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0068,6590)",
    "Name": "3D Point Coordinates",
    "Keyword": "ThreeD​Point​Coordinates",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,65A0)",
    "Name": "2D Line Coordinates Sequence",
    "Keyword": "TwoD​Line​Coordinates​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,65B0)",
    "Name": "2D Line Coordinates",
    "Keyword": "TwoD​Line​Coordinates",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,65D0)",
    "Name": "3D Line Coordinates",
    "Keyword": "ThreeD​Line​Coordinates",
    "VR": "FD",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(0068,65E0)",
    "Name": "2D Plane Coordinates Sequence",
    "Keyword": "TwoD​Plane​Coordinates​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0068,65F0)",
    "Name": "2D Plane Intersection",
    "Keyword": "TwoD​Plane​Intersection",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0068,6610)",
    "Name": "3D Plane Origin",
    "Keyword": "ThreeD​Plane​Origin",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0068,6620)",
    "Name": "3D Plane Normal",
    "Keyword": "ThreeD​Plane​Normal",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0001)",
    "Name": "Graphic Annotation Sequence",
    "Keyword": "Graphic​Annotation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0002)",
    "Name": "Graphic Layer",
    "Keyword": "Graphic​Layer",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0003)",
    "Name": "Bounding Box Annotation Units",
    "Keyword": "Bounding​Box​Annotation​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0004)",
    "Name": "Anchor Point Annotation Units",
    "Keyword": "Anchor​Point​Annotation​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0005)",
    "Name": "Graphic Annotation Units",
    "Keyword": "Graphic​Annotation​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0006)",
    "Name": "Unformatted Text Value",
    "Keyword": "Unformatted​Text​Value",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0008)",
    "Name": "Text Object Sequence",
    "Keyword": "Text​Object​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0009)",
    "Name": "Graphic Object Sequence",
    "Keyword": "Graphic​Object​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0010)",
    "Name": "Bounding Box Top Left Hand Corner",
    "Keyword": "Bounding​Box​Top​Left​Hand​Corner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0011)",
    "Name": "Bounding Box Bottom Right Hand Corner",
    "Keyword": "Bounding​Box​Bottom​Right​Hand​Corner",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0012)",
    "Name": "Bounding Box Text Horizontal Justification",
    "Keyword": "Bounding​Box​Text​Horizontal​Justification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0014)",
    "Name": "Anchor Point",
    "Keyword": "Anchor​Point",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0015)",
    "Name": "Anchor Point Visibility",
    "Keyword": "Anchor​Point​Visibility",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0020)",
    "Name": "Graphic Dimensions",
    "Keyword": "Graphic​Dimensions",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0021)",
    "Name": "Number of Graphic Points",
    "Keyword": "Number​OfGraphic​Points",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0022)",
    "Name": "Graphic Data",
    "Keyword": "Graphic​Data",
    "VR": "FL",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0070,0023)",
    "Name": "Graphic Type",
    "Keyword": "Graphic​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0024)",
    "Name": "Graphic Filled",
    "Keyword": "Graphic​Filled",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0040)",
    "Name": "Image Rotation (Retired)",
    "Keyword": "Image​Rotation​Retired",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0041)",
    "Name": "Image Horizontal Flip",
    "Keyword": "Image​Horizontal​Flip",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0042)",
    "Name": "Image Rotation",
    "Keyword": "Image​Rotation",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0050)",
    "Name": "Displayed Area Top Left Hand Corner (Trial)",
    "Keyword": "Displayed​Area​Top​Left​Hand​Corner​Trial",
    "VR": "US",
    "VM": "2",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0051)",
    "Name": "Displayed Area Bottom Right Hand Corner (Trial)",
    "Keyword": "Displayed​Area​Bottom​Right​Hand​Corner​Trial",
    "VR": "US",
    "VM": "2",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0052)",
    "Name": "Displayed Area Top Left Hand Corner",
    "Keyword": "Displayed​Area​Top​Left​Hand​Corner",
    "VR": "SL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0053)",
    "Name": "Displayed Area Bottom Right Hand Corner",
    "Keyword": "Displayed​Area​Bottom​Right​Hand​Corner",
    "VR": "SL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,005A)",
    "Name": "Displayed Area Selection Sequence",
    "Keyword": "Displayed​Area​Selection​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0060)",
    "Name": "Graphic Layer Sequence",
    "Keyword": "Graphic​Layer​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0062)",
    "Name": "Graphic Layer Order",
    "Keyword": "Graphic​Layer​Order",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0066)",
    "Name": "Graphic Layer Recommended Display Grayscale Value",
    "Keyword": "Graphic​Layer​Recommended​Display​Grayscale​Value",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0067)",
    "Name": "Graphic Layer Recommended Display RGB Value",
    "Keyword": "Graphic​Layer​Recommended​DisplayRGB​Value",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(0070,0068)",
    "Name": "Graphic Layer Description",
    "Keyword": "Graphic​Layer​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0080)",
    "Name": "Content Label",
    "Keyword": "Content​Label",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0081)",
    "Name": "Content Description",
    "Keyword": "Content​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0082)",
    "Name": "Presentation Creation Date",
    "Keyword": "Presentation​Creation​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0083)",
    "Name": "Presentation Creation Time",
    "Keyword": "Presentation​Creation​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0084)",
    "Name": "Content Creator's Name",
    "Keyword": "Content​Creator​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0086)",
    "Name": "Content Creator's Identification Code Sequence",
    "Keyword": "Content​Creator​Identification​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0087)",
    "Name": "Alternate Content Description Sequence",
    "Keyword": "Alternate​Content​Description​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0100)",
    "Name": "Presentation Size Mode",
    "Keyword": "Presentation​Size​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0101)",
    "Name": "Presentation Pixel Spacing",
    "Keyword": "Presentation​Pixel​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0102)",
    "Name": "Presentation Pixel Aspect Ratio",
    "Keyword": "Presentation​Pixel​Aspect​Ratio",
    "VR": "IS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0103)",
    "Name": "Presentation Pixel Magnification Ratio",
    "Keyword": "Presentation​Pixel​Magnification​Ratio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0207)",
    "Name": "Graphic Group Label",
    "Keyword": "Graphic​Group​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0208)",
    "Name": "Graphic Group Description",
    "Keyword": "Graphic​Group​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0209)",
    "Name": "Compound Graphic Sequence",
    "Keyword": "Compound​Graphic​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0226)",
    "Name": "Compound Graphic Instance ID",
    "Keyword": "Compound​Graphic​InstanceID",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0227)",
    "Name": "Font Name",
    "Keyword": "Font​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0228)",
    "Name": "Font Name Type",
    "Keyword": "Font​Name​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0229)",
    "Name": "CSS Font Name",
    "Keyword": "CSS​Font​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0230)",
    "Name": "Rotation Angle",
    "Keyword": "Rotation​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0231)",
    "Name": "Text Style Sequence",
    "Keyword": "Text​Style​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0232)",
    "Name": "Line Style Sequence",
    "Keyword": "Line​Style​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0233)",
    "Name": "Fill Style Sequence",
    "Keyword": "Fill​Style​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0234)",
    "Name": "Graphic Group Sequence",
    "Keyword": "Graphic​Group​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0241)",
    "Name": "Text Color CIE​Lab Value",
    "Keyword": "Text​ColorCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0242)",
    "Name": "Horizontal Alignment",
    "Keyword": "Horizontal​Alignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0243)",
    "Name": "Vertical Alignment",
    "Keyword": "Vertical​Alignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0244)",
    "Name": "Shadow Style",
    "Keyword": "Shadow​Style",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0245)",
    "Name": "Shadow Offset X",
    "Keyword": "Shadow​OffsetX",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0246)",
    "Name": "Shadow Offset Y",
    "Keyword": "Shadow​OffsetY",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0247)",
    "Name": "Shadow Color CIE​Lab Value",
    "Keyword": "Shadow​ColorCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0248)",
    "Name": "Underlined",
    "Keyword": "Underlined",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0249)",
    "Name": "Bold",
    "Keyword": "Bold",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0250)",
    "Name": "Italic",
    "Keyword": "Italic",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0251)",
    "Name": "Pattern On Color CIE​Lab Value",
    "Keyword": "Pattern​OnColorCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0252)",
    "Name": "Pattern Off Color CIE​Lab Value",
    "Keyword": "Pattern​Off​ColorCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0253)",
    "Name": "Line Thickness",
    "Keyword": "Line​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0254)",
    "Name": "Line Dashing Style",
    "Keyword": "Line​Dashing​Style",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0255)",
    "Name": "Line Pattern",
    "Keyword": "Line​Pattern",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0256)",
    "Name": "Fill Pattern",
    "Keyword": "Fill​Pattern",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0257)",
    "Name": "Fill Mode",
    "Keyword": "Fill​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0258)",
    "Name": "Shadow Opacity",
    "Keyword": "Shadow​Opacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0261)",
    "Name": "Gap Length",
    "Keyword": "Gap​Length",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0262)",
    "Name": "Diameter of Visibility",
    "Keyword": "Diameter​OfVisibility",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0273)",
    "Name": "Rotation Point",
    "Keyword": "Rotation​Point",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0070,0274)",
    "Name": "Tick Alignment",
    "Keyword": "Tick​Alignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0278)",
    "Name": "Show Tick Label",
    "Keyword": "Show​Tick​Label",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0279)",
    "Name": "Tick Label Alignment",
    "Keyword": "Tick​Label​Alignment",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0282)",
    "Name": "Compound Graphic Units",
    "Keyword": "Compound​Graphic​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0284)",
    "Name": "Pattern On Opacity",
    "Keyword": "Pattern​OnOpacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0285)",
    "Name": "Pattern Off Opacity",
    "Keyword": "Pattern​Off​Opacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0287)",
    "Name": "Major Ticks Sequence",
    "Keyword": "Major​Ticks​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0288)",
    "Name": "Tick Position",
    "Keyword": "Tick​Position",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0289)",
    "Name": "Tick Label",
    "Keyword": "Tick​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0294)",
    "Name": "Compound Graphic Type",
    "Keyword": "Compound​Graphic​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0295)",
    "Name": "Graphic Group ID",
    "Keyword": "Graphic​GroupID",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0306)",
    "Name": "Shape Type",
    "Keyword": "Shape​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0308)",
    "Name": "Registration Sequence",
    "Keyword": "Registration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0309)",
    "Name": "Matrix Registration Sequence",
    "Keyword": "Matrix​Registration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030A)",
    "Name": "Matrix Sequence",
    "Keyword": "Matrix​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030C)",
    "Name": "Frame of Reference Transformation Matrix Type",
    "Keyword": "Frame​OfReference​Transformation​Matrix​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030D)",
    "Name": "Registration Type Code Sequence",
    "Keyword": "Registration​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,030F)",
    "Name": "Fiducial Description",
    "Keyword": "Fiducial​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0310)",
    "Name": "Fiducial Identifier",
    "Keyword": "Fiducial​Identifier",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0311)",
    "Name": "Fiducial Identifier Code Sequence",
    "Keyword": "Fiducial​Identifier​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0312)",
    "Name": "Contour Uncertainty Radius",
    "Keyword": "Contour​Uncertainty​Radius",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0314)",
    "Name": "Used Fiducials Sequence",
    "Keyword": "Used​Fiducials​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0318)",
    "Name": "Graphic Coordinates Data Sequence",
    "Keyword": "Graphic​Coordinates​Data​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,031A)",
    "Name": "Fiducial UID",
    "Keyword": "FiducialUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,031C)",
    "Name": "Fiducial Set Sequence",
    "Keyword": "Fiducial​Set​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,031E)",
    "Name": "Fiducial Sequence",
    "Keyword": "Fiducial​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0401)",
    "Name": "Graphic Layer Recommended Display CIE​Lab Value",
    "Keyword": "Graphic​Layer​Recommended​DisplayCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0070,0402)",
    "Name": "Blending Sequence",
    "Keyword": "Blending​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0403)",
    "Name": "Relative Opacity",
    "Keyword": "Relative​Opacity",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0404)",
    "Name": "Referenced Spatial Registration Sequence",
    "Keyword": "Referenced​Spatial​Registration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0070,0405)",
    "Name": "Blending Position",
    "Keyword": "Blending​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0002)",
    "Name": "Hanging Protocol Name",
    "Keyword": "Hanging​Protocol​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0004)",
    "Name": "Hanging Protocol Description",
    "Keyword": "Hanging​Protocol​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0006)",
    "Name": "Hanging Protocol Level",
    "Keyword": "Hanging​Protocol​Level",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0008)",
    "Name": "Hanging Protocol Creator",
    "Keyword": "Hanging​Protocol​Creator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,000A)",
    "Name": "Hanging Protocol Creation DateTime",
    "Keyword": "Hanging​Protocol​Creation​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,000C)",
    "Name": "Hanging Protocol Definition Sequence",
    "Keyword": "Hanging​Protocol​Definition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,000E)",
    "Name": "Hanging Protocol User Identification Code Sequence",
    "Keyword": "Hanging​Protocol​User​Identification​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0010)",
    "Name": "Hanging Protocol User Group Name",
    "Keyword": "Hanging​Protocol​User​Group​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0012)",
    "Name": "Source Hanging Protocol Sequence",
    "Keyword": "Source​Hanging​Protocol​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0014)",
    "Name": "Number of Priors Referenced",
    "Keyword": "Number​OfPriors​Referenced",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0020)",
    "Name": "Image Sets Sequence",
    "Keyword": "Image​Sets​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0022)",
    "Name": "Image Set Selector Sequence",
    "Keyword": "Image​Set​Selector​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0024)",
    "Name": "Image Set Selector Usage Flag",
    "Keyword": "Image​Set​Selector​Usage​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0026)",
    "Name": "Selector Attribute",
    "Keyword": "Selector​Attribute",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0028)",
    "Name": "Selector Value Number",
    "Keyword": "Selector​Value​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0030)",
    "Name": "Time Based Image Sets Sequence",
    "Keyword": "Time​Based​Image​Sets​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0032)",
    "Name": "Image Set Number",
    "Keyword": "Image​Set​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0034)",
    "Name": "Image Set Selector Category",
    "Keyword": "Image​Set​Selector​Category",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0038)",
    "Name": "Relative Time",
    "Keyword": "Relative​Time",
    "VR": "US",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0072,003A)",
    "Name": "Relative Time Units",
    "Keyword": "Relative​Time​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,003C)",
    "Name": "Abstract Prior Value",
    "Keyword": "Abstract​Prior​Value",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0072,003E)",
    "Name": "Abstract Prior Code Sequence",
    "Keyword": "Abstract​Prior​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0040)",
    "Name": "Image Set Label",
    "Keyword": "Image​Set​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0050)",
    "Name": "Selector Attribute VR",
    "Keyword": "Selector​AttributeVR",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0052)",
    "Name": "Selector Sequence Pointer",
    "Keyword": "Selector​Sequence​Pointer",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0054)",
    "Name": "Selector Sequence Pointer Private Creator",
    "Keyword": "Selector​Sequence​Pointer​Private​Creator",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0056)",
    "Name": "Selector Attribute Private Creator",
    "Keyword": "Selector​Attribute​Private​Creator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0060)",
    "Name": "Selector AT Value",
    "Keyword": "SelectorAT​Value",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0062)",
    "Name": "Selector CS Value",
    "Keyword": "SelectorCS​Value",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0064)",
    "Name": "Selector IS Value",
    "Keyword": "SelectorIS​Value",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0066)",
    "Name": "Selector LO Value",
    "Keyword": "SelectorLO​Value",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0068)",
    "Name": "Selector LT Value",
    "Keyword": "SelectorLT​Value",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,006A)",
    "Name": "Selector PN Value",
    "Keyword": "SelectorPN​Value",
    "VR": "PN",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,006C)",
    "Name": "Selector SH Value",
    "Keyword": "SelectorSH​Value",
    "VR": "SH",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,006E)",
    "Name": "Selector ST Value",
    "Keyword": "SelectorST​Value",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0070)",
    "Name": "Selector UT Value",
    "Keyword": "SelectorUT​Value",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0072)",
    "Name": "Selector DS Value",
    "Keyword": "SelectorDS​Value",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0074)",
    "Name": "Selector FD Value",
    "Keyword": "SelectorFD​Value",
    "VR": "FD",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0076)",
    "Name": "Selector FL Value",
    "Keyword": "SelectorFL​Value",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0078)",
    "Name": "Selector UL Value",
    "Keyword": "SelectorUL​Value",
    "VR": "UL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,007A)",
    "Name": "Selector US Value",
    "Keyword": "SelectorUS​Value",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,007C)",
    "Name": "Selector SL Value",
    "Keyword": "SelectorSL​Value",
    "VR": "SL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,007E)",
    "Name": "Selector SS Value",
    "Keyword": "SelectorSS​Value",
    "VR": "SS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0080)",
    "Name": "Selector Code Sequence Value",
    "Keyword": "Selector​Code​Sequence​Value",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0100)",
    "Name": "Number of Screens",
    "Keyword": "Number​OfScreens",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0102)",
    "Name": "Nominal Screen Definition Sequence",
    "Keyword": "Nominal​Screen​Definition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0104)",
    "Name": "Number of Vertical Pixels",
    "Keyword": "Number​OfVertical​Pixels",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0106)",
    "Name": "Number of Horizontal Pixels",
    "Keyword": "Number​OfHorizontal​Pixels",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0108)",
    "Name": "Display Environment Spatial Position",
    "Keyword": "Display​Environment​Spatial​Position",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0072,010A)",
    "Name": "Screen Minimum Grayscale Bit Depth",
    "Keyword": "Screen​Minimum​Grayscale​Bit​Depth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,010C)",
    "Name": "Screen Minimum Color Bit Depth",
    "Keyword": "Screen​Minimum​Color​Bit​Depth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,010E)",
    "Name": "Application Maximum Repaint Time",
    "Keyword": "Application​Maximum​Repaint​Time",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0200)",
    "Name": "Display Sets Sequence",
    "Keyword": "Display​Sets​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0202)",
    "Name": "Display Set Number",
    "Keyword": "Display​Set​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0203)",
    "Name": "Display Set Label",
    "Keyword": "Display​Set​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0204)",
    "Name": "Display Set Presentation Group",
    "Keyword": "Display​Set​Presentation​Group",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0206)",
    "Name": "Display Set Presentation Group Description",
    "Keyword": "Display​Set​Presentation​Group​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0208)",
    "Name": "Partial Data Display Handling",
    "Keyword": "Partial​Data​Display​Handling",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0210)",
    "Name": "Synchronized Scrolling Sequence",
    "Keyword": "Synchronized​Scrolling​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0212)",
    "Name": "Display Set Scrolling Group",
    "Keyword": "Display​Set​Scrolling​Group",
    "VR": "US",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0214)",
    "Name": "Navigation Indicator Sequence",
    "Keyword": "Navigation​Indicator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0216)",
    "Name": "Navigation Display Set",
    "Keyword": "Navigation​Display​Set",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0218)",
    "Name": "Reference Display Sets",
    "Keyword": "Reference​Display​Sets",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0300)",
    "Name": "Image Boxes Sequence",
    "Keyword": "Image​Boxes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0302)",
    "Name": "Image Box Number",
    "Keyword": "Image​Box​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0304)",
    "Name": "Image Box Layout Type",
    "Keyword": "Image​Box​Layout​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0306)",
    "Name": "Image Box Tile Horizontal Dimension",
    "Keyword": "Image​Box​Tile​Horizontal​Dimension",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0308)",
    "Name": "Image Box Tile Vertical Dimension",
    "Keyword": "Image​Box​Tile​Vertical​Dimension",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0310)",
    "Name": "Image Box Scroll Direction",
    "Keyword": "Image​Box​Scroll​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0312)",
    "Name": "Image Box Small Scroll Type",
    "Keyword": "Image​Box​Small​Scroll​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0314)",
    "Name": "Image Box Small Scroll Amount",
    "Keyword": "Image​Box​Small​Scroll​Amount",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0316)",
    "Name": "Image Box Large Scroll Type",
    "Keyword": "Image​Box​Large​Scroll​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0318)",
    "Name": "Image Box Large Scroll Amount",
    "Keyword": "Image​Box​Large​Scroll​Amount",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0320)",
    "Name": "Image Box Overlap Priority",
    "Keyword": "Image​Box​Overlap​Priority",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0330)",
    "Name": "Cine Relative to Real-Time",
    "Keyword": "Cine​Relative​ToReal​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0400)",
    "Name": "Filter Operations Sequence",
    "Keyword": "Filter​Operations​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0402)",
    "Name": "Filter-by Category",
    "Keyword": "Filter​ByCategory",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0404)",
    "Name": "Filter-by Attribute Presence",
    "Keyword": "Filter​ByAttribute​Presence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0406)",
    "Name": "Filter-by Operator",
    "Keyword": "Filter​ByOperator",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0420)",
    "Name": "Structured Display Background CIE​Lab Value",
    "Keyword": "Structured​Display​BackgroundCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0072,0421)",
    "Name": "Empty Image Box CIE​Lab Value",
    "Keyword": "Empty​Image​BoxCIE​Lab​Value",
    "VR": "US",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0072,0422)",
    "Name": "Structured Display Image Box Sequence",
    "Keyword": "Structured​Display​Image​Box​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0424)",
    "Name": "Structured Display Text Box Sequence",
    "Keyword": "Structured​Display​Text​Box​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0427)",
    "Name": "Referenced First Frame Sequence",
    "Keyword": "Referenced​First​Frame​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0430)",
    "Name": "Image Box Synchronization Sequence",
    "Keyword": "Image​Box​Synchronization​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0432)",
    "Name": "Synchronized Image Box List",
    "Keyword": "Synchronized​Image​Box​List",
    "VR": "US",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0434)",
    "Name": "Type of Synchronization",
    "Keyword": "Type​OfSynchronization",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0500)",
    "Name": "Blending Operation Type",
    "Keyword": "Blending​Operation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0510)",
    "Name": "Reformatting Operation Type",
    "Keyword": "Reformatting​Operation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0512)",
    "Name": "Reformatting Thickness",
    "Keyword": "Reformatting​Thickness",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0514)",
    "Name": "Reformatting Interval",
    "Keyword": "Reformatting​Interval",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0516)",
    "Name": "Reformatting Operation Initial View Direction",
    "Keyword": "Reformatting​Operation​Initial​View​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0520)",
    "Name": "3D Rendering Type",
    "Keyword": "ThreeD​Rendering​Type",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0072,0600)",
    "Name": "Sorting Operations Sequence",
    "Keyword": "Sorting​Operations​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0602)",
    "Name": "Sort-by Category",
    "Keyword": "Sort​ByCategory",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0604)",
    "Name": "Sorting Direction",
    "Keyword": "Sorting​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0700)",
    "Name": "Display Set Patient Orientation",
    "Keyword": "Display​Set​Patient​Orientation",
    "VR": "CS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0072,0702)",
    "Name": "VOI Type",
    "Keyword": "VOI​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0704)",
    "Name": "Pseudo-Color Type",
    "Keyword": "Pseudo​Color​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0705)",
    "Name": "Pseudo-Color Palette Instance Reference Sequence",
    "Keyword": "Pseudo​Color​Palette​Instance​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0706)",
    "Name": "Show Grayscale Inverted",
    "Keyword": "Show​Grayscale​Inverted",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0710)",
    "Name": "Show Image True Size Flag",
    "Keyword": "Show​Image​True​Size​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0712)",
    "Name": "Show Graphic Annotation Flag",
    "Keyword": "Show​Graphic​Annotation​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0714)",
    "Name": "Show Patient Demographics Flag",
    "Keyword": "Show​Patient​Demographics​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0716)",
    "Name": "Show Acquisition Techniques Flag",
    "Keyword": "Show​Acquisition​Techniques​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0717)",
    "Name": "Display Set Horizontal Justification",
    "Keyword": "Display​Set​Horizontal​Justification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0072,0718)",
    "Name": "Display Set Vertical Justification",
    "Keyword": "Display​Set​Vertical​Justification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,0120)",
    "Name": "Continuation Start Meterset",
    "Keyword": "Continuation​Start​Meterset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,0121)",
    "Name": "Continuation End Meterset",
    "Keyword": "Continuation​End​Meterset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1000)",
    "Name": "Procedure Step State",
    "Keyword": "Procedure​Step​State",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1002)",
    "Name": "Procedure Step Progress Information Sequence",
    "Keyword": "Procedure​Step​Progress​Information​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1004)",
    "Name": "Procedure Step Progress",
    "Keyword": "Procedure​Step​Progress",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1006)",
    "Name": "Procedure Step Progress Description",
    "Keyword": "Procedure​Step​Progress​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1008)",
    "Name": "Procedure Step Communications URI Sequence",
    "Keyword": "Procedure​Step​CommunicationsURI​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,100a)",
    "Name": "Contact URI",
    "Keyword": "ContactURI",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,100c)",
    "Name": "Contact Display Name",
    "Keyword": "Contact​Display​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,100e)",
    "Name": "Procedure Step Discontinuation Reason Code Sequence",
    "Keyword": "Procedure​Step​Discontinuation​Reason​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1020)",
    "Name": "Beam Task Sequence",
    "Keyword": "Beam​Task​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1022)",
    "Name": "Beam Task Type",
    "Keyword": "Beam​Task​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1024)",
    "Name": "Beam Order Index (Trial)",
    "Keyword": "Beam​Order​Index​Trial",
    "VR": "IS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1025)",
    "Name": "Autosequence Flag",
    "Keyword": "Autosequence​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1026)",
    "Name": "Table Top Vertical Adjusted Position",
    "Keyword": "Table​Top​Vertical​Adjusted​Position",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1027)",
    "Name": "Table Top Longitudinal Adjusted Position",
    "Keyword": "Table​Top​Longitudinal​Adjusted​Position",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1028)",
    "Name": "Table Top Lateral Adjusted Position",
    "Keyword": "Table​Top​Lateral​Adjusted​Position",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102A)",
    "Name": "Patient Support Adjusted Angle",
    "Keyword": "Patient​Support​Adjusted​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102B)",
    "Name": "Table Top Eccentric Adjusted Angle",
    "Keyword": "Table​Top​Eccentric​Adjusted​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102C)",
    "Name": "Table Top Pitch Adjusted Angle",
    "Keyword": "Table​Top​Pitch​Adjusted​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,102D)",
    "Name": "Table Top Roll Adjusted Angle",
    "Keyword": "Table​Top​Roll​Adjusted​Angle",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1030)",
    "Name": "Delivery Verification Image Sequence",
    "Keyword": "Delivery​Verification​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1032)",
    "Name": "Verification Image Timing",
    "Keyword": "Verification​Image​Timing",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1034)",
    "Name": "Double Exposure Flag",
    "Keyword": "Double​Exposure​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1036)",
    "Name": "Double Exposure Ordering",
    "Keyword": "Double​Exposure​Ordering",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1038)",
    "Name": "Double Exposure Meterset (Trial)",
    "Keyword": "Double​Exposure​Meterset​Trial",
    "VR": "DS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,103A)",
    "Name": "Double Exposure Field Delta (Trial)",
    "Keyword": "Double​Exposure​Field​Delta​Trial",
    "VR": "DS",
    "VM": "4",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1040)",
    "Name": "Related Reference RT Image Sequence",
    "Keyword": "Related​ReferenceRT​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1042)",
    "Name": "General Machine Verification Sequence",
    "Keyword": "General​Machine​Verification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1044)",
    "Name": "Conventional Machine Verification Sequence",
    "Keyword": "Conventional​Machine​Verification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1046)",
    "Name": "Ion Machine Verification Sequence",
    "Keyword": "Ion​Machine​Verification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1048)",
    "Name": "Failed Attributes Sequence",
    "Keyword": "Failed​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,104A)",
    "Name": "Overridden Attributes Sequence",
    "Keyword": "Overridden​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,104C)",
    "Name": "Conventional Control Point Verification Sequence",
    "Keyword": "Conventional​Control​Point​Verification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,104E)",
    "Name": "Ion Control Point Verification Sequence",
    "Keyword": "Ion​Control​Point​Verification​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1050)",
    "Name": "Attribute Occurrence Sequence",
    "Keyword": "Attribute​Occurrence​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1052)",
    "Name": "Attribute Occurrence Pointer",
    "Keyword": "Attribute​Occurrence​Pointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1054)",
    "Name": "Attribute Item Selector",
    "Keyword": "Attribute​Item​Selector",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1056)",
    "Name": "Attribute Occurrence Private Creator",
    "Keyword": "Attribute​Occurrence​Private​Creator",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1057)",
    "Name": "Selector Sequence Pointer Items",
    "Keyword": "Selector​Sequence​Pointer​Items",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0074,1200)",
    "Name": "Scheduled Procedure Step Priority",
    "Keyword": "Scheduled​Procedure​Step​Priority",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1202)",
    "Name": "Worklist Label",
    "Keyword": "Worklist​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1204)",
    "Name": "Procedure Step Label",
    "Keyword": "Procedure​Step​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1210)",
    "Name": "Scheduled Processing Parameters Sequence",
    "Keyword": "Scheduled​Processing​Parameters​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1212)",
    "Name": "Performed Processing Parameters Sequence",
    "Keyword": "Performed​Processing​Parameters​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1216)",
    "Name": "Unified Procedure Step Performed Procedure Sequence",
    "Keyword": "Unified​Procedure​Step​Performed​Procedure​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1220)",
    "Name": "Related Procedure Step Sequence",
    "Keyword": "Related​Procedure​Step​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1222)",
    "Name": "Procedure Step Relationship Type",
    "Keyword": "Procedure​Step​Relationship​Type",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0074,1224)",
    "Name": "Replaced Procedure Step Sequence",
    "Keyword": "Replaced​Procedure​Step​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1230)",
    "Name": "Deletion Lock",
    "Keyword": "Deletion​Lock",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1234)",
    "Name": "Receiving AE",
    "Keyword": "ReceivingAE",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1236)",
    "Name": "Requesting AE",
    "Keyword": "RequestingAE",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1238)",
    "Name": "Reason for Cancellation",
    "Keyword": "Reason​For​Cancellation",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1242)",
    "Name": "SCP Status",
    "Keyword": "SCP​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1244)",
    "Name": "Subscription List Status",
    "Keyword": "Subscription​List​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1246)",
    "Name": "Unified Procedure Step​List Status",
    "Keyword": "Unified​Procedure​Step​List​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1324)",
    "Name": "Beam Order Index",
    "Keyword": "Beam​Order​Index",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,1338)",
    "Name": "Double Exposure Meterset",
    "Keyword": "Double​Exposure​Meterset",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0074,133A)",
    "Name": "Double Exposure Field Delta",
    "Keyword": "Double​Exposure​Field​Delta",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0076,0001)",
    "Name": "Implant Assembly Template Name",
    "Keyword": "Implant​Assembly​Template​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0003)",
    "Name": "Implant Assembly Template Issuer",
    "Keyword": "Implant​Assembly​Template​Issuer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0006)",
    "Name": "Implant Assembly Template Version",
    "Keyword": "Implant​Assembly​Template​Version",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0008)",
    "Name": "Replaced Implant Assembly Template Sequence",
    "Keyword": "Replaced​Implant​Assembly​Template​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,000A)",
    "Name": "Implant Assembly Template Type",
    "Keyword": "Implant​Assembly​Template​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,000C)",
    "Name": "Original Implant Assembly Template Sequence",
    "Keyword": "Original​Implant​Assembly​Template​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,000E)",
    "Name": "Derivation Implant Assembly Template Sequence",
    "Keyword": "Derivation​Implant​Assembly​Template​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0010)",
    "Name": "Implant Assembly Template Target Anatomy Sequence",
    "Keyword": "Implant​Assembly​Template​Target​Anatomy​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0020)",
    "Name": "Procedure Type Code Sequence",
    "Keyword": "Procedure​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0030)",
    "Name": "Surgical Technique",
    "Keyword": "Surgical​Technique",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0032)",
    "Name": "Component Types Sequence",
    "Keyword": "Component​Types​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0034)",
    "Name": "Component Type Code Sequence",
    "Keyword": "Component​Type​Code​Sequence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0036)",
    "Name": "Exclusive Component Type",
    "Keyword": "Exclusive​Component​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0038)",
    "Name": "Mandatory Component Type",
    "Keyword": "Mandatory​Component​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0040)",
    "Name": "Component Sequence",
    "Keyword": "Component​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0055)",
    "Name": "Component ID",
    "Keyword": "ComponentID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0060)",
    "Name": "Component Assembly Sequence",
    "Keyword": "Component​Assembly​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0070)",
    "Name": "Component 1 Referenced ID",
    "Keyword": "Component1ReferencedID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0080)",
    "Name": "Component 1 Referenced Mating Feature Set ID",
    "Keyword": "Component1Referenced​Mating​Feature​SetID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,0090)",
    "Name": "Component 1 Referenced Mating Feature ID",
    "Keyword": "Component1Referenced​Mating​FeatureID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,00A0)",
    "Name": "Component 2 Referenced ID",
    "Keyword": "Component2ReferencedID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,00B0)",
    "Name": "Component 2 Referenced Mating Feature Set ID",
    "Keyword": "Component2Referenced​Mating​Feature​SetID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0076,00C0)",
    "Name": "Component 2 Referenced Mating Feature ID",
    "Keyword": "Component2Referenced​Mating​FeatureID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0001)",
    "Name": "Implant Template Group Name",
    "Keyword": "Implant​Template​Group​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0010)",
    "Name": "Implant Template Group Description",
    "Keyword": "Implant​Template​Group​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0020)",
    "Name": "Implant Template Group Issuer",
    "Keyword": "Implant​Template​Group​Issuer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0024)",
    "Name": "Implant Template Group Version",
    "Keyword": "Implant​Template​Group​Version",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0026)",
    "Name": "Replaced Implant Template Group Sequence",
    "Keyword": "Replaced​Implant​Template​Group​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0028)",
    "Name": "Implant Template Group Target Anatomy Sequence",
    "Keyword": "Implant​Template​Group​Target​Anatomy​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,002A)",
    "Name": "Implant Template Group Members Sequence",
    "Keyword": "Implant​Template​Group​Members​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,002E)",
    "Name": "Implant Template Group Member ID",
    "Keyword": "Implant​Template​Group​MemberID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0050)",
    "Name": "3D Implant Template Group Member Matching Point",
    "Keyword": "ThreeD​Implant​Template​Group​Member​Matching​Point",
    "VR": "FD",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(0078,0060)",
    "Name": "3D Implant Template Group Member Matching Axes",
    "Keyword": "ThreeD​Implant​Template​Group​Member​Matching​Axes",
    "VR": "FD",
    "VM": "9",
    "Retired": ""
  },
  {
    "Tag": "(0078,0070)",
    "Name": "Implant Template Group Member Matching 2D Coordinates Sequence",
    "Keyword": "Implant​Template​Group​Member​Matching2D​Coordinates​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,0090)",
    "Name": "2D Implant Template Group Member Matching Point",
    "Keyword": "TwoD​Implant​Template​Group​Member​Matching​Point",
    "VR": "FD",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(0078,00A0)",
    "Name": "2D Implant Template Group Member Matching Axes",
    "Keyword": "TwoD​Implant​Template​Group​Member​Matching​Axes",
    "VR": "FD",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B0)",
    "Name": "Implant Template Group Variation Dimension Sequence",
    "Keyword": "Implant​Template​Group​Variation​Dimension​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B2)",
    "Name": "Implant Template Group Variation Dimension Name",
    "Keyword": "Implant​Template​Group​Variation​Dimension​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B4)",
    "Name": "Implant Template Group Variation Dimension Rank Sequence",
    "Keyword": "Implant​Template​Group​Variation​Dimension​Rank​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B6)",
    "Name": "Referenced Implant Template Group Member ID",
    "Keyword": "Referenced​Implant​Template​Group​MemberID",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0078,00B8)",
    "Name": "Implant Template Group Variation Dimension Rank",
    "Keyword": "Implant​Template​Group​Variation​Dimension​Rank",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0001)",
    "Name": "Surface Scan Acquisition Type Code Sequence",
    "Keyword": "Surface​Scan​Acquisition​Type​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0002)",
    "Name": "Surface Scan Mode Code Sequence",
    "Keyword": "Surface​Scan​Mode​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0003)",
    "Name": "Registration Method Code Sequence",
    "Keyword": "Registration​Method​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0004)",
    "Name": "Shot Duration Time",
    "Keyword": "Shot​Duration​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0005)",
    "Name": "Shot Offset Time",
    "Keyword": "Shot​Offset​Time",
    "VR": "FD",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0006)",
    "Name": "Surface Point Presentation Value Data",
    "Keyword": "Surface​Point​Presentation​Value​Data",
    "VR": "US",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0007)",
    "Name": "Surface Point Color CIE​Lab Value Data",
    "Keyword": "Surface​Point​ColorCIE​Lab​Value​Data",
    "VR": "US",
    "VM": "3-3n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0008)",
    "Name": "UV Mapping Sequence",
    "Keyword": "UV​Mapping​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0009)",
    "Name": "Texture Label",
    "Keyword": "Texture​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0010)",
    "Name": "U Value Data",
    "Keyword": "U​Value​Data",
    "VR": "OF",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0011)",
    "Name": "V Value Data",
    "Keyword": "V​Value​Data",
    "VR": "OF",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0080,0012)",
    "Name": "Referenced Texture Sequence",
    "Keyword": "Referenced​Texture​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0080,0013)",
    "Name": "Referenced Surface Data Sequence",
    "Keyword": "Referenced​Surface​Data​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0130)",
    "Name": "Storage Media File-set ID",
    "Keyword": "Storage​Media​File​SetID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0140)",
    "Name": "Storage Media File-set UID",
    "Keyword": "Storage​Media​File​SetUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0200)",
    "Name": "Icon Image Sequence",
    "Keyword": "Icon​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0088,0904)",
    "Name": "Topic Title",
    "Keyword": "Topic​Title",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0088,0906)",
    "Name": "Topic Subject",
    "Keyword": "Topic​Subject",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0088,0910)",
    "Name": "Topic Author",
    "Keyword": "Topic​Author",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(0088,0912)",
    "Name": "Topic Keywords",
    "Keyword": "Topic​Keywords",
    "VR": "LO",
    "VM": "1-32",
    "Retired": "RET"
  },
  {
    "Tag": "(0100,0410)",
    "Name": "SOP Instance Status",
    "Keyword": "SOP​Instance​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0100,0420)",
    "Name": "SOP Authorization DateTime",
    "Keyword": "SOP​Authorization​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0100,0424)",
    "Name": "SOP Authorization Comment",
    "Keyword": "SOP​Authorization​Comment",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0100,0426)",
    "Name": "Authorization Equipment Certification Number",
    "Keyword": "Authorization​Equipment​Certification​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0005)",
    "Name": "MAC ID Number",
    "Keyword": "MACID​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0010)",
    "Name": "MAC Calculation Transfer Syntax UID",
    "Keyword": "MAC​Calculation​Transfer​SyntaxUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0015)",
    "Name": "MAC Algorithm",
    "Keyword": "MAC​Algorithm",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0020)",
    "Name": "Data Elements Signed",
    "Keyword": "Data​Elements​Signed",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(0400,0100)",
    "Name": "Digital Signature UID",
    "Keyword": "Digital​SignatureUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0105)",
    "Name": "Digital Signature DateTime",
    "Keyword": "Digital​Signature​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0110)",
    "Name": "Certificate Type",
    "Keyword": "Certificate​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0115)",
    "Name": "Certificate of Signer",
    "Keyword": "Certificate​OfSigner",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0120)",
    "Name": "Signature",
    "Keyword": "Signature",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0305)",
    "Name": "Certified Timestamp Type",
    "Keyword": "Certified​Timestamp​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0310)",
    "Name": "Certified Timestamp",
    "Keyword": "Certified​Timestamp",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0401)",
    "Name": "Digital Signature Purpose Code Sequence",
    "Keyword": "Digital​Signature​Purpose​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0402)",
    "Name": "Referenced Digital Signature Sequence",
    "Keyword": "Referenced​Digital​Signature​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0403)",
    "Name": "Referenced SOP Instance MAC Sequence",
    "Keyword": "ReferencedSOP​InstanceMAC​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0404)",
    "Name": "MAC",
    "Keyword": "MAC",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0500)",
    "Name": "Encrypted Attributes Sequence",
    "Keyword": "Encrypted​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0510)",
    "Name": "Encrypted Content Transfer Syntax UID",
    "Keyword": "Encrypted​Content​Transfer​SyntaxUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0520)",
    "Name": "Encrypted Content",
    "Keyword": "Encrypted​Content",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0550)",
    "Name": "Modified Attributes Sequence",
    "Keyword": "Modified​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0561)",
    "Name": "Original Attributes Sequence",
    "Keyword": "Original​Attributes​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0562)",
    "Name": "Attribute Modification DateTime",
    "Keyword": "Attribute​Modification​Date​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0563)",
    "Name": "Modifying System",
    "Keyword": "Modifying​System",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0564)",
    "Name": "Source of Previous Values",
    "Keyword": "Source​OfPrevious​Values",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0400,0565)",
    "Name": "Reason for the Attribute Modification",
    "Keyword": "Reason​For​The​Attribute​Modification",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(1000,xxx0)",
    "Name": "Escape Triplet",
    "Keyword": "Escape​Triplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx1)",
    "Name": "Run Length Triplet",
    "Keyword": "Run​Length​Triplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx2)",
    "Name": "Huffman Table Size",
    "Keyword": "Huffman​Table​Size",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx3)",
    "Name": "Huffman Table Triplet",
    "Keyword": "Huffman​Table​Triplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx4)",
    "Name": "Shift Table Size",
    "Keyword": "Shift​Table​Size",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(1000,xxx5)",
    "Name": "Shift Table Triplet",
    "Keyword": "Shift​Table​Triplet",
    "VR": "US",
    "VM": "3",
    "Retired": "RET"
  },
  {
    "Tag": "(1010,xxxx)",
    "Name": "Zonal Map",
    "Keyword": "Zonal​Map",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0010)",
    "Name": "Number of Copies",
    "Keyword": "Number​OfCopies",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,001E)",
    "Name": "Printer Configuration Sequence",
    "Keyword": "Printer​Configuration​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0020)",
    "Name": "Print Priority",
    "Keyword": "Print​Priority",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0030)",
    "Name": "Medium Type",
    "Keyword": "Medium​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0040)",
    "Name": "Film Destination",
    "Keyword": "Film​Destination",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0050)",
    "Name": "Film Session Label",
    "Keyword": "Film​Session​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0060)",
    "Name": "Memory Allocation",
    "Keyword": "Memory​Allocation",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0061)",
    "Name": "Maximum Memory Allocation",
    "Keyword": "Maximum​Memory​Allocation",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0062)",
    "Name": "Color Image Printing Flag",
    "Keyword": "Color​Image​Printing​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0063)",
    "Name": "Collation Flag",
    "Keyword": "Collation​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0065)",
    "Name": "Annotation Flag",
    "Keyword": "Annotation​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0067)",
    "Name": "Image Overlay Flag",
    "Keyword": "Image​Overlay​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,0069)",
    "Name": "Presentation LUT Flag",
    "Keyword": "PresentationLUT​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,006A)",
    "Name": "Image Box Presentation LUT Flag",
    "Keyword": "Image​Box​PresentationLUT​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2000,00A0)",
    "Name": "Memory Bit Depth",
    "Keyword": "Memory​Bit​Depth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A1)",
    "Name": "Printing Bit Depth",
    "Keyword": "Printing​Bit​Depth",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A2)",
    "Name": "Media Installed Sequence",
    "Keyword": "Media​Installed​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A4)",
    "Name": "Other Media Available Sequence",
    "Keyword": "Other​Media​Available​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,00A8)",
    "Name": "Supported Image Display Formats Sequence",
    "Keyword": "Supported​Image​Display​Formats​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0500)",
    "Name": "Referenced Film Box Sequence",
    "Keyword": "Referenced​Film​Box​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2000,0510)",
    "Name": "Referenced Stored Print Sequence",
    "Keyword": "Referenced​Stored​Print​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2010,0010)",
    "Name": "Image Display Format",
    "Keyword": "Image​Display​Format",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0030)",
    "Name": "Annotation Display Format ID",
    "Keyword": "Annotation​Display​FormatID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0040)",
    "Name": "Film Orientation",
    "Keyword": "Film​Orientation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0050)",
    "Name": "Film Size ID",
    "Keyword": "Film​SizeID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0052)",
    "Name": "Printer Resolution ID",
    "Keyword": "Printer​ResolutionID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0054)",
    "Name": "Default Printer Resolution ID",
    "Keyword": "Default​Printer​ResolutionID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0060)",
    "Name": "Magnification Type",
    "Keyword": "Magnification​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0080)",
    "Name": "Smoothing Type",
    "Keyword": "Smoothing​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A6)",
    "Name": "Default Magnification Type",
    "Keyword": "Default​Magnification​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A7)",
    "Name": "Other Magnification Types Available",
    "Keyword": "Other​Magnification​Types​Available",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A8)",
    "Name": "Default Smoothing Type",
    "Keyword": "Default​Smoothing​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,00A9)",
    "Name": "Other Smoothing Types Available",
    "Keyword": "Other​Smoothing​Types​Available",
    "VR": "CS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(2010,0100)",
    "Name": "Border Density",
    "Keyword": "Border​Density",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0110)",
    "Name": "Empty Image Density",
    "Keyword": "Empty​Image​Density",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0120)",
    "Name": "Min Density",
    "Keyword": "Min​Density",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0130)",
    "Name": "Max Density",
    "Keyword": "Max​Density",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0140)",
    "Name": "Trim",
    "Keyword": "Trim",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0150)",
    "Name": "Configuration Information",
    "Keyword": "Configuration​Information",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0152)",
    "Name": "Configuration Information Description",
    "Keyword": "Configuration​Information​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0154)",
    "Name": "Maximum Collated Films",
    "Keyword": "Maximum​Collated​Films",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,015E)",
    "Name": "Illumination",
    "Keyword": "Illumination",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0160)",
    "Name": "Reflected Ambient Light",
    "Keyword": "Reflected​Ambient​Light",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0376)",
    "Name": "Printer Pixel Spacing",
    "Keyword": "Printer​Pixel​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(2010,0500)",
    "Name": "Referenced Film Session Sequence",
    "Keyword": "Referenced​Film​Session​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0510)",
    "Name": "Referenced Image Box Sequence",
    "Keyword": "Referenced​Image​Box​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2010,0520)",
    "Name": "Referenced Basic Annotation Box Sequence",
    "Keyword": "Referenced​Basic​Annotation​Box​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0010)",
    "Name": "Image Box Position",
    "Keyword": "Image​Box​Position",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0020)",
    "Name": "Polarity",
    "Keyword": "Polarity",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0030)",
    "Name": "Requested Image Size",
    "Keyword": "Requested​Image​Size",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0040)",
    "Name": "Requested Decimate/Crop Behavior",
    "Keyword": "Requested​Decimate​Crop​Behavior",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0050)",
    "Name": "Requested Resolution ID",
    "Keyword": "Requested​ResolutionID",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,00A0)",
    "Name": "Requested Image Size Flag",
    "Keyword": "Requested​Image​Size​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,00A2)",
    "Name": "Decimate/Crop Result",
    "Keyword": "Decimate​Crop​Result",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0110)",
    "Name": "Basic Grayscale Image Sequence",
    "Keyword": "Basic​Grayscale​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0111)",
    "Name": "Basic Color Image Sequence",
    "Keyword": "Basic​Color​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2020,0130)",
    "Name": "Referenced Image Overlay Box Sequence",
    "Keyword": "Referenced​Image​Overlay​Box​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2020,0140)",
    "Name": "Referenced VOI LUT Box Sequence",
    "Keyword": "ReferencedVOILUT​Box​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2030,0010)",
    "Name": "Annotation Position",
    "Keyword": "Annotation​Position",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2030,0020)",
    "Name": "Text String",
    "Keyword": "Text​String",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2040,0010)",
    "Name": "Referenced Overlay Plane Sequence",
    "Keyword": "Referenced​Overlay​Plane​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0011)",
    "Name": "Referenced Overlay Plane Groups",
    "Keyword": "Referenced​Overlay​Plane​Groups",
    "VR": "US",
    "VM": "1-99",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0020)",
    "Name": "Overlay Pixel Data Sequence",
    "Keyword": "Overlay​Pixel​Data​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0060)",
    "Name": "Overlay Magnification Type",
    "Keyword": "Overlay​Magnification​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0070)",
    "Name": "Overlay Smoothing Type",
    "Keyword": "Overlay​Smoothing​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0072)",
    "Name": "Overlay or Image Magnification",
    "Keyword": "Overlay​OrImage​Magnification",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0074)",
    "Name": "Magnify to Number of Columns",
    "Keyword": "Magnify​ToNumber​OfColumns",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0080)",
    "Name": "Overlay Foreground Density",
    "Keyword": "Overlay​Foreground​Density",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0082)",
    "Name": "Overlay Background Density",
    "Keyword": "Overlay​Background​Density",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0090)",
    "Name": "Overlay Mode",
    "Keyword": "Overlay​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0100)",
    "Name": "Threshold Density",
    "Keyword": "Threshold​Density",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2040,0500)",
    "Name": "Referenced Image Box Sequence (Retired)",
    "Keyword": "Referenced​Image​Box​Sequence​Retired",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2050,0010)",
    "Name": "Presentation LUT Sequence",
    "Keyword": "PresentationLUT​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2050,0020)",
    "Name": "Presentation LUT Shape",
    "Keyword": "PresentationLUT​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2050,0500)",
    "Name": "Referenced Presentation LUT Sequence",
    "Keyword": "Referenced​PresentationLUT​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0010)",
    "Name": "Print Job ID",
    "Keyword": "Print​JobID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2100,0020)",
    "Name": "Execution Status",
    "Keyword": "Execution​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0030)",
    "Name": "Execution Status Info",
    "Keyword": "Execution​Status​Info",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0040)",
    "Name": "Creation Date",
    "Keyword": "Creation​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0050)",
    "Name": "Creation Time",
    "Keyword": "Creation​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0070)",
    "Name": "Originator",
    "Keyword": "Originator",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0140)",
    "Name": "Destination AE",
    "Keyword": "DestinationAE",
    "VR": "AE",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2100,0160)",
    "Name": "Owner ID",
    "Keyword": "OwnerID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0170)",
    "Name": "Number of Films",
    "Keyword": "Number​OfFilms",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2100,0500)",
    "Name": "Referenced Print Job Sequence (Pull Stored Print)",
    "Keyword": "Referenced​Print​Job​Sequence​Pull​Stored​Print",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2110,0010)",
    "Name": "Printer Status",
    "Keyword": "Printer​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2110,0020)",
    "Name": "Printer Status Info",
    "Keyword": "Printer​Status​Info",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2110,0030)",
    "Name": "Printer Name",
    "Keyword": "Printer​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2110,0099)",
    "Name": "Print Queue ID",
    "Keyword": "Print​QueueID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2120,0010)",
    "Name": "Queue Status",
    "Keyword": "Queue​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2120,0050)",
    "Name": "Print Job Description Sequence",
    "Keyword": "Print​Job​Description​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2120,0070)",
    "Name": "Referenced Print Job Sequence",
    "Keyword": "Referenced​Print​Job​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0010)",
    "Name": "Print Management Capabilities Sequence",
    "Keyword": "Print​Management​Capabilities​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0015)",
    "Name": "Printer Characteristics Sequence",
    "Keyword": "Printer​Characteristics​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0030)",
    "Name": "Film Box Content Sequence",
    "Keyword": "Film​Box​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0040)",
    "Name": "Image Box Content Sequence",
    "Keyword": "Image​Box​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0050)",
    "Name": "Annotation Content Sequence",
    "Keyword": "Annotation​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0060)",
    "Name": "Image Overlay Box Content Sequence",
    "Keyword": "Image​Overlay​Box​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,0080)",
    "Name": "Presentation LUT Content Sequence",
    "Keyword": "PresentationLUT​Content​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,00A0)",
    "Name": "Proposed Study Sequence",
    "Keyword": "Proposed​Study​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2130,00C0)",
    "Name": "Original Image Sequence",
    "Keyword": "Original​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(2200,0001)",
    "Name": "Label Using Information Extracted From Instances",
    "Keyword": "Label​Using​Information​Extracted​From​Instances",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0002)",
    "Name": "Label Text",
    "Keyword": "Label​Text",
    "VR": "UT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0003)",
    "Name": "Label Style Selection",
    "Keyword": "Label​Style​Selection",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0004)",
    "Name": "Media Disposition",
    "Keyword": "Media​Disposition",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0005)",
    "Name": "Barcode Value",
    "Keyword": "Barcode​Value",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0006)",
    "Name": "Barcode Symbology",
    "Keyword": "Barcode​Symbology",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0007)",
    "Name": "Allow Media Splitting",
    "Keyword": "Allow​Media​Splitting",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0008)",
    "Name": "Include Non-DICOM Objects",
    "Keyword": "Include​NonDICOM​Objects",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0009)",
    "Name": "Include Display Application",
    "Keyword": "Include​Display​Application",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000A)",
    "Name": "Preserve Composite Instances After Media Creation",
    "Keyword": "Preserve​Composite​Instances​After​Media​Creation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000B)",
    "Name": "Total Number of Pieces of Media Created",
    "Keyword": "Total​Number​OfPieces​OfMedia​Created",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000C)",
    "Name": "Requested Media Application Profile",
    "Keyword": "Requested​Media​Application​Profile",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000D)",
    "Name": "Referenced Storage Media Sequence",
    "Keyword": "Referenced​Storage​Media​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,000E)",
    "Name": "Failure Attributes",
    "Keyword": "Failure​Attributes",
    "VR": "AT",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(2200,000F)",
    "Name": "Allow Lossy Compression",
    "Keyword": "Allow​Lossy​Compression",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(2200,0020)",
    "Name": "Request Priority",
    "Keyword": "Request​Priority",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0002)",
    "Name": "RT Image Label",
    "Keyword": "RT​Image​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0003)",
    "Name": "RT Image Name",
    "Keyword": "RT​Image​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0004)",
    "Name": "RT Image Description",
    "Keyword": "RT​Image​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,000A)",
    "Name": "Reported Values Origin",
    "Keyword": "Reported​Values​Origin",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,000C)",
    "Name": "RT Image Plane",
    "Keyword": "RT​Image​Plane",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,000D)",
    "Name": "X-Ray Image Receptor Translation",
    "Keyword": "X​Ray​Image​Receptor​Translation",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3002,000E)",
    "Name": "X-Ray Image Receptor Angle",
    "Keyword": "X​Ray​Image​Receptor​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0010)",
    "Name": "RT Image Orientation",
    "Keyword": "RT​Image​Orientation",
    "VR": "DS",
    "VM": "6",
    "Retired": ""
  },
  {
    "Tag": "(3002,0011)",
    "Name": "Image Plane Pixel Spacing",
    "Keyword": "Image​Plane​Pixel​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(3002,0012)",
    "Name": "RT Image Position",
    "Keyword": "RT​Image​Position",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(3002,0020)",
    "Name": "Radiation Machine Name",
    "Keyword": "Radiation​Machine​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0022)",
    "Name": "Radiation Machine SAD",
    "Keyword": "Radiation​MachineSAD",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0024)",
    "Name": "Radiation Machine SSD",
    "Keyword": "Radiation​MachineSSD",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0026)",
    "Name": "RT Image SID",
    "Keyword": "RT​ImageSID",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0028)",
    "Name": "Source to Reference Object Distance",
    "Keyword": "Source​ToReference​Object​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0029)",
    "Name": "Fraction Number",
    "Keyword": "Fraction​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0030)",
    "Name": "Exposure Sequence",
    "Keyword": "Exposure​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0032)",
    "Name": "Meterset Exposure",
    "Keyword": "Meterset​Exposure",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0034)",
    "Name": "Diaphragm Position",
    "Keyword": "Diaphragm​Position",
    "VR": "DS",
    "VM": "4",
    "Retired": ""
  },
  {
    "Tag": "(3002,0040)",
    "Name": "Fluence Map Sequence",
    "Keyword": "Fluence​Map​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0041)",
    "Name": "Fluence Data Source",
    "Keyword": "Fluence​Data​Source",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0042)",
    "Name": "Fluence Data Scale",
    "Keyword": "Fluence​Data​Scale",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0050)",
    "Name": "Primary Fluence Mode Sequence",
    "Keyword": "Primary​Fluence​Mode​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0051)",
    "Name": "Fluence Mode",
    "Keyword": "Fluence​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3002,0052)",
    "Name": "Fluence Mode ID",
    "Keyword": "Fluence​ModeID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0001)",
    "Name": "DVH Type",
    "Keyword": "DVH​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0002)",
    "Name": "Dose Units",
    "Keyword": "Dose​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0004)",
    "Name": "Dose Type",
    "Keyword": "Dose​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0005)",
    "Name": "Spatial Transform of Dose",
    "Keyword": "Spatial​Transform​OfDose",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0006)",
    "Name": "Dose Comment",
    "Keyword": "Dose​Comment",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0008)",
    "Name": "Normalization Point",
    "Keyword": "Normalization​Point",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3004,000A)",
    "Name": "Dose Summation Type",
    "Keyword": "Dose​Summation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,000C)",
    "Name": "Grid Frame Offset Vector",
    "Keyword": "Grid​Frame​Offset​Vector",
    "VR": "DS",
    "VM": "2-n",
    "Retired": ""
  },
  {
    "Tag": "(3004,000E)",
    "Name": "Dose Grid Scaling",
    "Keyword": "Dose​Grid​Scaling",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0010)",
    "Name": "RT Dose ROI Sequence",
    "Keyword": "RT​DoseROI​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0012)",
    "Name": "Dose Value",
    "Keyword": "Dose​Value",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0014)",
    "Name": "Tissue Heterogeneity Correction",
    "Keyword": "Tissue​Heterogeneity​Correction",
    "VR": "CS",
    "VM": "1-3",
    "Retired": ""
  },
  {
    "Tag": "(3004,0040)",
    "Name": "DVH Normalization Point",
    "Keyword": "DVH​Normalization​Point",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3004,0042)",
    "Name": "DVH Normalization Dose Value",
    "Keyword": "DVH​Normalization​Dose​Value",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0050)",
    "Name": "DVH Sequence",
    "Keyword": "DVH​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0052)",
    "Name": "DVH Dose Scaling",
    "Keyword": "DVH​Dose​Scaling",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0054)",
    "Name": "DVH Volume Units",
    "Keyword": "DVH​Volume​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0056)",
    "Name": "DVH Number of Bins",
    "Keyword": "DVH​Number​OfBins",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0058)",
    "Name": "DVH Data",
    "Keyword": "DVH​Data",
    "VR": "DS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(3004,0060)",
    "Name": "DVH Referenced ROI Sequence",
    "Keyword": "DVH​ReferencedROI​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0062)",
    "Name": "DVH ROI Contribution Type",
    "Keyword": "DVHROI​Contribution​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0070)",
    "Name": "DVH Minimum Dose",
    "Keyword": "DVH​Minimum​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0072)",
    "Name": "DVH Maximum Dose",
    "Keyword": "DVH​Maximum​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3004,0074)",
    "Name": "DVH Mean Dose",
    "Keyword": "DVH​Mean​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0002)",
    "Name": "Structure Set Label",
    "Keyword": "Structure​Set​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0004)",
    "Name": "Structure Set Name",
    "Keyword": "Structure​Set​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0006)",
    "Name": "Structure Set Description",
    "Keyword": "Structure​Set​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0008)",
    "Name": "Structure Set Date",
    "Keyword": "Structure​Set​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0009)",
    "Name": "Structure Set Time",
    "Keyword": "Structure​Set​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0010)",
    "Name": "Referenced Frame of Reference Sequence",
    "Keyword": "Referenced​Frame​OfReference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0012)",
    "Name": "RT Referenced Study Sequence",
    "Keyword": "RT​Referenced​Study​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0014)",
    "Name": "RT Referenced Series Sequence",
    "Keyword": "RT​Referenced​Series​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0016)",
    "Name": "Contour Image Sequence",
    "Keyword": "Contour​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0018)",
    "Name": "Predecessor Structure Set Sequence",
    "Keyword": "Predecessor​Structure​Set​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0020)",
    "Name": "Structure Set ROI Sequence",
    "Keyword": "Structure​SetROI​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0022)",
    "Name": "ROI Number",
    "Keyword": "ROI​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0024)",
    "Name": "Referenced Frame of Reference UID",
    "Keyword": "Referenced​Frame​OfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0026)",
    "Name": "ROI Name",
    "Keyword": "ROI​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0028)",
    "Name": "ROI Description",
    "Keyword": "ROI​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,002A)",
    "Name": "ROI Display Color",
    "Keyword": "ROI​Display​Color",
    "VR": "IS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3006,002C)",
    "Name": "ROI Volume",
    "Keyword": "ROI​Volume",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0030)",
    "Name": "RT Related ROI Sequence",
    "Keyword": "RT​RelatedROI​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0033)",
    "Name": "RT ROI Relationship",
    "Keyword": "RTROI​Relationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0036)",
    "Name": "ROI Generation Algorithm",
    "Keyword": "ROI​Generation​Algorithm",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0038)",
    "Name": "ROI Generation Description",
    "Keyword": "ROI​Generation​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0039)",
    "Name": "ROI Contour Sequence",
    "Keyword": "ROI​Contour​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0040)",
    "Name": "Contour Sequence",
    "Keyword": "Contour​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0042)",
    "Name": "Contour Geometric Type",
    "Keyword": "Contour​Geometric​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0044)",
    "Name": "Contour Slab Thickness",
    "Keyword": "Contour​Slab​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0045)",
    "Name": "Contour Offset Vector",
    "Keyword": "Contour​Offset​Vector",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(3006,0046)",
    "Name": "Number of Contour Points",
    "Keyword": "Number​OfContour​Points",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0048)",
    "Name": "Contour Number",
    "Keyword": "Contour​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0049)",
    "Name": "Attached Contours",
    "Keyword": "Attached​Contours",
    "VR": "IS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(3006,0050)",
    "Name": "Contour Data",
    "Keyword": "Contour​Data",
    "VR": "DS",
    "VM": "3-3n",
    "Retired": ""
  },
  {
    "Tag": "(3006,0080)",
    "Name": "RT ROI Observations Sequence",
    "Keyword": "RTROI​Observations​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0082)",
    "Name": "Observation Number",
    "Keyword": "Observation​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0084)",
    "Name": "Referenced ROI Number",
    "Keyword": "ReferencedROI​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0085)",
    "Name": "ROI Observation Label",
    "Keyword": "ROI​Observation​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0086)",
    "Name": "RT ROI Identification Code Sequence",
    "Keyword": "RTROI​Identification​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,0088)",
    "Name": "ROI Observation Description",
    "Keyword": "ROI​Observation​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00A0)",
    "Name": "Related RT ROI Observations Sequence",
    "Keyword": "RelatedRTROI​Observations​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00A4)",
    "Name": "RT ROI Interpreted Type",
    "Keyword": "RTROI​Interpreted​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00A6)",
    "Name": "ROI Interpreter",
    "Keyword": "ROI​Interpreter",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B0)",
    "Name": "ROI Physical Properties Sequence",
    "Keyword": "ROI​Physical​Properties​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B2)",
    "Name": "ROI Physical Property",
    "Keyword": "ROI​Physical​Property",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B4)",
    "Name": "ROI Physical Property Value",
    "Keyword": "ROI​Physical​Property​Value",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B6)",
    "Name": "ROI Elemental Composition Sequence",
    "Keyword": "ROI​Elemental​Composition​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B7)",
    "Name": "ROI Elemental Composition Atomic Number",
    "Keyword": "ROI​Elemental​Composition​Atomic​Number",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00B8)",
    "Name": "ROI Elemental Composition Atomic Mass Fraction",
    "Keyword": "ROI​Elemental​Composition​Atomic​Mass​Fraction",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3006,00C0)",
    "Name": "Frame of Reference Relationship Sequence",
    "Keyword": "Frame​OfReference​Relationship​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(3006,00C2)",
    "Name": "Related Frame of Reference UID",
    "Keyword": "Related​Frame​OfReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(3006,00C4)",
    "Name": "Frame of Reference Transformation Type",
    "Keyword": "Frame​OfReference​Transformation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(3006,00C6)",
    "Name": "Frame of Reference Transformation Matrix",
    "Keyword": "Frame​OfReference​Transformation​Matrix",
    "VR": "DS",
    "VM": "16",
    "Retired": ""
  },
  {
    "Tag": "(3006,00C8)",
    "Name": "Frame of Reference Transformation Comment",
    "Keyword": "Frame​OfReference​Transformation​Comment",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0010)",
    "Name": "Measured Dose Reference Sequence",
    "Keyword": "Measured​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0012)",
    "Name": "Measured Dose Description",
    "Keyword": "Measured​Dose​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0014)",
    "Name": "Measured Dose Type",
    "Keyword": "Measured​Dose​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0016)",
    "Name": "Measured Dose Value",
    "Keyword": "Measured​Dose​Value",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0020)",
    "Name": "Treatment Session Beam Sequence",
    "Keyword": "Treatment​Session​Beam​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0021)",
    "Name": "Treatment Session Ion Beam Sequence",
    "Keyword": "Treatment​Session​Ion​Beam​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0022)",
    "Name": "Current Fraction Number",
    "Keyword": "Current​Fraction​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0024)",
    "Name": "Treatment Control Point Date",
    "Keyword": "Treatment​Control​Point​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0025)",
    "Name": "Treatment Control Point Time",
    "Keyword": "Treatment​Control​Point​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,002A)",
    "Name": "Treatment Termination Status",
    "Keyword": "Treatment​Termination​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,002B)",
    "Name": "Treatment Termination Code",
    "Keyword": "Treatment​Termination​Code",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,002C)",
    "Name": "Treatment Verification Status",
    "Keyword": "Treatment​Verification​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0030)",
    "Name": "Referenced Treatment Record Sequence",
    "Keyword": "Referenced​Treatment​Record​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0032)",
    "Name": "Specified Primary Meterset",
    "Keyword": "Specified​Primary​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0033)",
    "Name": "Specified Secondary Meterset",
    "Keyword": "Specified​Secondary​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0036)",
    "Name": "Delivered Primary Meterset",
    "Keyword": "Delivered​Primary​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0037)",
    "Name": "Delivered Secondary Meterset",
    "Keyword": "Delivered​Secondary​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,003A)",
    "Name": "Specified Treatment Time",
    "Keyword": "Specified​Treatment​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,003B)",
    "Name": "Delivered Treatment Time",
    "Keyword": "Delivered​Treatment​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0040)",
    "Name": "Control Point Delivery Sequence",
    "Keyword": "Control​Point​Delivery​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0041)",
    "Name": "Ion Control Point Delivery Sequence",
    "Keyword": "Ion​Control​Point​Delivery​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0042)",
    "Name": "Specified Meterset",
    "Keyword": "Specified​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0044)",
    "Name": "Delivered Meterset",
    "Keyword": "Delivered​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0045)",
    "Name": "Meterset Rate Set",
    "Keyword": "Meterset​Rate​Set",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0046)",
    "Name": "Meterset Rate Delivered",
    "Keyword": "Meterset​Rate​Delivered",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0047)",
    "Name": "Scan Spot Metersets Delivered",
    "Keyword": "Scan​Spot​Metersets​Delivered",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(3008,0048)",
    "Name": "Dose Rate Delivered",
    "Keyword": "Dose​Rate​Delivered",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0050)",
    "Name": "Treatment Summary Calculated Dose Reference Sequence",
    "Keyword": "Treatment​Summary​Calculated​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0052)",
    "Name": "Cumulative Dose to Dose Reference",
    "Keyword": "Cumulative​Dose​ToDose​Reference",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0054)",
    "Name": "First Treatment Date",
    "Keyword": "First​Treatment​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0056)",
    "Name": "Most Recent Treatment Date",
    "Keyword": "Most​Recent​Treatment​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,005A)",
    "Name": "Number of Fractions Delivered",
    "Keyword": "Number​OfFractions​Delivered",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0060)",
    "Name": "Override Sequence",
    "Keyword": "Override​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0061)",
    "Name": "Parameter Sequence Pointer",
    "Keyword": "Parameter​Sequence​Pointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0062)",
    "Name": "Override Parameter Pointer",
    "Keyword": "Override​Parameter​Pointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0063)",
    "Name": "Parameter Item Index",
    "Keyword": "Parameter​Item​Index",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0064)",
    "Name": "Measured Dose Reference Number",
    "Keyword": "Measured​Dose​Reference​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0065)",
    "Name": "Parameter Pointer",
    "Keyword": "Parameter​Pointer",
    "VR": "AT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0066)",
    "Name": "Override Reason",
    "Keyword": "Override​Reason",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0068)",
    "Name": "Corrected Parameter Sequence",
    "Keyword": "Corrected​Parameter​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,006A)",
    "Name": "Correction Value",
    "Keyword": "Correction​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0070)",
    "Name": "Calculated Dose Reference Sequence",
    "Keyword": "Calculated​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0072)",
    "Name": "Calculated Dose Reference Number",
    "Keyword": "Calculated​Dose​Reference​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0074)",
    "Name": "Calculated Dose Reference Description",
    "Keyword": "Calculated​Dose​Reference​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0076)",
    "Name": "Calculated Dose Reference Dose Value",
    "Keyword": "Calculated​Dose​Reference​Dose​Value",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0078)",
    "Name": "Start Meterset",
    "Keyword": "Start​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,007A)",
    "Name": "End Meterset",
    "Keyword": "End​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0080)",
    "Name": "Referenced Measured Dose Reference Sequence",
    "Keyword": "Referenced​Measured​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0082)",
    "Name": "Referenced Measured Dose Reference Number",
    "Keyword": "Referenced​Measured​Dose​Reference​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0090)",
    "Name": "Referenced Calculated Dose Reference Sequence",
    "Keyword": "Referenced​Calculated​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0092)",
    "Name": "Referenced Calculated Dose Reference Number",
    "Keyword": "Referenced​Calculated​Dose​Reference​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00A0)",
    "Name": "Beam Limiting Device Leaf Pairs Sequence",
    "Keyword": "Beam​Limiting​Device​Leaf​Pairs​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00B0)",
    "Name": "Recorded Wedge Sequence",
    "Keyword": "Recorded​Wedge​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00C0)",
    "Name": "Recorded Compensator Sequence",
    "Keyword": "Recorded​Compensator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00D0)",
    "Name": "Recorded Block Sequence",
    "Keyword": "Recorded​Block​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00E0)",
    "Name": "Treatment Summary Measured Dose Reference Sequence",
    "Keyword": "Treatment​Summary​Measured​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F0)",
    "Name": "Recorded Snout Sequence",
    "Keyword": "Recorded​Snout​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F2)",
    "Name": "Recorded Range Shifter Sequence",
    "Keyword": "Recorded​Range​Shifter​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F4)",
    "Name": "Recorded Lateral Spreading Device Sequence",
    "Keyword": "Recorded​Lateral​Spreading​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,00F6)",
    "Name": "Recorded Range Modulator Sequence",
    "Keyword": "Recorded​Range​Modulator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0100)",
    "Name": "Recorded Source Sequence",
    "Keyword": "Recorded​Source​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0105)",
    "Name": "Source Serial Number",
    "Keyword": "Source​Serial​Number",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0110)",
    "Name": "Treatment Session Application Setup Sequence",
    "Keyword": "Treatment​Session​Application​Setup​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0116)",
    "Name": "Application Setup Check",
    "Keyword": "Application​Setup​Check",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0120)",
    "Name": "Recorded Brachy Accessory Device Sequence",
    "Keyword": "Recorded​Brachy​Accessory​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0122)",
    "Name": "Referenced Brachy Accessory Device Number",
    "Keyword": "Referenced​Brachy​Accessory​Device​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0130)",
    "Name": "Recorded Channel Sequence",
    "Keyword": "Recorded​Channel​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0132)",
    "Name": "Specified Channel Total Time",
    "Keyword": "Specified​Channel​Total​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0134)",
    "Name": "Delivered Channel Total Time",
    "Keyword": "Delivered​Channel​Total​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0136)",
    "Name": "Specified Number of Pulses",
    "Keyword": "Specified​Number​OfPulses",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0138)",
    "Name": "Delivered Number of Pulses",
    "Keyword": "Delivered​Number​OfPulses",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,013A)",
    "Name": "Specified Pulse Repetition Interval",
    "Keyword": "Specified​Pulse​Repetition​Interval",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,013C)",
    "Name": "Delivered Pulse Repetition Interval",
    "Keyword": "Delivered​Pulse​Repetition​Interval",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0140)",
    "Name": "Recorded Source Applicator Sequence",
    "Keyword": "Recorded​Source​Applicator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0142)",
    "Name": "Referenced Source Applicator Number",
    "Keyword": "Referenced​Source​Applicator​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0150)",
    "Name": "Recorded Channel Shield Sequence",
    "Keyword": "Recorded​Channel​Shield​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0152)",
    "Name": "Referenced Channel Shield Number",
    "Keyword": "Referenced​Channel​Shield​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0160)",
    "Name": "Brachy Control Point Delivered Sequence",
    "Keyword": "Brachy​Control​Point​Delivered​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0162)",
    "Name": "Safe Position Exit Date",
    "Keyword": "Safe​Position​Exit​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0164)",
    "Name": "Safe Position Exit Time",
    "Keyword": "Safe​Position​Exit​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0166)",
    "Name": "Safe Position Return Date",
    "Keyword": "Safe​Position​Return​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0168)",
    "Name": "Safe Position Return Time",
    "Keyword": "Safe​Position​Return​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0200)",
    "Name": "Current Treatment Status",
    "Keyword": "Current​Treatment​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0202)",
    "Name": "Treatment Status Comment",
    "Keyword": "Treatment​Status​Comment",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0220)",
    "Name": "Fraction Group Summary Sequence",
    "Keyword": "Fraction​Group​Summary​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0223)",
    "Name": "Referenced Fraction Number",
    "Keyword": "Referenced​Fraction​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0224)",
    "Name": "Fraction Group Type",
    "Keyword": "Fraction​Group​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0230)",
    "Name": "Beam Stopper Position",
    "Keyword": "Beam​Stopper​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0240)",
    "Name": "Fraction Status Summary Sequence",
    "Keyword": "Fraction​Status​Summary​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0250)",
    "Name": "Treatment Date",
    "Keyword": "Treatment​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(3008,0251)",
    "Name": "Treatment Time",
    "Keyword": "Treatment​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0002)",
    "Name": "RT Plan Label",
    "Keyword": "RT​Plan​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0003)",
    "Name": "RT Plan Name",
    "Keyword": "RT​Plan​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0004)",
    "Name": "RT Plan Description",
    "Keyword": "RT​Plan​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0006)",
    "Name": "RT Plan Date",
    "Keyword": "RT​Plan​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0007)",
    "Name": "RT Plan Time",
    "Keyword": "RT​Plan​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0009)",
    "Name": "Treatment Protocols",
    "Keyword": "Treatment​Protocols",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,000A)",
    "Name": "Plan Intent",
    "Keyword": "Plan​Intent",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,000B)",
    "Name": "Treatment Sites",
    "Keyword": "Treatment​Sites",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,000C)",
    "Name": "RT Plan Geometry",
    "Keyword": "RT​Plan​Geometry",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,000E)",
    "Name": "Prescription Description",
    "Keyword": "Prescription​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0010)",
    "Name": "Dose Reference Sequence",
    "Keyword": "Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0012)",
    "Name": "Dose Reference Number",
    "Keyword": "Dose​Reference​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0013)",
    "Name": "Dose Reference UID",
    "Keyword": "Dose​ReferenceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0014)",
    "Name": "Dose Reference Structure Type",
    "Keyword": "Dose​Reference​Structure​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0015)",
    "Name": "Nominal Beam Energy Unit",
    "Keyword": "Nominal​Beam​Energy​Unit",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0016)",
    "Name": "Dose Reference Description",
    "Keyword": "Dose​Reference​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0018)",
    "Name": "Dose Reference Point Coordinates",
    "Keyword": "Dose​Reference​Point​Coordinates",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,001A)",
    "Name": "Nominal Prior Dose",
    "Keyword": "Nominal​Prior​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0020)",
    "Name": "Dose Reference Type",
    "Keyword": "Dose​Reference​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0021)",
    "Name": "Constraint Weight",
    "Keyword": "Constraint​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0022)",
    "Name": "Delivery Warning Dose",
    "Keyword": "Delivery​Warning​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0023)",
    "Name": "Delivery Maximum Dose",
    "Keyword": "Delivery​Maximum​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0025)",
    "Name": "Target Minimum Dose",
    "Keyword": "Target​Minimum​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0026)",
    "Name": "Target Prescription Dose",
    "Keyword": "Target​Prescription​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0027)",
    "Name": "Target Maximum Dose",
    "Keyword": "Target​Maximum​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0028)",
    "Name": "Target Underdose Volume Fraction",
    "Keyword": "Target​Underdose​Volume​Fraction",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002A)",
    "Name": "Organ at Risk Full-volume Dose",
    "Keyword": "Organ​AtRisk​Full​Volume​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002B)",
    "Name": "Organ at Risk Limit Dose",
    "Keyword": "Organ​AtRisk​Limit​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002C)",
    "Name": "Organ at Risk Maximum Dose",
    "Keyword": "Organ​AtRisk​Maximum​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,002D)",
    "Name": "Organ at Risk Overdose Volume Fraction",
    "Keyword": "Organ​AtRisk​Overdose​Volume​Fraction",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0040)",
    "Name": "Tolerance Table Sequence",
    "Keyword": "Tolerance​Table​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0042)",
    "Name": "Tolerance Table Number",
    "Keyword": "Tolerance​Table​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0043)",
    "Name": "Tolerance Table Label",
    "Keyword": "Tolerance​Table​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0044)",
    "Name": "Gantry Angle Tolerance",
    "Keyword": "Gantry​Angle​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0046)",
    "Name": "Beam Limiting Device Angle Tolerance",
    "Keyword": "Beam​Limiting​Device​Angle​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0048)",
    "Name": "Beam Limiting Device Tolerance Sequence",
    "Keyword": "Beam​Limiting​Device​Tolerance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004A)",
    "Name": "Beam Limiting Device Position Tolerance",
    "Keyword": "Beam​Limiting​Device​Position​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004B)",
    "Name": "Snout Position Tolerance",
    "Keyword": "Snout​Position​Tolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004C)",
    "Name": "Patient Support Angle Tolerance",
    "Keyword": "Patient​Support​Angle​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004E)",
    "Name": "Table Top Eccentric Angle Tolerance",
    "Keyword": "Table​Top​Eccentric​Angle​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,004F)",
    "Name": "Table Top Pitch Angle Tolerance",
    "Keyword": "Table​Top​Pitch​Angle​Tolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0050)",
    "Name": "Table Top Roll Angle Tolerance",
    "Keyword": "Table​Top​Roll​Angle​Tolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0051)",
    "Name": "Table Top Vertical Position Tolerance",
    "Keyword": "Table​Top​Vertical​Position​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0052)",
    "Name": "Table Top Longitudinal Position Tolerance",
    "Keyword": "Table​Top​Longitudinal​Position​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0053)",
    "Name": "Table Top Lateral Position Tolerance",
    "Keyword": "Table​Top​Lateral​Position​Tolerance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0055)",
    "Name": "RT Plan Relationship",
    "Keyword": "RT​Plan​Relationship",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0070)",
    "Name": "Fraction Group Sequence",
    "Keyword": "Fraction​Group​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0071)",
    "Name": "Fraction Group Number",
    "Keyword": "Fraction​Group​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0072)",
    "Name": "Fraction Group Description",
    "Keyword": "Fraction​Group​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0078)",
    "Name": "Number of Fractions Planned",
    "Keyword": "Number​OfFractions​Planned",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0079)",
    "Name": "Number of Fraction Pattern Digits Per Day",
    "Keyword": "Number​OfFraction​Pattern​Digits​Per​Day",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,007A)",
    "Name": "Repeat Fraction Cycle Length",
    "Keyword": "Repeat​Fraction​Cycle​Length",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,007B)",
    "Name": "Fraction Pattern",
    "Keyword": "Fraction​Pattern",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0080)",
    "Name": "Number of Beams",
    "Keyword": "Number​OfBeams",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0082)",
    "Name": "Beam Dose Specification Point",
    "Keyword": "Beam​Dose​Specification​Point",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,0084)",
    "Name": "Beam Dose",
    "Keyword": "Beam​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0086)",
    "Name": "Beam Meterset",
    "Keyword": "Beam​Meterset",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0088)",
    "Name": "Beam Dose Point Depth",
    "Keyword": "Beam​Dose​Point​Depth",
    "VR": "FL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(300A,0089)",
    "Name": "Beam Dose Point Equivalent Depth",
    "Keyword": "Beam​Dose​Point​Equivalent​Depth",
    "VR": "FL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(300A,008A)",
    "Name": "Beam Dose Point SSD",
    "Keyword": "Beam​Dose​PointSSD",
    "VR": "FL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(300A,008B)",
    "Name": "Beam Dose Meaning",
    "Keyword": "Beam​Dose​Meaning",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008C)",
    "Name": "Beam Dose Verification Control Point Sequence",
    "Keyword": "Beam​Dose​Verification​Control​Point​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008D)",
    "Name": "Average Beam Dose Point Depth",
    "Keyword": "Average​Beam​Dose​Point​Depth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008E)",
    "Name": "Average Beam Dose Point Equivalent Depth",
    "Keyword": "Average​Beam​Dose​Point​Equivalent​Depth",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,008F)",
    "Name": "Average Beam Dose Point SSD",
    "Keyword": "Average​Beam​Dose​PointSSD",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00A0)",
    "Name": "Number of Brachy Application Setups",
    "Keyword": "Number​OfBrachy​Application​Setups",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00A2)",
    "Name": "Brachy Application Setup Dose Specification Point",
    "Keyword": "Brachy​Application​Setup​Dose​Specification​Point",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,00A4)",
    "Name": "Brachy Application Setup Dose",
    "Keyword": "Brachy​Application​Setup​Dose",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B0)",
    "Name": "Beam Sequence",
    "Keyword": "Beam​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B2)",
    "Name": "Treatment Machine Name",
    "Keyword": "Treatment​Machine​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B3)",
    "Name": "Primary Dosimeter Unit",
    "Keyword": "Primary​Dosimeter​Unit",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B4)",
    "Name": "Source-Axis Distance",
    "Keyword": "Source​Axis​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B6)",
    "Name": "Beam Limiting Device Sequence",
    "Keyword": "Beam​Limiting​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00B8)",
    "Name": "RT Beam Limiting Device Type",
    "Keyword": "RT​Beam​Limiting​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BA)",
    "Name": "Source to Beam Limiting Device Distance",
    "Keyword": "Source​ToBeam​Limiting​Device​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BB)",
    "Name": "Isocenter to Beam Limiting Device Distance",
    "Keyword": "Isocenter​ToBeam​Limiting​Device​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BC)",
    "Name": "Number of Leaf/Jaw Pairs",
    "Keyword": "Number​OfLeaf​Jaw​Pairs",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00BE)",
    "Name": "Leaf Position Boundaries",
    "Keyword": "Leaf​Position​Boundaries",
    "VR": "DS",
    "VM": "3-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C0)",
    "Name": "Beam Number",
    "Keyword": "Beam​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C2)",
    "Name": "Beam Name",
    "Keyword": "Beam​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C3)",
    "Name": "Beam Description",
    "Keyword": "Beam​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C4)",
    "Name": "Beam Type",
    "Keyword": "Beam​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C6)",
    "Name": "Radiation Type",
    "Keyword": "Radiation​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C7)",
    "Name": "High-Dose Technique Type",
    "Keyword": "High​Dose​Technique​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00C8)",
    "Name": "Reference Image Number",
    "Keyword": "Reference​Image​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00CA)",
    "Name": "Planned Verification Image Sequence",
    "Keyword": "Planned​Verification​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00CC)",
    "Name": "Imaging Device-Specific Acquisition Parameters",
    "Keyword": "Imaging​Device​Specific​Acquisition​Parameters",
    "VR": "LO",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00CE)",
    "Name": "Treatment Delivery Type",
    "Keyword": "Treatment​Delivery​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D0)",
    "Name": "Number of Wedges",
    "Keyword": "Number​OfWedges",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D1)",
    "Name": "Wedge Sequence",
    "Keyword": "Wedge​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D2)",
    "Name": "Wedge Number",
    "Keyword": "Wedge​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D3)",
    "Name": "Wedge Type",
    "Keyword": "Wedge​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D4)",
    "Name": "Wedge ID",
    "Keyword": "WedgeID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D5)",
    "Name": "Wedge Angle",
    "Keyword": "Wedge​Angle",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D6)",
    "Name": "Wedge Factor",
    "Keyword": "Wedge​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D7)",
    "Name": "Total Wedge Tray Water-Equivalent Thickness",
    "Keyword": "Total​Wedge​Tray​Water​Equivalent​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D8)",
    "Name": "Wedge Orientation",
    "Keyword": "Wedge​Orientation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00D9)",
    "Name": "Isocenter to Wedge Tray Distance",
    "Keyword": "Isocenter​ToWedge​Tray​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DA)",
    "Name": "Source to Wedge Tray Distance",
    "Keyword": "Source​ToWedge​Tray​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DB)",
    "Name": "Wedge Thin Edge Position",
    "Keyword": "Wedge​Thin​Edge​Position",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DC)",
    "Name": "Bolus ID",
    "Keyword": "BolusID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00DD)",
    "Name": "Bolus Description",
    "Keyword": "Bolus​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E0)",
    "Name": "Number of Compensators",
    "Keyword": "Number​OfCompensators",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E1)",
    "Name": "Material ID",
    "Keyword": "MaterialID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E2)",
    "Name": "Total Compensator Tray Factor",
    "Keyword": "Total​Compensator​Tray​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E3)",
    "Name": "Compensator Sequence",
    "Keyword": "Compensator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E4)",
    "Name": "Compensator Number",
    "Keyword": "Compensator​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E5)",
    "Name": "Compensator ID",
    "Keyword": "CompensatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E6)",
    "Name": "Source to Compensator Tray Distance",
    "Keyword": "Source​ToCompensator​Tray​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E7)",
    "Name": "Compensator Rows",
    "Keyword": "Compensator​Rows",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E8)",
    "Name": "Compensator Columns",
    "Keyword": "Compensator​Columns",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00E9)",
    "Name": "Compensator Pixel Spacing",
    "Keyword": "Compensator​Pixel​Spacing",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EA)",
    "Name": "Compensator Position",
    "Keyword": "Compensator​Position",
    "VR": "DS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EB)",
    "Name": "Compensator Transmission Data",
    "Keyword": "Compensator​Transmission​Data",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EC)",
    "Name": "Compensator Thickness Data",
    "Keyword": "Compensator​Thickness​Data",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,00ED)",
    "Name": "Number of Boli",
    "Keyword": "Number​OfBoli",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EE)",
    "Name": "Compensator Type",
    "Keyword": "Compensator​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00EF)",
    "Name": "Compensator Tray ID",
    "Keyword": "Compensator​TrayID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F0)",
    "Name": "Number of Blocks",
    "Keyword": "Number​OfBlocks",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F2)",
    "Name": "Total Block Tray Factor",
    "Keyword": "Total​Block​Tray​Factor",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F3)",
    "Name": "Total Block Tray Water-Equivalent Thickness",
    "Keyword": "Total​Block​Tray​Water​Equivalent​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F4)",
    "Name": "Block Sequence",
    "Keyword": "Block​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F5)",
    "Name": "Block Tray ID",
    "Keyword": "Block​TrayID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F6)",
    "Name": "Source to Block Tray Distance",
    "Keyword": "Source​ToBlock​Tray​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F7)",
    "Name": "Isocenter to Block Tray Distance",
    "Keyword": "Isocenter​ToBlock​Tray​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F8)",
    "Name": "Block Type",
    "Keyword": "Block​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00F9)",
    "Name": "Accessory Code",
    "Keyword": "Accessory​Code",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FA)",
    "Name": "Block Divergence",
    "Keyword": "Block​Divergence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FB)",
    "Name": "Block Mounting Position",
    "Keyword": "Block​Mounting​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FC)",
    "Name": "Block Number",
    "Keyword": "Block​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,00FE)",
    "Name": "Block Name",
    "Keyword": "Block​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0100)",
    "Name": "Block Thickness",
    "Keyword": "Block​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0102)",
    "Name": "Block Transmission",
    "Keyword": "Block​Transmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0104)",
    "Name": "Block Number of Points",
    "Keyword": "Block​Number​OfPoints",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0106)",
    "Name": "Block Data",
    "Keyword": "Block​Data",
    "VR": "DS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(300A,0107)",
    "Name": "Applicator Sequence",
    "Keyword": "Applicator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0108)",
    "Name": "Applicator ID",
    "Keyword": "ApplicatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0109)",
    "Name": "Applicator Type",
    "Keyword": "Applicator​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,010A)",
    "Name": "Applicator Description",
    "Keyword": "Applicator​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,010C)",
    "Name": "Cumulative Dose Reference Coefficient",
    "Keyword": "Cumulative​Dose​Reference​Coefficient",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,010E)",
    "Name": "Final Cumulative Meterset Weight",
    "Keyword": "Final​Cumulative​Meterset​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0110)",
    "Name": "Number of Control Points",
    "Keyword": "Number​OfControl​Points",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0111)",
    "Name": "Control Point Sequence",
    "Keyword": "Control​Point​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0112)",
    "Name": "Control Point Index",
    "Keyword": "Control​Point​Index",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0114)",
    "Name": "Nominal Beam Energy",
    "Keyword": "Nominal​Beam​Energy",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0115)",
    "Name": "Dose Rate Set",
    "Keyword": "Dose​Rate​Set",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0116)",
    "Name": "Wedge Position Sequence",
    "Keyword": "Wedge​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0118)",
    "Name": "Wedge Position",
    "Keyword": "Wedge​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,011A)",
    "Name": "Beam Limiting Device Position Sequence",
    "Keyword": "Beam​Limiting​Device​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,011C)",
    "Name": "Leaf/Jaw Positions",
    "Keyword": "Leaf​Jaw​Positions",
    "VR": "DS",
    "VM": "2-2n",
    "Retired": ""
  },
  {
    "Tag": "(300A,011E)",
    "Name": "Gantry Angle",
    "Keyword": "Gantry​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,011F)",
    "Name": "Gantry Rotation Direction",
    "Keyword": "Gantry​Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0120)",
    "Name": "Beam Limiting Device Angle",
    "Keyword": "Beam​Limiting​Device​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0121)",
    "Name": "Beam Limiting Device Rotation Direction",
    "Keyword": "Beam​Limiting​Device​Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0122)",
    "Name": "Patient Support Angle",
    "Keyword": "Patient​Support​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0123)",
    "Name": "Patient Support Rotation Direction",
    "Keyword": "Patient​Support​Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0124)",
    "Name": "Table Top Eccentric Axis Distance",
    "Keyword": "Table​Top​Eccentric​Axis​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0125)",
    "Name": "Table Top Eccentric Angle",
    "Keyword": "Table​Top​Eccentric​Angle",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0126)",
    "Name": "Table Top Eccentric Rotation Direction",
    "Keyword": "Table​Top​Eccentric​Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0128)",
    "Name": "Table Top Vertical Position",
    "Keyword": "Table​Top​Vertical​Position",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0129)",
    "Name": "Table Top Longitudinal Position",
    "Keyword": "Table​Top​Longitudinal​Position",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,012A)",
    "Name": "Table Top Lateral Position",
    "Keyword": "Table​Top​Lateral​Position",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,012C)",
    "Name": "Isocenter Position",
    "Keyword": "Isocenter​Position",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,012E)",
    "Name": "Surface Entry Point",
    "Keyword": "Surface​Entry​Point",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,0130)",
    "Name": "Source to Surface Distance",
    "Keyword": "Source​ToSurface​Distance",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0134)",
    "Name": "Cumulative Meterset Weight",
    "Keyword": "Cumulative​Meterset​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0140)",
    "Name": "Table Top Pitch Angle",
    "Keyword": "Table​Top​Pitch​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0142)",
    "Name": "Table Top Pitch Rotation Direction",
    "Keyword": "Table​Top​Pitch​Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0144)",
    "Name": "Table Top Roll Angle",
    "Keyword": "Table​Top​Roll​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0146)",
    "Name": "Table Top Roll Rotation Direction",
    "Keyword": "Table​Top​Roll​Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0148)",
    "Name": "Head Fixation Angle",
    "Keyword": "Head​Fixation​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,014A)",
    "Name": "Gantry Pitch Angle",
    "Keyword": "Gantry​Pitch​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,014C)",
    "Name": "Gantry Pitch Rotation Direction",
    "Keyword": "Gantry​Pitch​Rotation​Direction",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,014E)",
    "Name": "Gantry Pitch Angle Tolerance",
    "Keyword": "Gantry​Pitch​Angle​Tolerance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0180)",
    "Name": "Patient Setup Sequence",
    "Keyword": "Patient​Setup​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0182)",
    "Name": "Patient Setup Number",
    "Keyword": "Patient​Setup​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0183)",
    "Name": "Patient Setup Label",
    "Keyword": "Patient​Setup​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0184)",
    "Name": "Patient Additional Position",
    "Keyword": "Patient​Additional​Position",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0190)",
    "Name": "Fixation Device Sequence",
    "Keyword": "Fixation​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0192)",
    "Name": "Fixation Device Type",
    "Keyword": "Fixation​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0194)",
    "Name": "Fixation Device Label",
    "Keyword": "Fixation​Device​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0196)",
    "Name": "Fixation Device Description",
    "Keyword": "Fixation​Device​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0198)",
    "Name": "Fixation Device Position",
    "Keyword": "Fixation​Device​Position",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0199)",
    "Name": "Fixation Device Pitch Angle",
    "Keyword": "Fixation​Device​Pitch​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,019A)",
    "Name": "Fixation Device Roll Angle",
    "Keyword": "Fixation​Device​Roll​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A0)",
    "Name": "Shielding Device Sequence",
    "Keyword": "Shielding​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A2)",
    "Name": "Shielding Device Type",
    "Keyword": "Shielding​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A4)",
    "Name": "Shielding Device Label",
    "Keyword": "Shielding​Device​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A6)",
    "Name": "Shielding Device Description",
    "Keyword": "Shielding​Device​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01A8)",
    "Name": "Shielding Device Position",
    "Keyword": "Shielding​Device​Position",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B0)",
    "Name": "Setup Technique",
    "Keyword": "Setup​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B2)",
    "Name": "Setup Technique Description",
    "Keyword": "Setup​Technique​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B4)",
    "Name": "Setup Device Sequence",
    "Keyword": "Setup​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B6)",
    "Name": "Setup Device Type",
    "Keyword": "Setup​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01B8)",
    "Name": "Setup Device Label",
    "Keyword": "Setup​Device​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01BA)",
    "Name": "Setup Device Description",
    "Keyword": "Setup​Device​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01BC)",
    "Name": "Setup Device Parameter",
    "Keyword": "Setup​Device​Parameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D0)",
    "Name": "Setup Reference Description",
    "Keyword": "Setup​Reference​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D2)",
    "Name": "Table Top Vertical Setup Displacement",
    "Keyword": "Table​Top​Vertical​Setup​Displacement",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D4)",
    "Name": "Table Top Longitudinal Setup Displacement",
    "Keyword": "Table​Top​Longitudinal​Setup​Displacement",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,01D6)",
    "Name": "Table Top Lateral Setup Displacement",
    "Keyword": "Table​Top​Lateral​Setup​Displacement",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0200)",
    "Name": "Brachy Treatment Technique",
    "Keyword": "Brachy​Treatment​Technique",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0202)",
    "Name": "Brachy Treatment Type",
    "Keyword": "Brachy​Treatment​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0206)",
    "Name": "Treatment Machine Sequence",
    "Keyword": "Treatment​Machine​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0210)",
    "Name": "Source Sequence",
    "Keyword": "Source​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0212)",
    "Name": "Source Number",
    "Keyword": "Source​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0214)",
    "Name": "Source Type",
    "Keyword": "Source​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0216)",
    "Name": "Source Manufacturer",
    "Keyword": "Source​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0218)",
    "Name": "Active Source Diameter",
    "Keyword": "Active​Source​Diameter",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,021A)",
    "Name": "Active Source Length",
    "Keyword": "Active​Source​Length",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,021B)",
    "Name": "Source Model ID",
    "Keyword": "Source​Model​ID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,021C)",
    "Name": "Source Description",
    "Keyword": "Source​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0222)",
    "Name": "Source Encapsulation Nominal Thickness",
    "Keyword": "Source​Encapsulation​Nominal​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0224)",
    "Name": "Source Encapsulation Nominal Transmission",
    "Keyword": "Source​Encapsulation​Nominal​Transmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0226)",
    "Name": "Source Isotope Name",
    "Keyword": "Source​Isotope​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0228)",
    "Name": "Source Isotope Half Life",
    "Keyword": "Source​Isotope​Half​Life",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0229)",
    "Name": "Source Strength Units",
    "Keyword": "Source​Strength​Units",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022A)",
    "Name": "Reference Air Kerma Rate",
    "Keyword": "Reference​Air​Kerma​Rate",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022B)",
    "Name": "Source Strength",
    "Keyword": "Source​Strength",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022C)",
    "Name": "Source Strength Reference Date",
    "Keyword": "Source​Strength​Reference​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,022E)",
    "Name": "Source Strength Reference Time",
    "Keyword": "Source​Strength​Reference​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0230)",
    "Name": "Application Setup Sequence",
    "Keyword": "Application​Setup​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0232)",
    "Name": "Application Setup Type",
    "Keyword": "Application​Setup​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0234)",
    "Name": "Application Setup Number",
    "Keyword": "Application​Setup​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0236)",
    "Name": "Application Setup Name",
    "Keyword": "Application​Setup​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0238)",
    "Name": "Application Setup Manufacturer",
    "Keyword": "Application​Setup​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0240)",
    "Name": "Template Number",
    "Keyword": "Template​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0242)",
    "Name": "Template Type",
    "Keyword": "Template​Type",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0244)",
    "Name": "Template Name",
    "Keyword": "Template​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0250)",
    "Name": "Total Reference Air Kerma",
    "Keyword": "Total​Reference​Air​Kerma",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0260)",
    "Name": "Brachy Accessory Device Sequence",
    "Keyword": "Brachy​Accessory​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0262)",
    "Name": "Brachy Accessory Device Number",
    "Keyword": "Brachy​Accessory​Device​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0263)",
    "Name": "Brachy Accessory Device ID",
    "Keyword": "Brachy​Accessory​DeviceID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0264)",
    "Name": "Brachy Accessory Device Type",
    "Keyword": "Brachy​Accessory​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0266)",
    "Name": "Brachy Accessory Device Name",
    "Keyword": "Brachy​Accessory​Device​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,026A)",
    "Name": "Brachy Accessory Device Nominal Thickness",
    "Keyword": "Brachy​Accessory​Device​Nominal​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,026C)",
    "Name": "Brachy Accessory Device Nominal Transmission",
    "Keyword": "Brachy​Accessory​Device​Nominal​Transmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0280)",
    "Name": "Channel Sequence",
    "Keyword": "Channel​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0282)",
    "Name": "Channel Number",
    "Keyword": "Channel​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0284)",
    "Name": "Channel Length",
    "Keyword": "Channel​Length",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0286)",
    "Name": "Channel Total Time",
    "Keyword": "Channel​Total​Time",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0288)",
    "Name": "Source Movement Type",
    "Keyword": "Source​Movement​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,028A)",
    "Name": "Number of Pulses",
    "Keyword": "Number​OfPulses",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,028C)",
    "Name": "Pulse Repetition Interval",
    "Keyword": "Pulse​Repetition​Interval",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0290)",
    "Name": "Source Applicator Number",
    "Keyword": "Source​Applicator​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0291)",
    "Name": "Source Applicator ID",
    "Keyword": "Source​ApplicatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0292)",
    "Name": "Source Applicator Type",
    "Keyword": "Source​Applicator​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0294)",
    "Name": "Source Applicator Name",
    "Keyword": "Source​Applicator​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0296)",
    "Name": "Source Applicator Length",
    "Keyword": "Source​Applicator​Length",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0298)",
    "Name": "Source Applicator Manufacturer",
    "Keyword": "Source​Applicator​Manufacturer",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,029C)",
    "Name": "Source Applicator Wall Nominal Thickness",
    "Keyword": "Source​Applicator​Wall​Nominal​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,029E)",
    "Name": "Source Applicator Wall Nominal Transmission",
    "Keyword": "Source​Applicator​Wall​Nominal​Transmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02A0)",
    "Name": "Source Applicator Step Size",
    "Keyword": "Source​Applicator​Step​Size",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02A2)",
    "Name": "Transfer Tube Number",
    "Keyword": "Transfer​Tube​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02A4)",
    "Name": "Transfer Tube Length",
    "Keyword": "Transfer​Tube​Length",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B0)",
    "Name": "Channel Shield Sequence",
    "Keyword": "Channel​Shield​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B2)",
    "Name": "Channel Shield Number",
    "Keyword": "Channel​Shield​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B3)",
    "Name": "Channel Shield ID",
    "Keyword": "Channel​ShieldID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B4)",
    "Name": "Channel Shield Name",
    "Keyword": "Channel​Shield​Name",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02B8)",
    "Name": "Channel Shield Nominal Thickness",
    "Keyword": "Channel​Shield​Nominal​Thickness",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02BA)",
    "Name": "Channel Shield Nominal Transmission",
    "Keyword": "Channel​Shield​Nominal​Transmission",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02C8)",
    "Name": "Final Cumulative Time Weight",
    "Keyword": "Final​Cumulative​Time​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D0)",
    "Name": "Brachy Control Point Sequence",
    "Keyword": "Brachy​Control​Point​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D2)",
    "Name": "Control Point Relative Position",
    "Keyword": "Control​Point​Relative​Position",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D4)",
    "Name": "Control Point 3D Position",
    "Keyword": "Control​Point3D​Position",
    "VR": "DS",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,02D6)",
    "Name": "Cumulative Time Weight",
    "Keyword": "Cumulative​Time​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E0)",
    "Name": "Compensator Divergence",
    "Keyword": "Compensator​Divergence",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E1)",
    "Name": "Compensator Mounting Position",
    "Keyword": "Compensator​Mounting​Position",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E2)",
    "Name": "Source to Compensator Distance",
    "Keyword": "Source​ToCompensator​Distance",
    "VR": "DS",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E3)",
    "Name": "Total Compensator Tray Water-Equivalent Thickness",
    "Keyword": "Total​Compensator​Tray​Water​Equivalent​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E4)",
    "Name": "Isocenter to Compensator Tray Distance",
    "Keyword": "Isocenter​ToCompensator​Tray​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E5)",
    "Name": "Compensator Column Offset",
    "Keyword": "Compensator​Column​Offset",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E6)",
    "Name": "Isocenter to Compensator Distances",
    "Keyword": "Isocenter​ToCompensator​Distances",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E7)",
    "Name": "Compensator Relative Stopping Power Ratio",
    "Keyword": "Compensator​Relative​Stopping​Power​Ratio",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02E8)",
    "Name": "Compensator Milling Tool Diameter",
    "Keyword": "Compensator​Milling​Tool​Diameter",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02EA)",
    "Name": "Ion Range Compensator Sequence",
    "Keyword": "Ion​Range​Compensator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,02EB)",
    "Name": "Compensator Description",
    "Keyword": "Compensator​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0302)",
    "Name": "Radiation Mass Number",
    "Keyword": "Radiation​Mass​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0304)",
    "Name": "Radiation Atomic Number",
    "Keyword": "Radiation​Atomic​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0306)",
    "Name": "Radiation Charge State",
    "Keyword": "Radiation​Charge​State",
    "VR": "SS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0308)",
    "Name": "Scan Mode",
    "Keyword": "Scan​Mode",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,030A)",
    "Name": "Virtual Source-Axis Distances",
    "Keyword": "Virtual​Source​Axis​Distances",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,030C)",
    "Name": "Snout Sequence",
    "Keyword": "Snout​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,030D)",
    "Name": "Snout Position",
    "Keyword": "Snout​Position",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,030F)",
    "Name": "Snout ID",
    "Keyword": "SnoutID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0312)",
    "Name": "Number of Range Shifters",
    "Keyword": "Number​OfRange​Shifters",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0314)",
    "Name": "Range Shifter Sequence",
    "Keyword": "Range​Shifter​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0316)",
    "Name": "Range Shifter Number",
    "Keyword": "Range​Shifter​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0318)",
    "Name": "Range Shifter ID",
    "Keyword": "Range​ShifterID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0320)",
    "Name": "Range Shifter Type",
    "Keyword": "Range​Shifter​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0322)",
    "Name": "Range Shifter Description",
    "Keyword": "Range​Shifter​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0330)",
    "Name": "Number of Lateral Spreading Devices",
    "Keyword": "Number​OfLateral​Spreading​Devices",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0332)",
    "Name": "Lateral Spreading Device Sequence",
    "Keyword": "Lateral​Spreading​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0334)",
    "Name": "Lateral Spreading Device Number",
    "Keyword": "Lateral​Spreading​Device​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0336)",
    "Name": "Lateral Spreading Device ID",
    "Keyword": "Lateral​Spreading​DeviceID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0338)",
    "Name": "Lateral Spreading Device Type",
    "Keyword": "Lateral​Spreading​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,033A)",
    "Name": "Lateral Spreading Device Description",
    "Keyword": "Lateral​Spreading​Device​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,033C)",
    "Name": "Lateral Spreading Device Water Equivalent Thickness",
    "Keyword": "Lateral​Spreading​Device​Water​Equivalent​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0340)",
    "Name": "Number of Range Modulators",
    "Keyword": "Number​OfRange​Modulators",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0342)",
    "Name": "Range Modulator Sequence",
    "Keyword": "Range​Modulator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0344)",
    "Name": "Range Modulator Number",
    "Keyword": "Range​Modulator​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0346)",
    "Name": "Range Modulator ID",
    "Keyword": "Range​ModulatorID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0348)",
    "Name": "Range Modulator Type",
    "Keyword": "Range​Modulator​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,034A)",
    "Name": "Range Modulator Description",
    "Keyword": "Range​Modulator​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,034C)",
    "Name": "Beam Current Modulation ID",
    "Keyword": "Beam​Current​ModulationID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0350)",
    "Name": "Patient Support Type",
    "Keyword": "Patient​Support​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0352)",
    "Name": "Patient Support ID",
    "Keyword": "Patient​SupportID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0354)",
    "Name": "Patient Support Accessory Code",
    "Keyword": "Patient​Support​Accessory​Code",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0356)",
    "Name": "Fixation Light Azimuthal Angle",
    "Keyword": "Fixation​Light​Azimuthal​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0358)",
    "Name": "Fixation Light Polar Angle",
    "Keyword": "Fixation​Light​Polar​Angle",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,035A)",
    "Name": "Meterset Rate",
    "Keyword": "Meterset​Rate",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0360)",
    "Name": "Range Shifter Settings Sequence",
    "Keyword": "Range​Shifter​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0362)",
    "Name": "Range Shifter Setting",
    "Keyword": "Range​Shifter​Setting",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0364)",
    "Name": "Isocenter to Range Shifter Distance",
    "Keyword": "Isocenter​ToRange​Shifter​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0366)",
    "Name": "Range Shifter Water Equivalent Thickness",
    "Keyword": "Range​Shifter​Water​Equivalent​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0370)",
    "Name": "Lateral Spreading Device Settings Sequence",
    "Keyword": "Lateral​Spreading​Device​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0372)",
    "Name": "Lateral Spreading Device Setting",
    "Keyword": "Lateral​Spreading​Device​Setting",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0374)",
    "Name": "Isocenter to Lateral Spreading Device Distance",
    "Keyword": "Isocenter​ToLateral​Spreading​Device​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0380)",
    "Name": "Range Modulator Settings Sequence",
    "Keyword": "Range​Modulator​Settings​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0382)",
    "Name": "Range Modulator Gating Start Value",
    "Keyword": "Range​Modulator​Gating​Start​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0384)",
    "Name": "Range Modulator Gating Stop Value",
    "Keyword": "Range​Modulator​Gating​Stop​Value",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0386)",
    "Name": "Range Modulator Gating Start Water Equivalent Thickness",
    "Keyword": "Range​Modulator​Gating​Start​Water​Equivalent​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0388)",
    "Name": "Range Modulator Gating Stop Water Equivalent Thickness",
    "Keyword": "Range​Modulator​Gating​Stop​Water​Equivalent​Thickness",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,038A)",
    "Name": "Isocenter to Range Modulator Distance",
    "Keyword": "Isocenter​ToRange​Modulator​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0390)",
    "Name": "Scan Spot Tune ID",
    "Keyword": "Scan​Spot​TuneID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0392)",
    "Name": "Number of Scan Spot Positions",
    "Keyword": "Number​OfScan​Spot​Positions",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0394)",
    "Name": "Scan Spot Position Map",
    "Keyword": "Scan​Spot​Position​Map",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,0396)",
    "Name": "Scan Spot Meterset Weights",
    "Keyword": "Scan​Spot​Meterset​Weights",
    "VR": "FL",
    "VM": "1-n",
    "Retired": ""
  },
  {
    "Tag": "(300A,0398)",
    "Name": "Scanning Spot Size",
    "Keyword": "Scanning​Spot​Size",
    "VR": "FL",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(300A,039A)",
    "Name": "Number of Paintings",
    "Keyword": "Number​OfPaintings",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A0)",
    "Name": "Ion Tolerance Table Sequence",
    "Keyword": "Ion​Tolerance​Table​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A2)",
    "Name": "Ion Beam Sequence",
    "Keyword": "Ion​Beam​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A4)",
    "Name": "Ion Beam Limiting Device Sequence",
    "Keyword": "Ion​Beam​Limiting​Device​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A6)",
    "Name": "Ion Block Sequence",
    "Keyword": "Ion​Block​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03A8)",
    "Name": "Ion Control Point Sequence",
    "Keyword": "Ion​Control​Point​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03AA)",
    "Name": "Ion Wedge Sequence",
    "Keyword": "Ion​Wedge​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,03AC)",
    "Name": "Ion Wedge Position Sequence",
    "Keyword": "Ion​Wedge​Position​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0401)",
    "Name": "Referenced Setup Image Sequence",
    "Keyword": "Referenced​Setup​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0402)",
    "Name": "Setup Image Comment",
    "Keyword": "Setup​Image​Comment",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0410)",
    "Name": "Motion Synchronization Sequence",
    "Keyword": "Motion​Synchronization​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0412)",
    "Name": "Control Point Orientation",
    "Keyword": "Control​Point​Orientation",
    "VR": "FL",
    "VM": "3",
    "Retired": ""
  },
  {
    "Tag": "(300A,0420)",
    "Name": "General Accessory Sequence",
    "Keyword": "General​Accessory​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0421)",
    "Name": "General Accessory ID",
    "Keyword": "General​AccessoryID",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0422)",
    "Name": "General Accessory Description",
    "Keyword": "General​Accessory​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0423)",
    "Name": "General Accessory Type",
    "Keyword": "General​Accessory​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0424)",
    "Name": "General Accessory Number",
    "Keyword": "General​Accessory​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0425)",
    "Name": "Source to General Accessory Distance",
    "Keyword": "Source​ToGeneral​Accessory​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0431)",
    "Name": "Applicator Geometry Sequence",
    "Keyword": "Applicator​Geometry​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0432)",
    "Name": "Applicator Aperture Shape",
    "Keyword": "Applicator​Aperture​Shape",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0433)",
    "Name": "Applicator Opening",
    "Keyword": "Applicator​Opening",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0434)",
    "Name": "Applicator Opening X",
    "Keyword": "Applicator​OpeningX",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0435)",
    "Name": "Applicator Opening Y",
    "Keyword": "Applicator​OpeningY",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300A,0436)",
    "Name": "Source to Applicator Mounting Position Distance",
    "Keyword": "Source​ToApplicator​Mounting​Position​Distance",
    "VR": "FL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0002)",
    "Name": "Referenced RT Plan Sequence",
    "Keyword": "ReferencedRT​Plan​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0004)",
    "Name": "Referenced Beam Sequence",
    "Keyword": "Referenced​Beam​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0006)",
    "Name": "Referenced Beam Number",
    "Keyword": "Referenced​Beam​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0007)",
    "Name": "Referenced Reference Image Number",
    "Keyword": "Referenced​Reference​Image​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0008)",
    "Name": "Start Cumulative Meterset Weight",
    "Keyword": "Start​Cumulative​Meterset​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0009)",
    "Name": "End Cumulative Meterset Weight",
    "Keyword": "End​Cumulative​Meterset​Weight",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,000A)",
    "Name": "Referenced Brachy Application Setup Sequence",
    "Keyword": "Referenced​Brachy​Application​Setup​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,000C)",
    "Name": "Referenced Brachy Application Setup Number",
    "Keyword": "Referenced​Brachy​Application​Setup​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,000E)",
    "Name": "Referenced Source Number",
    "Keyword": "Referenced​Source​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0020)",
    "Name": "Referenced Fraction Group Sequence",
    "Keyword": "Referenced​Fraction​Group​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0022)",
    "Name": "Referenced Fraction Group Number",
    "Keyword": "Referenced​Fraction​Group​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0040)",
    "Name": "Referenced Verification Image Sequence",
    "Keyword": "Referenced​Verification​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0042)",
    "Name": "Referenced Reference Image Sequence",
    "Keyword": "Referenced​Reference​Image​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0050)",
    "Name": "Referenced Dose Reference Sequence",
    "Keyword": "Referenced​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0051)",
    "Name": "Referenced Dose Reference Number",
    "Keyword": "Referenced​Dose​Reference​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0055)",
    "Name": "Brachy Referenced Dose Reference Sequence",
    "Keyword": "Brachy​Referenced​Dose​Reference​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0060)",
    "Name": "Referenced Structure Set Sequence",
    "Keyword": "Referenced​Structure​Set​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,006A)",
    "Name": "Referenced Patient Setup Number",
    "Keyword": "Referenced​Patient​Setup​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0080)",
    "Name": "Referenced Dose Sequence",
    "Keyword": "Referenced​Dose​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00A0)",
    "Name": "Referenced Tolerance Table Number",
    "Keyword": "Referenced​Tolerance​Table​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00B0)",
    "Name": "Referenced Bolus Sequence",
    "Keyword": "Referenced​Bolus​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00C0)",
    "Name": "Referenced Wedge Number",
    "Keyword": "Referenced​Wedge​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00D0)",
    "Name": "Referenced Compensator Number",
    "Keyword": "Referenced​Compensator​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00E0)",
    "Name": "Referenced Block Number",
    "Keyword": "Referenced​Block​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F0)",
    "Name": "Referenced Control Point Index",
    "Keyword": "Referenced​Control​Point​Index",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F2)",
    "Name": "Referenced Control Point Sequence",
    "Keyword": "Referenced​Control​Point​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F4)",
    "Name": "Referenced Start Control Point Index",
    "Keyword": "Referenced​Start​Control​Point​Index",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,00F6)",
    "Name": "Referenced Stop Control Point Index",
    "Keyword": "Referenced​Stop​Control​Point​Index",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0100)",
    "Name": "Referenced Range Shifter Number",
    "Keyword": "Referenced​Range​Shifter​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0102)",
    "Name": "Referenced Lateral Spreading Device Number",
    "Keyword": "Referenced​Lateral​Spreading​Device​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300C,0104)",
    "Name": "Referenced Range Modulator Number",
    "Keyword": "Referenced​Range​Modulator​Number",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0002)",
    "Name": "Approval Status",
    "Keyword": "Approval​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0004)",
    "Name": "Review Date",
    "Keyword": "Review​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0005)",
    "Name": "Review Time",
    "Keyword": "Review​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(300E,0008)",
    "Name": "Reviewer Name",
    "Keyword": "Reviewer​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(4000,0010)",
    "Name": "Arbitrary",
    "Keyword": "Arbitrary",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4000,4000)",
    "Name": "Text Comments",
    "Keyword": "Text​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0040)",
    "Name": "Results ID",
    "Keyword": "ResultsID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0042)",
    "Name": "Results ID Issuer",
    "Keyword": "ResultsID​Issuer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0050)",
    "Name": "Referenced Interpretation Sequence",
    "Keyword": "Referenced​Interpretation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,00FF)",
    "Name": "Report Production Status (Trial)",
    "Keyword": "Report​Production​Status​Trial",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0100)",
    "Name": "Interpretation Recorded Date",
    "Keyword": "Interpretation​Recorded​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0101)",
    "Name": "Interpretation Recorded Time",
    "Keyword": "Interpretation​Recorded​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0102)",
    "Name": "Interpretation Recorder",
    "Keyword": "Interpretation​Recorder",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0103)",
    "Name": "Reference to Recorded Sound",
    "Keyword": "Reference​ToRecorded​Sound",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0108)",
    "Name": "Interpretation Transcription Date",
    "Keyword": "Interpretation​Transcription​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0109)",
    "Name": "Interpretation Transcription Time",
    "Keyword": "Interpretation​Transcription​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,010A)",
    "Name": "Interpretation Transcriber",
    "Keyword": "Interpretation​Transcriber",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,010B)",
    "Name": "Interpretation Text",
    "Keyword": "Interpretation​Text",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,010C)",
    "Name": "Interpretation Author",
    "Keyword": "Interpretation​Author",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0111)",
    "Name": "Interpretation Approver Sequence",
    "Keyword": "Interpretation​Approver​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0112)",
    "Name": "Interpretation Approval Date",
    "Keyword": "Interpretation​Approval​Date",
    "VR": "DA",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0113)",
    "Name": "Interpretation Approval Time",
    "Keyword": "Interpretation​Approval​Time",
    "VR": "TM",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0114)",
    "Name": "Physician Approving Interpretation",
    "Keyword": "Physician​Approving​Interpretation",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0115)",
    "Name": "Interpretation Diagnosis Description",
    "Keyword": "Interpretation​Diagnosis​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0117)",
    "Name": "Interpretation Diagnosis Code Sequence",
    "Keyword": "Interpretation​Diagnosis​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0118)",
    "Name": "Results Distribution List Sequence",
    "Keyword": "Results​Distribution​List​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0119)",
    "Name": "Distribution Name",
    "Keyword": "Distribution​Name",
    "VR": "PN",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,011A)",
    "Name": "Distribution Address",
    "Keyword": "Distribution​Address",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0200)",
    "Name": "Interpretation ID",
    "Keyword": "InterpretationID",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0202)",
    "Name": "Interpretation ID Issuer",
    "Keyword": "InterpretationID​Issuer",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0210)",
    "Name": "Interpretation Type ID",
    "Keyword": "Interpretation​TypeID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0212)",
    "Name": "Interpretation Status ID",
    "Keyword": "Interpretation​StatusID",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,0300)",
    "Name": "Impressions",
    "Keyword": "Impressions",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4008,4000)",
    "Name": "Results Comments",
    "Keyword": "Results​Comments",
    "VR": "ST",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(4010,0001)",
    "Name": "Low Energy Detectors",
    "Keyword": "Low​Energy​Detectors",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,0002)",
    "Name": "High Energy Detectors",
    "Keyword": "High​Energy​Detectors",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,0004)",
    "Name": "Detector Geometry Sequence",
    "Keyword": "Detector​Geometry​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1001)",
    "Name": "Threat ROI Voxel Sequence",
    "Keyword": "ThreatROI​Voxel​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1004)",
    "Name": "Threat ROI Base",
    "Keyword": "ThreatROI​Base",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1005)",
    "Name": "Threat ROI Extents",
    "Keyword": "ThreatROI​Extents",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1006)",
    "Name": "Threat ROI Bitmap",
    "Keyword": "ThreatROI​Bitmap",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1007)",
    "Name": "Route Segment ID",
    "Keyword": "Route​SegmentID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1008)",
    "Name": "Gantry Type",
    "Keyword": "Gantry​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1009)",
    "Name": "OOI Owner Type",
    "Keyword": "OOI​Owner​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,100A)",
    "Name": "Route Segment Sequence",
    "Keyword": "Route​Segment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1010)",
    "Name": "Potential Threat Object ID",
    "Keyword": "Potential​Threat​ObjectID",
    "VR": "US",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1011)",
    "Name": "Threat Sequence",
    "Keyword": "Threat​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1012)",
    "Name": "Threat Category",
    "Keyword": "Threat​Category",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1013)",
    "Name": "Threat Category Description",
    "Keyword": "Threat​Category​Description",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1014)",
    "Name": "ATD Ability Assessment",
    "Keyword": "ATD​Ability​Assessment",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1015)",
    "Name": "ATD Assessment Flag",
    "Keyword": "ATD​Assessment​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1016)",
    "Name": "ATD Assessment Probability",
    "Keyword": "ATD​Assessment​Probability",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1017)",
    "Name": "Mass",
    "Keyword": "Mass",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1018)",
    "Name": "Density",
    "Keyword": "Density",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1019)",
    "Name": "Z Effective",
    "Keyword": "Z​Effective",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101A)",
    "Name": "Boarding Pass ID",
    "Keyword": "Boarding​PassID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101B)",
    "Name": "Center of Mass",
    "Keyword": "Center​OfMass",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101C)",
    "Name": "Center of PTO",
    "Keyword": "Center​OfPTO",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101D)",
    "Name": "Bounding Polygon",
    "Keyword": "Bounding​Polygon",
    "VR": "FL",
    "VM": "6-n",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101E)",
    "Name": "Route Segment Start Location ID",
    "Keyword": "Route​Segment​Start​LocationID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,101F)",
    "Name": "Route Segment End Location ID",
    "Keyword": "Route​Segment​End​LocationID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1020)",
    "Name": "Route Segment Location ID Type",
    "Keyword": "Route​Segment​LocationID​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1021)",
    "Name": "Abort Reason",
    "Keyword": "Abort​Reason",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1023)",
    "Name": "Volume of PTO",
    "Keyword": "Volume​OfPTO",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1024)",
    "Name": "Abort Flag",
    "Keyword": "Abort​Flag",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1025)",
    "Name": "Route Segment Start Time",
    "Keyword": "Route​Segment​Start​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1026)",
    "Name": "Route Segment End Time",
    "Keyword": "Route​Segment​End​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1027)",
    "Name": "TDR Type",
    "Keyword": "TDR​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1028)",
    "Name": "International Route Segment",
    "Keyword": "International​Route​Segment",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1029)",
    "Name": "Threat Detection Algorithm and Version",
    "Keyword": "Threat​Detection​Algorithmand​Version",
    "VR": "LO",
    "VM": "1-n",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,102A)",
    "Name": "Assigned Location",
    "Keyword": "Assigned​Location",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,102B)",
    "Name": "Alarm Decision Time",
    "Keyword": "Alarm​Decision​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1031)",
    "Name": "Alarm Decision",
    "Keyword": "Alarm​Decision",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1033)",
    "Name": "Number of Total Objects",
    "Keyword": "Number​OfTotal​Objects",
    "VR": "US",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1034)",
    "Name": "Number of Alarm Objects",
    "Keyword": "Number​OfAlarm​Objects",
    "VR": "US",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1037)",
    "Name": "PTO Representation Sequence",
    "Keyword": "PTO​Representation​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1038)",
    "Name": "ATD Assessment Sequence",
    "Keyword": "ATD​Assessment​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1039)",
    "Name": "TIP Type",
    "Keyword": "TIP​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,103A)",
    "Name": "DICOS Version",
    "Keyword": "DICOS​Version",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1041)",
    "Name": "OOI Owner Creation Time",
    "Keyword": "OOI​Owner​Creation​Time",
    "VR": "DT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1042)",
    "Name": "OOI Type",
    "Keyword": "OOI​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1043)",
    "Name": "OOI Size",
    "Keyword": "OOI​Size",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1044)",
    "Name": "Acquisition Status",
    "Keyword": "Acquisition​Status",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1045)",
    "Name": "Basis Materials Code Sequence",
    "Keyword": "Basis​Materials​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1046)",
    "Name": "Phantom Type",
    "Keyword": "Phantom​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1047)",
    "Name": "OOI Owner Sequence",
    "Keyword": "OOI​Owner​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1048)",
    "Name": "Scan Type",
    "Keyword": "Scan​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1051)",
    "Name": "Itinerary ID",
    "Keyword": "ItineraryID",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1052)",
    "Name": "Itinerary ID Type",
    "Keyword": "ItineraryID​Type",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1053)",
    "Name": "Itinerary ID Assigning Authority",
    "Keyword": "ItineraryID​Assigning​Authority",
    "VR": "LO",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1054)",
    "Name": "Route ID",
    "Keyword": "RouteID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1055)",
    "Name": "Route ID Assigning Authority",
    "Keyword": "RouteID​Assigning​Authority",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1056)",
    "Name": "Inbound Arrival Type",
    "Keyword": "Inbound​Arrival​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1058)",
    "Name": "Carrier ID",
    "Keyword": "CarrierID",
    "VR": "SH",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1059)",
    "Name": "Carrier ID Assigning Authority",
    "Keyword": "CarrierID​Assigning​Authority",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1060)",
    "Name": "Source Orientation",
    "Keyword": "Source​Orientation",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1061)",
    "Name": "Source Position",
    "Keyword": "Source​Position",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1062)",
    "Name": "Belt Height",
    "Keyword": "Belt​Height",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1064)",
    "Name": "Algorithm Routing Code Sequence",
    "Keyword": "Algorithm​Routing​Code​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1067)",
    "Name": "Transport Classification",
    "Keyword": "Transport​Classification",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1068)",
    "Name": "OOI Type Descriptor",
    "Keyword": "OOI​Type​Descriptor",
    "VR": "LT",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1069)",
    "Name": "Total Processing Time",
    "Keyword": "Total​Processing​Time",
    "VR": "FL",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106C)",
    "Name": "Detector Calibration Data",
    "Keyword": "Detector​Calibration​Data",
    "VR": "OB",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106D)",
    "Name": "Additional Screening Performed",
    "Keyword": "Additional​Screening​Performed",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106E)",
    "Name": "Additional Inspection Selection Criteria",
    "Keyword": "Additional​Inspection​Selection​Criteria",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,106F)",
    "Name": "Additional Inspection Method Sequence",
    "Keyword": "Additional​Inspection​Method​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1070)",
    "Name": "AIT Device Type",
    "Keyword": "AIT​Device​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1071)",
    "Name": "QR Measurements Sequence",
    "Keyword": "QR​Measurements​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1072)",
    "Name": "Target Material Sequence",
    "Keyword": "Target​Material​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1073)",
    "Name": "SNR Threshold",
    "Keyword": "SNR​Threshold",
    "VR": "FD",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1075)",
    "Name": "Image Scale Representation",
    "Keyword": "Image​Scale​Representation",
    "VR": "DS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1076)",
    "Name": "Referenced PTO Sequence",
    "Keyword": "ReferencedPTO​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1077)",
    "Name": "Referenced TDR Instance Sequence",
    "Keyword": "ReferencedTDR​Instance​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1078)",
    "Name": "PTO Location Description",
    "Keyword": "PTO​Location​Description",
    "VR": "ST",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,1079)",
    "Name": "Anomaly Locator Indicator Sequence",
    "Keyword": "Anomaly​Locator​Indicator​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107A)",
    "Name": "Anomaly Locator Indicator",
    "Keyword": "Anomaly​Locator​Indicator",
    "VR": "FL",
    "VM": "3",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107B)",
    "Name": "PTO Region Sequence",
    "Keyword": "PTO​Region​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107C)",
    "Name": "Inspection Selection Criteria",
    "Keyword": "Inspection​Selection​Criteria",
    "VR": "CS",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107D)",
    "Name": "Secondary Inspection Method Sequence",
    "Keyword": "Secondary​Inspection​Method​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4010,107E)",
    "Name": "PRCS to RCS Orientation",
    "Keyword": "PRCS​ToRCS​Orientation",
    "VR": "DS",
    "VM": "6",
    "Retired": "DICOS"
  },
  {
    "Tag": "(4FFE,0001)",
    "Name": "MAC Parameters Sequence",
    "Keyword": "MAC​Parameters​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(50xx,0005)",
    "Name": "Curve Dimensions",
    "Keyword": "Curve​Dimensions",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0010)",
    "Name": "Number of Points",
    "Keyword": "Number​OfPoints",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0020)",
    "Name": "Type of Data",
    "Keyword": "Type​OfData",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0022)",
    "Name": "Curve Description",
    "Keyword": "Curve​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0030)",
    "Name": "Axis Units",
    "Keyword": "Axis​Units",
    "VR": "SH",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0040)",
    "Name": "Axis Labels",
    "Keyword": "Axis​Labels",
    "VR": "SH",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0103)",
    "Name": "Data Value Representation",
    "Keyword": "Data​Value​Representation",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0104)",
    "Name": "Minimum Coordinate Value",
    "Keyword": "Minimum​Coordinate​Value",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0105)",
    "Name": "Maximum Coordinate Value",
    "Keyword": "Maximum​Coordinate​Value",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0106)",
    "Name": "Curve Range",
    "Keyword": "Curve​Range",
    "VR": "SH",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0110)",
    "Name": "Curve Data Descriptor",
    "Keyword": "Curve​Data​Descriptor",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0112)",
    "Name": "Coordinate Start Value",
    "Keyword": "Coordinate​Start​Value",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,0114)",
    "Name": "Coordinate Step Value",
    "Keyword": "Coordinate​Step​Value",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,1001)",
    "Name": "Curve Activation Layer",
    "Keyword": "Curve​Activation​Layer",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2000)",
    "Name": "Audio Type",
    "Keyword": "Audio​Type",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2002)",
    "Name": "Audio Sample Format",
    "Keyword": "Audio​Sample​Format",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2004)",
    "Name": "Number of Channels",
    "Keyword": "Number​OfChannels",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2006)",
    "Name": "Number of Samples",
    "Keyword": "Number​OfSamples",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2008)",
    "Name": "Sample Rate",
    "Keyword": "Sample​Rate",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,200A)",
    "Name": "Total Time",
    "Keyword": "Total​Time",
    "VR": "UL",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,200C)",
    "Name": "Audio Sample Data",
    "Keyword": "Audio​Sample​Data",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,200E)",
    "Name": "Audio Comments",
    "Keyword": "Audio​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2500)",
    "Name": "Curve Label",
    "Keyword": "Curve​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2600)",
    "Name": "Curve Referenced Overlay Sequence",
    "Keyword": "Curve​Referenced​Overlay​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,2610)",
    "Name": "Curve Referenced Overlay Group",
    "Keyword": "Curve​Referenced​Overlay​Group",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(50xx,3000)",
    "Name": "Curve Data",
    "Keyword": "Curve​Data",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(5200,9229)",
    "Name": "Shared Functional Groups Sequence",
    "Keyword": "Shared​Functional​Groups​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5200,9230)",
    "Name": "Per-frame Functional Groups Sequence",
    "Keyword": "Per​Frame​Functional​Groups​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,0100)",
    "Name": "Waveform Sequence",
    "Keyword": "Waveform​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,0110)",
    "Name": "Channel Minimum Value",
    "Keyword": "Channel​Minimum​Value",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,0112)",
    "Name": "Channel Maximum Value",
    "Keyword": "Channel​Maximum​Value",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,1004)",
    "Name": "Waveform Bits Allocated",
    "Keyword": "Waveform​Bits​Allocated",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,1006)",
    "Name": "Waveform Sample Interpretation",
    "Keyword": "Waveform​Sample​Interpretation",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,100A)",
    "Name": "Waveform Padding Value",
    "Keyword": "Waveform​Padding​Value",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5400,1010)",
    "Name": "Waveform Data",
    "Keyword": "Waveform​Data",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5600,0010)",
    "Name": "First Order Phase Correction Angle",
    "Keyword": "First​Order​Phase​Correction​Angle",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(5600,0020)",
    "Name": "Spectroscopy Data",
    "Keyword": "Spectroscopy​Data",
    "VR": "OF",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0010)",
    "Name": "Overlay Rows",
    "Keyword": "Overlay​Rows",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0011)",
    "Name": "Overlay Columns",
    "Keyword": "Overlay​Columns",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0012)",
    "Name": "Overlay Planes",
    "Keyword": "Overlay​Planes",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0015)",
    "Name": "Number of Frames in Overlay",
    "Keyword": "Number​OfFrames​InOverlay",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0022)",
    "Name": "Overlay Description",
    "Keyword": "Overlay​Description",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0040)",
    "Name": "Overlay Type",
    "Keyword": "Overlay​Type",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0045)",
    "Name": "Overlay Subtype",
    "Keyword": "Overlay​Subtype",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0050)",
    "Name": "Overlay Origin",
    "Keyword": "Overlay​Origin",
    "VR": "SS",
    "VM": "2",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0051)",
    "Name": "Image Frame Origin",
    "Keyword": "Image​Frame​Origin",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0052)",
    "Name": "Overlay Plane Origin",
    "Keyword": "Overlay​Plane​Origin",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0060)",
    "Name": "Overlay Compression Code",
    "Keyword": "Overlay​Compression​Code",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0061)",
    "Name": "Overlay Compression Originator",
    "Keyword": "Overlay​Compression​Originator",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0062)",
    "Name": "Overlay Compression Label",
    "Keyword": "Overlay​Compression​Label",
    "VR": "SH",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0063)",
    "Name": "Overlay Compression Description",
    "Keyword": "Overlay​Compression​Description",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0066)",
    "Name": "Overlay Compression Step Pointers",
    "Keyword": "Overlay​Compression​Step​Pointers",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0068)",
    "Name": "Overlay Repeat Interval",
    "Keyword": "Overlay​Repeat​Interval",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0069)",
    "Name": "Overlay Bits Grouped",
    "Keyword": "Overlay​Bits​Grouped",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0100)",
    "Name": "Overlay Bits Allocated",
    "Keyword": "Overlay​Bits​Allocated",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0102)",
    "Name": "Overlay Bit Position",
    "Keyword": "Overlay​Bit​Position",
    "VR": "US",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,0110)",
    "Name": "Overlay Format",
    "Keyword": "Overlay​Format",
    "VR": "CS",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0200)",
    "Name": "Overlay Location",
    "Keyword": "Overlay​Location",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0800)",
    "Name": "Overlay Code Label",
    "Keyword": "Overlay​Code​Label",
    "VR": "CS",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0802)",
    "Name": "Overlay Number of Tables",
    "Keyword": "Overlay​Number​OfTables",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0803)",
    "Name": "Overlay Code Table Location",
    "Keyword": "Overlay​Code​Table​Location",
    "VR": "AT",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,0804)",
    "Name": "Overlay Bits For Code Word",
    "Keyword": "Overlay​Bits​For​Code​Word",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1001)",
    "Name": "Overlay Activation Layer",
    "Keyword": "Overlay​Activation​Layer",
    "VR": "CS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1100)",
    "Name": "Overlay Descriptor - Gray",
    "Keyword": "Overlay​Descriptor​Gray",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1101)",
    "Name": "Overlay Descriptor - Red",
    "Keyword": "Overlay​Descriptor​Red",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1102)",
    "Name": "Overlay Descriptor - Green",
    "Keyword": "Overlay​Descriptor​Green",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1103)",
    "Name": "Overlay Descriptor - Blue",
    "Keyword": "Overlay​Descriptor​Blue",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1200)",
    "Name": "Overlays - Gray",
    "Keyword": "Overlays​Gray",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1201)",
    "Name": "Overlays - Red",
    "Keyword": "Overlays​Red",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1202)",
    "Name": "Overlays - Green",
    "Keyword": "Overlays​Green",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1203)",
    "Name": "Overlays - Blue",
    "Keyword": "Overlays​Blue",
    "VR": "US",
    "VM": "1-n",
    "Retired": "RET"
  },
  {
    "Tag": "(60xx,1301)",
    "Name": "ROI Area",
    "Keyword": "ROI​Area",
    "VR": "IS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1302)",
    "Name": "ROI Mean",
    "Keyword": "ROI​Mean",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1303)",
    "Name": "ROI Standard Deviation",
    "Keyword": "ROI​Standard​Deviation",
    "VR": "DS",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,1500)",
    "Name": "Overlay Label",
    "Keyword": "Overlay​Label",
    "VR": "LO",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,3000)",
    "Name": "Overlay Data",
    "Keyword": "Overlay​Data",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(60xx,4000)",
    "Name": "Overlay Comments",
    "Keyword": "Overlay​Comments",
    "VR": "LT",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7FE0,0010)",
    "Name": "Pixel Data",
    "Keyword": "Pixel​Data",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(7FE0,0020)",
    "Name": "Coefficients SDVN",
    "Keyword": "Coefficients​SDVN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7FE0,0030)",
    "Name": "Coefficients SDHN",
    "Keyword": "Coefficients​SDHN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7FE0,0040)",
    "Name": "Coefficients SDDN",
    "Keyword": "Coefficients​SDDN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0010)",
    "Name": "Variable Pixel Data",
    "Keyword": "Variable​Pixel​Data",
    "VR": "OB or OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0011)",
    "Name": "Variable Next Data Group",
    "Keyword": "Variable​Next​Data​Group",
    "VR": "US",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0020)",
    "Name": "Variable Coefficients SDVN",
    "Keyword": "Variable​Coefficients​SDVN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0030)",
    "Name": "Variable Coefficients SDHN",
    "Keyword": "Variable​Coefficients​SDHN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(7Fxx,0040)",
    "Name": "Variable Coefficients SDDN",
    "Keyword": "Variable​Coefficients​SDDN",
    "VR": "OW",
    "VM": "1",
    "Retired": "RET"
  },
  {
    "Tag": "(FFFA,FFFA)",
    "Name": "Digital Signatures Sequence",
    "Keyword": "Digital​Signatures​Sequence",
    "VR": "SQ",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFC,FFFC)",
    "Name": "Data Set Trailing Padding",
    "Keyword": "Data​Set​Trailing​Padding",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFE,E000)",
    "Name": "Item",
    "Keyword": "Item",
    "VR": "See Note 2",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFE,E00D)",
    "Name": "Item Delimitation Item",
    "Keyword": "Item​Delimitation​Item",
    "VR": "See Note 2",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(FFFE,E0DD)",
    "Name": "Sequence Delimitation Item",
    "Keyword": "Sequence​Delimitation​Item",
    "VR": "See Note 2",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0000)",
    "Name": "File Meta Information Group Length",
    "Keyword": "File​Meta​Information​Group​Length",
    "VR": "UL",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0001)",
    "Name": "File Meta Information Version",
    "Keyword": "File​Meta​Information​Version",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0002)",
    "Name": "Media Storage SOP Class UID",
    "Keyword": "Media​StorageSOP​ClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0003)",
    "Name": "Media Storage SOP Instance UID",
    "Keyword": "Media​StorageSOP​InstanceUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0010)",
    "Name": "Transfer Syntax UID",
    "Keyword": "Transfer​SyntaxUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0012)",
    "Name": "Implementation Class UID",
    "Keyword": "Implementation​ClassUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0013)",
    "Name": "Implementation Version Name",
    "Keyword": "Implementation​Version​Name",
    "VR": "SH",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0016)",
    "Name": "Source Application Entity Title",
    "Keyword": "Source​Application​Entity​Title",
    "VR": "AE",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0100)",
    "Name": "Private Information Creator UID",
    "Keyword": "Private​Information​CreatorUID",
    "VR": "UI",
    "VM": "1",
    "Retired": ""
  },
  {
    "Tag": "(0002,0102)",
    "Name": "Private Information",
    "Keyword": "Private​Information",
    "VR": "OB",
    "VM": "1",
    "Retired": ""
  }
]