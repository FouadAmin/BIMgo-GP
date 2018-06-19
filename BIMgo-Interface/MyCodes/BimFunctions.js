function GetNewGUID(params) {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    // then to call it, plus stitch in '4' in the third group
    var guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

    return guid;
}

function GetNewMappingId() {
    var latestMappingId = bimModelJS.LatestMappingId;
    var newMappingId = latestMappingId + 1;
    bimModelJS.LatestMappingId = newMappingId;
    return newMappingId;
}

function GetBimProfileByMappingId(profileMappingId) {

    var requiredItem;

    bimModelJS.Profiles.forEach(profile => {
        if (profile.MappingId == profileMappingId) {
            requiredItem = profile;
            return requiredItem;
        }
    });
    return requiredItem;//need optimization
}


function GetBimMaterialByMappingId(materialMappingId) {

    var requiredItem;

    bimModelJS.Materials.forEach(material => {
        if (material.MappingId == materialMappingId) {
            requiredItem = material;
            return requiredItem;
        }
    });
    return requiredItem;//need optimization
}

function GetBimStoreyByMappingId(storeyMappingId) {

    var requiredItem;

    bimModelJS.Storeys.forEach(storey => {
        if (storey.MappingId == storeyMappingId) {
            requiredItem = storey;
            return requiredItem;
        }
    });
    return requiredItem;//need optimization

}

function CreateNewBimStorey(name,elevation) {

    var newStorey={
        "Elevation":elevation,
        "Location": null,
        "LocationRelativeTo": null,
        "Color": null,
        "Guid": GetNewGUID(),
        "MappingId": GetNewMappingId(),
        "Name": name,
        "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimStorey"
    };

    bimModelJS.Storeys.push(newStorey);

    return newStorey;

}

function CreateBimLineBySelectingPoints(ArrayOfSelectedGridPoints) {

    var point1 = GetBimPointByThreePointObject(ArrayOfSelectedGridPoints[0]);
    var point2 = GetBimPointByThreePointObject(ArrayOfSelectedGridPoints[1]);



    var bimLine = {
        "Profile": bimSelectedProfile,
        "InsertionPoint": {
            "CardinalPoint": bimSelectedNewInsertionPoint,
            "ExtraShifts": {
                "X": 0,
                "Y": 0,
                "ClassesHierarchy": "BimObject.BimVector2"
            },
            "Guid": GetNewGUID(),
            "MappingId": 0,
            "Name": null,
            "ClassesHierarchy": "BimObject.BimDBObject.BimProfileAreaInsertionPoint"
        },
        "LineSolidType": bimSelectedNewLineType,
        "RotationAboutAxis": bimSelectedNewRotation,
        "Point1": point1,
        "Point2": point2,
        "Material": bimSelectedMaterial,
        "Loads": null,
        "AnalysisResults": null,
        "Location": null,
        "LocationRelativeTo": null,
        "Color": {
            "R": bimElementColorR,
            "G": bimElementColorG,
            "B": bimElementColorB,
            "ClassesHierarchy": "BimObject.BimColorRGB"
        },
        "Guid": GetNewGUID(),
        "MappingId": GetNewMappingId(),
        "Name": bimSelectedElementNewName,
        "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
    };


    bimModelJS.Lines.push(bimLine);

    return bimLine;
}



function CreateBimPlaneBySelectingPoints(ArrayOfSelectedGridPoints) {

    var ArrayOfBimPoints = new Array();
    ArrayOfSelectedGridPoints.forEach(threeGridPoint => {
        var bimPoint = GetBimPointByThreePointObject(threeGridPoint);
        ArrayOfBimPoints.push(bimPoint);
    });

    var bimPlane = {
        "Thickness": bimSelectedNewPlaneThickness,
        "BoundaryPoints": ArrayOfBimPoints,
        "RepresentationOffset": 0,
        "Material": bimSelectedMaterial,
        "Loads": null,
        "AnalysisResults": null,
        "Location": null,
        "LocationRelativeTo": null,
        "Color": {
            "R": bimElementColorR,
            "G": bimElementColorG,
            "B": bimElementColorB,
            "ClassesHierarchy": "BimObject.BimColorRGB"
        },
        "Guid": GetNewGUID(),
        "MappingId": GetNewMappingId(),
        "Name": bimSelectedElementNewName,
        "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
    };


    bimModelJS.Planes.push(bimPlane);

    return bimPlane;
}



