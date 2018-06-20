var BimModel_SapGeneralSample={
    "Grid": {
        "XValues": [-9000,-3000,3000,9000],
        "YValues": [-6000,0,6000],
        "Location": null,
        "LocationRelativeTo": null,
        "Color": null,
        "Guid": "f3a04611-265f-4d85-97b2-afa2d5568449",
        "MappingId": 4,
        "Name": null,
        "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimGrid.BimGridXY"
    },
    "Storeys": [
        {
            "Elevation": 0,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "c9a0e6c6-ffe7-46d5-a09b-782dba8d1588",
            "MappingId": 1,
            "Name": "BASE LEVEL",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 3000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "cab6a878-2540-4c20-9390-10f40ae013f0",
            "MappingId": 2,
            "Name": "LEVEL 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 6000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "9f776075-b403-4f27-a288-fb9508c1f9be",
            "MappingId": 3,
            "Name": "TOP LEVEL",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        }
    ],
    "Materials": [
        {
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "PropertiesSingleValued": [
                {
                    "PropertyName": "CompressiveStrength",
                    "PropertyValue": 0.03,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "MassDensity",
                    "PropertyValue": 2.5492905e-12,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "PoissonRatio",
                    "PropertyValue": 0.2,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "ThermalExpansionCoefficient",
                    "PropertyValue": 0.0000098999995,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "YoungModulus",
                    "PropertyValue": 24,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                }
            ],
            "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
            "MappingId": 5,
            "Name": "FCU30",
            "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
        },
        {
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "PropertiesSingleValued": [
                {
                    "PropertyName": "CompressiveStrength",
                    "PropertyValue": 0.025,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "MassDensity",
                    "PropertyValue": 2.5492905e-12,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "PoissonRatio",
                    "PropertyValue": 0.2,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "ThermalExpansionCoefficient",
                    "PropertyValue": 0.0000098999995,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "YoungModulus",
                    "PropertyValue": 22,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                }
            ],
            "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
            "MappingId": 6,
            "Name": "FCU25",
            "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
        }
    ],
    "Profiles": [
        {
            "Width": 400,
            "Length": 600,
            "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
            "MappingId": 45,
            "Name": "400x600",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 300,
            "Length": 600,
            "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
            "MappingId": 70,
            "Name": "300x600",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        }
    ],
    "LoadPatterns": [
        {
            "Type": 0,
            "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
            "MappingId": 7,
            "Name": "DEAD",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        },
        {
            "Type": 1,
            "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
            "MappingId": 8,
            "Name": "LIVE",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        }
    ],
    "Points": [
        {
            "Restrains": [
                true,
                true,
                true,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": -6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "b1ef563c-f4c0-484a-ab8a-ccdac971253a",
            "MappingId": 9,
            "Name": "Point 1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": -6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "14a2f566-09ef-4822-b3bd-fdbd8b29d93b",
            "MappingId": 10,
            "Name": "Point 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": -6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "f284cf54-d0d6-4354-90de-121d53d1a7e9",
            "MappingId": 11,
            "Name": "Point 3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": 0,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "2ca5d390-0aaf-4e52-8d48-88f4c218a12d",
            "MappingId": 12,
            "Name": "Point 4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
            "MappingId": 13,
            "Name": "Point 5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "065d0898-e629-4d93-9fc8-d5c43895be37",
            "MappingId": 14,
            "Name": "Point 6",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": 6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "c03e2858-985a-4d42-85cb-eb2e2bbd4b3a",
            "MappingId": 15,
            "Name": "Point 7",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
            "MappingId": 16,
            "Name": "Point 8",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -9000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7430879c-f56b-4be2-ae9b-eea268e2764a",
            "MappingId": 17,
            "Name": "Point 9",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": -6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "9121053d-cd14-497c-97bd-c203afc77dca",
            "MappingId": 18,
            "Name": "Point 10",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": -6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
            "MappingId": 19,
            "Name": "Point 11",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": -6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "2f292c98-299f-45cd-b2b3-446a75484678",
            "MappingId": 20,
            "Name": "Point 12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": 0,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "836901d3-2cca-46ea-a44d-b6f6ed3bb977",
            "MappingId": 21,
            "Name": "Point 13",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
            "MappingId": 22,
            "Name": "Point 14",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
            "MappingId": 23,
            "Name": "Point 15",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": 6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "3737bc69-05ba-4fa2-b427-141fdba1cbb6",
            "MappingId": 24,
            "Name": "Point 16",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
            "MappingId": 25,
            "Name": "Point 17",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": -3000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "31d8c3f0-207c-4ebe-8ee9-0db6ea1ecf5a",
            "MappingId": 26,
            "Name": "Point 18",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                true,
                true,
                true
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": -6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "cd88310c-7750-41f1-b97f-329ffc1792cb",
            "MappingId": 27,
            "Name": "Point 19",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": -6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
            "MappingId": 28,
            "Name": "Point 20",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": -6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "ff7a89a5-214c-4ea9-b10c-df130d8e4bc2",
            "MappingId": 29,
            "Name": "Point 21",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                true,
                true,
                true
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": 0,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "ee11c658-f067-4f8f-a1f5-05b60168877f",
            "MappingId": 30,
            "Name": "Point 22",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
            "MappingId": 31,
            "Name": "Point 23",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
            "MappingId": 32,
            "Name": "Point 24",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                true,
                true,
                true
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": 6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "9031d555-7bfe-4774-b32c-f910fec87b56",
            "MappingId": 33,
            "Name": "Point 25",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
            "MappingId": 34,
            "Name": "Point 26",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 3000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "36c14bdc-48db-4b92-a992-8e994569b4b6",
            "MappingId": 35,
            "Name": "Point 27",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                true,
                true,
                true
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": -6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "1c126bce-b75b-4588-babe-162fc150fd23",
            "MappingId": 36,
            "Name": "Point 28",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": -6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "15e2f306-44f0-4735-87b1-27a1d5ece31c",
            "MappingId": 37,
            "Name": "Point 29",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": -6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "0f261e56-fab5-4cec-aa03-998878ed726d",
            "MappingId": 38,
            "Name": "Point 30",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                true,
                true,
                true
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 0,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "2022efde-0b0c-490a-8f48-9665fe402b38",
            "MappingId": 39,
            "Name": "Point 31",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
            "MappingId": 40,
            "Name": "Point 32",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "a360dff5-6953-475f-b35a-59fcd740fb70",
            "MappingId": 41,
            "Name": "Point 33",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                true,
                true,
                true,
                true,
                true,
                true
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "57ffd1ea-c942-4f85-bce6-c522a0a12ac1",
            "MappingId": 42,
            "Name": "Point 34",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "d40af33a-0a58-408d-a4ff-6d7315d995a5",
            "MappingId": 43,
            "Name": "Point 35",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        },
        {
            "Restrains": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "Loads": null,
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7d1ad26c-2240-488e-b8da-b481c5edc19b",
            "MappingId": 44,
            "Name": "Point 36",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        }
    ],
    "Lines": [
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "1a5fc42e-f8ca-4cf3-9c69-c9a094e99bcd",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "b1ef563c-f4c0-484a-ab8a-ccdac971253a",
                "MappingId": 9,
                "Name": "Point 1",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "14a2f566-09ef-4822-b3bd-fdbd8b29d93b",
                "MappingId": 10,
                "Name": "Point 2",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "ba7899d1-e050-4be9-97a0-5680a9e6f2be",
            "MappingId": 45,
            "Name": "Unknown1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "94fa4a6e-ffa4-40d6-80ab-f080c1f43fe9",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "14a2f566-09ef-4822-b3bd-fdbd8b29d93b",
                "MappingId": 10,
                "Name": "Point 2",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "f284cf54-d0d6-4354-90de-121d53d1a7e9",
                "MappingId": 11,
                "Name": "Point 3",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "223bbb64-8d19-4d82-9fcc-dc19ce75d00a",
            "MappingId": 47,
            "Name": "Unknown2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "755f2aa2-87cd-419a-a276-32ba22dbc32e",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2ca5d390-0aaf-4e52-8d48-88f4c218a12d",
                "MappingId": 12,
                "Name": "Point 4",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                "MappingId": 13,
                "Name": "Point 5",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "b998076b-6cee-4db1-a1cb-1e0c71bc940e",
            "MappingId": 48,
            "Name": "Unknown3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "e3c5c1c5-071f-4558-9417-1ac570161f98",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                "MappingId": 13,
                "Name": "Point 5",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "065d0898-e629-4d93-9fc8-d5c43895be37",
                "MappingId": 14,
                "Name": "Point 6",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "37384c03-92fe-4606-aa7c-536c69655608",
            "MappingId": 49,
            "Name": "Unknown4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "d41e476c-8a1e-40e0-9427-f4cadde6169b",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "c03e2858-985a-4d42-85cb-eb2e2bbd4b3a",
                "MappingId": 15,
                "Name": "Point 7",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
                "MappingId": 16,
                "Name": "Point 8",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "3cd1eda5-04cb-4ae1-abe5-b82c2c35239b",
            "MappingId": 50,
            "Name": "Unknown5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9b141a21-2cc1-4e7f-ab23-b8d8f4e36ef2",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
                "MappingId": 16,
                "Name": "Point 8",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7430879c-f56b-4be2-ae9b-eea268e2764a",
                "MappingId": 17,
                "Name": "Point 9",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "c8655ee8-473e-4ab8-af05-f57f856e7467",
            "MappingId": 51,
            "Name": "Unknown6",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "44d7366a-834e-4a06-94f4-75375c58d076",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "9121053d-cd14-497c-97bd-c203afc77dca",
                "MappingId": 18,
                "Name": "Point 10",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                "MappingId": 19,
                "Name": "Point 11",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "08543772-53b0-4e61-a97b-3506077250c7",
            "MappingId": 52,
            "Name": "Unknown7",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f4d11640-25a6-4201-8d99-0169c55e5433",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                "MappingId": 19,
                "Name": "Point 11",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2f292c98-299f-45cd-b2b3-446a75484678",
                "MappingId": 20,
                "Name": "Point 12",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "9a2f2802-3a05-4e75-9797-5f7390697041",
            "MappingId": 53,
            "Name": "Unknown8",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9e623ce8-011d-453a-a940-7559fd5f5682",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "836901d3-2cca-46ea-a44d-b6f6ed3bb977",
                "MappingId": 21,
                "Name": "Point 13",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 22,
                "Name": "Point 14",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "f168c154-8dbb-4e88-873b-725432be590f",
            "MappingId": 54,
            "Name": "Unknown9",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "dd11b480-d2c5-46e3-8eca-43638bc965ae",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 22,
                "Name": "Point 14",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                "MappingId": 23,
                "Name": "Point 15",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "31da52f5-e8d3-4f8d-8733-5d375401d819",
            "MappingId": 55,
            "Name": "Unknown10",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "e1d2f471-8bec-4ae6-9fcd-25aaad2d5bab",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3737bc69-05ba-4fa2-b427-141fdba1cbb6",
                "MappingId": 24,
                "Name": "Point 16",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 25,
                "Name": "Point 17",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "108d6335-7df2-45ff-81fa-ee5d10cc5f5b",
            "MappingId": 56,
            "Name": "Unknown11",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fda363bd-2f16-4ad6-8397-1c2922d06e05",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 25,
                "Name": "Point 17",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "31d8c3f0-207c-4ebe-8ee9-0db6ea1ecf5a",
                "MappingId": 26,
                "Name": "Point 18",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "db0bec1b-1396-4307-9970-84f29452a140",
            "MappingId": 57,
            "Name": "Unknown12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "7fe4aae0-cd92-4fc0-b796-36449fe92d25",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "cd88310c-7750-41f1-b97f-329ffc1792cb",
                "MappingId": 27,
                "Name": "Point 19",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                "MappingId": 28,
                "Name": "Point 20",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "53f046e6-5ca9-44d2-b465-1248cb1af4b2",
            "MappingId": 58,
            "Name": "Unknown13",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "04c90b96-2fc1-40ca-b94a-0abbffe56899",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                "MappingId": 28,
                "Name": "Point 20",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff7a89a5-214c-4ea9-b10c-df130d8e4bc2",
                "MappingId": 29,
                "Name": "Point 21",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "a9a2c86e-4b5d-402b-a18c-7be83408ff4c",
            "MappingId": 59,
            "Name": "Unknown14",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "e2a91169-01ed-4454-bc61-36930c14f0d5",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ee11c658-f067-4f8f-a1f5-05b60168877f",
                "MappingId": 30,
                "Name": "Point 22",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 31,
                "Name": "Point 23",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "620ff1e3-855b-41a2-a22f-71f9964c7827",
            "MappingId": 60,
            "Name": "Unknown15",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "0cc9c91f-87e2-4b39-86c4-d9f8b3ef1386",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 31,
                "Name": "Point 23",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                "MappingId": 32,
                "Name": "Point 24",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "798cd975-ae9a-43d5-8be8-0847b478cdcf",
            "MappingId": 61,
            "Name": "Unknown16",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f2c95956-7299-4007-a5b1-20ea563bdc28",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "9031d555-7bfe-4774-b32c-f910fec87b56",
                "MappingId": 33,
                "Name": "Point 25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                "MappingId": 34,
                "Name": "Point 26",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "317fbace-8fce-4be8-acb0-72712c5289ee",
            "MappingId": 62,
            "Name": "Unknown17",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "1d7c89d8-f892-42e1-aa91-fdb61f1f37c4",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                "MappingId": 34,
                "Name": "Point 26",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "36c14bdc-48db-4b92-a992-8e994569b4b6",
                "MappingId": 35,
                "Name": "Point 27",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "3b4dcec4-a9eb-4a96-ad61-d08bec7e7447",
            "MappingId": 63,
            "Name": "Unknown18",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9ff8b993-51e1-4c30-96c4-dc93380b1908",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1c126bce-b75b-4588-babe-162fc150fd23",
                "MappingId": 36,
                "Name": "Point 28",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "15e2f306-44f0-4735-87b1-27a1d5ece31c",
                "MappingId": 37,
                "Name": "Point 29",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "7333d229-1651-40bc-941c-afd8064b5365",
            "MappingId": 64,
            "Name": "Unknown19",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9b493177-a054-4360-9ffd-df61b6ca5822",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "15e2f306-44f0-4735-87b1-27a1d5ece31c",
                "MappingId": 37,
                "Name": "Point 29",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "0f261e56-fab5-4cec-aa03-998878ed726d",
                "MappingId": 38,
                "Name": "Point 30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "f922c5e8-aee9-4f56-b56c-7ff48b821e8a",
            "MappingId": 65,
            "Name": "Unknown20",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "cbe35368-668e-48cf-abe7-89aaaddc31c0",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2022efde-0b0c-490a-8f48-9665fe402b38",
                "MappingId": 39,
                "Name": "Point 31",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
                "MappingId": 40,
                "Name": "Point 32",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "98c7730d-8984-4514-981d-aebc131b9af4",
            "MappingId": 66,
            "Name": "Unknown21",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "38cf5173-1e23-4e35-8757-c249f11cbc2f",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
                "MappingId": 40,
                "Name": "Point 32",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a360dff5-6953-475f-b35a-59fcd740fb70",
                "MappingId": 41,
                "Name": "Point 33",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "75d38d81-89c4-46bd-ae60-cb602a4a6a8d",
            "MappingId": 67,
            "Name": "Unknown22",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "4967c498-291b-49c8-89f2-cf8ad33c17b9",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "57ffd1ea-c942-4f85-bce6-c522a0a12ac1",
                "MappingId": 42,
                "Name": "Point 34",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d40af33a-0a58-408d-a4ff-6d7315d995a5",
                "MappingId": 43,
                "Name": "Point 35",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "1b911902-6381-4da9-af45-b8c909bb7429",
            "MappingId": 68,
            "Name": "Unknown23",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7cb03993-4dd4-4193-96b1-71c7b4eff2ba",
                "MappingId": 45,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "bfbce0a0-788c-4a7d-8c08-8f8e6f4e2118",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 2,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d40af33a-0a58-408d-a4ff-6d7315d995a5",
                "MappingId": 43,
                "Name": "Point 35",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d1ad26c-2240-488e-b8da-b481c5edc19b",
                "MappingId": 44,
                "Name": "Point 36",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.03,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 24,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "c2550a04-b536-413f-b536-94f3713c951f",
                "MappingId": 5,
                "Name": "FCU30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "318bdaf3-debf-40b6-bab7-11720525f700",
            "MappingId": 69,
            "Name": "Unknown24",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "5b3d3b2a-af08-46e8-ad25-4dd89477859d",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "14a2f566-09ef-4822-b3bd-fdbd8b29d93b",
                "MappingId": 10,
                "Name": "Point 2",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                "MappingId": 19,
                "Name": "Point 11",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "c8db9dd9-b05d-46ef-8938-bd4b49b9e7a6",
            "MappingId": 70,
            "Name": "Unknown25",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "4ca90f9a-c2cb-4cc9-b3d0-d3c8964dc5de",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "f284cf54-d0d6-4354-90de-121d53d1a7e9",
                "MappingId": 11,
                "Name": "Point 3",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2f292c98-299f-45cd-b2b3-446a75484678",
                "MappingId": 20,
                "Name": "Point 12",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "76020371-41b9-40bd-a03a-22407611e284",
            "MappingId": 72,
            "Name": "Unknown26",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "079d8334-0546-445a-ab66-ccb764aaa69d",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                "MappingId": 19,
                "Name": "Point 11",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                "MappingId": 28,
                "Name": "Point 20",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "f0cd06d9-a987-4bca-91dd-dddcf29bd405",
            "MappingId": 73,
            "Name": "Unknown27",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "59178c43-9789-40a3-a20f-abf8e8e5bf9e",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2f292c98-299f-45cd-b2b3-446a75484678",
                "MappingId": 20,
                "Name": "Point 12",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff7a89a5-214c-4ea9-b10c-df130d8e4bc2",
                "MappingId": 29,
                "Name": "Point 21",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "45f4a910-4aeb-4621-b52f-b259d4d42eae",
            "MappingId": 74,
            "Name": "Unknown28",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "7ded2053-489b-48d5-ae5a-4fffc660c399",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                "MappingId": 28,
                "Name": "Point 20",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "15e2f306-44f0-4735-87b1-27a1d5ece31c",
                "MappingId": 37,
                "Name": "Point 29",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "67004988-c069-43fc-a496-2c6cd189be7d",
            "MappingId": 75,
            "Name": "Unknown29",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "76691797-8502-42e4-b51d-6d1934f2be43",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff7a89a5-214c-4ea9-b10c-df130d8e4bc2",
                "MappingId": 29,
                "Name": "Point 21",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "0f261e56-fab5-4cec-aa03-998878ed726d",
                "MappingId": 38,
                "Name": "Point 30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "bc67133f-be08-4328-a755-d616b38cc366",
            "MappingId": 76,
            "Name": "Unknown30",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "76c2f9ee-2c4b-4d8d-9281-3c43d2cbf2f5",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                "MappingId": 13,
                "Name": "Point 5",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 22,
                "Name": "Point 14",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "0c83e4b6-2a6f-4c61-ac9e-837f01962ac4",
            "MappingId": 77,
            "Name": "Unknown31",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "0d0738d7-099f-4699-bc07-4104c7955ec3",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "065d0898-e629-4d93-9fc8-d5c43895be37",
                "MappingId": 14,
                "Name": "Point 6",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                "MappingId": 23,
                "Name": "Point 15",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "43590f61-dfda-4e27-af02-99edddf139be",
            "MappingId": 78,
            "Name": "Unknown32",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "e79dfd62-0bfe-44d0-801a-0a19fdea317f",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 22,
                "Name": "Point 14",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 31,
                "Name": "Point 23",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "e617febb-855d-4f33-b551-411ae0ef0aa8",
            "MappingId": 79,
            "Name": "Unknown33",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "386cee8e-ba19-44dc-9493-1f648c0f895b",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                "MappingId": 23,
                "Name": "Point 15",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                "MappingId": 32,
                "Name": "Point 24",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "49d1a308-7a48-45a4-86c1-fc6f48902f70",
            "MappingId": 80,
            "Name": "Unknown34",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "38d4b520-3d49-4b1e-b627-dba6b9614daf",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 31,
                "Name": "Point 23",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
                "MappingId": 40,
                "Name": "Point 32",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "603dcd8e-e098-480e-8b83-991641eba7ff",
            "MappingId": 81,
            "Name": "Unknown35",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "e0fb8184-4284-41e1-9d1a-4329c67cdc36",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                "MappingId": 32,
                "Name": "Point 24",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a360dff5-6953-475f-b35a-59fcd740fb70",
                "MappingId": 41,
                "Name": "Point 33",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "302cc214-1fd2-4449-945d-93f1b1524cfb",
            "MappingId": 82,
            "Name": "Unknown36",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "6c2bcdd3-2601-43af-8cae-d6eb3c4e3099",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
                "MappingId": 16,
                "Name": "Point 8",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 25,
                "Name": "Point 17",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "a56f28b3-2503-43ad-a807-2debcf707b35",
            "MappingId": 83,
            "Name": "Unknown37",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "064435c9-764f-44f9-a475-f2765c7d9a88",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7430879c-f56b-4be2-ae9b-eea268e2764a",
                "MappingId": 17,
                "Name": "Point 9",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "31d8c3f0-207c-4ebe-8ee9-0db6ea1ecf5a",
                "MappingId": 26,
                "Name": "Point 18",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "5551f005-f625-43ca-85ed-b660ff48ce72",
            "MappingId": 84,
            "Name": "Unknown38",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "683069a1-8203-48d2-869c-1886c610a71d",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 25,
                "Name": "Point 17",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                "MappingId": 34,
                "Name": "Point 26",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "d281a72a-fc15-46cc-b98b-c164e080215e",
            "MappingId": 85,
            "Name": "Unknown39",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fce47ebd-4060-453f-ad38-bae224353eee",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "31d8c3f0-207c-4ebe-8ee9-0db6ea1ecf5a",
                "MappingId": 26,
                "Name": "Point 18",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "36c14bdc-48db-4b92-a992-8e994569b4b6",
                "MappingId": 35,
                "Name": "Point 27",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "7ad26539-e97f-45d2-967b-773860586879",
            "MappingId": 86,
            "Name": "Unknown40",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "4697ceab-49eb-4d8e-b463-898a8f93780b",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                "MappingId": 34,
                "Name": "Point 26",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d40af33a-0a58-408d-a4ff-6d7315d995a5",
                "MappingId": 43,
                "Name": "Point 35",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "a34d856a-ed96-4bf6-a185-4b2fea7a9bd6",
            "MappingId": 87,
            "Name": "Unknown41",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "7b40561f-f626-4da5-a096-ce2342569cc2",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "36c14bdc-48db-4b92-a992-8e994569b4b6",
                "MappingId": 35,
                "Name": "Point 27",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d1ad26c-2240-488e-b8da-b481c5edc19b",
                "MappingId": 44,
                "Name": "Point 36",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "6ee21b03-6eed-4a46-a7a2-cce85187d5f6",
            "MappingId": 88,
            "Name": "Unknown42",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "d2c49e1f-0235-436c-9610-fc4b3479acf3",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "14a2f566-09ef-4822-b3bd-fdbd8b29d93b",
                "MappingId": 10,
                "Name": "Point 2",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                "MappingId": 13,
                "Name": "Point 5",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "ae905642-f29c-4110-975f-995c12162081",
            "MappingId": 89,
            "Name": "Unknown43",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "a899c615-3347-4156-9464-cb1772ae5648",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "f284cf54-d0d6-4354-90de-121d53d1a7e9",
                "MappingId": 11,
                "Name": "Point 3",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "065d0898-e629-4d93-9fc8-d5c43895be37",
                "MappingId": 14,
                "Name": "Point 6",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "2437af62-d8e1-462a-ae46-fcd84be45530",
            "MappingId": 90,
            "Name": "Unknown44",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "ce8ab04d-49f9-4ad8-a23c-80dcbd796a1a",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                "MappingId": 13,
                "Name": "Point 5",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
                "MappingId": 16,
                "Name": "Point 8",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "21e036ff-ccde-4886-9da8-708a697193dd",
            "MappingId": 91,
            "Name": "Unknown45",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9ee209ab-248c-47f3-b38e-a0da78d6dd60",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "065d0898-e629-4d93-9fc8-d5c43895be37",
                "MappingId": 14,
                "Name": "Point 6",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7430879c-f56b-4be2-ae9b-eea268e2764a",
                "MappingId": 17,
                "Name": "Point 9",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "d0014e51-0aaa-4729-84fa-ddac3460a14d",
            "MappingId": 92,
            "Name": "Unknown46",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "a7d47a06-09d8-49a4-a1a7-712e6f11ea3d",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                "MappingId": 19,
                "Name": "Point 11",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 22,
                "Name": "Point 14",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "248e6904-92ba-4db0-b748-640bb0068589",
            "MappingId": 93,
            "Name": "Unknown47",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "e0f226d7-bc42-41f5-886e-9fbf7796e0f2",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2f292c98-299f-45cd-b2b3-446a75484678",
                "MappingId": 20,
                "Name": "Point 12",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                "MappingId": 23,
                "Name": "Point 15",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "42becbfe-49e4-4e76-9f20-90789dd22f72",
            "MappingId": 94,
            "Name": "Unknown48",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "d9961183-a020-41d7-9961-680d99e79262",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 22,
                "Name": "Point 14",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 25,
                "Name": "Point 17",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "4acb73b5-38cd-4893-ac76-4509ed419b09",
            "MappingId": 95,
            "Name": "Unknown49",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "dcea764e-a856-4abc-a775-63b8b1b115d2",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                "MappingId": 23,
                "Name": "Point 15",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": -3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "31d8c3f0-207c-4ebe-8ee9-0db6ea1ecf5a",
                "MappingId": 26,
                "Name": "Point 18",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "fa644c39-4447-4e8e-8f5c-c1bac9eec170",
            "MappingId": 96,
            "Name": "Unknown50",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "c9440758-d16f-46a4-be23-b5fb371844d1",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                "MappingId": 28,
                "Name": "Point 20",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 31,
                "Name": "Point 23",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "c8997e35-30b9-43b0-afba-015b9e8be3a0",
            "MappingId": 97,
            "Name": "Unknown51",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "446c6949-ff31-4d86-b122-9b2ac747a347",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff7a89a5-214c-4ea9-b10c-df130d8e4bc2",
                "MappingId": 29,
                "Name": "Point 21",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                "MappingId": 32,
                "Name": "Point 24",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "be773651-2383-44e3-886a-d2df1288be5d",
            "MappingId": 98,
            "Name": "Unknown52",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "91094150-9396-452c-8952-f9be0d4fa8f1",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 31,
                "Name": "Point 23",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                "MappingId": 34,
                "Name": "Point 26",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "494e4496-1b9b-44e7-b1fa-cec6fa404fa4",
            "MappingId": 99,
            "Name": "Unknown53",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "a80af993-2f6b-4f8e-9435-9ad095665c5b",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                "MappingId": 32,
                "Name": "Point 24",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "36c14bdc-48db-4b92-a992-8e994569b4b6",
                "MappingId": 35,
                "Name": "Point 27",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "cb00ac9b-3bd3-42ee-831e-77fb5f04c2b2",
            "MappingId": 100,
            "Name": "Unknown54",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fbd362c1-7fcf-4be7-ad10-cbd2093b97ad",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "15e2f306-44f0-4735-87b1-27a1d5ece31c",
                "MappingId": 37,
                "Name": "Point 29",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
                "MappingId": 40,
                "Name": "Point 32",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "91600bc0-be6e-4d71-a13c-73b208b2a4a1",
            "MappingId": 101,
            "Name": "Unknown55",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "2b6ec7e6-d491-4175-831b-d94bcc111fe3",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "0f261e56-fab5-4cec-aa03-998878ed726d",
                "MappingId": 38,
                "Name": "Point 30",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a360dff5-6953-475f-b35a-59fcd740fb70",
                "MappingId": 41,
                "Name": "Point 33",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "f3a5f887-cee4-4bd7-9e38-e6c5b8ee512d",
            "MappingId": 102,
            "Name": "Unknown56",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fabb6dd7-438c-4765-bad8-8316990842f9",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
                "MappingId": 40,
                "Name": "Point 32",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d40af33a-0a58-408d-a4ff-6d7315d995a5",
                "MappingId": 43,
                "Name": "Point 35",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "d2c0b32c-6136-45d2-8ba6-09f91c8b277d",
            "MappingId": 103,
            "Name": "Unknown57",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 600,
                "Guid": "e5474a2e-4ac4-4743-a297-8e0d8fc26d7b",
                "MappingId": 70,
                "Name": "300x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 10,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fd61e71d-e46a-4886-adf9-e5c31d2d3ab9",
                "MappingId": 0,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
            },
            "LineSolidType": 1,
            "RotationAboutAxis": 0,
            "Point1": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a360dff5-6953-475f-b35a-59fcd740fb70",
                "MappingId": 41,
                "Name": "Point 33",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Point2": {
                "Restrains": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                "Loads": null,
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d1ad26c-2240-488e-b8da-b481c5edc19b",
                "MappingId": 44,
                "Name": "Point 36",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "7040c1f4-7806-477f-a278-c815707f4167",
            "MappingId": 104,
            "Name": "Unknown58",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        }
    ],
    "Planes": [
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                    "MappingId": 13,
                    "Name": "Point 5",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                    "MappingId": 22,
                    "Name": "Point 14",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                    "MappingId": 25,
                    "Name": "Point 17",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
                    "MappingId": 16,
                    "Name": "Point 8",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "8d103676-8620-4ae5-9d1c-b3706780cd11",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "4f28097e-7ae6-42a0-a5cc-f156eedd33a6",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "f936c74c-1605-42e0-883e-e07537e6727b",
            "MappingId": 105,
            "Name": "shell 1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                    "MappingId": 22,
                    "Name": "Point 14",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                    "MappingId": 31,
                    "Name": "Point 23",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                    "MappingId": 34,
                    "Name": "Point 26",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                    "MappingId": 25,
                    "Name": "Point 17",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "2da63a90-1440-4cea-ace2-f9039ca357f0",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "b9b2bd16-c557-4798-92bb-e294a7da310b",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "b0ce0da4-5414-4d49-ba6e-bb283c0c3ca0",
            "MappingId": 106,
            "Name": "shell 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                    "MappingId": 31,
                    "Name": "Point 23",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
                    "MappingId": 40,
                    "Name": "Point 32",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "d40af33a-0a58-408d-a4ff-6d7315d995a5",
                    "MappingId": 43,
                    "Name": "Point 35",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                    "MappingId": 34,
                    "Name": "Point 26",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "a2e5a6cc-f511-40bb-9293-b5a5688863d0",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "d507c5e0-5b03-4c29-b7b4-04e6319c308f",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "ea1585d0-06f6-4e43-98f3-2cfa9acea5ec",
            "MappingId": 107,
            "Name": "shell 3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "14a2f566-09ef-4822-b3bd-fdbd8b29d93b",
                    "MappingId": 10,
                    "Name": "Point 2",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                    "MappingId": 19,
                    "Name": "Point 11",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                    "MappingId": 22,
                    "Name": "Point 14",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                    "MappingId": 13,
                    "Name": "Point 5",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "6dd8b514-6789-4f55-9276-adae4ef20a5a",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "b359c513-8b21-4ec6-8193-c4f1ec890f1b",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "4316836b-a5f1-4691-b8f1-b3c62ddedfa3",
            "MappingId": 108,
            "Name": "shell 4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                    "MappingId": 19,
                    "Name": "Point 11",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                    "MappingId": 28,
                    "Name": "Point 20",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                    "MappingId": 31,
                    "Name": "Point 23",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                    "MappingId": 22,
                    "Name": "Point 14",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "e5344e33-d210-4742-af8a-a8757e86db22",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "76b8d395-7488-40af-ba5d-57a32a943224",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "689e2cfd-f30f-4642-92d8-7c9f3ae6ba44",
            "MappingId": 109,
            "Name": "shell 5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                    "MappingId": 28,
                    "Name": "Point 20",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "15e2f306-44f0-4735-87b1-27a1d5ece31c",
                    "MappingId": 37,
                    "Name": "Point 29",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "a49fc320-66e6-47f1-8017-02c93cd60bf3",
                    "MappingId": 40,
                    "Name": "Point 32",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                    "MappingId": 31,
                    "Name": "Point 23",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "d6b98ab9-9900-46cd-aaa3-18d816c0f831",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "a533031e-c04a-4fa0-8537-965e3676fa3d",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "b0850215-b3ba-47cd-81ff-b37a2498fbbb",
            "MappingId": 110,
            "Name": "shell 6",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "065d0898-e629-4d93-9fc8-d5c43895be37",
                    "MappingId": 14,
                    "Name": "Point 6",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                    "MappingId": 23,
                    "Name": "Point 15",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "31d8c3f0-207c-4ebe-8ee9-0db6ea1ecf5a",
                    "MappingId": 26,
                    "Name": "Point 18",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "7430879c-f56b-4be2-ae9b-eea268e2764a",
                    "MappingId": 17,
                    "Name": "Point 9",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "afbb2a91-29da-43a9-af66-6d6044c34cdf",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "dbb09db4-ded7-45ff-b38f-bec59bd10028",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "fa8c7e62-6d42-4418-a90e-a9d17cb7d6c4",
            "MappingId": 111,
            "Name": "shell 7",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                    "MappingId": 23,
                    "Name": "Point 15",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                    "MappingId": 32,
                    "Name": "Point 24",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "36c14bdc-48db-4b92-a992-8e994569b4b6",
                    "MappingId": 35,
                    "Name": "Point 27",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "31d8c3f0-207c-4ebe-8ee9-0db6ea1ecf5a",
                    "MappingId": 26,
                    "Name": "Point 18",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "782f3979-8fa2-4110-9f49-7442e902a812",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "e0d2bd5b-0cef-4b90-9844-d4f1247ac93a",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "43adfe82-b7e3-497f-8cb6-350564d62fdf",
            "MappingId": 112,
            "Name": "shell 8",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                    "MappingId": 32,
                    "Name": "Point 24",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "a360dff5-6953-475f-b35a-59fcd740fb70",
                    "MappingId": 41,
                    "Name": "Point 33",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "7d1ad26c-2240-488e-b8da-b481c5edc19b",
                    "MappingId": 44,
                    "Name": "Point 36",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "36c14bdc-48db-4b92-a992-8e994569b4b6",
                    "MappingId": 35,
                    "Name": "Point 27",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "44bc727d-1992-4e4e-a354-0e0d49923a58",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "07c429ad-1457-41b5-bcb5-b277d8011d7f",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "70fd1e8d-29eb-4846-9308-5cdd638b54b0",
            "MappingId": 113,
            "Name": "shell 9",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "f284cf54-d0d6-4354-90de-121d53d1a7e9",
                    "MappingId": 11,
                    "Name": "Point 3",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "2f292c98-299f-45cd-b2b3-446a75484678",
                    "MappingId": 20,
                    "Name": "Point 12",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                    "MappingId": 23,
                    "Name": "Point 15",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -9000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "065d0898-e629-4d93-9fc8-d5c43895be37",
                    "MappingId": 14,
                    "Name": "Point 6",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "b1728715-7b95-453e-a2e3-21f478275bc6",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "000e69ae-f930-4855-8d8a-827b173cef9a",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "39ab32d8-4b2c-4342-88db-0945dcbd9511",
            "MappingId": 114,
            "Name": "shell 10",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "2f292c98-299f-45cd-b2b3-446a75484678",
                    "MappingId": 20,
                    "Name": "Point 12",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ff7a89a5-214c-4ea9-b10c-df130d8e4bc2",
                    "MappingId": 29,
                    "Name": "Point 21",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                    "MappingId": 32,
                    "Name": "Point 24",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": -3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "5b7422c4-21a8-429e-b824-0fb8c9eafc4f",
                    "MappingId": 23,
                    "Name": "Point 15",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "5ae4f753-f9b5-4755-91ad-109ab5240b06",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "9245b172-1587-4f04-8f1a-884d7c474fbe",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "ffeb0999-d703-485a-9cb9-8c6db7c9b926",
            "MappingId": 115,
            "Name": "shell 11",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        },
        {
            "Thickness": 250,
            "BoundaryPoints": [
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ff7a89a5-214c-4ea9-b10c-df130d8e4bc2",
                    "MappingId": 29,
                    "Name": "Point 21",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "0f261e56-fab5-4cec-aa03-998878ed726d",
                    "MappingId": 38,
                    "Name": "Point 30",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "a360dff5-6953-475f-b35a-59fcd740fb70",
                    "MappingId": 41,
                    "Name": "Point 33",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                },
                {
                    "Restrains": [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ],
                    "Loads": null,
                    "AnalysisResults": null,
                    "Location": {
                        "X": 3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ff980db9-f6e3-433d-aff3-db0a9f230ce4",
                    "MappingId": 32,
                    "Name": "Point 24",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0.7,
                    "ClassesHierarchy": "BimObject.BimColorRGB"
                },
                "PropertiesSingleValued": [
                    {
                        "PropertyName": "CompressiveStrength",
                        "PropertyValue": 0.025,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.5492905e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000098999995,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "35c6d6bf-d213-4850-a85a-6e751024382f",
                "MappingId": 6,
                "Name": "FCU25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000002,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3db1b280-b6fb-4a3b-9af8-e20e99d4b42f",
                        "MappingId": 8,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "c811449a-08a8-4ae1-aaca-bf1b9ad217b1",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.0000015,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "d2a75faf-2abf-498b-9ff2-a9db9d97ab25",
                        "MappingId": 7,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "edec5568-8108-477b-b173-4adc145e9b45",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                }
            ],
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0.7,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "a5851955-e117-4af8-bd82-0cf05ff6b5d1",
            "MappingId": 116,
            "Name": "shell 12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        }
    ],
    "LatestMappingId": 116
};