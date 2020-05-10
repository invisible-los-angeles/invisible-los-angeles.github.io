//Require js libraries
var THREE = require('three');
var GLTFLoader = require('three/examples/js/loaders/GLTFLoader');
var OrbitControls = require('three-orbitcontrols');

//Scene
var scene = new THREE.Scene();

//Camera Perspective
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.set( 0, 5, 50 );

//Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Orbitcontroller
var controls = new OrbitControls( camera, renderer.domElement );
controls.maxPolarAngle = 0.9 * Math.PI / 2;
controls.update();

//Ground
var groundgeometry = new THREE.PlaneBufferGeometry( 100, 100 );
var groundmat = new THREE.MeshPhongMaterial ( { color: 0xffffff} );
var ground = new THREE.Mesh( groundgeometry, groundmat );
ground.position.y = 0;
ground.receiveshadow = true;
ground.rotation.x = - Math.PI / 2.0;
scene.add( ground );

//Animate
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	controls.update();

}
animate();
