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

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//mouse hover effect
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

//render
function render() {  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( story_bubbles );

  for ( var i = 0; i < intersects.length; i++ ) {

    intersects[ i ].object.material.color.set( 0xffffff );


  }
  renderer.render( scene, camera );
}

//Animate
function animate() {
	requestAnimationFrame( animate );
  render();
	controls.update();
}

animate();
window.addEventListener( 'mousemove', onMouseMove, false );
window.requestAnimationFrame(render);
