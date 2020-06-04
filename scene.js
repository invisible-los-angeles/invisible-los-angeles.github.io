//Required Libraries
var THREE = require('three');

//Scene
var scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader()
	.setPath( 'assets/cubemap/' )
	.load( [
		'px.png',
		'nx.png',
		'py.png',
		'ny.png',
		'pz.png',
		'nz.png'
	] );

//Camera Perspective
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 10, 50);

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

//mouse hover effect
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function updateMouseCoords(event, coordsObj) {
    coordsObj.x = ((event.clientX - renderer.domElement.offsetLeft + 0.5) / window.innerWidth) * 2 - 1;
    coordsObj.y = -((event.clientY - renderer.domElement.offsetTop + 0.5) / window.innerHeight) * 2 + 1;
}

//requestAnimationFrame
function animate() {
	requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );
}
