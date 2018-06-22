var BimModel=
{
    "Grid": {
        "XValues": [
            0,
            6000,
            12000,
            18000,
            24000,
            30000,
            36000
        ],
        "YValues": [
            0,
            6000,
            12000,
            18000,
            24000,
            30000,
            36000
        ],
        "Location": null,
        "LocationRelativeTo": null,
        "Color": null,
        "Guid": "c9149a5a-2cf5-48f5-b29d-8d32ccb1ff30",
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
            "Guid": "2152e905-61f2-4368-a18c-a944b74e899e",
            "MappingId": 1,
            "Name": "Story 1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 3000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "049a2b37-e46e-4a8e-aad3-25858dcd86c4",
            "MappingId": 2,
            "Name": "Story 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 6000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7f62812c-0d03-449b-95b8-e554223ccb39",
            "MappingId": 3,
            "Name": "Story 3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        }
    ],
    "Materials": [
        {
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0,
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
                    "PropertyValue": 2.5e-12,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "PoissonRatio",
                    "PropertyValue": 0.2,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "ThermalExpansionCoefficient",
                    "PropertyValue": 0.0000099,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "YoungModulus",
                    "PropertyValue": 22,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                }
            ],
            "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
            "MappingId": 5,
            "Name": "Fcu25",
            "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
        }
    ],
    "Profiles": [
        {
            "Width": 400,
            "Length": 600,
            "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
            "MappingId": 17,
            "Name": null,
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 300,
            "Length": 800,
            "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
            "MappingId": 22,
            "Name": null,
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        }
    ],
    "LoadPatterns": [
        {
            "Type": 0,
            "Guid": "78c3b475-3ae3-4e7a-8172-0051c45bf1cd",
            "MappingId": 6,
            "Name": "deadLoad",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        },
        {
            "Type": 1,
            "Guid": "3e1a7c3b-b65f-4ada-a28f-a03615737888",
            "MappingId": 7,
            "Name": "liveLoad",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        },
        {
            "Type": 4,
            "Guid": "742cb63b-0a14-4865-b7cd-2df9eebdd202",
            "MappingId": 8,
            "Name": "DummyOne",
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
                "X": 0,
                "Y": 0,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "83d3fa2f-e133-4538-a05e-7ef066335f96",
            "MappingId": 9,
            "Name": "Point 1",
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
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 77,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 44,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "78c3b475-3ae3-4e7a-8172-0051c45bf1cd",
                        "MappingId": 6,
                        "Name": "deadLoad",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "a42f8fa8-8e91-4934-82f6-a00ca757ff99",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                }
            ],
            "AnalysisResults": null,
            "Location": {
                "X": 6000,
                "Y": 0,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "6476349c-9243-49e5-98dc-beed96d05995",
            "MappingId": 10,
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
                "X": 0,
                "Y": 6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "15afe8e9-a465-4d07-9f4b-e5cb3cae5de9",
            "MappingId": 11,
            "Name": "Point 3",
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
                "X": 6000,
                "Y": 6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "64048cd8-7b09-4f87-be4b-d5552699dccc",
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
                "X": 0,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "6c9f3d6e-8e47-4582-a431-bc93ba752f78",
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
                "X": 6000,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "10b8a8af-2ac8-487f-b59e-2c69212e3268",
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
                "X": 0,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "05eeb2ec-0e49-4c47-85a3-575addd01038",
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
                "X": 6000,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "55d9271a-33d7-469f-96ec-4403b7b5d905",
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
                "X": 0,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "463e1182-d6fe-4bd8-ac30-63441c4b4cce",
            "MappingId": 28,
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
                "X": 6000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "ed281e67-cbba-4575-9c73-295c54a67fc6",
            "MappingId": 30,
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
                "X": 0,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "08be55ed-5d85-4747-aa66-66af5e6eea62",
            "MappingId": 32,
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
                "X": 6000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "856da52f-ff0d-4164-bef7-194cbb9389ef",
            "MappingId": 34,
            "Name": "Point 12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        }
    ],
    "Lines": [
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "112772a2-862a-4782-9f29-0e7aedb2b347",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "83d3fa2f-e133-4538-a05e-7ef066335f96",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6c9f3d6e-8e47-4582-a431-bc93ba752f78",
                "MappingId": 13,
                "Name": "Point 5",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 100,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 26,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "78c3b475-3ae3-4e7a-8172-0051c45bf1cd",
                        "MappingId": 6,
                        "Name": "deadLoad",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "e25901db-797e-4635-a8dd-e8c0d3b041b0",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimLineLoad.BimLineLoadUniform"
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
            "Guid": "f4d54fd0-02f6-4bd2-8c7c-7a88bdd48c84",
            "MappingId": 17,
            "Name": "Unknown1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "8854b1af-498c-4e7d-b4f3-fda234a65eca",
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
                "Loads": [
                    {
                        "LoadValue": {
                            "Lx": 77,
                            "Ly": 0,
                            "Lz": 0,
                            "Rx": 0,
                            "Ry": 0,
                            "Rz": 44,
                            "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                        },
                        "LoadPattern": {
                            "Type": 0,
                            "Guid": "78c3b475-3ae3-4e7a-8172-0051c45bf1cd",
                            "MappingId": 6,
                            "Name": "deadLoad",
                            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                        },
                        "Guid": "a42f8fa8-8e91-4934-82f6-a00ca757ff99",
                        "MappingId": 0,
                        "Name": null,
                        "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPointLoad.BimPointLoadOnPoint"
                    }
                ],
                "AnalysisResults": null,
                "Location": {
                    "X": 6000,
                    "Y": 0,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6476349c-9243-49e5-98dc-beed96d05995",
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
                    "X": 6000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "10b8a8af-2ac8-487f-b59e-2c69212e3268",
                "MappingId": 14,
                "Name": "Point 6",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
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
            "Guid": "19dbbf6e-1eae-418e-ae74-5b5b6d1ba4de",
            "MappingId": 19,
            "Name": "Unknown2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "00ea19a1-603c-4909-a8ac-31ce6c579849",
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "15afe8e9-a465-4d07-9f4b-e5cb3cae5de9",
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "05eeb2ec-0e49-4c47-85a3-575addd01038",
                "MappingId": 15,
                "Name": "Point 7",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
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
            "Guid": "72b64a49-477c-4207-8e70-2522f47871e8",
            "MappingId": 20,
            "Name": "Unknown3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 3,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "6cbbd217-68b5-49c1-8b36-d1798f720962",
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "64048cd8-7b09-4f87-be4b-d5552699dccc",
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9271a-33d7-469f-96ec-4403b7b5d905",
                "MappingId": 16,
                "Name": "Point 8",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
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
            "Guid": "47a1ba2d-904e-4d56-9d7f-998268ed318a",
            "MappingId": 21,
            "Name": "Unknown4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f6afde4d-cff1-4983-962a-cd6ceb6a6950",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6c9f3d6e-8e47-4582-a431-bc93ba752f78",
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "05eeb2ec-0e49-4c47-85a3-575addd01038",
                "MappingId": 15,
                "Name": "Point 7",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0,
                        "Ly": 0,
                        "Lz": -100,
                        "Rx": 0,
                        "Ry": 36,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "3e1a7c3b-b65f-4ada-a28f-a03615737888",
                        "MappingId": 7,
                        "Name": "liveLoad",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "35d1e093-d09b-42d7-99c1-4017c29dccd1",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimLineLoad.BimLineLoadUniform"
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
            "Guid": "c68aee46-5e41-4315-9909-809c3422eedd",
            "MappingId": 22,
            "Name": "Unknown5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "6cf13e63-7487-486d-a86e-8bfee1233077",
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
                    "X": 6000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "10b8a8af-2ac8-487f-b59e-2c69212e3268",
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9271a-33d7-469f-96ec-4403b7b5d905",
                "MappingId": 16,
                "Name": "Point 8",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
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
            "Guid": "1a3189eb-ca49-4d2a-88f7-e274ed074cc5",
            "MappingId": 24,
            "Name": "Unknown6",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "e335d3be-c135-4a1f-963b-e02923e2c304",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6c9f3d6e-8e47-4582-a431-bc93ba752f78",
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
                    "X": 6000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "10b8a8af-2ac8-487f-b59e-2c69212e3268",
                "MappingId": 14,
                "Name": "Point 6",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
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
            "Guid": "d984a5ae-dff9-4851-bc60-bcf85dd5d1d7",
            "MappingId": 25,
            "Name": "Unknown7",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "a2edf3a6-50d5-4589-82bb-675c3edea147",
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "05eeb2ec-0e49-4c47-85a3-575addd01038",
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9271a-33d7-469f-96ec-4403b7b5d905",
                "MappingId": 16,
                "Name": "Point 8",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
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
            "Guid": "60de3de6-aa7c-4c76-9c1e-d9a2dced92ad",
            "MappingId": 26,
            "Name": "Unknown8",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "9939f4b2-3406-4b8b-9ab2-db603b62d84c",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6c9f3d6e-8e47-4582-a431-bc93ba752f78",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "463e1182-d6fe-4bd8-ac30-63441c4b4cce",
                "MappingId": 28,
                "Name": "Point 9",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "a29de978-ee80-4926-aae4-9eca32c79c3b",
            "MappingId": 28,
            "Name": "Column1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "35b1049d-26dc-4a5f-ace0-d60e914a8554",
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
                    "X": 6000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "10b8a8af-2ac8-487f-b59e-2c69212e3268",
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
                    "X": 6000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ed281e67-cbba-4575-9c73-295c54a67fc6",
                "MappingId": 30,
                "Name": "Point 10",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "a22543ae-f797-41d4-885f-1f3b6e0130e1",
            "MappingId": 30,
            "Name": "Column2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "b2bbfa99-20c4-489b-ba4e-39bc9871a9aa",
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "05eeb2ec-0e49-4c47-85a3-575addd01038",
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "08be55ed-5d85-4747-aa66-66af5e6eea62",
                "MappingId": 32,
                "Name": "Point 11",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "67fe8801-32dc-43b0-abfe-4c118b2ff1a5",
            "MappingId": 32,
            "Name": "Column3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "765be273-4de0-4b04-b510-9a5cf70ca51d",
                "MappingId": 17,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 3,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "a9680930-e683-4da0-a48b-139b4aacf20a",
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9271a-33d7-469f-96ec-4403b7b5d905",
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "856da52f-ff0d-4164-bef7-194cbb9389ef",
                "MappingId": 34,
                "Name": "Point 12",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0.7,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "5160b17e-a7a0-497c-83ac-050b4a06ae00",
            "MappingId": 34,
            "Name": "Column4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "edfe63c2-7509-4379-9e08-fd97b7dbe7fb",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "463e1182-d6fe-4bd8-ac30-63441c4b4cce",
                "MappingId": 28,
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "08be55ed-5d85-4747-aa66-66af5e6eea62",
                "MappingId": 32,
                "Name": "Point 11",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "ac572f1d-0d55-4392-8991-038aef29d814",
            "MappingId": 36,
            "Name": "Beam1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "2a8d1c8c-4bbb-4bd6-a10e-9acfc9a1e8cd",
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
                    "X": 6000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ed281e67-cbba-4575-9c73-295c54a67fc6",
                "MappingId": 30,
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "856da52f-ff0d-4164-bef7-194cbb9389ef",
                "MappingId": 34,
                "Name": "Point 12",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "79b8fb30-4da5-46c9-a808-982c3934d1b2",
            "MappingId": 37,
            "Name": "Beam2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "894d95a1-e8e1-4ead-9479-f2e4b1b1d83f",
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
                    "X": 0,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "463e1182-d6fe-4bd8-ac30-63441c4b4cce",
                "MappingId": 28,
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
                    "X": 6000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ed281e67-cbba-4575-9c73-295c54a67fc6",
                "MappingId": 30,
                "Name": "Point 10",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "3e75bf39-1921-4faa-b95e-575b6e9a1a11",
            "MappingId": 38,
            "Name": "Beam3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "57d45e44-17f9-4953-9ecb-ff351d1925ca",
                "MappingId": 22,
                "Name": null,
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "c09d1994-6523-4656-8730-b55533d7b2bb",
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
                    "X": 0,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "08be55ed-5d85-4747-aa66-66af5e6eea62",
                "MappingId": 32,
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
                    "X": 6000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "856da52f-ff0d-4164-bef7-194cbb9389ef",
                "MappingId": 34,
                "Name": "Point 12",
                "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
            },
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0.7,
                "G": 0,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "8d4d9624-6621-4169-b438-ff9b585575be",
            "MappingId": 39,
            "Name": "Beam4",
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
                        "X": 0,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "6c9f3d6e-8e47-4582-a431-bc93ba752f78",
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
                        "X": 6000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "10b8a8af-2ac8-487f-b59e-2c69212e3268",
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
                        "X": 6000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "55d9271a-33d7-469f-96ec-4403b7b5d905",
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
                        "X": 0,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "05eeb2ec-0e49-4c47-85a3-575addd01038",
                    "MappingId": 15,
                    "Name": "Point 7",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.25,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 4,
                        "Guid": "742cb63b-0a14-4865-b7cd-2df9eebdd202",
                        "MappingId": 8,
                        "Name": "DummyOne",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "6681b484-d852-40b4-a7b1-a8fc34324bf8",
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
            "Guid": "3b6a88cf-4bf4-4cc6-8d3d-797502bf1ab1",
            "MappingId": 27,
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
                        "X": 0,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "463e1182-d6fe-4bd8-ac30-63441c4b4cce",
                    "MappingId": 28,
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
                        "X": 6000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ed281e67-cbba-4575-9c73-295c54a67fc6",
                    "MappingId": 30,
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
                        "X": 6000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "856da52f-ff0d-4164-bef7-194cbb9389ef",
                    "MappingId": 34,
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
                        "X": 0,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "08be55ed-5d85-4747-aa66-66af5e6eea62",
                    "MappingId": 32,
                    "Name": "Point 11",
                    "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
                }
            ],
            "RepresentationOffset": 0,
            "Material": {
                "Color": {
                    "R": 0.7,
                    "G": 0.7,
                    "B": 0,
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
                        "PropertyValue": 2.5e-12,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "PoissonRatio",
                        "PropertyValue": 0.2,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "ThermalExpansionCoefficient",
                        "PropertyValue": 0.0000099,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "YoungModulus",
                        "PropertyValue": 22,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "8c4e78bf-d679-4f09-81ff-c3399d7234bc",
                "MappingId": 5,
                "Name": "Fcu25",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": null,
            "AnalysisResults": null,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": {
                "R": 0,
                "G": 0.7,
                "B": 0,
                "ClassesHierarchy": "BimObject.BimColorRGB"
            },
            "Guid": "fe9afecc-095a-4715-b7ae-2cea3ec16053",
            "MappingId": 40,
            "Name": "shell 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        }
    ]
};