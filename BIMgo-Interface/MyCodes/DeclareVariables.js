var bimModelJS; // tha main Object containing all data retreived from server also all 3d objects created will be assigned to it
document.getElementById("Alert-For-Server").style.display =  "none"; //reserved as backup
// WebSite Variables __________________________________________________________________________________________________________________
var WebSiteUserId=document.getElementById("WebSiteUserId_id").innerHTML;
var WebSiteFileName=document.getElementById("WebSiteFileName_id").innerHTML;
var WebSiteFilePath=document.getElementById("WebSiteFilePath_id").innerHTML;
var WebSiteNewFolder=parseInt(document.getElementById("WebSiteNewFolder_id").innerHTML);

//-----------------------------------------------------------------------------------------------------------------------------

// 3D Arrays __________________________________________________________________________________________________________________

var ArrayOfGridPoints = new Array();
var ArrayOfSelectedGridPoints = new Array();
var ArrayOfGridLines = new Array();
var ArrayOf3DBimPointSupports = new Array();
var ArrayOfSimpleRepresentations = new Array();
var ArrayOfExtrudedRepresentations = new Array();

var SelectionArray;

var ArrayOfAnalysisVisualObject = new Array();
//-----------------------------------------------------------------------------------------------------------------------------

// Grids And Colors _______________________________________________________________________________________________________________________


var OverAllShininess = 4;
var SimpleRepresentationColor = new THREE.Color(0x1411ce);
var SupportsColor = new THREE.Color(0x08d84d);
var supportB = 400;
var supportH = 300;

var GridXColoredMaterial = new THREE.LineBasicMaterial({ color: 0x7a7a7a });
var GridYColoredMaterial = new THREE.LineBasicMaterial({ color: 0x7a7a7a });
var GridZColoredMaterial = new THREE.LineBasicMaterial({ color: 0x7a7a7a });

var GridPointColoredMaterial = new THREE.MeshPhongMaterial({ color: 0x57e2ff });
var GridPointGeometry = new THREE.SphereGeometry(40, 8, 8);

var BimPointColoredMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
var BimPointGeometry = new THREE.SphereGeometry(10, 8, 8);

var SimpleMetalness = 0.1;
var Simpleroughness = 0.9;

var ExtrudedMetalness = 0.1;
var Extrudedroughness = 0.9;
//-----------------------------------------------------------------------------------------------------------------------------

// Vision __________________________________________________________________________________________________________________
var CrossSectionRange=2000;
var CrossSectionMargin=2000;
//-----------------------------------------------------------------------------------------------------------------------------


// Selection __________________________________________________________________________________________________________________

//Variables For Selection or temp save
var raycaster;
var mouse;

var threeSelectedElement;
var bimSelectedElement;
var bimSelectedNewInsertionPoint;
var bimSelectedNewLineType;
var bimSelectedNewRotation;
var bimSelectedElementNewName;
var bimSelectedNewPlaneThickness;
var bimElementColorR = 0.7;
var bimElementColorG = 0.7;
var bimElementColorB = 0.7;

//var HighLightExrudedSelectionColor = new THREE.Color(0x2194ce);
//var HighLightSimpleSelectionColor = new THREE.Color(0xff9800);
var HighLightExrudedSelectionColorHex = "0x2194ce";
var HighLightSimpleSelectionColorHex = "0xff9800";
var TempSelectionColor;
var LastSelectedItem;

var EnlargementsScale = 1.002;
var ResettingScale = 1 / EnlargementsScale;

//-----------------------------------------------------------------------------------------------------------------------------

// Containers __________________________________________________________________________________________________________________

var threeContainer, threeContainerWidth, threeContainerHeight;
var threeCanvas, threeCanvasWidth, threeCanvasHeight;
threeContainer = document.getElementById('threeContainer');
threeContainerWidth = threeContainer.offsetWidth;
threeContainerHeight = threeContainer.offsetHeight;

var threeContainerMouseX, threeContainerMouseY;
var camera, scene, renderer;

//-----------------------------------------------------------------------------------------------------------------------------

// booleans __________________________________________________________________________________________________________________

var IsViewExtruded = true;

var IsGridVisible = true;

var IsPointselectionCase = false;


//-----------------------------------------------------------------------------------------------------------------------------

// BimSelections ______________________________________________________________________________________________________________

var bimSelectedMaterial;
var bimSelectedProfile;
var bimSupportType;
//-----------------------------------------------------------------------------------------------------------------------------


// BimConstructor ______________________________________________________________________________________________________________

var bimPointsTolerance = 0.001;

//-----------------------------------------------------------------------------------------------------------------------------



// Helpers ______________________________________________________________________________________________________________

var currentCase;
// write here used cases
var Free_Display_Extrusion_View = "Free_Display_Extrusion_View";
var Free_Display_Standard_View = "Free_Display_Standard_View";

var DrawingPointElement_WaitingForPointSelection_PointSelectionActivated = "Drawing Point Element / Waiting For Point Selection / Point Selection Activated";

var DrawingLineElement_WaitingForFirstPoint_PointSelectionActivated = "Drawing Line Element / Waiting For First Point / Point Selection Activated";
var DrawingLineElement_WaitingForSecondPoint_PointSelectionActivated = "Drawing Line Element / Waiting For Second Point / Point Selection Activated";

