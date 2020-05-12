// For Natasha to Edit

//GLTF Loader library
var GLTFLoader = require('three/examples/js/loaders/GLTFLoader');

//Preloader
var manager = new THREE.LoadingManager();
manager.onStart = function() {
	manager.onLoad = function () {

		$('.start-button').fadeIn('slow');

	};
};

//3D Model and Texture loaders
loader = new THREE.GLTFLoader(manager);
const textureLoader = new THREE.TextureLoader();

//Model Rendering
loader.load( 'assets/sapling_-01/scene.gltf', function ( gltf ) {
	var model = gltf.scene;
	model.traverse ( ( o ) => {
			 if ( o.isMesh ) {
				 var textures = ['Bark_Mat_baseColor', 'Bark_Mat_normal', 'leaf_Mat_baseColor','leaf_Mat_normal'];
         for (x of textures) {
					 string = 'assets/sapling_-01/textures/'
					 o.material = new THREE.MeshBasicMaterial({map: textureLoader.load(string.concat(x,'.png'))});
         }
       }
	 });

	scene.add( model );

}, undefined, function ( error ) {

	console.error( error );

} );
