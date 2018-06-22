function Create3DObjectsForbimModelJS() {


    // Creating Grid Points Used For Snapping ---------------------------------------------------------------------------
    // then adding to bimModelJS.Grid.XAxesThree && bimModelJS.Grid.YAxesThree && bimModelJS.Grid.ZAxesThree
    // ------------------------------------------------------------------------------------------------------------------

    Create3DPointsForBimGrid();
    //--------------------------------------------------------------------------------------------------------------------





    // Creating Axes ----------------------------------------------------------------------------------------------------
    // then adding to bimModelJS.Grid.XAxesThree && bimModelJS.Grid.YAxesThree && bimModelJS.Grid.ZAxesThree
    // ------------------------------------------------------------------------------------------------------------------

    Create3DGridForBimGrid();
    //--------------------------------------------------------------------------------------------------------------------

    // Creating Support -------------------------------------------------------------------------------------------------
    // then adding to bimPoint.SimpleRepresentation ---------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------
    bimModelJS.Points.forEach(bimPoint => {
        Create3DObjectsForBimPoint(bimPoint);
    });


    //-------------------------------------------------------------------------------------------------------------------


    // Creating LineElements --------------------------------------------------------------------------------------------
    // then adding to bimLine.SimpleRepresentation ,  bimLine.ExtrudedRepresentation ------------------------------------
    // ------------------------------------------------------------------------------------------------------------------
    bimModelJS.Lines.forEach(bimLine => {
        Create3DObjectsForBimLine(bimLine);
    });


    //-------------------------------------------------------------------------------------------------------------------

    // Creating PlaneElements -------------------------------------------------------------------------------------------
    // then adding to bimPlane.SimpleRepresentation ,bimPlane.ExtrudedRepresentation ------------------------------------
    // ------------------------------------------------------------------------------------------------------------------

    bimModelJS.Planes.forEach(bimPlane => {
        Create3DObjectsForBimPlane(bimPlane);
    });



    //--------------------------------------------------------------------------------------------------------------------
};


function Create3DPointsForBimGrid() {
    var CreatedList = new Array();
    var storeys = bimModelJS.Storeys;
    var xlist = bimModelJS.Grid.XValues;
    var ylist = bimModelJS.Grid.YValues;
    // Creating points
    storeys.forEach(storey => {
        xlist.forEach(xvalue => {
            ylist.forEach(yvalue => {
                var sphere = new THREE.Mesh(GridPointGeometry, GridPointColoredMaterial.clone());
                sphere.position.set(xvalue, yvalue, storey.Elevation);
                ArrayOfGridPoints.push(sphere);
                CreatedList.push(sphere);
            });
        });
        previousElevation = storey.Elevation;
    });
    return CreatedList;
}

