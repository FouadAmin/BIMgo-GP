document.getElementById("Extruded_Standard").onclick = ShowExtrudedToggle;
function ShowExtrudedToggle() {

    // Clear Selection 
    threeSelectedElement = undefined;
    UpdateSelectionColor();


    if (IsViewExtruded) {
        ArrayOfExtrudedRepresentations.forEach(element => {
            element.material.visible = false;
        });
        ArrayOfSimpleRepresentations.forEach(element => {
            element.material.visible = true;
        });
        ArrayOf3DBimPointSupports.forEach(element => {
            element.visible = true;
        });
        IsViewExtruded = false;
        SetSelectionForSimpleRepresentations();

        SetCurrentCaseTo(Free_Display_Standard_View);
    } else {
        ArrayOfExtrudedRepresentations.forEach(element => {
            element.material.visible = true;
        });
        ArrayOfSimpleRepresentations.forEach(element => {
            element.material.visible = false;
        });
        ArrayOf3DBimPointSupports.forEach(element => {
            element.visible = false;
        });
        IsViewExtruded = true;
        SetSelectionForExtrudedRepresentations();

        SetCurrentCaseTo(Free_Display_Extrusion_View);
    }
}

document.getElementById("Show_Hide_Grid").onclick = ShowHideGrid;
function ShowHideGrid() {



    if (IsGridVisible) {
        ArrayOfGridLines.forEach(element => {
            element.material.visible = false;
        });

        ArrayOfGridPoints.forEach(element => {
            element.material.visible = false;
        });

        IsGridVisible = false;
    } else {
        ArrayOfGridLines.forEach(element => {
            element.material.visible = true;
        });

        ArrayOfGridPoints.forEach(element => {
            element.material.visible = true;
        });
        IsGridVisible = true;
    }
}

document.getElementById("Apply-Edit-Grid").onclick = ApplyEditGrid;
function ApplyEditGrid() {

    var xString = document.getElementById("Grid-X-Values").value;
    var xValues = xString.split(",").map(function (item) { return parseFloat(item) });
    var yString = document.getElementById("Grid-Y-Values").value;
    var yValues = yString.split(",").map(function (item) { return parseFloat(item) });


    bimModelJS.Grid.XValues = xValues;
    bimModelJS.Grid.YValues = yValues;


    UpdateCreatedGridPointsAndLines();




}

document.getElementById("EditGridDataButton").onclick = EditGridDataButtonClick;
function EditGridDataButtonClick() {

    document.getElementById("Grid-X-Values").value = "";
    document.getElementById("Grid-Y-Values").value = "";
    GetOldEditGridClick();

}

document.getElementById("Get-Old-Edit-Grid").onclick = GetOldEditGridClick;
function GetOldEditGridClick() {

    document.getElementById("Grid-X-Values").value = bimModelJS.Grid.XValues;
    document.getElementById("Grid-Y-Values").value = bimModelJS.Grid.YValues;

}


document.getElementById("Start-Add-Point-Support").onclick = StartAddPointSupportClick;
function StartAddPointSupportClick() {

    bimSupportType =parseInt($('#Quick-Point-Support-DDL').find(":selected").val());
    
    if (bimSupportType != undefined) {
        IsGridVisible = false;
        ShowHideGrid();
        IsViewExtruded = true;
        ShowExtrudedToggle();
        SetSelectionForGridPoints();
        SetCurrentCaseTo(DrawingPointElement_WaitingForPointSelection_PointSelectionActivated);


    } else {
        alert("Some Definitions Are Missing (Support Type)");
    }

}

document.getElementById("Add-Line-Element").onclick = AddLineElementClick;
function AddLineElementClick() {

    document.getElementById('InsertionPoint-DDL').value = 5;

    var profilesSelect = document.getElementById("Profiles-DDL");
    var materialsSelect = document.getElementById("Materials-DDL");


    profilesSelect.innerHTML = "";
    materialsSelect.innerHTML = "";

    bimModelJS.Materials.forEach(material => {
        var opt = document.createElement('option');
        opt.value = material.MappingId;
        opt.innerHTML = material.Name;
        materialsSelect.appendChild(opt);
    });

    bimModelJS.Profiles.forEach(profile => {
        var opt = document.createElement('option');
        opt.value = profile.MappingId;
        opt.innerHTML = profile.Name;
        profilesSelect.appendChild(opt);
    });

}




