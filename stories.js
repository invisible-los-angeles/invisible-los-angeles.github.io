// For Natasha to Edit

//dummy story array
stories = ['story 1', 'story 2', 'story 3']

function create_sphere(hue, spritesize, lat, long) {
  //sphere
  var geometry = new THREE.SphereBufferGeometry();
  var material = new THREE.MeshBasicMaterial( { color: hue } );
  var sphere = new THREE.Mesh( geometry, material);

  // // glow
  var spriteMap = new THREE.TextureLoader().load( "assets/glow.png" );
  var spriteMaterial = new THREE.SpriteMaterial(
  {
    map: spriteMap,
    color: hue,
    opacity: 0.3,
    blending: THREE.AdditiveBlending
  });
  var sprite = new THREE.Sprite( spriteMaterial );
  sprite.scale.set(spritesize, spritesize, spritesize);

  sphere.add(sprite);

  sphere.position.set( lat, 1, long);
  scene.add(sphere);
};

//loop
for (var i=0; i<stories.length; i++) {
  //tree position: -50,0,0
  var radius = 20
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var lat = (plusOrMinus * (Math.floor((Math.random() * radius) + 1))) - 50;
  var long = plusOrMinus * (Math.floor((Math.random() * radius) + 1));
  create_sphere(0xffa700, 20, lat, long);
}
