function onClick(event) {
    raycaster.setFromCamera(mouse, camera);
    //Getting Selected Objects
    if (SelectionArray == undefined) {
        SelectionArray = scene.children;
    }
    var intersects = raycaster.intersectObjects(SelectionArray, true /*for recursive by5tar elly gowa kaman*/);
    if (intersects.length > 0) {
        threeSelectedElement = intersects[0].object;
    }
    else {
        threeSelectedElement = undefined;
    }
    UpdateSelectionColor();
    UpdateBimSelection();
    UpdatePointSelectionCases();
}

function UpdateBimSelection() {
    if (threeSelectedElement != undefined) {
        if (threeSelectedElement.MappingId) {

            getBimElementByMappingId(threeSelectedElement.MappingId);

            var LineSolidTypeName = "Other";

            if (bimSelectedElement != undefined) {
                if (bimSelectedElement.LineSolidType) {
                    switch (bimSelectedElement.LineSolidType) {
                        case 1:
                            LineSolidTypeName = "Beam";
                            break;
                        case 2:
                            LineSolidTypeName = "Column";
                            break;
                        case 3:
                            LineSolidTypeName = "Unknown";
                            break;
                        case 4:
                            LineSolidTypeName = "Other";
                            break;
                        default:
                            LineSolidTypeName = "Other";
                            break;
                    }
                }
                document.getElementById("SelectedElementDataTypeText").innerHTML = bimSelectedElement.ClassesHierarchy;
                document.getElementById("SelectedElementTypeText").innerHTML = LineSolidTypeName;
                document.getElementById("SelectedElementIdText").innerHTML = bimSelectedElement.MappingId;
                document.getElementById("SelectedElementNameText").innerHTML = bimSelectedElement.Name;
            }

        }
        else {
            bimSelectedElement = undefined;
            document.getElementById("SelectedElementDataTypeText").innerHTML = "NotMappedItem";
            document.getElementById("SelectedElementTypeText").innerHTML = "";
            document.getElementById("SelectedElementIdText").innerHTML = "";
            document.getElementById("SelectedElementNameText").innerHTML = "";
        }
    }
    else {
        bimSelectedElement = undefined;
        document.getElementById("SelectedElementDataTypeText").innerHTML = "NoSelection";
        document.getElementById("SelectedElementTypeText").innerHTML = "";
        document.getElementById("SelectedElementIdText").innerHTML = "";
        document.getElementById("SelectedElementNameText").innerHTML = "";
    }

    DisplayBimElementData();

}



function getBimElementByMappingId(MappingId) {
    // points
    bimModelJS.Points.forEach(element => {
        if (element.MappingId == MappingId) {
            bimSelectedElement = element;
            return bimSelectedElement;
        }
    });

    // lines
    bimModelJS.Lines.forEach(element => {
        if (element.MappingId == MappingId) {
            bimSelectedElement = element;
            return bimSelectedElement;
        }
    });

    // planes
    bimModelJS.Planes.forEach(element => {
        if (element.MappingId == MappingId) {
            bimSelectedElement = element;
            return bimSelectedElement;
        }
    });


}


function UpdateSelectionColor() {

    // resetting last Element
    if (LastSelectedItem != undefined) {
        LastSelectedItem.material.color.setHex(TempSelectionColor);
        LastSelectedItem.scale.set(ResettingScale, ResettingScale, ResettingScale);
    }

    if (threeSelectedElement != undefined) {

        //backup new Element
        TempSelectionColor = threeSelectedElement.material.color.getHex();

        // set new color 
        if (IsViewExtruded) {

            threeSelectedElement.material.color.setHex(HighLightExrudedSelectionColorHex);
        } else {

            threeSelectedElement.material.color.setHex(HighLightSimpleSelectionColorHex);
        }

        // Enlargement of selected Element 
        threeSelectedElement.scale.set(EnlargementsScale, EnlargementsScale, EnlargementsScale);
    }

    // back up current Selection for future Selection
    LastSelectedItem = threeSelectedElement;
}



function UpdatePointSelectionCases() {

    if (IsPointselectionCase && threeSelectedElement) {

        if (currentCase == DrawingLineElement_WaitingForFirstPoint_PointSelectionActivated) {

            ArrayOfSelectedGridPoints.push(threeSelectedElement);

            SetCurrentCaseTo(DrawingLineElement_WaitingForSecondPoint_PointSelectionActivated);

        }
        else if (currentCase == DrawingLineElement_WaitingForSecondPoint_PointSelectionActivated) {

            ArrayOfSelectedGridPoints.push(threeSelectedElement);

            var newBimLine = CreateBimLineBySelectingPoints(ArrayOfSelectedGridPoints);
            var newThreeLine = Create3DObjectsForBimLine(newBimLine);
            scene.add(newThreeLine);
            IsViewExtruded = false;
            ShowExtrudedToggle();
        }
        else if (currentCase == DrawingPlaneElement_WaitingForFirstPoint_PointSelectionActivated) {

            ArrayOfSelectedGridPoints.push(threeSelectedElement);

            SetCurrentCaseTo(DrawingPlaneElement_WaitingForSecondPoint_PointSelectionActivated);
        }
        else if (currentCase == DrawingPlaneElement_WaitingForSecondPoint_PointSelectionActivated) {

            ArrayOfSelectedGridPoints.push(threeSelectedElement);

            SetCurrentCaseTo(DrawingPlaneElement_WaitingForThirdPoint_PointSelectionActivated);
        }
        else if (currentCase == DrawingPlaneElement_WaitingForThirdPoint_PointSelectionActivated) {

            ArrayOfSelectedGridPoints.push(threeSelectedElement);

            SetCurrentCaseTo(DrawingPlaneElement_WaitingForNextPoint_PointSelectionActivated);
        }
        else if (currentCase == DrawingPlaneElement_WaitingForNextPoint_PointSelectionActivated) {


            var lastPointInArray = ArrayOfSelectedGridPoints[ArrayOfSelectedGridPoints.length - 1];
            if (lastPointInArray == threeSelectedElement) {

                var newBimPlane = CreateBimPlaneBySelectingPoints(ArrayOfSelectedGridPoints);
                var newThreePlane = Create3DObjectsForBimPlane(newBimPlane);
                scene.add(newThreePlane);

                IsViewExtruded = false;
                ShowExtrudedToggle();

            } else {

                ArrayOfSelectedGridPoints.push(threeSelectedElement);
            }



        }

    }
}


function SetSelectionForExtrudedRepresentations() {
    SelectionArray = ArrayOfExtrudedRepresentations;
}

function SetSelectionForSimpleRepresentations() {
    SelectionArray = ArrayOfSimpleRepresentations;
}

function SetSelectionForGridPoints() {
    SelectionArray = ArrayOfGridPoints;
    ArrayOfSelectedGridPoints = new Array();
    IsPointselectionCase = true;
}


