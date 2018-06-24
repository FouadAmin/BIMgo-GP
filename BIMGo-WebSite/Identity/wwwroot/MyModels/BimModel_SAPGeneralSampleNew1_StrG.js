var BimModel_SAPGeneralSampleNew1_StrG = {
    "Grid": {
        "XValues": [
            -9000,
            -3000,
            3000,
            9000
        ],
        "YValues": [
            -6000,
            0,
            6000
        ],
        "Location": null,
        "LocationRelativeTo": null,
        "Color": null,
        "Guid": "481ff482-170e-4c6d-a7b3-a76016157a5c",
        "MappingId": 5,
        "Name": null,
        "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimGrid.BimGridXY"
    },
    "Storeys": [
        {
            "Elevation": 0,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "b1530845-20b9-4451-9e8b-45d47cbf83b1",
            "MappingId": 1,
            "Name": "BASE LEVEL",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 3000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "2ce41161-ea9e-456f-9d1d-e39a4467280b",
            "MappingId": 2,
            "Name": "LEVEL 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 6000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "f54208e7-f746-4a7f-984a-1c4cc19a5487",
            "MappingId": 3,
            "Name": "LEVEL 3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 9000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "01ba5b27-303c-4c34-aaab-ef7ccf26a121",
            "MappingId": 4,
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
            "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
            "MappingId": 6,
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
            "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
            "MappingId": 7,
            "Name": "FCU25",
            "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
        }
    ],
    "Profiles": [
        {
            "Width": 500,
            "Length": 700,
            "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
            "MappingId": 51,
            "Name": "500x700",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 300,
            "Length": 700,
            "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
            "MappingId": 64,
            "Name": "300x700",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        }
    ],
    "LoadPatterns": [
        {
            "Type": 0,
            "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
            "MappingId": 8,
            "Name": "DEAD",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        },
        {
            "Type": 1,
            "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
            "MappingId": 9,
            "Name": "LIVE",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        },
        {
            "Type": 4,
            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
            "MappingId": 10,
            "Name": "QuakeX",
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
            "MappingId": 11,
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
            "MappingId": 12,
            "Name": "Point 2",
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
            "MappingId": 13,
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
                "X": -9000,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
            "MappingId": 14,
            "Name": "Point 4",
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
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
            "MappingId": 16,
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
                "X": -3000,
                "Y": -6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "9121053d-cd14-497c-97bd-c203afc77dca",
            "MappingId": 17,
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
                "X": -3000,
                "Y": -6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
            "MappingId": 18,
            "Name": "Point 8",
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
            "MappingId": 19,
            "Name": "Point 9",
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
            "MappingId": 20,
            "Name": "Point 10",
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
            "MappingId": 21,
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
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
            "MappingId": 22,
            "Name": "Point 12",
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
            "MappingId": 23,
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
                "X": 3000,
                "Y": -6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
            "MappingId": 24,
            "Name": "Point 14",
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
            "MappingId": 25,
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
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
            "MappingId": 26,
            "Name": "Point 16",
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
            "MappingId": 27,
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
                "X": 3000,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
            "MappingId": 28,
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
                "X": 9000,
                "Y": -6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "1c126bce-b75b-4588-babe-162fc150fd23",
            "MappingId": 29,
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "4f8ddd21-c05a-4559-91cd-c15fa6e01756",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
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
            "MappingId": 30,
            "Name": "Point 20",
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
            "MappingId": 31,
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
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
            "MappingId": 32,
            "Name": "Point 22",
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
            "MappingId": 33,
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "fb122149-f1b4-4ae9-b303-0530b96ba10e",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
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
            "MappingId": 34,
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
            "Guid": "768cc840-9a61-423e-a40b-e7d9570ef78d",
            "MappingId": 35,
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
                "X": -3000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "42c5c68e-65e2-4f29-8ad0-7ffed8d90d2c",
            "MappingId": 36,
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
                "Y": -6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "cd998d97-4a4f-43bb-8ed8-6b5abb8073f2",
            "MappingId": 37,
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
                "X": 3000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
            "MappingId": 38,
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
                "X": 3000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
            "MappingId": 39,
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "303801d2-fd19-497a-8983-74f5c70a55f0",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": -6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "84e922e5-f07f-4b5a-893b-2777dd1c40f8",
            "MappingId": 40,
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
            "MappingId": 41,
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "10834386-2925-4102-9fe8-6419bf50c9d1",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "40d6747c-41dd-46b3-ab83-39cbf62dca11",
            "MappingId": 42,
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
                "X": -3000,
                "Y": 0,
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "2211dd63-3aa6-46f2-9209-e1c4a176a809",
            "MappingId": 43,
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
                "X": -3000,
                "Y": 6000,
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "23b61e17-5dad-41d9-9e8d-86577dedb6a9",
            "MappingId": 44,
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
                "X": 3000,
                "Y": -6000,
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "90f6c8ab-8714-4134-beb4-e259909565d1",
            "MappingId": 45,
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
                "Y": 0,
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
            "MappingId": 46,
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
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "5c1349f4-28f5-4233-a993-7189bf951f72",
            "MappingId": 47,
            "Name": "Point 37",
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "2179f27a-5a18-43fe-807c-a06982d8d273",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": -6000,
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "3eb1293d-b6f1-4550-afc7-a930d8d1c9f6",
            "MappingId": 48,
            "Name": "Point 38",
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "eaec1e07-0d16-4f04-8e9c-461b7c08a349",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 0,
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7ac3ba43-9b44-4e76-b88e-7636987b5e2d",
            "MappingId": 49,
            "Name": "Point 39",
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.1,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                        "MappingId": 10,
                        "Name": "QuakeX",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "9b0cfaec-083e-4da3-a5e6-9d135d0d47d4",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
            "AnalysisResults": null,
            "Location": {
                "X": 9000,
                "Y": 6000,
                "Z": 9000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "45726f3c-2ae1-4c91-aab9-772a6a7e061b",
            "MappingId": 50,
            "Name": "Point 40",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        }
    ],
    "Lines": [
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "867f0c3e-dbb4-465f-acae-3563ba8712b0",
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
                "MappingId": 11,
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
                "MappingId": 12,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 51,
            "Name": "Unknown1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "af884d57-c212-4d4a-bed6-6b40afde16f2",
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
                "MappingId": 13,
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
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                "MappingId": 14,
                "Name": "Point 4",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 53,
            "Name": "Unknown2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9ef9bca3-5588-4a68-a9d0-843dc7133f90",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 54,
            "Name": "Unknown3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "c487fe46-af0b-4bb1-8580-38a599453403",
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
                "MappingId": 17,
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
                    "X": -3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6d15fc30-7de6-490d-bff4-6c114fd1b805",
                "MappingId": 18,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 55,
            "Name": "Unknown4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fc1e8d4a-a241-444a-8b95-6ef04e9a017d",
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
                "MappingId": 19,
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
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 20,
                "Name": "Point 10",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 56,
            "Name": "Unknown5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "be8caf03-51d1-407b-a4ff-aa5529e512c9",
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
                "MappingId": 21,
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
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 22,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 57,
            "Name": "Unknown6",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "c417b79b-b198-44b8-9895-9f779e202615",
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
                "MappingId": 23,
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
                    "X": 3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                "MappingId": 24,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Name": "Unknown7",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fdd6b900-b3da-4bb4-bde6-57f5329af633",
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
                "MappingId": 25,
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
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 26,
                "Name": "Point 16",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 59,
            "Name": "Unknown8",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "acd98592-8412-425a-b95f-cc6563505884",
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
                "MappingId": 27,
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
                "MappingId": 28,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 60,
            "Name": "Unknown9",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "95658a6d-e410-4d17-8c8e-b842bc292b19",
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
                "MappingId": 29,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "4f8ddd21-c05a-4559-91cd-c15fa6e01756",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 30,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 61,
            "Name": "Unknown10",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "0a4676f4-f9e6-4154-8056-dcb8e6b0e581",
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
                "MappingId": 31,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 32,
                "Name": "Point 22",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 62,
            "Name": "Unknown11",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 3,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "da43732e-e267-4840-b839-a0b74a962b22",
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
                "MappingId": 33,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "fb122149-f1b4-4ae9-b303-0530b96ba10e",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 34,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "MappingId": 63,
            "Name": "Unknown12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f46d53e6-24ba-47d5-9569-f66791e4cabc",
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
                "MappingId": 12,
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
                "MappingId": 18,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 64,
            "Name": "Unknown13",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "b8d03dc0-3ccb-4521-8132-b04570cc20ed",
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
                "MappingId": 18,
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
                    "X": 3000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                "MappingId": 24,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 66,
            "Name": "Unknown14",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "dcd0cc1f-5f12-492a-8930-3f55c0e42f30",
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
                "MappingId": 24,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "4f8ddd21-c05a-4559-91cd-c15fa6e01756",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 30,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 67,
            "Name": "Unknown15",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "aab4a023-5a03-4244-aa03-f6ecdedcc300",
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
                "MappingId": 14,
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
                    "X": -3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 20,
                "Name": "Point 10",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 68,
            "Name": "Unknown16",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "933e1a70-8cd6-4d4b-bd73-65ea9c3ff1fb",
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
                "MappingId": 20,
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
                    "X": 3000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                "MappingId": 26,
                "Name": "Point 16",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 69,
            "Name": "Unknown17",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "cfcb01a5-fe10-4a3b-8b06-7d1f62b0a5df",
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
                "MappingId": 26,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 32,
                "Name": "Point 22",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 70,
            "Name": "Unknown18",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "db2c9147-c328-4836-b621-e4eae7e58c92",
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
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 22,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 71,
            "Name": "Unknown19",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "ef542e22-3bfc-40ab-acd2-8873e8407526",
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
                "MappingId": 22,
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
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                "MappingId": 28,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 72,
            "Name": "Unknown20",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "7cb520e8-4ea7-4eac-aaf4-3f5cd15fef7e",
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
                "MappingId": 28,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "fb122149-f1b4-4ae9-b303-0530b96ba10e",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 34,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 73,
            "Name": "Unknown21",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "cba6664b-5b18-4cd9-bc04-c87e9e16f58a",
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
                "MappingId": 12,
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
                "MappingId": 14,
                "Name": "Point 4",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 74,
            "Name": "Unknown22",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "3bdca902-4dd4-42fa-a791-c8aec875733b",
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
                "MappingId": 14,
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
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
                "MappingId": 16,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 75,
            "Name": "Unknown23",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "7d42b5aa-b8aa-490f-a618-7219d42a7a40",
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
                "MappingId": 18,
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
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                "MappingId": 20,
                "Name": "Point 10",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 76,
            "Name": "Unknown24",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9a9d98c5-3328-40d7-9555-dd7c448734c8",
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
                "MappingId": 20,
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
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                "MappingId": 22,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 77,
            "Name": "Unknown25",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "cc7243df-f767-4340-974d-4d4ffb1450b4",
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
                "MappingId": 24,
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
                "MappingId": 26,
                "Name": "Point 16",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 78,
            "Name": "Unknown26",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "225fd4e0-32f9-4fcd-9a1a-1b8dde570ba4",
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
                "MappingId": 26,
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
                    "X": 3000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                "MappingId": 28,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 79,
            "Name": "Unknown27",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "4be1efdd-b39f-4320-90d3-d79fdc9fa1e9",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "4f8ddd21-c05a-4559-91cd-c15fa6e01756",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 30,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 32,
                "Name": "Point 22",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 80,
            "Name": "Unknown28",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "3eaf27b4-6227-473a-877e-d8c668bb90c9",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 32,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "fb122149-f1b4-4ae9-b303-0530b96ba10e",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 34,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "MappingId": 81,
            "Name": "Unknown29",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "5927e9ac-fb3f-429e-b26f-72bf4a267a05",
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
                "MappingId": 20,
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
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "768cc840-9a61-423e-a40b-e7d9570ef78d",
                "MappingId": 35,
                "Name": "Point 25",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "a7e48f8e-0a93-4759-8a8d-751ef25f5f4a",
            "MappingId": 82,
            "Name": "Unknown30",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "826c43c1-61a8-4b49-9ae8-e44b7309cc53",
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
                "MappingId": 22,
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
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "42c5c68e-65e2-4f29-8ad0-7ffed8d90d2c",
                "MappingId": 36,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "95e3897e-9350-41af-be07-e12825d9ea1e",
            "MappingId": 83,
            "Name": "Unknown31",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "d854e9fe-78d0-428c-99bf-431048f9910a",
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
                "MappingId": 24,
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
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "cd998d97-4a4f-43bb-8ed8-6b5abb8073f2",
                "MappingId": 37,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "f6453174-7c8c-491f-af63-ca193518bb09",
            "MappingId": 84,
            "Name": "Unknown32",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "1b7976c4-2f9d-43c5-b932-5f4755de2857",
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
                "MappingId": 26,
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
                    "X": 3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                "MappingId": 38,
                "Name": "Point 28",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "33f309f0-f1ba-47c1-98aa-fd3e7489cb71",
            "MappingId": 85,
            "Name": "Unknown33",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "4ff4dd09-9d6e-4f40-9c64-e3bf2e9abca9",
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
                "MappingId": 28,
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
                "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
                "MappingId": 39,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "048a226c-c785-4fda-9e23-81fa02043923",
            "MappingId": 86,
            "Name": "Unknown34",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "57e70098-9e7b-4c1f-ae13-22da8ea82265",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "4f8ddd21-c05a-4559-91cd-c15fa6e01756",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 30,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "303801d2-fd19-497a-8983-74f5c70a55f0",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "84e922e5-f07f-4b5a-893b-2777dd1c40f8",
                "MappingId": 40,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "8ce52554-2614-4512-ac9d-1f4de9d6c69b",
            "MappingId": 87,
            "Name": "Unknown35",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "21700fef-5de0-40af-a80b-7602a078f032",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 32,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
                "MappingId": 41,
                "Name": "Point 31",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "d5b94a2b-d639-443d-b33b-9f46313c1fce",
            "MappingId": 88,
            "Name": "Unknown36",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 3,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "4f0df9de-42ce-4392-bfb1-29626b9feeef",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "fb122149-f1b4-4ae9-b303-0530b96ba10e",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
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
                "MappingId": 34,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "10834386-2925-4102-9fe8-6419bf50c9d1",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "40d6747c-41dd-46b3-ab83-39cbf62dca11",
                "MappingId": 42,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "6414620c-38dc-4e99-80c9-8d5a6cee5fc3",
            "MappingId": 89,
            "Name": "Unknown37",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "cc425998-0e40-40e1-8654-79bad6fb3873",
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
                "Guid": "cd998d97-4a4f-43bb-8ed8-6b5abb8073f2",
                "MappingId": 37,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "303801d2-fd19-497a-8983-74f5c70a55f0",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "84e922e5-f07f-4b5a-893b-2777dd1c40f8",
                "MappingId": 40,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "978162ab-66d2-44d9-a635-4829edf6f014",
            "MappingId": 90,
            "Name": "Unknown38",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "6a4fb772-a4d7-4986-abcc-68adcfe2382d",
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
                "Guid": "768cc840-9a61-423e-a40b-e7d9570ef78d",
                "MappingId": 35,
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
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                "MappingId": 38,
                "Name": "Point 28",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "7617da3d-a55e-4b34-980c-52cfe161168d",
            "MappingId": 91,
            "Name": "Unknown39",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "384c7e23-03f4-4b0b-ada3-8246951fe95e",
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
                "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                "MappingId": 38,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
                "MappingId": 41,
                "Name": "Point 31",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "431e0ab2-4a69-48b7-b02e-8d08804fb004",
            "MappingId": 92,
            "Name": "Unknown40",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "1ace91b6-b03e-44c9-9deb-4c3cca9a90d3",
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
                "Guid": "42c5c68e-65e2-4f29-8ad0-7ffed8d90d2c",
                "MappingId": 36,
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
                "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
                "MappingId": 39,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "e2fe1a13-9036-4ef8-8b8c-9b454b2adfbe",
            "MappingId": 93,
            "Name": "Unknown41",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "66d26678-b01b-4c1c-94dd-25500513e168",
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
                "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
                "MappingId": 39,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "10834386-2925-4102-9fe8-6419bf50c9d1",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "40d6747c-41dd-46b3-ab83-39cbf62dca11",
                "MappingId": 42,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "7d8c6c3c-5a51-429e-b8ae-b1d2320377a3",
            "MappingId": 94,
            "Name": "Unknown42",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "2261f00b-0d50-418f-97dd-fa1cc7ecfc58",
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
                "Guid": "768cc840-9a61-423e-a40b-e7d9570ef78d",
                "MappingId": 35,
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
                    "X": -3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "42c5c68e-65e2-4f29-8ad0-7ffed8d90d2c",
                "MappingId": 36,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "25cf613a-5db9-4b1b-9569-e00c8ae0fe8b",
            "MappingId": 95,
            "Name": "Unknown43",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "8fb25d68-5a34-48dd-96b4-869ca93d8bf1",
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
                "Guid": "cd998d97-4a4f-43bb-8ed8-6b5abb8073f2",
                "MappingId": 37,
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
                    "X": 3000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                "MappingId": 38,
                "Name": "Point 28",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "0b80b3bb-69d4-4c56-974b-92dc181be50c",
            "MappingId": 96,
            "Name": "Unknown44",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "340e6e4e-386a-4af4-8372-8ff760f946b8",
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
                "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                "MappingId": 38,
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
                    "X": 3000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
                "MappingId": 39,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "a789c39c-633b-43f8-9108-37cdd068f29a",
            "MappingId": 97,
            "Name": "Unknown45",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f246a389-a390-4caa-906c-123efa6d7d55",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "303801d2-fd19-497a-8983-74f5c70a55f0",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "84e922e5-f07f-4b5a-893b-2777dd1c40f8",
                "MappingId": 40,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
                "MappingId": 41,
                "Name": "Point 31",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "f2555c0d-4108-4bfa-9f9b-bbe3b31b4e32",
            "MappingId": 98,
            "Name": "Unknown46",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "df722416-16de-4650-92b8-424615ffaa79",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
                "MappingId": 41,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "10834386-2925-4102-9fe8-6419bf50c9d1",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "40d6747c-41dd-46b3-ab83-39cbf62dca11",
                "MappingId": 42,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "a54834cc-2736-436f-b0e2-f5c5044b2f97",
            "MappingId": 99,
            "Name": "Unknown47",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "409ab9bf-83fb-4c8a-aea1-af472624dca0",
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
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "768cc840-9a61-423e-a40b-e7d9570ef78d",
                "MappingId": 35,
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
                    "X": -3000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2211dd63-3aa6-46f2-9209-e1c4a176a809",
                "MappingId": 43,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "1857804f-1450-49e9-8d48-748e664353ec",
            "MappingId": 100,
            "Name": "Unknown48",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "76430b54-5708-4d72-b1a9-27578be731a5",
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
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "42c5c68e-65e2-4f29-8ad0-7ffed8d90d2c",
                "MappingId": 36,
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
                    "X": -3000,
                    "Y": 6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "23b61e17-5dad-41d9-9e8d-86577dedb6a9",
                "MappingId": 44,
                "Name": "Point 34",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "b94b7572-5c08-4c9d-b532-be404ddbf4d4",
            "MappingId": 101,
            "Name": "Unknown49",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "039be13f-38d1-4479-a76a-8041b810c597",
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
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "cd998d97-4a4f-43bb-8ed8-6b5abb8073f2",
                "MappingId": 37,
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
                    "X": 3000,
                    "Y": -6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "90f6c8ab-8714-4134-beb4-e259909565d1",
                "MappingId": 45,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "0c2f467c-4704-4587-bfdb-d27b8c99570c",
            "MappingId": 102,
            "Name": "Unknown50",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "c94514f4-ed9f-437b-ac3a-b87ce50fc792",
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
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                "MappingId": 38,
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
                    "X": 3000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                "MappingId": 46,
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "2970bcde-75db-4520-b4ed-d3f5d2a6b2b4",
            "MappingId": 103,
            "Name": "Unknown51",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "51a311cf-9b00-4f9c-99af-ee22105074ba",
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
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
                "MappingId": 39,
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
                    "X": 3000,
                    "Y": 6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5c1349f4-28f5-4233-a993-7189bf951f72",
                "MappingId": 47,
                "Name": "Point 37",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "b25dfeba-b0e6-4fee-800e-70256fa82ae0",
            "MappingId": 104,
            "Name": "Unknown52",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "5585a4e1-fd60-4f08-8556-1f1a6dfec64a",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "303801d2-fd19-497a-8983-74f5c70a55f0",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "84e922e5-f07f-4b5a-893b-2777dd1c40f8",
                "MappingId": 40,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "2179f27a-5a18-43fe-807c-a06982d8d273",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3eb1293d-b6f1-4550-afc7-a930d8d1c9f6",
                "MappingId": 48,
                "Name": "Point 38",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "467d67bd-4873-4964-84aa-1e310e086769",
            "MappingId": 105,
            "Name": "Unknown53",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "851d355e-b2e0-4c63-9959-f2c10129bcaa",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
                "MappingId": 41,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "eaec1e07-0d16-4f04-8e9c-461b7c08a349",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7ac3ba43-9b44-4e76-b88e-7636987b5e2d",
                "MappingId": 49,
                "Name": "Point 39",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "52b7e79f-1286-45a7-8b17-35e6f8c6a255",
            "MappingId": 106,
            "Name": "Unknown54",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 500,
                "Length": 700,
                "Guid": "82bf4d83-dda8-438f-9a67-b77f76b5edea",
                "MappingId": 51,
                "Name": "500x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 3,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "af09f03d-91d9-42e2-9812-e411761839bd",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "10834386-2925-4102-9fe8-6419bf50c9d1",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "40d6747c-41dd-46b3-ab83-39cbf62dca11",
                "MappingId": 42,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "9b0cfaec-083e-4da3-a5e6-9d135d0d47d4",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "45726f3c-2ae1-4c91-aab9-772a6a7e061b",
                "MappingId": 50,
                "Name": "Point 40",
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
                "Guid": "32c02379-c0fc-482c-a52d-fd7a5ecea4e4",
                "MappingId": 6,
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
            "Guid": "af1c87eb-1625-457c-866b-d4cb253bccf1",
            "MappingId": 107,
            "Name": "Unknown55",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "0d4db7bb-557d-45f1-8b29-a810afc0c317",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "90f6c8ab-8714-4134-beb4-e259909565d1",
                "MappingId": 45,
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "2179f27a-5a18-43fe-807c-a06982d8d273",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3eb1293d-b6f1-4550-afc7-a930d8d1c9f6",
                "MappingId": 48,
                "Name": "Point 38",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "32b60af8-eaf3-402e-9648-38370f81ef03",
            "MappingId": 108,
            "Name": "Unknown56",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "1ac16c45-a41f-4b9f-bb8a-ba48789b2e6d",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2211dd63-3aa6-46f2-9209-e1c4a176a809",
                "MappingId": 43,
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
                    "X": 3000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                "MappingId": 46,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "67a0789e-c28d-4f6a-98d7-5eb74ff2fe33",
            "MappingId": 109,
            "Name": "Unknown57",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "48196a51-47d8-49d3-b710-a410b6dcd65a",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                "MappingId": 46,
                "Name": "Point 36",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "eaec1e07-0d16-4f04-8e9c-461b7c08a349",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7ac3ba43-9b44-4e76-b88e-7636987b5e2d",
                "MappingId": 49,
                "Name": "Point 39",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "e8de8f38-00b2-4b3d-8f9e-99bbfad215e1",
            "MappingId": 110,
            "Name": "Unknown58",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "1aeb8f88-b7e9-4890-b7fe-1b8e7e8dffee",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "23b61e17-5dad-41d9-9e8d-86577dedb6a9",
                "MappingId": 44,
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
                    "X": 3000,
                    "Y": 6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5c1349f4-28f5-4233-a993-7189bf951f72",
                "MappingId": 47,
                "Name": "Point 37",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "73384eac-3983-4e24-b98c-103a672c8366",
            "MappingId": 111,
            "Name": "Unknown59",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "326c7847-950b-4e07-be20-27032223789c",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5c1349f4-28f5-4233-a993-7189bf951f72",
                "MappingId": 47,
                "Name": "Point 37",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "9b0cfaec-083e-4da3-a5e6-9d135d0d47d4",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "45726f3c-2ae1-4c91-aab9-772a6a7e061b",
                "MappingId": 50,
                "Name": "Point 40",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "8f6eef2e-b4dd-4f72-adda-5b9ca58dd720",
            "MappingId": 112,
            "Name": "Unknown60",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "25667a26-1bb1-4d4e-a86f-e568aa409eeb",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "2211dd63-3aa6-46f2-9209-e1c4a176a809",
                "MappingId": 43,
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
                    "X": -3000,
                    "Y": 6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "23b61e17-5dad-41d9-9e8d-86577dedb6a9",
                "MappingId": 44,
                "Name": "Point 34",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "19b901ef-0144-4e4b-a582-b600bde9dfba",
            "MappingId": 113,
            "Name": "Unknown61",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "b5fe10ce-3d83-492c-898d-bce44b717b28",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "90f6c8ab-8714-4134-beb4-e259909565d1",
                "MappingId": 45,
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
                    "X": 3000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                "MappingId": 46,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "992a8cd5-2ef8-496c-9ef3-bab3136ca832",
            "MappingId": 114,
            "Name": "Unknown62",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f6f367ae-a27c-4a5c-8fd2-46a5f14f8757",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                "MappingId": 46,
                "Name": "Point 36",
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
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "5c1349f4-28f5-4233-a993-7189bf951f72",
                "MappingId": 47,
                "Name": "Point 37",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "46be86cb-0405-4b5f-bf68-0c4c7df3e763",
            "MappingId": 115,
            "Name": "Unknown63",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "dd3acd3e-81b6-4af3-bfc3-bfa3f7c6f9e7",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "2179f27a-5a18-43fe-807c-a06982d8d273",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": -6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3eb1293d-b6f1-4550-afc7-a930d8d1c9f6",
                "MappingId": 48,
                "Name": "Point 38",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "eaec1e07-0d16-4f04-8e9c-461b7c08a349",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7ac3ba43-9b44-4e76-b88e-7636987b5e2d",
                "MappingId": 49,
                "Name": "Point 39",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "f98f17d7-de8f-495a-8d30-5a3b78244179",
            "MappingId": 116,
            "Name": "Unknown64",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 700,
                "Guid": "92a86c4c-3498-4543-93e6-c6988a4a9ec1",
                "MappingId": 64,
                "Name": "300x700",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "8c7b14af-eb8a-4b83-8800-1c5eab07ab4c",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "eaec1e07-0d16-4f04-8e9c-461b7c08a349",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 0,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "7ac3ba43-9b44-4e76-b88e-7636987b5e2d",
                "MappingId": 49,
                "Name": "Point 39",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 0.1,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 0,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 4,
                            "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                            "MappingId": 10,
                            "Name": "QuakeX",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "9b0cfaec-083e-4da3-a5e6-9d135d0d47d4",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 9000,
                    "Y": 6000,
                    "Z": 9000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "45726f3c-2ae1-4c91-aab9-772a6a7e061b",
                "MappingId": 50,
                "Name": "Point 40",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
            "Guid": "fd294bf3-00cd-498c-a079-e655d149cbef",
            "MappingId": 117,
            "Name": "Unknown65",
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
                    "MappingId": 14,
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
                        "X": -3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                    "MappingId": 20,
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
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                    "MappingId": 22,
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
                        "X": -9000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "2e18007e-1419-4944-8e0c-07629e615ada",
                    "MappingId": 16,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "27c882a4-9d7e-4d87-aebd-50defecca8f1",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "aa69a765-9c13-4a84-93eb-7ce1c7925e92",
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
            "MappingId": 118,
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
                    "MappingId": 20,
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
                        "X": 3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "95219ae2-51b9-44bc-9b9b-f93f561da179",
                    "MappingId": 26,
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
                        "X": 3000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                    "MappingId": 28,
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
                        "X": -3000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "d5909e94-d163-4037-a132-5d42d6767358",
                    "MappingId": 22,
                    "Name": "Point 12",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "f402d29b-17da-42a7-9289-2f61561dce83",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "05ee3bde-81b4-4298-955e-b09bdb7e0e55",
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
            "MappingId": 119,
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
                    "MappingId": 26,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
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
                    "MappingId": 32,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "fb122149-f1b4-4ae9-b303-0530b96ba10e",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
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
                    "MappingId": 34,
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
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "fea9f8de-bc3e-47c9-ac43-f72e3148fbae",
                    "MappingId": 28,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "457b1867-59f2-4ada-9431-fb03b97f4e6c",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "9e0687f0-a8b3-4c9a-a34a-1678eadf1b6d",
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
            "MappingId": 120,
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
                    "MappingId": 12,
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
                    "MappingId": 18,
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
                        "X": -3000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                    "MappingId": 20,
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
                        "X": -9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "7d8cfc39-d85a-402c-a50b-e5d48fc0efd3",
                    "MappingId": 14,
                    "Name": "Point 4",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "a429e163-7392-4bc5-916e-da264075494a",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "4af3f475-009b-419f-b055-eba4997a50a0",
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
            "MappingId": 121,
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
                    "MappingId": 18,
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
                        "X": 3000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "41bb4afb-5dc6-4bb5-bfe5-8270cdac51e1",
                    "MappingId": 24,
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
                    "MappingId": 26,
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
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6a6db90a-be0f-480f-90a9-0f10162825d8",
                    "MappingId": 20,
                    "Name": "Point 10",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "f8f0b228-b5cf-4387-b640-ab51f72b938b",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "7b9afe8f-7115-4500-a60e-7c8a0cf4e243",
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
            "MappingId": 122,
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
                    "MappingId": 24,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "4f8ddd21-c05a-4559-91cd-c15fa6e01756",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
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
                    "MappingId": 30,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "0228362f-75b1-4ff7-b105-64a57c72526a",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
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
                    "MappingId": 32,
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
                    "MappingId": 26,
                    "Name": "Point 16",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "046afb93-a3cb-431c-bbf4-443a231eecdd",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "ee5fa2a5-c1f5-4488-b76e-3a689ac6292b",
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
            "MappingId": 123,
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
                        "X": -3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "768cc840-9a61-423e-a40b-e7d9570ef78d",
                    "MappingId": 35,
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
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                    "MappingId": 38,
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
                        "X": 3000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
                    "MappingId": 39,
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
                        "X": -3000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "42c5c68e-65e2-4f29-8ad0-7ffed8d90d2c",
                    "MappingId": 36,
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "8e9b73b3-d871-4ec0-995d-2e3b31d9d710",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "b4539783-a23b-4afa-ae5d-21970276b85e",
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
            "Guid": "18d87f78-87d3-4200-8531-1629ad512647",
            "MappingId": 124,
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
                        "X": 3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                    "MappingId": 38,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
                    "MappingId": 41,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "10834386-2925-4102-9fe8-6419bf50c9d1",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "40d6747c-41dd-46b3-ab83-39cbf62dca11",
                    "MappingId": 42,
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
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "868abcb1-8b06-49db-9109-0d0ab30a071c",
                    "MappingId": 39,
                    "Name": "Point 29",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "580bfac0-727a-47a7-bdc6-49ec36a898e2",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "eae51e0b-88c8-412c-9acc-27868dfc8421",
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
            "Guid": "4fa807f5-3df8-4f81-ad4b-d4f4ce6e01fc",
            "MappingId": 125,
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
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "cd998d97-4a4f-43bb-8ed8-6b5abb8073f2",
                    "MappingId": 37,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "303801d2-fd19-497a-8983-74f5c70a55f0",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": -6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "84e922e5-f07f-4b5a-893b-2777dd1c40f8",
                    "MappingId": 40,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "17785f8f-2a51-4a23-a566-9fa0bb3a697d",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "db8971b5-803a-413e-934d-7de95bfc9ab4",
                    "MappingId": 41,
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
                        "X": 3000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "0815a9d9-4efb-4b15-a876-36a5c6ae5476",
                    "MappingId": 38,
                    "Name": "Point 28",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "7052e551-5e39-4b40-8755-24891c51ac20",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "e21afe45-637e-44f6-8969-d12d7104a340",
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
            "Guid": "5f1c21ca-740b-4144-9cfc-ee314b269f1f",
            "MappingId": 126,
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
                        "X": -3000,
                        "Y": 0,
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "2211dd63-3aa6-46f2-9209-e1c4a176a809",
                    "MappingId": 43,
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
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                    "MappingId": 46,
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
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "5c1349f4-28f5-4233-a993-7189bf951f72",
                    "MappingId": 47,
                    "Name": "Point 37",
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
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "23b61e17-5dad-41d9-9e8d-86577dedb6a9",
                    "MappingId": 44,
                    "Name": "Point 34",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "7610a89f-4ee3-405a-a61f-e3a7c265f4de",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "26b936b4-eeef-410e-8b37-ab265c410302",
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
            "Guid": "93920d85-f228-4efc-bf71-fb283138d533",
            "MappingId": 127,
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
                        "X": 3000,
                        "Y": 0,
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                    "MappingId": 46,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "eaec1e07-0d16-4f04-8e9c-461b7c08a349",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "7ac3ba43-9b44-4e76-b88e-7636987b5e2d",
                    "MappingId": 49,
                    "Name": "Point 39",
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "9b0cfaec-083e-4da3-a5e6-9d135d0d47d4",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 6000,
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "45726f3c-2ae1-4c91-aab9-772a6a7e061b",
                    "MappingId": 50,
                    "Name": "Point 40",
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
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "5c1349f4-28f5-4233-a993-7189bf951f72",
                    "MappingId": 47,
                    "Name": "Point 37",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "5b2098df-7c88-4d0d-a4a4-720ba7c9e7e6",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "53b6c775-0b73-401c-ac4b-e50f2ea8b734",
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
            "Guid": "ad15acb4-3c27-4bb6-8f93-b86a76c96dfc",
            "MappingId": 128,
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
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "90f6c8ab-8714-4134-beb4-e259909565d1",
                    "MappingId": 45,
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "2179f27a-5a18-43fe-807c-a06982d8d273",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": -6000,
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "3eb1293d-b6f1-4550-afc7-a930d8d1c9f6",
                    "MappingId": 48,
                    "Name": "Point 38",
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
                    "Loads": [
                        {
                            "LoadValue": {
                                "Lx": 0.1,
                                "Ly": 0,
                                "Lz": 0,
                                "Rx": 0,
                                "Ry": 0,
                                "Rz": 0,
                                "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                            },
                            "LoadPattern": {
                                "Type": 4,
                                "Guid": "fa7d7ce9-bb7f-41a9-adeb-2a4d00b1b23a",
                                "MappingId": 10,
                                "Name": "QuakeX",
                                "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                            },
                            "Guid": "eaec1e07-0d16-4f04-8e9c-461b7c08a349",
                            "MappingId": 0,
                            "Name": null,
                            "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                        }
                    ],
                    "AnalysisResults": null,
                    "Location": {
                        "X": 9000,
                        "Y": 0,
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "7ac3ba43-9b44-4e76-b88e-7636987b5e2d",
                    "MappingId": 49,
                    "Name": "Point 39",
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
                        "Z": 9000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "1850de6c-2005-4170-99fb-3bb0c9402d1d",
                    "MappingId": 46,
                    "Name": "Point 36",
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
                "Guid": "4f555ec6-dc9b-4b14-b05d-8f2922da93c4",
                "MappingId": 7,
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
                        "Guid": "a0cd7be1-2e2f-4cf9-9662-1281b6f6782e",
                        "MappingId": 9,
                        "Name": "LIVE",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "00a88880-64fc-41b4-9390-5e40c1906981",
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
                        "Guid": "e80f93cf-51f3-4665-8a4d-3682a8af6a68",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "7f16fcd2-0e15-4dbf-8112-e66b3c7b52f1",
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
            "Guid": "87ddc251-0a58-4358-8aaa-232f58a9a4c1",
            "MappingId": 129,
            "Name": "shell 12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        }
    ],
    "LatestMappingId": 129
};