//Required Libraries
var THREE = require('three');
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

//Accounting for resizing of windows
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//Preloader
function preloaderFadeOutInit(){
$('.preloader').fadeOut('slow');
$('body').attr('id','');
}

window.onLoad = function() {
  $('.start-button').hide();
};

//Start button function
$('.start-button').click(function () {
(function ($) {
preloaderFadeOutInit();
})(jQuery);
});

const manager = new THREE.LoadingManager();

manager.onLoad = function () {
		$('.loading-div').fadeOut('slow', function () {
					$('.start-button').fadeIn('slow');
		});
};

manager.onProgress = function (itemsLoaded, itemsTotal ) {
		var percent = (itemsLoaded/itemsTotal * 100).toString();
		$('.loading').html(percent);
};

//Animate
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	controls.update();


}
animate();