function Create3DGridForBimGrid() {

    var CreatedList = new Array();

    var xlist = bimModelJS.Grid.XValues;
    var ylist = bimModelJS.Grid.YValues;

    var xMin = xlist[0];
    var xMax = xlist[xlist.length - 1];
    bimModelJS.Grid.xMin = xMin;
    bimModelJS.Grid.xMax = xMax;
    bimModelJS.Grid.xAvg = (xMax + xMin) / 2;
    var yMin = ylist[0];
    var yMax = ylist[ylist.length - 1];
    bimModelJS.Grid.yMin = yMin;
    bimModelJS.Grid.yMax = yMax;
    bimModelJS.Grid.yAvg = (yMax + yMin) / 2;
    var xCount = xlist.length;;
    var yCount = ylist.length;
    var storeys = bimModelJS.Storeys;

    var XAxesThree = new Array(0);
    var YAxesThree = new Array(0);
    var ZAxesThree = new Array(0);
    var previousElevation = storeys[0].Elevation;
    storeys.forEach(storey => {
        // Creating XAxes
        bimModelJS.Grid.XAxesThree = XAxesThree;
        xlist.forEach(xvalue => {
            var LineGeometry = new THREE.Geometry();
            LineGeometry.vertices.push(new THREE.Vector3(xvalue, yMin, storey.Elevation));
            LineGeometry.vertices.push(new THREE.Vector3(xvalue, yMax, storey.Elevation));
            var line = new THREE.Line(LineGeometry, GridXColoredMaterial);
            XAxesThree.push(line);
            ArrayOfGridLines.push(line);
            CreatedList.push(line);
        });
        // Creating YAxes
        bimModelJS.Grid.YAxesThree = YAxesThree;
        ylist.forEach(yvalue => {
            var LineGeometry = new THREE.Geometry();
            LineGeometry.vertices.push(new THREE.Vector3(xMin, yvalue, storey.Elevation));
            LineGeometry.vertices.push(new THREE.Vector3(xMax, yvalue, storey.Elevation));
            var line = new THREE.Line(LineGeometry, GridYColoredMaterial);
            YAxesThree.push(line);
            ArrayOfGridLines.push(line);
            CreatedList.push(line);
        });
        // Creating ZAxes
        bimModelJS.Grid.ZAxesThree = ZAxesThree;
        if (previousElevation != storey.Elevation) {
            xlist.forEach(xvalue => {
                ylist.forEach(yvalue => {
                    var LineGeometry = new THREE.Geometry();
                    LineGeometry.vertices.push(new THREE.Vector3(xvalue, yvalue, previousElevation));
                    LineGeometry.vertices.push(new THREE.Vector3(xvalue, yvalue, storey.Elevation));
                    var line = new THREE.Line(LineGeometry, GridZColoredMaterial);
                    ZAxesThree.push(line);
                    ArrayOfGridLines.push(line);
                    CreatedList.push(line);
                });
            });
            previousElevation = storey.Elevation;
        };

    });

    return CreatedList;
}


function UpdateCreatedGridPointsAndLines() {
    // Remove Old Grid Lines and Points From Scene
    RemoveArrayOfObjectsFromScene(ArrayOfGridPoints);
    RemoveArrayOfObjectsFromScene(ArrayOfGridLines);



    // Create New Grid Lines and Points
    ArrayOfGridPoints = new Array();
    ArrayOfGridLines = new Array();

    // Generate three Points and add to Scene
    var createdArray = Create3DPointsForBimGrid();
    AddArrayOfObjectsToScene(createdArray);

    // Generate three GridLines and add to Scene
    var createdArray = Create3DGridForBimGrid();
    AddArrayOfObjectsToScene(createdArray);
}


function Create3DObjectsForBimPoint(bimPoint) {

    var pointMaterial = BimPointColoredMaterial.clone();
    var pointGeometry = BimPointGeometry.clone();
    var bimPointSimpleRepresentation = new THREE.Mesh(pointGeometry, pointMaterial);
    bimPointSimpleRepresentation.position.set(bimPoint.Location.X, bimPoint.Location.Y, bimPoint.Location.Z);

    var conditions = bimPoint.Restrains;
    var supportMaterial = new THREE.MeshStandardMaterial({ color: SupportsColor, roughness: Simpleroughness, metalness: SimpleMetalness, wireframe: false, side: THREE.DoubleSide });


    if (conditions != undefined && conditions[0] == true && conditions[1] == true && conditions[2] == true && conditions[3] == true && conditions[4] == true && conditions[5] == true) {
        //fixed Support
        var PlaneSurface = new THREE.Shape();
        PlaneSurface.moveTo(-supportB / 2, 0);
        PlaneSurface.lineTo(supportB / 2, 0);
        PlaneSurface.lineTo(supportB / 2, -supportH);
        PlaneSurface.lineTo(-supportB / 2, -supportH);
        PlaneSurface.lineTo(-supportB / 2, 0);


        var geometry = new THREE.ShapeBufferGeometry(PlaneSurface);
        var flatMeshX = new THREE.Mesh(geometry, supportMaterial);
        flatMeshX.rotateOnAxis(new THREE.Vector3(1, 0, 0), 90 * math.pi / 180);
        var flatMeshY = flatMeshX.clone();
        flatMeshY.rotateOnAxis(new THREE.Vector3(0, 1, 0), 90 * math.pi / 180);
        bimPointSimpleRepresentation.add(flatMeshX);
        bimPointSimpleRepresentation.add(flatMeshY);

    }
    else if (conditions != undefined && conditions[0] == true && conditions[1] == true && conditions[2] == true && conditions[3] == false && conditions[4] == false && conditions[5] == false) {
        //hinged Support
        var PlaneSurface = new THREE.Shape();
        PlaneSurface.moveTo(0, 0);
        PlaneSurface.lineTo(supportB / 2, -supportH);
        PlaneSurface.lineTo(-supportB / 2, -supportH);
        PlaneSurface.lineTo(0, 0);

        var geometry = new THREE.ShapeBufferGeometry(PlaneSurface);
        var flatMeshX = new THREE.Mesh(geometry, supportMaterial);
        flatMeshX.rotateOnAxis(new THREE.Vector3(1, 0, 0), 90 * math.pi / 180);
        var flatMeshY = flatMeshX.clone();
        flatMeshY.rotateOnAxis(new THREE.Vector3(0, 1, 0), 90 * math.pi / 180);
        bimPointSimpleRepresentation.add(flatMeshX);
        bimPointSimpleRepresentation.add(flatMeshY);
    }




    ArrayOf3DBimPointSupports.push(bimPointSimpleRepresentation);
    // assignning to the bim Object
    bimPoint.SimpleRepresentation = bimPointSimpleRepresentation;
    // Hide simpleRepresentation Default is ExtudedRepresentation
    // Hide the element as this will hide its children Also
    bimPointSimpleRepresentation.visible = false;


    return bimPointSimpleRepresentation;


}

