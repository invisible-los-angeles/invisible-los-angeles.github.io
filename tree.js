// For Natasha to Edit

//Preloader
function preloaderFadeOutInit(){
$('.preloader').fadeOut('slow');
$('body').attr('id','');
}

window.onLoad = function() {
  $('.start-button').hide();
};

$('.start-button').click(function () {
(function ($) {
preloaderFadeOutInit();
})(jQuery);
});

//Loading Manager
var manager = new THREE.LoadingManager();

manager.onLoad = function () {
		$('.loading-div').fadeOut('slow', function () {
			$('.start-button').fadeIn('slow');
		});
};

// Render model
var onProgress = function (xhr) {
	if (xhr.lengthComputable) {
		var percent = xhr.loaded/xhr.total*100;
		$('.loading').html(Math.round(percent,2));
	}
};

var onError = function () {};

// GLTF Loader library
var GLTFLoader = require('three/examples/js/loaders/GLTFLoader');

// Model Rendering
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
  model.position.set(-50,0,0);
  model.castShadow = true;
  model.receiveShadow = true;
	scene.add( model );

}, onProgress, onError);
