var BimModelNewModel = {
    "Grid": {
        "XValues": [
            0,
            6000,
            12000,
            18000
        ],
        "YValues": [
            0,
            4000,
            8000,
            12000
        ],
        "Location": null,
        "LocationRelativeTo": null,
        "Color": null,
        "Guid": "f174a20c-fe4d-4552-b651-323d0d3d9a90",
        "MappingId": 1,
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
            "MappingId": 2,
            "Name": "LEVEL 0",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 3000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "7b316a0a-3d75-485c-a961-165a6ca0df07",
            "MappingId": 3,
            "Name": "LEVEL 1",
            "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
        },
        {
            "Elevation": 6000,
            "Location": null,
            "LocationRelativeTo": null,
            "Color": null,
            "Guid": "88ce003e-d9a7-4c23-8904-245686e99704",
            "MappingId": 4,
            "Name": "LEVEL 2",
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
                    "PropertyValue": 9.9e-6,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "YoungModulus",
                    "PropertyValue": 22,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                }
            ],
            "Guid": "12c02cfe-1105-4959-9264-fd7fa2fac3fb",
            "MappingId": 5,
            "Name": "FCU25",
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
                    "PropertyValue": 0.030,
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
                    "PropertyValue": 9.9e-6,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                },
                {
                    "PropertyName": "YoungModulus",
                    "PropertyValue": 24,
                    "ClassesHierarchy": "BimObject.BimPropertySingleValue"
                }
            ],
            "Guid": "09db2f8e-ec67-4618-80f9-7038b31f112c",
            "MappingId": 6,
            "Name": "FCU30",
            "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
        }

    ],
    "Profiles": [
        {
            "Width": 400,
            "Length": 400,
            "Guid": "7081c857-1932-4cd4-b8da-90f0929d506c",
            "MappingId": 7,
            "Name": "400x400",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 400,
            "Length": 500,
            "Guid": "f9e0f7f2-fa85-47d0-933e-ed59c2ddf9c9",
            "MappingId": 8,
            "Name": "400x500",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 400,
            "Length": 600,
            "Guid": "5930a416-5326-42f4-8040-0cf5115d29e7",
            "MappingId": 9,
            "Name": "400x600",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 400,
            "Length": 700,
            "Guid": "307a17fa-ccc6-4675-bc2f-8f0eb03df7cc",
            "MappingId": 10,
            "Name": "400x700",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        },
        {
            "Width": 400,
            "Length": 800,
            "Guid": "dc947e55-5e18-4704-ac42-ff4fc4cb5f56",
            "MappingId": 11,
            "Name": "400x800",
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
        }
    ],
    "LoadPatterns": [
        {
            "Type": 0,
            "Guid": "39d5b13d-9750-43ab-b61b-9cc4053db413",
            "MappingId": 12,
            "Name": "DEAD",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        },
        {
            "Type": 1,
            "Guid": "56d00765-3d1c-47bd-af64-acb4f9d35de2",
            "MappingId": 13,
            "Name": "Live",
            "ClassesHierarchy": "BimObject.BimDBObject.BimLoadPattern"
        }
    ],
    "Points": [],
    "Lines": [],
    "Planes": [],
    "LatestMappingId": 13
};