function CreateBimPointByThreePointObject(threePoint) {

   var newMappingId = GetNewMappingId();


    var bimPoint = {
        "Restrains": [
            false,
            false,
            false,
            false,
            false,
            false
        ],
        "Loads": null,
        "AnalysisResults": null,
        "Location": {
            "X": threePoint.position.x,
            "Y": threePoint.position.y,
            "Z": threePoint.position.z,
            "ClassesHierarchy": "BimObject.BimVector3.BimCartesianVector"
        },
        "LocationRelativeTo": null,
        "Color": null,
        "Guid": GetNewGUID(),
        "MappingId": newMappingId,
        "Name": "Point MID_" + newMappingId,
        "ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPoint"
    };

    bimModelJS.Points.push(bimPoint);

    return bimPoint;
}


function CreateNewBimProfile(profName, width, length) {
    var bimProfile = {
        "Width": width,
        "Length": length,
        "Guid": GetNewGUID(),
        "MappingId":  GetNewMappingId(),
        "Name": profName,
        "ClassesHierarchy": "BimObject.BimDBObject.BimProfileArea.BimProfileAreaRectangular"
    };

    bimModelJS.Profiles.push(bimProfile);
    
    return bimProfile;
}

function  CreateNewBimMaterial(MaterialName,CompressiveStrength,MassDensity,PoissonRatio,ThermalExpansionCoefficient,YoungModulus,R,G,B) {
    var bimMaterial={
        "Color": {
            "R": R,
            "G": G,
            "B": B,
            "ClassesHierarchy": "BimObject.BimColorRGB"
        },
        "PropertiesSingleValued": [
            {
                "PropertyName": "CompressiveStrength",
                "PropertyValue": CompressiveStrength,
                "ClassesHierarchy": "BimObject.BimPropertySingleValue"
            },
            {
                "PropertyName": "MassDensity",
                "PropertyValue": MassDensity,
                "ClassesHierarchy": "BimObject.BimPropertySingleValue"
            },
            {
                "PropertyName": "PoissonRatio",
                "PropertyValue": PoissonRatio,
                "ClassesHierarchy": "BimObject.BimPropertySingleValue"
            },
            {
                "PropertyName": "ThermalExpansionCoefficient",
                "PropertyValue": ThermalExpansionCoefficient,
                "ClassesHierarchy": "BimObject.BimPropertySingleValue"
            },
            {
                "PropertyName": "YoungModulus",
                "PropertyValue": YoungModulus,
                "ClassesHierarchy": "BimObject.BimPropertySingleValue"
            }
        ],
        "Guid":  GetNewGUID(),
        "MappingId":GetNewMappingId(),
        "Name": MaterialName,
        "ClassesHierarchy": "BimObject.BimDBObject.BimMaterial"
    };

    bimModelJS.Materials.push(bimMaterial);
    
    return bimMaterial;

}

function GetBimPointByThreePointObject(threePoint) {
    var pointsCollection = bimModelJS.Points.filter(function (point) {
        return Math.abs((point.Location.X - threePoint.position.x)) < bimPointsTolerance && Math.abs((point.Location.Y - threePoint.position.y)) < bimPointsTolerance && Math.abs((point.Location.Z - threePoint.position.z)) < bimPointsTolerance;
    });

    var result = pointsCollection[0];
    if (result == undefined) {

        result = CreateBimPointByThreePointObject(threePoint);
    }

    return result;
}