function Create3DObjectsForBimLine(bimLine) {

    var bimLineColor = bimLine.Color;
    var threeColor = new THREE.Color(bimLineColor.R, bimLineColor.G, bimLineColor.B);
    var lineMaterial = new THREE.LineBasicMaterial({ color: SimpleRepresentationColor });
    //var lineMaterial = new THREE.MeshStandardMaterial({ color: SimpleRepresentationColor, roughness: Simpleroughness, metalness: SimpleMetalness });
    var solidMaterial = new THREE.MeshStandardMaterial({
        color: threeColor,
        roughness: Extrudedroughness,
        metalness: ExtrudedMetalness,
        flatShading: true,
        vertexColors: THREE.VertexColors,
        //shininess: OverAllShininess
    });
    var point1 = new THREE.Vector3(parseFloat(bimLine.Point1.Location.X), parseFloat(bimLine.Point1.Location.Y), parseFloat(bimLine.Point1.Location.Z));
    var point2 = new THREE.Vector3(parseFloat(bimLine.Point2.Location.X), parseFloat(bimLine.Point2.Location.Y), parseFloat(bimLine.Point2.Location.Z));
    var LineGeometry = new THREE.Geometry();
    LineGeometry.vertices.push(new THREE.Vector3(point1.x, point1.y, point1.z));
    LineGeometry.vertices.push(new THREE.Vector3(point2.x, point2.y, point2.z));
    var line = new THREE.Line(LineGeometry, lineMaterial);



    var width = bimLine.Profile.Width;//global x
    var length = bimLine.Profile.Length;//global y
    var dx = point2.x - point1.x;
    var dy = point2.y - point1.y;
    var dz = point2.z - point1.z;
    var height = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2));//global z
    var BoxGeometry = new THREE.BoxGeometry(width, length, height);
    var cube = new THREE.Mesh(BoxGeometry, solidMaterial);
    cube.position.set((point1.x + point2.x) / 2, (point1.y + point2.y) / 2, (point1.z + point2.z) / 2);




    // calculating cardinal shifts

    var bimCardinalPoint = bimLine.InsertionPoint.CardinalPoint;

    var totalShiftX = 0;
    var totalShiftY = 0;
    switch (bimCardinalPoint) {
        case 1://CardinalPoint.BottomLeft:
            totalShiftX = -width / 2;
            totalShiftY = -length / 2;
            break;
        case 2://CardinalPoint.BottomCentre:
            totalShiftX = 0;
            totalShiftY = -length / 2;
            break;
        case 3://CardinalPoint.BottomRight:
            totalShiftX = width / 2;
            totalShiftY = -length / 2;
            break;
        case 4://CardinalPoint.MidDepthLeft:
            totalShiftX = -width / 2;
            totalShiftY = 0;
            break;
        case 5://CardinalPoint.MidDepthCentre:
            totalShiftX = 0;
            totalShiftY = 0;
            break;
        case 6://CardinalPoint.MidDepthRight:
            totalShiftX = width / 2;
            totalShiftY = 0;
            break;
        case 7://CardinalPoint.TopLeft:
            totalShiftX = -width / 2;
            totalShiftY = length / 2;
            break;
        case 8://CardinalPoint.TopCentre:
            totalShiftX = 0;
            totalShiftY = length / 2;
            break;
        case 9://CardinalPoint.TopRight:
            totalShiftX = width / 2;
            totalShiftY = length / 2;
            break;
        case 10://CardinalPoint.GeometricCentroid:
            break;
        default:
            break;
    }

    //updating for comptability
    totalShiftX = -totalShiftX;
    totalShiftY = totalShiftY;

    //cube.position.x+=totalShiftX;
    //cube.position.y+=totalShiftY;



    // updating lineElement reference

    var AxisVector = new THREE.Vector3(dx, dy, dz);
    var AxisDirection = new THREE.Vector3(dx, dy, dz).normalize();
    //AxisDirectionUnit = AxisDirectionUnit.divideScalar(AxisDirection.length()) ;

    var ReferenceX = new THREE.Vector3();
    var ReferenceY = new THREE.Vector3();

    if (AxisDirection.x == 0 && AxisDirection.y == 0 && AxisDirection.z == 1) {
        ReferenceX.set(1, 0, 0);
    }
    else {
        ReferenceX.crossVectors(AxisDirection, new THREE.Vector3(0, 0, 1)).normalize();
    }

    ReferenceY.crossVectors(AxisDirection, ReferenceX);

    var ResultantVectorShift =
        new THREE.Vector3().addVectors(ReferenceX.clone().multiplyScalar(totalShiftX), ReferenceY.clone().multiplyScalar(totalShiftY));
    cube.totalShiftX = totalShiftX;
    cube.totalShiftY = totalShiftY;
    cube.position.add(ResultantVectorShift);

    // cube.rotateX(Math.asin(-dy / height));
    // cube.rotateY(Math.asin(-dx / height));

    // if (dx != 0 && dy == 0 && dz == 0) {
    //     cube.rotation.z += 90 * (Math.PI / 180);
    // }

    //******New Rotation Method */

    var ProjectedReferenceX = new THREE.Vector3(ReferenceX.x, ReferenceX.y, 0).normalize();

    var anlgeOfRotationForX = Math.acos(ProjectedReferenceX.dot(new THREE.Vector3(1, 0, 0)));

    cube.rotateOnAxis(new THREE.Vector3(0, 0, 1), -anlgeOfRotationForX);

    var vectorToRotateAbout = new THREE.Vector3();
    vectorToRotateAbout.crossVectors(AxisDirection, new THREE.Vector3(0, 0, 1)).normalize();
    if (vectorToRotateAbout.length() > 0) {

        var anlgeOfRotation = Math.acos(AxisDirection.dot(new THREE.Vector3(0, 0, 1)));
        cube.rotateOnWorldAxis(vectorToRotateAbout, -anlgeOfRotation);

    }
    //***************************/

    //adding solidLine to line
    line.add(cube);

    // assignning to the bim Object
    bimLine.SimpleRepresentation = line;
    bimLine.ExtrudedRepresentation = cube;

    line.MappingId = bimLine.MappingId;
    cube.MappingId = bimLine.MappingId;


    //Assigning Extruded Shape to the Simple One and vice versa
    line.ExtrudedRepresentation = cube;
    cube.SimpleRepresentation = line;

    ArrayOfSimpleRepresentations.push(line);
    ArrayOfExtrudedRepresentations.push(cube);

    cube.AxisDirection = AxisDirection;
    cube.ReferenceX = ReferenceX;
    cube.ReferenceY = ReferenceY;

    //line.AxisDirection = AxisDirection;
    //line.ReferenceX = ReferenceX;
    //line.ReferenceY = ReferenceY;

    bimLine.AxisDirection = AxisDirection;
    bimLine.ReferenceX = ReferenceX;
    bimLine.ReferenceY = ReferenceY;

    //line.up.set(ReferenceY.x,ReferenceY.y,ReferenceY.z);

    RotateThreeElementAndUpdateItsReference(cube, bimLine.RotationAboutAxis);

    // Hide simpleRepresentation Default is ExtudedRepresentation
    // Hide Material not the element as this will hide its children Also
    line.material.visible = false;

    return line;

}