document.getElementById("Start-Create-Line-Element").onclick = StartCreatingLineElementClick;
function StartCreatingLineElementClick() {

    bimSelectedNewInsertionPoint = parseInt($('#InsertionPoint-DDL').find(":selected").val());
    bimSelectedNewLineType = parseInt($('#LineElmType-DDL').find(":selected").val());
    bimSelectedElementNewName = $('#Line-Elm-Name-Selected')[0].value;
    bimSelectedNewRotation = parseFloat($('#Elm-New-Rotation-Selected')[0].value);

    var MaterialColor = $('#NewLine-Color')[0].value;
    bimElementColorR = parseInt(MaterialColor.substring(1, 3), 16) / 255;
    bimElementColorG = parseInt(MaterialColor.substring(3, 5), 16) / 255;
    bimElementColorB = parseInt(MaterialColor.substring(5, 7), 16) / 255;


    var profileMappingId = $('#Profiles-DDL').find(":selected").val();
    var materialMappingId = $('#Materials-DDL').find(":selected").val();

    bimSelectedProfile = GetBimProfileByMappingId(profileMappingId);
    bimSelectedMaterial = GetBimMaterialByMappingId(materialMappingId);

    if (bimSelectedProfile != undefined && bimSelectedMaterial != undefined) {
        IsGridVisible = false;
        ShowHideGrid();
        IsViewExtruded = true;
        ShowExtrudedToggle();
        SetSelectionForGridPoints();
        SetCurrentCaseTo(DrawingLineElement_WaitingForFirstPoint_PointSelectionActivated);


    } else {
        alert("Some Definitions Are Missing (Profiles or Materials)");
    }

}


document.getElementById("Add-Plane-Element").onclick = AddPlaneElementClick;
function AddPlaneElementClick() {

    var materialsSelect = document.getElementById("Materials-DDL-2");


    materialsSelect.innerHTML = "";

    bimModelJS.Materials.forEach(material => {
        var opt = document.createElement('option');
        opt.value = material.MappingId;
        opt.innerHTML = material.Name;
        materialsSelect.appendChild(opt);
    });



}

document.getElementById("Start-Create-Plane-Element").onclick = StartCreatingPlaneElementClick;
function StartCreatingPlaneElementClick() {


    bimSelectedElementNewName = $('#Plane-Elm-Name-Selected')[0].value;
    bimSelectedNewPlaneThickness = parseFloat($('#plane-New-Thickness-Selected')[0].value);

    var MaterialColor = $('#NewPlane-Color')[0].value;
    bimElementColorR = parseInt(MaterialColor.substring(1, 3), 16) / 255;
    bimElementColorG = parseInt(MaterialColor.substring(3, 5), 16) / 255;
    bimElementColorB = parseInt(MaterialColor.substring(5, 7), 16) / 255;



    var materialMappingId = $('#Materials-DDL-2').find(":selected").val();

    bimSelectedMaterial = GetBimMaterialByMappingId(materialMappingId);

    if (bimSelectedMaterial != undefined) {
        IsGridVisible = false;
        ShowHideGrid();
        IsViewExtruded = true;
        ShowExtrudedToggle();
        SetSelectionForGridPoints();
        SetCurrentCaseTo(DrawingPlaneElement_WaitingForFirstPoint_PointSelectionActivated);


    } else {
        alert("Some Definitions Are Missing (Materials)");
    }

}

document.getElementById("Start-Create-New-REC-Profile").onclick = StartCreatingNewRecProfileClick;
function StartCreatingNewRecProfileClick() {

    var profName = $('#New-Rec-Profile-Name')[0].value;
    var width = parseFloat($('#Rec-Profile-New-Width')[0].value);
    var length = parseFloat($('#Rec-Profile-New-Length')[0].value);


    CreateNewBimProfile(profName, width, length);

}

document.getElementById("Start-Create-New-Material").onclick = StartCreateNewMaterialClick;
function StartCreateNewMaterialClick() {

    var MaterialName = $('#New-Material-Name')[0].value;
    var CompressiveStrength = parseFloat($('#NewMaterial-CompressiveStrength')[0].value);
    var MassDensity = parseFloat($('#NewMaterial-MassDensity')[0].value);
    var PoissonRatio = parseFloat($('#NewMaterial-PoissonRatio')[0].value);
    var ThermalExpansionCoefficient = parseFloat($('#NewMaterial-ThermalExpansionCoefficient')[0].value);
    var YoungModulus = parseFloat($('#NewMaterial-YoungModulus')[0].value);
    var MaterialColor = $('#NewMaterial-Color')[0].value;
    var R = parseInt(MaterialColor.substring(1, 3), 16) / 255;
    var G = parseInt(MaterialColor.substring(3, 5), 16) / 255;
    var B = parseInt(MaterialColor.substring(5, 7), 16) / 255;

    CreateNewBimMaterial(MaterialName, CompressiveStrength, MassDensity, PoissonRatio, ThermalExpansionCoefficient, YoungModulus, R, G, B);

}



