// var THREE = window.THREE = require('three');
// require('three/examples/js/loaders/GLTFLoader');
//
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
var THREE = require('three');

var scene = new THREE.Scene();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate();