function Create3DObjectsForBimPlane(bimPlane) {
    var bimBoundaryLineColor = bimPlane.Color;
    var threeColor = new THREE.Color(bimBoundaryLineColor.R, bimBoundaryLineColor.G, bimBoundaryLineColor.B);
    var points3D = new Array();
    var points2D = new Array();
    var boundaryPoints = bimPlane.BoundaryPoints;



    boundaryPoints.forEach(boundaryPoint => {
        var Location = boundaryPoint.Location;

        points3D.push( // here you can use 3-dimensional coordinates
            new THREE.Vector3(parseFloat(Location.X), parseFloat(Location.Y), parseFloat(Location.Z))
        );
    });
    // there is no autoClose function here, thus we need the first point again
    points3D.push(
        new THREE.Vector3(parseFloat(boundaryPoints[0].Location.X), parseFloat(boundaryPoints[0].Location.Y), parseFloat(boundaryPoints[0].Location.Z))
    );


    var Location0 = points3D[0].clone();
    var Location1 = points3D[1].clone();
    var Location_1 = points3D[1].clone();
    var Location2 = points3D[2].clone();

    var ReferenceX = new THREE.Vector3();
    var ReferenceY = new THREE.Vector3();
    var PlaneAxis = new THREE.Vector3();
    var TempVector = new THREE.Vector3();

    // subVectors => vector a - vector b 
    ReferenceX.subVectors(Location1, Location0).normalize();
    TempVector.subVectors(Location2, Location_1).normalize();
    PlaneAxis.crossVectors(ReferenceX, TempVector).normalize();
    ReferenceY.crossVectors(PlaneAxis, ReferenceX);

    var averageCentre = new THREE.Vector3();
    var point3D = new THREE.Vector3();
    var noOfPoints = points3D.length - 1;
    for (let i = 0; i < noOfPoints; i++) {
        point3D.copy(points3D[i]);
        point3D.divideScalar(noOfPoints);
        averageCentre.add(point3D);
    }

    var x = 0;
    var y = 0;
    TempVector.subVectors(points3D[0], averageCentre);
    x = TempVector.dot(ReferenceX);
    y = TempVector.dot(ReferenceY);
    var PlaneSurface = new THREE.Shape();
    PlaneSurface.moveTo(x, y);

    for (let i = 1; i < points3D.length; i++) {
        TempVector.subVectors(points3D[i], averageCentre);
        x = TempVector.dot(ReferenceX);
        y = TempVector.dot(ReferenceY);
        PlaneSurface.lineTo(x, y);
    }

    // flat shape
    var geometry = new THREE.ShapeBufferGeometry(PlaneSurface);
    var flatMaterial = new THREE.MeshStandardMaterial({ color: SimpleRepresentationColor, roughness: Simpleroughness, metalness: SimpleMetalness, side: THREE.DoubleSide });
    var flatMesh = new THREE.Mesh(geometry, flatMaterial);


    // extruded shape
    var extrudeSettings = {
        steps: 1,
        depth: bimPlane.Thickness,
        bevelEnabled: false,
        bevelThickness: 0,
        bevelSize: 0,
        bevelSegments: 1
    };
    var geometry = new THREE.ExtrudeGeometry(PlaneSurface, extrudeSettings);

    // var solidMaterial = new THREE.MeshPhongMaterial({
    //     color: threeColor,
    //     flatShading: true,
    //     vertexColors: THREE.VertexColors,
    //     shininess: OverAllShininess
    // });
    var solidMaterial = new THREE.MeshStandardMaterial({
        color: threeColor,
        roughness: Extrudedroughness,
        metalness: ExtrudedMetalness,
        flatShading: true,
        vertexColors: THREE.VertexColors,
        //shininess: OverAllShininess
    });

    var extrudedMesh = new THREE.Mesh(geometry, solidMaterial);

    flatMesh.add(extrudedMesh);



    flatMesh.position.set(averageCentre.x, averageCentre.y, averageCentre.z);
    // flatMesh.rotateX(Math.atan2(-PlaneAxis.y, PlaneAxis.z));
    // flatMesh.rotateY(Math.atan2(-PlaneAxis.x, PlaneAxis.z));

    //******New Rotation Method */


    var ProjectedReferenceX = new THREE.Vector3(ReferenceX.x, ReferenceX.y, 0).normalize();

    var anlgeOfRotationForX = Math.acos(ProjectedReferenceX.dot(new THREE.Vector3(1, 0, 0)));

    flatMesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), -anlgeOfRotationForX);


    var vectorToRotateAboutForZ = new THREE.Vector3();
    vectorToRotateAboutForZ.crossVectors(PlaneAxis, new THREE.Vector3(0, 0, 1)).normalize();

    if (vectorToRotateAboutForZ.length() > 0) {

        var anlgeOfRotationForZ = Math.acos(PlaneAxis.dot(new THREE.Vector3(0, 0, 1)));

        flatMesh.rotateOnWorldAxis(vectorToRotateAboutForZ, -anlgeOfRotationForZ);

    }

    //***************************/

    var CenterShift = -bimPlane.Thickness;
    extrudedMesh.position.set(0, 0, CenterShift);




    // assignning to the bim Object
    bimPlane.SimpleRepresentation = flatMesh;
    bimPlane.ExtrudedRepresentation = extrudedMesh;

    flatMesh.MappingId = bimPlane.MappingId;
    extrudedMesh.MappingId = bimPlane.MappingId;



    //Assigning Extruded Shape to the Simple One and vice versa
    flatMesh.ExtrudedRepresentation = extrudedMesh;
    extrudedMesh.SimpleRepresentation = flatMesh;


    ArrayOfSimpleRepresentations.push(flatMesh);
    ArrayOfExtrudedRepresentations.push(extrudedMesh);

    flatMesh.AxisDirection = PlaneAxis;
    flatMesh.ReferenceX = ReferenceX;
    flatMesh.ReferenceY = ReferenceY;




    // Hide simpleRepresentation Default is ExtudedRepresentation
    // Hide Material not the element as this will hide its children Also
    flatMesh.material.visible = false;

    return flatMesh;
}


