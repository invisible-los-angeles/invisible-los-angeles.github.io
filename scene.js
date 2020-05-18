//Required Libraries
var THREE = require('three');

//Scene
var scene = new THREE.Scene();

//Camera Perspective
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.set( 0, 5, 50 );
camera.layers.enable( 0 ); // enabled by default

//Ground
var groundgeometry = new THREE.PlaneBufferGeometry( 100, 100 );
var groundmat = new THREE.MeshPhongMaterial ( { color: 0x000000} );
var ground = new THREE.Mesh( groundgeometry, groundmat );
ground.position.y = 0;
ground.receiveshadow = true;
ground.rotation.x = - Math.PI / 2.0;
scene.add( ground );

//Light
var ambientlight = new THREE.AmbientLight(0xcccccc,0.9);
scene.add(ambientlight);
var pointlight = new THREE.PointLight( 0xffffff, 0.8);
camera.add(pointlight);

//Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Orbitcontroller
var OrbitControls = require('three-orbitcontrols');
var controls = new OrbitControls( camera, renderer.domElement );
controls.maxPolarAngle = 0.9 * Math.PI / 2;
controls.update();

//Accounting for resizing of windows
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//requestAnimationFrame/
function animate() {
	requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );
}

//mouse hover effect
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function updateMouseCoords(event, coordsObj) {
    coordsObj.x = ((event.clientX - renderer.domElement.offsetLeft + 0.5) / window.innerWidth) * 2 - 1;
    coordsObj.y = -((event.clientY - renderer.domElement.offsetTop + 0.5) / window.innerHeight) * 2 + 1;
}