var DrawingPlaneElement_WaitingForFirstPoint_PointSelectionActivated = "Drawing plane Element / Waiting For FirstPoint / Point Selection Activated";
var DrawingPlaneElement_WaitingForSecondPoint_PointSelectionActivated = "Drawing plane Element / Waiting For SecondPoint / Point Selection Activated";
var DrawingPlaneElement_WaitingForThirdPoint_PointSelectionActivated = "Drawing plane Element / Waiting For ThirdPoint / Point Selection Activated";
var DrawingPlaneElement_WaitingForNextPoint_PointSelectionActivated = "Drawing plane Element / Waiting For NextPoint(Optional) / To finish select last point again_Point Selection Activated";

//-----------------------------------------------------------------------------------------------------------------------------


function ReSetAllDeclarations() {


// WebSite Variables __________________________________________________________________________________________________________________
 WebSiteUserId=document.getElementById("WebSiteUserId_id").innerHTML;
 WebSiteFileName=document.getElementById("WebSiteFileName_id").innerHTML;
 WebSiteFilePath=document.getElementById("WebSiteFilePath_id").innerHTML;
 WebSiteNewFolder=parseInt(document.getElementById("WebSiteNewFolder_id").innerHTML);

//-----------------------------------------------------------------------------------------------------------------------------

    // 3D Arrays __________________________________________________________________________________________________________________

    ArrayOfGridPoints = new Array();
    ArrayOfSelectedGridPoints = new Array();
    ArrayOfGridLines = new Array();
    ArrayOf3DBimPointSupports = new Array();
    ArrayOfSimpleRepresentations = new Array();
    ArrayOfExtrudedRepresentations = new Array();


    ArrayOfAnalysisVisualObject = new Array();
    //-----------------------------------------------------------------------------------------------------------------------------

    // Grids And Colors _______________________________________________________________________________________________________________________


    OverAllShininess = 4;
    SimpleRepresentationColor = new THREE.Color(0x1411ce);
    SupportsColor = new THREE.Color(0x08d84d);
    supportB = 400;
    supportH = 300;

    GridXColoredMaterial = new THREE.LineBasicMaterial({ color: 0x7a7a7a });
    GridYColoredMaterial = new THREE.LineBasicMaterial({ color: 0x7a7a7a });
    GridZColoredMaterial = new THREE.LineBasicMaterial({ color: 0x7a7a7a });

    GridPointColoredMaterial = new THREE.MeshPhongMaterial({ color: 0x57e2ff });
    GridPointGeometry = new THREE.SphereGeometry(40, 8, 8);

    BimPointColoredMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    BimPointGeometry = new THREE.SphereGeometry(10, 8, 8);

    SimpleMetalness = 0.1;
    Simpleroughness = 0.9;

    ExtrudedMetalness = 0.1;
    Extrudedroughness = 0.9;
    //-----------------------------------------------------------------------------------------------------------------------------


    // Selection __________________________________________________________________________________________________________________


    bimElementColorR = 0.7;
    bimElementColorG = 0.7;
    bimElementColorB = 0.7;

    HighLightExrudedSelectionColor = new THREE.Color(0x2194ce);
    HighLightSimpleSelectionColor = new THREE.Color(0xff9800);
    HighLightExrudedSelectionColorHex = "0x2194ce";
    HighLightSimpleSelectionColorHex = "0xff9800";

    EnlargementsScale = 1.002;
    ResettingScale = 1 / EnlargementsScale;

    //-----------------------------------------------------------------------------------------------------------------------------

    // Containers __________________________________________________________________________________________________________________


    threeContainer = document.getElementById('threeContainer');
    threeContainer.innerHTML = "";
    threeContainerWidth = threeContainer.offsetWidth;
    threeContainerHeight = threeContainer.offsetHeight;


    //-----------------------------------------------------------------------------------------------------------------------------

    // booleans __________________________________________________________________________________________________________________

    IsViewExtruded = true;

    IsGridVisible = true;

    IsPointselectionCase = false;


    //-----------------------------------------------------------------------------------------------------------------------------

    // BimSelections ______________________________________________________________________________________________________________



    //-----------------------------------------------------------------------------------------------------------------------------


    // BimConstructor ______________________________________________________________________________________________________________

    bimPointsTolerance = 0.001;

    //-----------------------------------------------------------------------------------------------------------------------------



    // Helpers ______________________________________________________________________________________________________________

    // write here used cases
    Free_Display_Extrusion_View = "Free_Display_Extrusion_View";
    Free_Display_Standard_View = "Free_Display_Standard_View";
    DrawingLineElement_WaitingForFirstPoint_PointSelectionActivated = "Drawing Line Element / Waiting For First Point / Point Selection Activated";
    DrawingLineElement_WaitingForSecondPoint_PointSelectionActivated = "Drawing Line Element / Waiting For Second Point / Point Selection Activated";

    DrawingPlaneElement_WaitingForFirstPoint_PointSelectionActivated = "Drawing plane Element / Waiting For FirstPoint / Point Selection Activated";
    DrawingPlaneElement_WaitingForSecondPoint_PointSelectionActivated = "Drawing plane Element / Waiting For SecondPoint / Point Selection Activated";
    DrawingPlaneElement_WaitingForThirdPoint_PointSelectionActivated = "Drawing plane Element / Waiting For ThirdPoint / Point Selection Activated";
    DrawingPlaneElement_WaitingForNextPoint_PointSelectionActivated = "Drawing plane Element / Waiting For NextPoint(Optional) / To finish select last point again_Point Selection Activated";

    //-----------------------------------------------------------------------------------------------------------------------------

}