function AddObjectsToScene(scene) {


    ArrayOfGridPoints.forEach(point => {
        scene.add(point);
    });

    ArrayOfGridLines.forEach(Gline => {
        scene.add(Gline);
    });


    // Adding PointElement  To the Scene *****************************************************************
    bimModelJS.Points.forEach(bimPoint => {
        scene.add(bimPoint.SimpleRepresentation);
    });


    // Adding LineElement  To the Scene *****************************************************************
    bimModelJS.Lines.forEach(bimLine => {
        scene.add(bimLine.SimpleRepresentation);
        // ExtrudedRepresentation will also be diplayed as its included as a child in the SimpleRepresentation
    });


    // Adding planeElement  To the Scene *****************************************************************
    bimModelJS.Planes.forEach(bimPlane => {
        scene.add(bimPlane.SimpleRepresentation);
        // ExtrudedRepresentation will also be diplayed as its included as a child in the SimpleRepresentation
    });
}

function AddArrayOfObjectsToScene(ArrayOfThreeObjects) {

    ArrayOfThreeObjects.forEach(Object => {
        scene.add(Object);
    });

}


function RemoveArrayOfObjectsFromScene(ArrayOfThreeObjects) {

    ArrayOfThreeObjects.forEach(Object => {
        scene.remove(Object);
    });

}

