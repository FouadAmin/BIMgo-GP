


function GetBimModelListedFromPathAndName(Path,Name) {
    var APIURL = "http://localhost:2611/BimApi/BimIO/GetBimModelListedFromPathAndName?filePath=" + Path + "&&fileName=" + Name;

    $.ajax({
        url: APIURL,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //crossDomain:true,
        dataType: 'json',
        //traditional:true,
        //processData:true,
        success: function (data) {
            GetBimModelQuery_Success(data);
            console.log(data);
        },
        done: function () {
            console.log("Get BimModelListed From Path Done ... ");
        },
        error: function (err) {
            console.log(err);
            LoadingFailed();
        }
    });
}


function GetBimModelListedFromFullPath(fullPath) {
    var APIURL = "http://localhost:2611/BimApi/BimIO/GetBimModelListedFromFullPath?fullPath=" + fullPath;

    $.ajax({
        url: APIURL,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        //crossDomain:true,
        dataType: 'json',
        //traditional:true,
        //processData:true,
        success: function (data) {
            GetBimModelQuery_Success(data);
            console.log(data);
        },
        done: function () {
            console.log("Get BimModelListed From Path Done ... ");
        },
        error: function (err) {
            console.log(err);
            LoadingFailed();
        }
    });
}

function GetBimModelQuery_Success(data) {

    

    bimModelJS = data;

    RunMainProgram();
}

function LoadingFailed() {

    alert("Loading Failed From Server : A Sample Model Will Be loaded ");

    //document.getElementById("Alert-For-Server").style.display = "block";
    //document.getElementById("Alert-For-Server-Modal").modal('show');
    
    //bimModelJS = BimModel_SapGeneralSample;
    //bimModelJS = BimModelNewSlantedBeamNG;
    //bimModelJS = BimModelNewSlantedBeamG;
    //bimModelJS = BimModelAnalyzed;
    //bimModelJS = BimModelSapSampleNotAnalyzed;
    bimModelJS = BimModel_SAPGeneralSampleNew1_StrG;
    //bimModelJS = BimModelSapSampleAnalyzed;
    //bimModelJS = BimModel_TwoFloors_1STR_2Arch_Theta;
    //bimModelJS=BimModelG;
    
    RunMainProgram();
}

function RunMainProgram() {
    // Calling a function to Create 3D Objects For bimModelJS 
    Create3DObjectsForbimModelJS();

    init();

    // Calling a function to add created mesh Elements to the 
    AddObjectsToScene(scene);

    // this will set case to extruded case
    IsViewExtruded = false;
    ShowExtrudedToggle();

    animate();
}



function SaveBimModelListedAsStrByNameAndPath(fileName, sentFilePath) {
    //Sample 
    //http://localhost:2611/BimApi/BimIO/SaveBimModelListedAsStrByNameAndPath?filePath=D:\\IFCSamples\\&&fileName=New_Str_SlantedG
    var APIURL = "http://localhost:2611/BimApi/BimIO/SaveBimModelListedAsStrByNameAndPath?filePath=" + sentFilePath+"&&"+"fileName="+fileName;

    $.ajax({
        url: APIURL,
        type: "POST",
        data:JSON.stringify(bimModelJS),
        contentType: "application/json; charset=utf-8",
        //crossDomain:true,
        dataType: 'json',
        //traditional:true,
        //processData:true,
        success: function (data) {
            alert("data Saved");
            SaveFileDataAtDataBase(WebSiteUserId, sentFilePath, fileName);
        },
        done: function () {
            console.log("data Saved");
        },
        error: function (err) {
            alert("data Not Saved");
        }
    });
}

function SaveBimModelListedAsArchByNameAndPath(fileName,sentFilePath) {
    //Sample 
    //http://localhost:2611/BimApi/BimIO/SaveBimModelListedAsArchByNameAndPath?filePath=D:\\IFCSamples\\&&fileName=New_Str_SlantedG
    var APIURL = "http://localhost:2611/BimApi/BimIO/SaveBimModelListedAsArchByNameAndPath?filePath=" + sentFilePath+"&&"+"fileName="+fileName;

    $.ajax({
        url: APIURL,
        type: "POST",
        data:JSON.stringify(bimModelJS),
        contentType: "application/json; charset=utf-8",
        //crossDomain:true,
        dataType: 'json',
        //traditional:true,
        //processData:true,
        success: function (data) {
            alert("data Saved");
            SaveFileDataAtDataBase(WebSiteUserId, sentFilePath, fileName);
        },
        done: function () {
            console.log("data Saved");
        },
        error: function (err) {
            alert("data Not Saved");
        }
    });
}


function AnalyzeModelSent(pointsTolerance,maximumShellMeshSize) {

    ClearModelAnalysisResults();

    //Sample 
    //http://localhost:2611/BimApi/BimAnalysis/AnalyzeModelSent?analysisFilePath=D:\\IFCSamples\\AnalysisDirectory&&fileName=AnalyzeFromServer&&pointsTolerance=0.01&&maximumShellMeshSize=1000
    var APIURL = "http://localhost:2611/BimApi/BimAnalysis/AnalyzeModelSent?analysisFilePath=D:\\IFCSamples\\AnalysisDirectory&&fileName=AnalyzeFromServer&&pointsTolerance="+pointsTolerance+"&&maximumShellMeshSize="+maximumShellMeshSize;

    $.ajax({
        url: APIURL,
        type: "POST",
        data:JSON.stringify(bimModelJS),
        contentType: "application/json; charset=utf-8",
        //crossDomain:true,
        dataType: 'json',
        //traditional:true,
        //processData:true,
        success: function (data) {
            attachResponceToBimModelJS(data);
        },
        done: function () {
            console.log("data Analyzed");
        },
        error: function (err) {
            alert("data Not Analyzed");
        }
    });
}

function attachResponceToBimModelJS(data) {
    bimModelJS=data;
    alert("  Analysis Done Sucessfully");
    ReSetAllDeclarations();
    RunMainProgram();
}


function OpenNewFile() {
    bimModelJS= jsonCopy(BimModelNewModel);
    ReSetAllDeclarations();
    RunMainProgram();
}


function jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
  }