var loader = new THREE.GLTFLoader();

loader.load( 'sapling_-01\scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
