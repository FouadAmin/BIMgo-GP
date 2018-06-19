var BimModelG={
    "Grid": {
        "XValues": [
            -3000,
            3000
        ],
        "YValues": [
            -3000,
            3000
        ],
        "Location": null,
        "LocationRelativeTo": null,
        "Color": null,
        "Guid": "f52c8969-311e-44ed-9eb0-ae39e79486ac",
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
            "Guid": "192300d7-2ef8-4ed2-a452-e411cf6bd8ff",
            "MappingId": 1,
            "Name": "BASE LEVEL",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 3000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "8060dd9d-5707-41db-9070-cf15b827d139",
            "MappingId": 2,
            "Name": "LEVEL 2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 6000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "c1c07890-c454-4509-90e2-9301745a10ad",
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
            "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
            "MappingId": 5,
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
            "Guid": "de60bb16-4c6e-4414-ac5b-8098715a3616",
            "MappingId": 6,
            "Name": "A992Fy50",
            "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
        }
    ],
    "Profiles": [
        {
            "Width": 300,
            "Length": 500,
            "Guid": "c326a30e-dbf0-41d8-ab03-5437ce271ee1",
            "MappingId": 17,
            "Name": null,
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 300,
            "Length": 800,
            "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
            "MappingId": 24,
            "Name": null,
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        }
    ],
    "LoadPatterns": [],
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
                "X": -3000,
                "Y": -3000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "33ddfc64-9f29-4ad1-81a7-bba509bcc7aa",
            "MappingId": 7,
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
                "X": -3000,
                "Y": -3000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "449f01d1-87d9-4b1d-bff0-fe22243f198d",
            "MappingId": 8,
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
                "X": -3000,
                "Y": 3000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "1dda595d-d43a-4dfd-86b6-e79c5ad30ec1",
            "MappingId": 9,
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
                "Y": 3000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "23563dbe-0916-4e22-b2ec-acef2114120c",
            "MappingId": 10,
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
                "Y": 3000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "db7a7ced-2281-40bf-9991-0941f9b7d5dc",
            "MappingId": 11,
            "Name": "Point 5",
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
                "X": 3000,
                "Y": -3000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "6bb81cc5-5134-46e3-b6a7-36154e90b407",
            "MappingId": 12,
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
                "X": 3000,
                "Y": -3000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "55d9affd-8627-4461-9313-ef41e9c54178",
            "MappingId": 13,
            "Name": "Point 7",
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
                "X": 3000,
                "Y": 3000,
                "Z": 0,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "f562af02-944e-40fd-99a8-901f742c07a3",
            "MappingId": 14,
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
                "Y": 3000,
                "Z": 3000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "d4325246-098f-41fb-8ccf-26ef5c9a4e8f",
            "MappingId": 15,
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
                "X": 3000,
                "Y": 3000,
                "Z": 6000,
                "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
            },
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "24ae69d0-f894-4a38-9cff-0c2c7a7814ce",
            "MappingId": 16,
            "Name": "Point 10",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
        }
    ],
    "Lines": [
        {
            "Profile": {
                "Width": 300,
                "Length": 500,
                "Guid": "c326a30e-dbf0-41d8-ab03-5437ce271ee1",
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
                "Guid": "29a28e03-3d96-4e3d-b353-97dcd9562825",
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
                    "Y": -3000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "33ddfc64-9f29-4ad1-81a7-bba509bcc7aa",
                "MappingId": 7,
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
                    "X": -3000,
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "449f01d1-87d9-4b1d-bff0-fe22243f198d",
                "MappingId": 8,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "f8b1e420-1dc4-49ac-ade3-1454faf926fb",
            "MappingId": 17,
            "Name": "Unknown1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 500,
                "Guid": "c326a30e-dbf0-41d8-ab03-5437ce271ee1",
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
                "Guid": "9be825ba-5473-46df-96b1-e0c4f278ebb3",
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
                    "Y": 3000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "1dda595d-d43a-4dfd-86b6-e79c5ad30ec1",
                "MappingId": 9,
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
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "23563dbe-0916-4e22-b2ec-acef2114120c",
                "MappingId": 10,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "c36e385b-1525-40a0-a432-9c4edc5f748c",
            "MappingId": 19,
            "Name": "Unknown2",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 500,
                "Guid": "c326a30e-dbf0-41d8-ab03-5437ce271ee1",
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
                "Guid": "47ec9dc4-5a98-4aaa-b9db-3df700cf9f59",
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
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "23563dbe-0916-4e22-b2ec-acef2114120c",
                "MappingId": 10,
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
                    "Y": 3000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db7a7ced-2281-40bf-9991-0941f9b7d5dc",
                "MappingId": 11,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "cfa7f2ea-c843-4d41-98df-dd06d7e62087",
            "MappingId": 20,
            "Name": "Unknown3",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 500,
                "Guid": "c326a30e-dbf0-41d8-ab03-5437ce271ee1",
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
                "Guid": "1a3cbdec-6421-4498-9809-24605a2c4604",
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
                    "X": 3000,
                    "Y": -3000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "6bb81cc5-5134-46e3-b6a7-36154e90b407",
                "MappingId": 12,
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
                    "X": 3000,
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9affd-8627-4461-9313-ef41e9c54178",
                "MappingId": 13,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "2c1a8320-5b01-405e-9fac-899901b7265e",
            "MappingId": 21,
            "Name": "Unknown4",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 500,
                "Guid": "c326a30e-dbf0-41d8-ab03-5437ce271ee1",
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
                "Guid": "33833276-a353-40d0-8ee7-6ac1c377c8c4",
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
                    "X": 3000,
                    "Y": 3000,
                    "Z": 0,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "f562af02-944e-40fd-99a8-901f742c07a3",
                "MappingId": 14,
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
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d4325246-098f-41fb-8ccf-26ef5c9a4e8f",
                "MappingId": 15,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "ce214bff-6658-4267-9d01-33158b0b2a6f",
            "MappingId": 22,
            "Name": "Unknown5",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 500,
                "Guid": "c326a30e-dbf0-41d8-ab03-5437ce271ee1",
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
                "Guid": "e34093e3-4105-4f09-88f5-3449fa8a699f",
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
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d4325246-098f-41fb-8ccf-26ef5c9a4e8f",
                "MappingId": 15,
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
                    "X": 3000,
                    "Y": 3000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "24ae69d0-f894-4a38-9cff-0c2c7a7814ce",
                "MappingId": 16,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "744cfea5-745e-4b97-983c-c8b8f9422b0c",
            "MappingId": 23,
            "Name": "Unknown6",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
                "MappingId": 24,
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
                "Guid": "84b64f94-8383-4251-9527-26adf970cbc0",
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
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "449f01d1-87d9-4b1d-bff0-fe22243f198d",
                "MappingId": 8,
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
                    "X": 3000,
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9affd-8627-4461-9313-ef41e9c54178",
                "MappingId": 13,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "8196ed9b-509a-466a-a7ec-f25b42520c22",
            "MappingId": 24,
            "Name": "Unknown7",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
                "MappingId": 24,
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
                "Guid": "03cb154e-6c39-4ae9-a153-a5b99ee91f76",
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
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "23563dbe-0916-4e22-b2ec-acef2114120c",
                "MappingId": 10,
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
                    "X": 3000,
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d4325246-098f-41fb-8ccf-26ef5c9a4e8f",
                "MappingId": 15,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "a85bbb42-db4f-4817-9e47-fda6269df824",
            "MappingId": 26,
            "Name": "Unknown8",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
                "MappingId": 24,
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
                "Guid": "58cb789c-b9f9-4b68-8ccb-9779882fad11",
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
                    "Y": 3000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db7a7ced-2281-40bf-9991-0941f9b7d5dc",
                "MappingId": 11,
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
                    "X": 3000,
                    "Y": 3000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "24ae69d0-f894-4a38-9cff-0c2c7a7814ce",
                "MappingId": 16,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "c4a67cf9-b8cf-4202-aefe-8f5f966186e4",
            "MappingId": 27,
            "Name": "Unknown9",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
                "MappingId": 24,
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
                "Guid": "7429f7e5-11c5-4e8a-a4db-b132d2b80626",
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
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "449f01d1-87d9-4b1d-bff0-fe22243f198d",
                "MappingId": 8,
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
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "23563dbe-0916-4e22-b2ec-acef2114120c",
                "MappingId": 10,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "09a2896f-dcb6-40d7-a02b-0cf0327e4dc7",
            "MappingId": 28,
            "Name": "Unknown10",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
                "MappingId": 24,
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
                "Guid": "29b8635e-9e2a-4a50-8d48-8641dea4eff0",
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
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9affd-8627-4461-9313-ef41e9c54178",
                "MappingId": 13,
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
                    "X": 3000,
                    "Y": 3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "d4325246-098f-41fb-8ccf-26ef5c9a4e8f",
                "MappingId": 15,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "4bf55f78-affd-4358-a1f2-695487e3b93c",
            "MappingId": 29,
            "Name": "Unknown11",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
                "MappingId": 24,
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
                "Guid": "54858cc1-9320-46e4-bee6-15c6a07458e1",
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
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "449f01d1-87d9-4b1d-bff0-fe22243f198d",
                "MappingId": 8,
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
                    "Y": 3000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "db7a7ced-2281-40bf-9991-0941f9b7d5dc",
                "MappingId": 11,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "2a39949b-3516-4b7c-8cc0-49898ac26c2d",
            "MappingId": 30,
            "Name": "Unknown12",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
        },
        {
            "Profile": {
                "Width": 300,
                "Length": 800,
                "Guid": "1e0bb682-b92e-47fd-9219-6d1c749db3cc",
                "MappingId": 24,
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
                "Guid": "e6062ca5-5f54-47e9-bd65-eb60175144f2",
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
                    "Y": -3000,
                    "Z": 3000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "55d9affd-8627-4461-9313-ef41e9c54178",
                "MappingId": 13,
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
                    "X": 3000,
                    "Y": 3000,
                    "Z": 6000,
                    "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                },
                "LocationRelativeTo": null,
                "Color": null,
                "Guid": "24ae69d0-f894-4a38-9cff-0c2c7a7814ce",
                "MappingId": 16,
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
                "Guid": "cf8d7436-83b9-4b73-a0a6-9e8fa9c9a5ed",
                "MappingId": 5,
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
            "Guid": "fbeb8828-dba5-40e9-996d-167db642c491",
            "MappingId": 31,
            "Name": "Unknown13",
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
                        "X": -3000,
                        "Y": -3000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "449f01d1-87d9-4b1d-bff0-fe22243f198d",
                    "MappingId": 8,
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
                        "X": 3000,
                        "Y": -3000,
                        "Z": 3000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "55d9affd-8627-4461-9313-ef41e9c54178",
                    "MappingId": 13,
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
                        "X": 3000,
                        "Y": 3000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "24ae69d0-f894-4a38-9cff-0c2c7a7814ce",
                    "MappingId": 16,
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
                        "Y": 3000,
                        "Z": 6000,
                        "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
                    },
                    "LocationRelativeTo": null,
                    "Color": null,
                    "Guid": "db7a7ced-2281-40bf-9991-0941f9b7d5dc",
                    "MappingId": 11,
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
                "Guid": "de60bb16-4c6e-4414-ac5b-8098715a3616",
                "MappingId": 6,
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
            "Guid": "bbaa95bf-662f-4292-9dbc-3c0cbb53a63f",
            "MappingId": 32,
            "Name": "shell 1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
        }
    ]
};