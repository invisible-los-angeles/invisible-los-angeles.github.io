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
