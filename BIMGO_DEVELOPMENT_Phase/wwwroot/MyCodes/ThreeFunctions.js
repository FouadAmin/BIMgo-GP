function init() {





    var backgroundColor = new THREE.Color(0.95, 0.95, 0.95);
    var cameraEye = [-30000, -30000, 30000];
    var cameraUp = [0, 0, 1];
    var cameraFOV = 30;
    var cameraFar = 200000;
    var cameraNear = 1;

    //Variables For Selection
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2(-1, -1);

    // Creating Camera
    camera = new THREE.PerspectiveCamera(cameraFOV, threeContainerWidth / threeContainerHeight, cameraNear, cameraFar);
    camera.position.fromArray(cameraEye);
    camera.up.fromArray(cameraUp);
    camera.lookAt(new THREE.Vector3(bimModelJS.Grid.xAvg, bimModelJS.Grid.yAvg, 0));

    // Creating Scene
    scene = new THREE.Scene();
    scene.background = backgroundColor;

    // spotLight Light
    var LightPositions =
        [
            //new THREE.Vector3(100000, 100000, 100000),
            new THREE.Vector3(100000, -100000, 100000),
            // new THREE.Vector3(100000, 100000, -100000),
            //new THREE.Vector3(-100000, -100000, -100000),
        ];


    LightPositions.forEach(LightPosition => {
        var light = new THREE.SpotLight(0xffffff, 0.5);
        light.position.set(LightPosition.x, LightPosition.y, LightPosition.z);
        light.angle = Math.PI / 1.1;
        light.penumbra = 0.05;
        light.decay = 0;
        light.distance = 20000;
        scene.add(light);
    });




    // Ambient Light
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);


    // // Calling a function to Create 3D Objects For bimModelJS 
    // Create3DObjectsForbimModelJS();

    // // Calling a function to add created mesh Elements to the 
    // AddObjectsToScene(scene);


    //Creating Renderer
    renderer = new THREE.WebGLRenderer(
        {
            antialias: true,/* to smooth the edges */
            depth: true,
            logarithmicDepthBuffer: true
        });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(threeContainerWidth, threeContainerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    threeContainer.appendChild(renderer.domElement);
    threeCanvas = renderer.domElement;
    threeCanvasWidth = threeCanvas.clientWidth;
    threeCanvasHeight = threeCanvas.clientHeight;




    //Controls
    controls = new THREE.OrbitControls(camera, threeContainer);
    controls.enablePan = true;
    controls.addEventListener('change', render);


    stats = new Stats();
    threeContainer.appendChild(stats.dom);


    threeContainer.addEventListener('mousemove', onMouseMove, false);
    threeContainer.addEventListener('click', onClick, false)
    window.addEventListener('resize', onWindowResize, false);
}
//On Mouse Move
function onMouseMove(event) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    // var shiftedEventX=(event.clientX -event.currentTarget.offsetLeft);
    // var shiftedEventY=(event.clientY -event.currentTarget.offsetTop);

    var shiftedEventX = (event.pageX - event.currentTarget.offsetLeft);
    var shiftedEventY = (event.pageY - event.currentTarget.offsetTop);


    mouse.x = (shiftedEventX / threeContainerWidth) * 2 - 1;
    mouse.y = -(shiftedEventY / threeContainerHeight) * 2 + 1;

    document.getElementById("MouseXText").innerHTML = mouse.x;
    document.getElementById("MouseYText").innerHTML = mouse.y;

    document.getElementById("EventXText").innerHTML = shiftedEventX;
    document.getElementById("EventYText").innerHTML = shiftedEventY;

    document.getElementById("ThreeContainerWidthText").innerHTML = threeContainerWidth;
    document.getElementById("ThreeContainerHeightText").innerHTML = threeContainerHeight;

}
function onWindowResize() {

    threeContainerWidth = threeContainer.clientWidth;
    threeContainerHeight = threeContainer.clientHeight;

    threeCanvasWidth = threeCanvas.clientWidth;
    threeCanvasHeight = threeCanvas.clientHeight;

    camera.aspect = threeContainerWidth / threeContainerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(threeContainerWidth, threeContainerHeight);
}
function animate() {

    render();

    stats.update();

    requestAnimationFrame(animate);
}
function render() {

    renderer.render(scene, camera);

}


function SetPrespectiveCameraWithParameters(cameraEye, cameraUp, cameraFOV, cameraNear, cameraFar) {

    // Creating Camera
    camera = new THREE.PerspectiveCamera(cameraFOV, threeContainerWidth / threeContainerHeight, cameraNear, cameraFar);
    camera.position.fromArray(cameraEye);
    camera.up.fromArray(cameraUp);
    camera.lookAt(new THREE.Vector3(bimModelJS.Grid.xAvg, bimModelJS.Grid.yAvg, 0));
    raycaster.near = cameraNear;
    raycaster.far = cameraFar;


    //Controls
    controls = new THREE.OrbitControls(camera, threeContainer);
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.addEventListener('change', render);

    onWindowResize();
}

function SetOrthographicCameraWithRange(cameraDirection, cameraLocation, left, right, top, bottom, near, far) {
    //var heightAverage = (top + bottom) / 2;
    var heightAverage = 0;
    //var widthAverage = (left + right) / 2;
    var widthAverage = 0;
    switch (cameraDirection) {
        case "X":
            if (cameraLocation < 0) {
                camera = new THREE.OrthographicCamera(right, left, top, bottom, near, far);
                camera.position.set(cameraLocation - CrossSectionRange / 2, widthAverage, heightAverage);
            } else {
                camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
                camera.position.set(cameraLocation + CrossSectionRange / 2, widthAverage, heightAverage);
            }
            camera.lookAt(cameraLocation, widthAverage, heightAverage);
            camera.up.set(0, 0, 1);
            break;
        case "Y":
            if (cameraLocation < 0) {
                camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
                camera.position.set(widthAverage, cameraLocation - CrossSectionRange / 2, heightAverage);
            } else {
                camera = new THREE.OrthographicCamera(right, left, top, bottom, near, far);
                camera.position.set(widthAverage, cameraLocation + CrossSectionRange / 2, heightAverage);
            }
            camera.lookAt(widthAverage, cameraLocation, heightAverage);
            camera.up.set(0, 0, 1);
            break;
        case "Z":
            if (cameraLocation < 0) {
                camera = new THREE.OrthographicCamera(right, left, top, bottom, near, far);
                camera.position.set(widthAverage, heightAverage, cameraLocation - CrossSectionRange / 2);
            } else {
                camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
                camera.position.set(widthAverage, heightAverage, cameraLocation + CrossSectionRange / 2);
            }
            camera.lookAt(widthAverage, 0, cameraLocation);
            camera.up.set(0, 1, 0);
            break;

        default:
            break;
    }
    raycaster.near = near;
    raycaster.far = far;


    //Controls
    controls = new THREE.OrbitControls(camera, threeContainer);
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.enableRotate = false;
    controls.addEventListener('change', render);


    var cameraTarget = new THREE.Vector3();
    camera.getWorldDirection(cameraTarget);

    var check = 5;
};