document.getElementById("Start-Save-As").onclick = StartSaveAs;
function StartSaveAs() {
    var fileName = $('#New-File-Required-Name')[0].value;
    var PathDivHidden = document.getElementById("Saving-Path-Hidden");
    var filePath = PathDivHidden.value;
    var saveAsOption = parseInt($('#SaveAs-DDL').find(":selected").val());

    switch (saveAsOption) {
        case 1://architecture
            SaveBimModelListedAsArchByNameAndPath(fileName, filePath);
            break;
        case 2://structure
            SaveBimModelListedAsStrByNameAndPath(fileName, filePath);
            break;

    }

}

document.getElementById("Start-Analyze-Model").onclick = StartAnalyzeModel;
function StartAnalyzeModel() {

    var PointsTolerance = parseFloat($('#Points-Tolerance')[0].value);
    var MaximumMeshSize = parseFloat($('#Maximum-Mesh-Size')[0].value);

    AnalyzeModelSent(PointsTolerance, MaximumMeshSize);



}



document.getElementById("Apply-Add-Storey-To-Table").onclick = ApplyAddStoreyToTable;
function ApplyAddStoreyToTable() {
    var tableBody = document.getElementById('Edit-Storeys-Table').getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last row
    var newRow = tableBody.insertRow(tableBody.rows.length);

    // Insert a cell in the row at index 0
    var nameCell = newRow.insertCell(0);

    // Append a text node to the cell
    var nameInput = document.createElement("INPUT");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("class", "form-control .input-md");
    nameInput.value = "New Storey";
    nameCell.appendChild(nameInput);


    // Insert a cell in the row at index 1
    var elevationCell = newRow.insertCell(1);

    // Append a text node to the cell
    var elevationInput = document.createElement("INPUT");
    elevationInput.setAttribute("type", "number");
    elevationInput.setAttribute("class", "form-control .input-md");
    elevationInput.value = 0;
    elevationCell.appendChild(elevationInput);

    // Insert a cell in the row at index 1
    var mappingIdCell = newRow.insertCell(2);

    // Append a text node to the cell
    var mappingIdInput = document.createElement("INPUT");
    mappingIdInput.setAttribute("type", "hidden");
    mappingIdInput.value = 0;
    mappingIdCell.appendChild(mappingIdInput);

    return newRow;

}

document.getElementById("Apply-Delete-Storey-From-Table").onclick = ApplyDeleteStoreyFromTable;
function ApplyDeleteStoreyFromTable() {
    var tableBody = document.getElementById('Edit-Storeys-Table').getElementsByTagName('tbody')[0];

    tableBody.deleteRow(tableBody.rows.length - 1);


}


