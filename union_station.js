// For John to Edit

//OBJ Loader library
var OBJLoader = require('three/examples/js/loaders/OBJLoader');
var MTLLoader = require('three/examples/js/loaders/MTLLoader');

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( 'assets/' );
var url = "UNION+STATION.mtl";
mtlLoader.load( url, function( materials ) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials( materials );
    objLoader.setPath( 'assets/' );
    objLoader.load( 'UNION+STATION.obj', function ( object ) {

        object.position.set(200,0,0);
        object.castShadow = true;
        object.receiveShadow = true;
        object.scale.set(0.05,0.05,0.05);
        scene.add( object );

    }, onProgress, onError );

});