function RotateThreeElementAndUpdateItsReference(theeMeshObject, theta) {

    var totalShiftX = theeMeshObject.totalShiftX;
    var totalShiftY = theeMeshObject.totalShiftY;
    var ReferenceX = theeMeshObject.ReferenceX;
    var ReferenceY = theeMeshObject.ReferenceY;

    //moving object back to its Origin
    var ResultantVectorShift =
        new THREE.Vector3().addVectors(ReferenceX.clone().multiplyScalar(totalShiftX), ReferenceY.clone().multiplyScalar(totalShiftY));

    theeMeshObject.position.sub(ResultantVectorShift);



    //rotating object 
    theeMeshObject.rotateOnAxis(new THREE.Vector3(0, 0, 1), theta * math.pi / 180);
    theeMeshObject.ReferenceX.applyAxisAngle(theeMeshObject.AxisDirection, theta * math.pi / 180);
    theeMeshObject.ReferenceY.applyAxisAngle(theeMeshObject.AxisDirection, theta * math.pi / 180);

    //reset object position for extra shifts after rotation 
    var ResultantVectorShift =
        new THREE.Vector3().addVectors(ReferenceX.clone().multiplyScalar(totalShiftX), ReferenceY.clone().multiplyScalar(totalShiftY));

    theeMeshObject.position.add(ResultantVectorShift);



}


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