document.getElementById("EditStoreyDataButton").onclick = EditStoreyDataButtonClick;
function EditStoreyDataButtonClick() {

    var tableBody = document.getElementById('Edit-Storeys-Table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";

    var storeys = bimModelJS.Storeys;

    storeys.forEach(storey => {
        var tableRow = ApplyAddStoreyToTable();

        tableRow.cells[0].children[0].value = storey.Name;
        tableRow.cells[1].children[0].value = storey.Elevation;
        tableRow.cells[2].children[0].value = storey.MappingId;

    });

}



document.getElementById("Apply-Edit-Storey").onclick = ApplyEditStoreyButtonClick;
function ApplyEditStoreyButtonClick() {

    var tableBody = document.getElementById('Edit-Storeys-Table').getElementsByTagName('tbody')[0];
    var tableRows = tableBody.children;


    bimModelJS.Storeys = []; // empty the array of storeys in case the user deleted a storey , Should be handeled with smarter way ;

    for (let index = 0; index < tableRows.length; index++) {
        const tableRow = tableRows[index];

        storeyName = tableRow.cells[0].children[0].value;
        storeyElevation = tableRow.cells[1].children[0].value;
        storeyMappingId = tableRow.cells[2].children[0].value;

        var bimStorey = GetBimStoreyByMappingId(storeyMappingId);
        if (bimStorey != undefined) {
            bimStorey.Name = storeyName;
            bimStorey.Elevation = storeyElevation;
        }
        else {
            bimStorey = CreateNewBimStorey(storeyName, storeyElevation);
        }
    }


    UpdateCreatedGridPointsAndLines();


}



document.getElementById("Delete-Selected-Element").onclick = DeleteSelectedElementClick;
function DeleteSelectedElementClick() {

    if (threeSelectedElement != undefined) {
        if (threeSelectedElement.MappingId) {

            getBimElementByMappingId(threeSelectedElement.MappingId);

            var LineSolidTypeName = "Other";
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

            document.getElementById("SelectedElementDataTypeText_2").value = bimSelectedElement.ClassesHierarchy;
            document.getElementById("SelectedElementTypeText_2").value = LineSolidTypeName;
            document.getElementById("SelectedElementIdText_2").value = bimSelectedElement.MappingId;
            document.getElementById("SelectedElementNameText_2").value = bimSelectedElement.Name;
        }
        else {

            bimSelectedElement = undefined;
            document.getElementById("SelectedElementDataTypeText_2").value = "NotMappedItem";
            document.getElementById("SelectedElementTypeText_2").value = "";
            document.getElementById("SelectedElementIdText_2").value = "";
            document.getElementById("SelectedElementNameText_2").value = "";

        }
    }
    else {
        bimSelectedElement = undefined;
        document.getElementById("SelectedElementDataTypeText_2").value = "NoSelection";
        document.getElementById("SelectedElementTypeText_2").value = "";
        document.getElementById("SelectedElementIdText_2").value = "";
        document.getElementById("SelectedElementNameText_2").value = "";
    }


}


document.getElementById("Start-Delete-Selected-Element").onclick = StartDeleteSelectedElementClick;
function StartDeleteSelectedElementClick() {
    if (threeSelectedElement != undefined) {
        if (threeSelectedElement.MappingId) {

            getBimElementByMappingId(threeSelectedElement.MappingId);
            if (bimSelectedElement != undefined) {
                var classesHierarchy = bimSelectedElement.ClassesHierarchy
                //"ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimLine.BimLineSolid"
                //"ClassesHierarchy": "BimObject.BimDBObject.BimSpatialElement.BimPlane.BimPlaneSolid"
                if (classesHierarchy.includes("BimLineSolid")) {
                    var deleteIndex = bimModelJS.Lines.indexOf(bimSelectedElement);
                    if (deleteIndex > -1) {
                        bimModelJS.Lines.splice(deleteIndex, 1);
                    }
                }
                else if (classesHierarchy.includes("BimPlaneSolid")) {
                    var deleteIndex = bimModelJS.Planes.indexOf(bimSelectedElement);
                    if (deleteIndex > -1) {
                        bimModelJS.Planes.splice(deleteIndex, 1);
                    }
                }

                if (bimSelectedElement.SimpleRepresentation) {
                    scene.remove(bimSelectedElement.SimpleRepresentation)
                }
                if (bimSelectedElement.ExtrudedRepresentation) {
                    scene.remove(bimSelectedElement.SimpleRepresentation)
                }
            }

        }
        else {
            alert("No Bim Element To Delete");

        }
    }
    else {
        alert("No object selected To Delete");
    }
}





document.getElementById("View-3D-Button").onclick = View3DButtonClick;
function View3DButtonClick() {

    var cameraEye = [-30000, -30000, 30000];
    var cameraUp = [0, 0, 1];
    var cameraFOV = 30;
    var cameraNear = 1;
    var cameraFar = 200000;
    SetPrespectiveCameraWithParameters(cameraEye, cameraUp, cameraFOV, cameraNear, cameraFar);

}


document.getElementById("View-XY-Plane-Button").onclick = ViewXYPlaneButtonClick;
function ViewXYPlaneButtonClick() {

    var viewsSelect = document.getElementById("Set-XY-View-DDL");
    viewsSelect.innerHTML = "";

    bimModelJS.Storeys.forEach(Storey => {
        var opt = document.createElement('option');
        opt.value = Storey.Elevation;
        opt.innerHTML = Storey.Name;
        viewsSelect.appendChild(opt);
    });

}



document.getElementById("Set-View-XY-Plane-Button").onclick = SetViewXYPlaneButtonClick;
function SetViewXYPlaneButtonClick() {
    var xvalues = bimModelJS.Grid.XValues;
    var yvalues = bimModelJS.Grid.YValues;
    var storeys = bimModelJS.Storeys;

    var elevation = parseFloat($('#Set-XY-View-DDL').find(":selected").val());
    var left = xvalues[0] - CrossSectionMargin;
    var right = xvalues[xvalues.length - 1] + CrossSectionMargin;
    var bottom = yvalues[0] - CrossSectionMargin;
    var top = yvalues[yvalues.length - 1] + CrossSectionMargin;

    SetOrthographicCameraWithRange("Z", elevation, left, right, top, bottom, 0, CrossSectionRange);

}


document.getElementById("View-XZ-Plane-Button").onclick = ViewXZPlaneButtonClick;
function ViewXZPlaneButtonClick() {

    var viewsSelect = document.getElementById("Set-XZ-View-DDL");
    viewsSelect.innerHTML = "";

    bimModelJS.Grid.YValues.forEach(yValue => {
        var opt = document.createElement('option');
        opt.value = yValue;
        opt.innerHTML = yValue;
        viewsSelect.appendChild(opt);
    });

}

document.getElementById("Set-View-XZ-Plane-Button").onclick = SetViewXZPlaneButtonClick;
function SetViewXZPlaneButtonClick() {
    var xvalues = bimModelJS.Grid.XValues;
    var yvalues = bimModelJS.Grid.YValues;
    var storeys = bimModelJS.Storeys;

    var elevation = parseFloat($('#Set-XZ-View-DDL').find(":selected").val());
    var left = xvalues[0] - CrossSectionMargin;
    var right = xvalues[xvalues.length - 1] + CrossSectionMargin;
    var bottom = parseFloat(storeys[0].Elevation) - CrossSectionMargin;
    var top = parseFloat(storeys[storeys.length - 1].Elevation) + CrossSectionMargin;

    SetOrthographicCameraWithRange("Y", elevation, left, right, top, bottom, 0, CrossSectionRange);

}



document.getElementById("View-YZ-Plane-Button").onclick = ViewYZPlaneButtonClick;
function ViewYZPlaneButtonClick() {

    var viewsSelect = document.getElementById("Set-YZ-View-DDL");
    viewsSelect.innerHTML = "";

    bimModelJS.Grid.XValues.forEach(xValue => {
        var opt = document.createElement('option');
        opt.value = xValue;
        opt.innerHTML = xValue;
        viewsSelect.appendChild(opt);
    });

}

document.getElementById("Set-View-YZ-Plane-Button").onclick = SetViewYZPlaneButtonClick;
function SetViewYZPlaneButtonClick() {
    var xvalues = bimModelJS.Grid.XValues;
    var yvalues = bimModelJS.Grid.YValues;
    var storeys = bimModelJS.Storeys;

    var elevation = parseFloat($('#Set-YZ-View-DDL').find(":selected").val());
    var right = yvalues[0] - CrossSectionMargin;
    var left = yvalues[yvalues.length - 1] + CrossSectionMargin;
    var bottom = parseFloat(storeys[0].Elevation) - CrossSectionMargin;
    var top = parseFloat(storeys[storeys.length - 1].Elevation) + CrossSectionMargin;

    SetOrthographicCameraWithRange("X", elevation, left, right, top, bottom, 0, CrossSectionRange);

}


document.getElementById("Get-Model-Json-Button").onclick = GetModelJsonButtonClick;
function GetModelJsonButtonClick() {

    var ModelDataOutPut = document.getElementById("Model-Data-OutPut");
    ModelDataOutPut.value = JSON.stringify(bimModelJS);


}

document.getElementById("Start-Set-Model-Backup").onclick = StartSetModelBackupClick;
function StartSetModelBackupClick() {

    var ModelDataInPut = document.getElementById("Model-Data-InPut");
    var data = ModelDataInPut.value;

    bimModelJS = JSON.parse(data);
    ReSetAllDeclarations();
    RunMainProgram();
    alert("Import Done Sucessfully");

}


document.getElementById("Generate-New-Model").onclick = GenerateNewModelClick;
function GenerateNewModelClick() {

    OpenNewFile();
}

document.getElementById("Refresh-Model-Button").onclick = RefreshModelClick;
function RefreshModelClick() {
    ReSetAllDeclarations();
    RunMainProgram();
}