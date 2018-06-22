var BimModelNewSlantedBeamNG = {
    "Grid": {
        "XValues": [
            -9000,
            -4000,
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
        "Guid": "f174a20c-fe4d-4552-b651-323d0d3d9a90",
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
            "Guid": "1cebcafa-0b0e-4382-aecb-aebf417a94f2",
            "MappingId": 1,
            "Name": "BASE LEVEL",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 3000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7b316a0a-3d75-485c-a961-165a6ca0df07",
            "MappingId": 2,
            "Name": "LEVEL 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 6000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "88ce003e-d9a7-4c23-8904-245686e99704",
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
                    "PropertyValue": 0.041368547,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "MassDensity",
                    "PropertyValue": 2.4027696e-12,
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
                    "PropertyValue": 30.441742,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                }
            ],
            "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
            "MappingId": 5,
            "Name": "6000Psi NEW",
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
                    "PropertyValue": 0.027579032,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "MassDensity",
                    "PropertyValue": 2.4027696e-12,
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
                    "PropertyValue": 24.855578,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                }
            ],
            "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
            "MappingId": 6,
            "Name": "4000Psi",
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
            "Guid": "8959f111-1f1e-4933-b69e-84bc951cae25",
            "MappingId": 7,
            "Name": "A992Fy50",
            "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
        }
    ],
    "Profiles": [
        {
            "Width": 400,
            "Length": 600,
            "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
            "MappingId": 25,
            "Name": "400x600",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 300,
            "Length": 800,
            "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
            "MappingId": 35,
            "Name": "300x800",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        }
    ],
    "LoadPatterns": [
        {
            "Type": 0,
            "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
            "MappingId": 8,
            "Name": "DEAD",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        },
        {
            "Type": 1,
            "Guid": "56d00765-3d1c-47bd-af64-acb4f9d35de2",
            "MappingId": 9,
            "Name": "Live",
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
            "Guid": "a69b0bf0-280d-43d5-a5cd-44b5c0c832ac",
            "MappingId": 10,
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
            "Guid": "9982006c-2aba-4582-b80d-b10ed7a64304",
            "MappingId": 11,
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
            "Guid": "d1bbf972-0824-4139-8b1f-f4f3a9f10033",
            "MappingId": 12,
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
            "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
            "MappingId": 13,
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
            "Guid": "54ef89cd-a350-4e9a-b53f-b6b6cb6fcc1a",
            "MappingId": 14,
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
            "Guid": "aa690d9d-0b31-4e09-87f5-eb551ce750e6",
            "MappingId": 15,
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
                "X": -9000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "e68cb772-86ed-4c1f-ae51-e53ff17302d6",
            "MappingId": 16,
            "Name": "Point 7",
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
                "X": -4000,
                "Y": -6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "6110fd5c-366a-47e7-ba9c-7f0442e0183d",
            "MappingId": 17,
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
                "X": -4000,
                "Y": -6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "ba124233-99b9-42f8-8399-56caf440596d",
            "MappingId": 18,
            "Name": "Point 9",
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
                "X": -4000,
                "Y": 0,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "a7223082-0b4a-4e95-b004-6045ceeef301",
            "MappingId": 19,
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
                "X": -4000,
                "Y": 0,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
            "MappingId": 20,
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
                "X": -4000,
                "Y": 0,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "3cfa3e86-acd5-4a8e-9d6e-a9a865310d84",
            "MappingId": 21,
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
                "X": -4000,
                "Y": 6000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "1aec387c-68be-4db1-811f-044811debf44",
            "MappingId": 22,
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
                "X": -4000,
                "Y": 6000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "674b93a1-7c14-4768-accf-436072d13598",
            "MappingId": 23,
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
                "X": -4000,
                "Y": 6000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "3a0a32f6-deaa-404c-a05c-a3b885f02cee",
            "MappingId": 24,
            "Name": "Point 15",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        }
    ],
    "Lines": [
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "d43c6d08-0504-47b6-8fc4-85b63bbddf80",
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
                "Guid": "a69b0bf0-280d-43d5-a5cd-44b5c0c832ac",
                "MappingId": 10,
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
                "Guid": "9982006c-2aba-4582-b80d-b10ed7a64304",
                "MappingId": 11,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.000002,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "5ec73fc6-cd77-4a55-a65a-5160bcb2e30c",
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
            "Guid": "d1fe5c9c-7352-4a79-bfb0-4a608d0fc6e7",
            "MappingId": 25,
            "Name": "Unknown1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 4,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "3c1f3ae1-6b67-4c6d-a927-7a26b9d25758",
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
                "Guid": "d1bbf972-0824-4139-8b1f-f4f3a9f10033",
                "MappingId": 12,
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
                "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                "MappingId": 13,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.000002,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "4f32f05f-0628-4fa3-b5fb-d694c4d54d31",
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
            "Guid": "a717acac-7a8f-40b9-8779-aa99eb2ce725",
            "MappingId": 27,
            "Name": "Unknown2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "2d8f66f6-ca28-4a41-b18f-ef22cde3a102",
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
                "Guid": "54ef89cd-a350-4e9a-b53f-b6b6cb6fcc1a",
                "MappingId": 14,
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
                "Guid": "aa690d9d-0b31-4e09-87f5-eb551ce750e6",
                "MappingId": 15,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.000002,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "f6cad5a0-f9a7-406d-936a-ffb57b544f41",
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
            "Guid": "3d239c48-fd21-4cfd-ba53-154cb71d5912",
            "MappingId": 28,
            "Name": "Unknown3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 1,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "36803508-a18f-4d43-9fc8-4c41ff21e14a",
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
                "Guid": "aa690d9d-0b31-4e09-87f5-eb551ce750e6",
                "MappingId": 15,
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
                "Guid": "e68cb772-86ed-4c1f-ae51-e53ff17302d6",
                "MappingId": 16,
                "Name": "Point 7",
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
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
            "Guid": "56915e17-b013-49fa-a099-2693799cc99d",
            "MappingId": 29,
            "Name": "Unknown4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "0ccadf24-ef7d-4ef6-9bc4-b4a9b9ab3e96",
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
                    "X": -4000,
                    "Y": -6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6110fd5c-366a-47e7-ba9c-7f0442e0183d",
                "MappingId": 17,
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
                    "X": -4000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ba124233-99b9-42f8-8399-56caf440596d",
                "MappingId": 18,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.000002,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "095bfd65-82f0-4b44-8177-14c6dfe89711",
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
            "Guid": "b707a7a5-e8a7-4955-a421-f8c1f314bd47",
            "MappingId": 30,
            "Name": "Unknown5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "fde603bd-1ecb-4ca1-a3f5-aeb33d89830b",
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "a7223082-0b4a-4e95-b004-6045ceeef301",
                "MappingId": 19,
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
                "MappingId": 20,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.000002,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "f5a5cb29-eb37-4674-a279-a07e2d292b58",
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
            "Guid": "f9a1d8ea-e29e-499e-9e8a-d4804810589c",
            "MappingId": 31,
            "Name": "Unknown6",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "8a2d1744-2f78-4918-93f8-e44d0d9a6b3b",
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
                "MappingId": 20,
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3cfa3e86-acd5-4a8e-9d6e-a9a865310d84",
                "MappingId": 21,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
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
            "Guid": "08894861-b8fa-4646-9621-1bee7fd43d2e",
            "MappingId": 32,
            "Name": "Unknown7",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 3,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f6c1c4e0-1e24-4b04-bd10-9223e43483b7",
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1aec387c-68be-4db1-811f-044811debf44",
                "MappingId": 22,
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "674b93a1-7c14-4768-accf-436072d13598",
                "MappingId": 23,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "Lx": 0.000002,
                        "Ly": 0,
                        "Lz": 0,
                        "Rx": 0,
                        "Ry": 0,
                        "Rz": 0,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim6Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "1d0583c5-b047-4e68-8bdd-95735e5ad503",
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
            "Guid": "b520dabb-f800-4c5b-b4d1-7f9f065f35ef",
            "MappingId": 33,
            "Name": "Unknown8",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 400,
                "Length": 600,
                "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
                "MappingId": 25,
                "Name": "400x600",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 3,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "14fa59da-99b2-4710-82b9-b8984ca20218",
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "674b93a1-7c14-4768-accf-436072d13598",
                "MappingId": 23,
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3a0a32f6-deaa-404c-a05c-a3b885f02cee",
                "MappingId": 24,
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
                        "PropertyValue": 0.041368547,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 30.441742,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
                "MappingId": 5,
                "Name": "6000Psi NEW",
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
            "Guid": "abed1207-db96-4789-972c-18c65d6e96fe",
            "MappingId": 34,
            "Name": "Unknown9",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "0ea57c0b-8f4b-4fc7-a0c6-69a94e31c0c3",
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
                "Guid": "9982006c-2aba-4582-b80d-b10ed7a64304",
                "MappingId": 11,
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
                    "X": -4000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ba124233-99b9-42f8-8399-56caf440596d",
                "MappingId": 18,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "5ae3e402-5155-4684-adbd-acb840a43a85",
            "MappingId": 35,
            "Name": "Unknown10",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 8,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "cc36a3bb-487c-45a3-87d1-7eb2e90aef48",
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
                "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                "MappingId": 13,
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
                "MappingId": 20,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "fac149d9-d6b1-46ea-96e9-a0b64d9c0f9e",
            "MappingId": 37,
            "Name": "Unknown11",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "a9b88638-3a8f-439e-9c65-1716d44ca7aa",
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
                "Guid": "aa690d9d-0b31-4e09-87f5-eb551ce750e6",
                "MappingId": 15,
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "674b93a1-7c14-4768-accf-436072d13598",
                "MappingId": 23,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "24df9ebb-15be-42e9-9ceb-e67f38a2c28c",
            "MappingId": 38,
            "Name": "Unknown12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "0dd4681c-cf62-4daf-9f09-cfd804a0f967",
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
                "Guid": "e68cb772-86ed-4c1f-ae51-e53ff17302d6",
                "MappingId": 16,
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3a0a32f6-deaa-404c-a05c-a3b885f02cee",
                "MappingId": 24,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "1db0e96e-e85c-4994-a313-50a2ce5d22a4",
            "MappingId": 39,
            "Name": "Unknown13",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "7e83cfa6-fd4b-475b-8c86-9421c081cc00",
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
                "Guid": "9982006c-2aba-4582-b80d-b10ed7a64304",
                "MappingId": 11,
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
                "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                "MappingId": 13,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "64bc3551-c852-4141-b6a0-3bd7d5c8de73",
            "MappingId": 40,
            "Name": "Unknown14",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 7,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "c00ee7d8-2645-4841-9a49-46aaf9a14a9d",
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
                "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                "MappingId": 13,
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
                "Guid": "aa690d9d-0b31-4e09-87f5-eb551ce750e6",
                "MappingId": 15,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "1e6b62b2-efe2-4c8e-9b04-385a3d481a48",
            "MappingId": 41,
            "Name": "Unknown15",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "f81f28f7-3d03-439a-82a3-2cf452517254",
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
                    "X": -4000,
                    "Y": -6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "ba124233-99b9-42f8-8399-56caf440596d",
                "MappingId": 18,
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
                "MappingId": 20,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "f14ae484-ed16-4480-8560-f916351c11fb",
            "MappingId": 42,
            "Name": "Unknown16",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "c995476f-f43c-48ad-b954-fb2ad8ab4861",
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
                "MappingId": 20,
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "674b93a1-7c14-4768-accf-436072d13598",
                "MappingId": 23,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "0c8d299b-f56c-4464-812c-f3d3a925fb8a",
            "MappingId": 43,
            "Name": "Unknown17",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 9,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "3ee171f4-5c3b-4ee3-818a-ce8669ccdee4",
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
                    "X": -4000,
                    "Y": 0,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3cfa3e86-acd5-4a8e-9d6e-a9a865310d84",
                "MappingId": 21,
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3a0a32f6-deaa-404c-a05c-a3b885f02cee",
                "MappingId": 24,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "ee439c38-5e5b-4721-a026-f3ea90590517",
            "MappingId": 44,
            "Name": "Unknown18",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
                "MappingId": 35,
                "Name": "300x800",
                "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
            },
            "InsertionPoint": {
                "CardinalPoint": 8,
                "ExtraShifts": {
                    "X": 0,
                    "Y": 0,
                    "ClassesHierarchy": "BimObject.BimVector2"
                },
                "Guid": "090e3457-9eb5-4666-8474-e8cb8a3f2f8d",
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
                "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                "MappingId": 13,
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
                    "X": -4000,
                    "Y": 6000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "3a0a32f6-deaa-404c-a05c-a3b885f02cee",
                "MappingId": 24,
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
                        "PropertyValue": 0.027579032,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    },
                    {
                        "PropertyName": "MassDensity",
                        "PropertyValue": 2.4027696e-12,
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
                        "PropertyValue": 24.855578,
                        "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                    }
                ],
                "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
                "MappingId": 6,
                "Name": "4000Psi",
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
            "Guid": "434b6897-2114-458d-913c-1be217ae1f3f",
            "MappingId": 45,
            "Name": "Unknown19",
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
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "e68cb772-86ed-4c1f-ae51-e53ff17302d6",
                    "MappingId": 16,
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
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                    "MappingId": 13,
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
                        "X": -4000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "3a0a32f6-deaa-404c-a05c-a3b885f02cee",
                    "MappingId": 24,
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
                "Guid": "8959f111-1f1e-4933-b69e-84bc951cae25",
                "MappingId": 7,
                "Name": "A992Fy50",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000001,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "6e728182-9a6d-4a0c-a203-82f962f7e44b",
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
            "Guid": "85c8ca0b-425e-4490-aa4a-bb7df8f6dea3",
            "MappingId": 46,
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
                        "X": -9000,
                        "Y": 6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "aa690d9d-0b31-4e09-87f5-eb551ce750e6",
                    "MappingId": 15,
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
                        "X": -9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                    "MappingId": 13,
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
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "e68cb772-86ed-4c1f-ae51-e53ff17302d6",
                    "MappingId": 16,
                    "Name": "Point 7",
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
                "Guid": "8959f111-1f1e-4933-b69e-84bc951cae25",
                "MappingId": 7,
                "Name": "A992Fy50",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.000001,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "97297e11-a6d8-4af5-bd45-b094beea1c32",
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
            "Guid": "62bb6e5b-492d-4664-a839-e63181df98d8",
            "MappingId": 47,
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
                        "X": -9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                    "MappingId": 13,
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
                        "X": -4000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "3cfa3e86-acd5-4a8e-9d6e-a9a865310d84",
                    "MappingId": 21,
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
                        "X": -4000,
                        "Y": 6000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "3a0a32f6-deaa-404c-a05c-a3b885f02cee",
                    "MappingId": 24,
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
                "Guid": "8959f111-1f1e-4933-b69e-84bc951cae25",
                "MappingId": 7,
                "Name": "A992Fy50",
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
            "Guid": "8a982f2d-00f0-418f-90a0-d28d8a1f802a",
            "MappingId": 48,
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
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                    "MappingId": 13,
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
                        "X": -4000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
                    "MappingId": 20,
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
                        "X": -4000,
                        "Y": 0,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "3cfa3e86-acd5-4a8e-9d6e-a9a865310d84",
                    "MappingId": 21,
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
                "Guid": "8959f111-1f1e-4933-b69e-84bc951cae25",
                "MappingId": 7,
                "Name": "A992Fy50",
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
            "Guid": "e38d8c29-61c8-4eec-adaa-33a797741e6c",
            "MappingId": 49,
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
                        "X": -9000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "aaceac05-0743-4c79-bf88-bdf80546af4e",
                    "MappingId": 13,
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
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "9982006c-2aba-4582-b80d-b10ed7a64304",
                    "MappingId": 11,
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
                        "X": -4000,
                        "Y": -6000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "ba124233-99b9-42f8-8399-56caf440596d",
                    "MappingId": 18,
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
                        "X": -4000,
                        "Y": 0,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "8456a682-7dd4-4513-a89e-d4db612a9958",
                    "MappingId": 20,
                    "Name": "Point 11",
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
                "Guid": "8959f111-1f1e-4933-b69e-84bc951cae25",
                "MappingId": 7,
                "Name": "A992Fy50",
                "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
            },
            "Loads": [
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.1,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 0,
                        "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
                        "MappingId": 8,
                        "Name": "DEAD",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "8418b50a-b689-4019-8096-070bc8300404",
                    "MappingId": 0,
                    "Name": null,
                    "ClassesHierarchy": "BimObject.BimDBObject.BimAppliedLoad.BimPlaneLoad.BimPlaneLoadUniform"
                },
                {
                    "LoadValue": {
                        "X": 0,
                        "Y": 0,
                        "Z": -0.2,
                        "ClassesHierarchy": "BimObject.BimVector3.Bim3Load"
                    },
                    "LoadPattern": {
                        "Type": 1,
                        "Guid": "56d00765-3d1c-47bd-af64-acb4f9d35de2",
                        "MappingId": 9,
                        "Name": "Live",
                        "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
                    },
                    "Guid": "52ece5c3-ed4b-481d-a120-40d36d5b9418",
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
            "Guid": "2d47cd9e-43f2-4ff4-b642-840e54758a07",
            "MappingId": 50,
            "Name": "shell 5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        }
    ],
    "LatestMappingId": 50
};