// For Natasha to Edit

//GLTF Loader library
var GLTFLoader = require('three/examples/js/loaders/GLTFLoader');

//Model Rendering
new THREE.GLTFLoader(manager).load( 'assets/sapling_-01/scene.gltf', function ( gltf ) {
	var model = gltf.scene;
	model.traverse ( ( o ) => {
			 if ( o.isMesh ) {
				 var textures = ['Bark_Mat_baseColor','leaf_Mat_baseColor'];
         for (x of textures) {
					 string = 'assets/sapling_-01/textures/'
					 o.material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(string.concat(x,'.png'))});
         }
       }
	 });

	scene.add( model );

}, undefined, function ( error ) {

	console.error( error );

} );