function ClearAnalysisResults() {
    RemoveArrayOfObjectsFromScene(ListOfAnalysisResultShapes);
    ListOfAnalysisResultShapes = new Array();
}

function DisplayAnalysisResultForALLBimLines(loadCase, ForceName) {

    ClearAnalysisResults();

    
    for (let i = 0; i < bimModelJS.Lines.length; i++) {
        const bimLine = bimModelJS.Lines[i];
        var check = DisplayAnalysisResultForBimLine(bimLine, loadCase, ForceName);
        if (check==undefined) {
            break;
        }
    }

    AddArrayOfObjectsToScene(ListOfAnalysisResultShapes);

}

function DisplayAnalysisResultForBimLine(bimLine, loadCase, ForceName) {
    var analysisResults = bimLine.AnalysisResults;
    if (analysisResults != undefined) {
        var analysisResult = GetAnalysisResultByName(analysisResults, loadCase);
        var stations = analysisResult.FrameObjStation;
        var values = analysisResult[ForceName];



        // Create plane Surface for Negative Values
        var PlaneSurfaceN = new THREE.Shape();
        PlaneSurfaceN.moveTo(0, 0);
        var x;
        var y;
        var lastValue = 0;
        var lastStation = 0;
        for (let i = 0; i < stations.length; i++) {

            x = stations[i];
            y = values[i] * DisplayAnalysisScale;

            if (i != 0 && lastValue * y < 0) { // adding intersection Point
                var xZero = (lastValue) * (x - lastStation) / (lastValue - y) + lastStation;
                PlaneSurfaceN.lineTo(xZero, 0);

            }

            finalY = math.min(y, 0);
            PlaneSurfaceN.lineTo(x, finalY);
            lastValue = y;
            lastStation = x;
        }
        PlaneSurfaceN.lineTo(x, 0);

        // flat shape for Negative Values
        var geometryN = new THREE.ShapeBufferGeometry(PlaneSurfaceN);
        var flatMaterialN = new THREE.MeshStandardMaterial({ color: DisplayAnalysisRepresentationColorNegative, roughness: Simpleroughness, metalness: SimpleMetalness, side: THREE.DoubleSide });
        var flatMeshN = new THREE.Mesh(geometryN, flatMaterialN);


        // Create plane Surface for Positive Values
        var PlaneSurfaceP = new THREE.Shape();
        PlaneSurfaceP.moveTo(0, 0);
        var x;
        var y;
        var lastValue = 0;
        var lastStation = 0;
        for (let i = 0; i < stations.length; i++) {

            x = stations[i];
            y = values[i] * DisplayAnalysisScale;

            if (i != 0 && lastValue * y < 0) { // adding intersection Point
                var xZero = (lastValue) * (x - lastStation) / (lastValue - y) + lastStation;
                PlaneSurfaceP.lineTo(xZero, 0);

            }

            finalY = math.max(y, 0);
            PlaneSurfaceP.lineTo(x, finalY);
            lastValue = y;
            lastStation = x;
        }
        PlaneSurfaceP.lineTo(x, 0);

        // flat shape for Positive Values
        var geometryP = new THREE.ShapeBufferGeometry(PlaneSurfaceP);
        var flatMaterialP = new THREE.MeshStandardMaterial({ color: DisplayAnalysisRepresentationColorPositive, roughness: Simpleroughness, metalness: SimpleMetalness, side: THREE.DoubleSide });
        var flatMeshP = new THREE.Mesh(geometryP, flatMaterialP);
        flatMeshP.add(flatMeshN);

        var location = bimLine.Point1.Location;

        flatMeshP.position.set(location.X, location.Y, location.Z);
        var flatMeshX = new THREE.Vector3(1, 0, 0); //will be used as local x
        var flatMeshYInGlobal = new THREE.Vector3(0, 1, 0); // will be updated later
        var LineAxis = bimLine.AxisDirection;
        var LineReferenceX = bimLine.ReferenceX;
        var LineReferenceY = bimLine.ReferenceY;





        //******New Rotation Method */


        var ProjectedReferenceX = new THREE.Vector3(LineAxis.x, LineAxis.y, 0).normalize();
        var flatMeshXinGlobalNow;
        if (ProjectedReferenceX.length() > 0) {

            var anlgeOfRotationForX = Math.acos(ProjectedReferenceX.dot(new THREE.Vector3(1, 0, 0)));

            flatMeshP.rotateOnAxis(new THREE.Vector3(0, 0, 1), anlgeOfRotationForX);

            flatMeshXinGlobalNow = ProjectedReferenceX;
        }
        else {
            flatMeshXinGlobalNow = new THREE.Vector3(1, 0, 0);
        }





        var vectorToRotateAboutForAllignment = new THREE.Vector3();
        vectorToRotateAboutForAllignment.crossVectors(LineAxis, flatMeshXinGlobalNow).normalize();
        var flatMeshYinGlobalNow;

        if (vectorToRotateAboutForAllignment.length() > 0) {

            var anlgeOfRotationForAllignment = Math.acos(LineAxis.dot(flatMeshXinGlobalNow));

            flatMeshP.rotateOnWorldAxis(vectorToRotateAboutForAllignment, -anlgeOfRotationForAllignment);
            flatMeshYinGlobalNow = vectorToRotateAboutForAllignment;
        }
        else {
            // this means that the line Axis is Horizontal
            flatMeshYinGlobalNow = new THREE.Vector3();
            flatMeshYinGlobalNow.crossVectors(LineAxis, new THREE.Vector3(0, 0, 1)).normalize();
        }

        var anlgeOfRotationAboutLineAxis = Math.acos(flatMeshYinGlobalNow.dot(LineReferenceY));
        flatMeshP.rotateOnWorldAxis(LineAxis, -anlgeOfRotationAboutLineAxis);


        var extraRotationFortheta=0;
        if (bimLine.RotationAboutAxis!=0) {
            extraRotationFortheta=bimLine.RotationAboutAxis-90;
        }
        // Extra Rotation For Reasonable rotation about Axis
        switch (ForceName) {
            case "P":
                flatMeshP.rotateOnWorldAxis(LineAxis, (180-(extraRotationFortheta)) * math.pi / 180);
                break;
            case "V2":
                flatMeshP.rotateOnWorldAxis(LineAxis, (180-(extraRotationFortheta)) * math.pi / 180);
                break;
            case "V3":
                flatMeshP.rotateOnWorldAxis(LineAxis, (-90-(extraRotationFortheta)) * math.pi / 180);
                break;
            case "T":
                flatMeshP.rotateOnWorldAxis(LineAxis, (180-(extraRotationFortheta)) * math.pi / 180);
                break;
            case "M2":
                flatMeshP.rotateOnWorldAxis(LineAxis, (90-(extraRotationFortheta)) * math.pi / 180);
                break;
            case "M3":
                flatMeshP.rotateOnWorldAxis(LineAxis, (0-(extraRotationFortheta)) * math.pi / 180);
                break;

            default:
                break;
        }




        ListOfAnalysisResultShapes.push(flatMeshP);

        
        return flatMeshP;
    } else {
        alert("No analysis Results");
        return undefined;
    }

}

function GetAnalysisResultByName(analysisResults, loadCase) {
    var result;

    analysisResults.forEach(analysisResult => {
        if (analysisResult.LoadCaseNames[0] == loadCase) {
            result = analysisResult;
        }
    });

    return result;
}