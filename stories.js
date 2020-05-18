// For Natasha to Edit

//dummy story array
stories = ['story 1', 'story 2', 'story 3']

var story_bubbles = [];
//function for creating of story bubbles
function create_sprite(hue, spritesize, lat, long) {
  var spriteMap = new THREE.TextureLoader().load( "assets/glow.png" );
  var spriteMaterial = new THREE.SpriteMaterial(
  {
    map: spriteMap,
    color: hue,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  var sprite = new THREE.Sprite( spriteMaterial );
  sprite.scale.set(spritesize, spritesize, spritesize);

  sprite.position.set( lat, 2, long);

  story_bubbles.push(sprite)
  return sprite;
}

var story_texts = [];
//function for creating story text
function makeTextSprite( message, lat, long, parameters )
{
    if ( parameters === undefined ) parameters = {};
    var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
    var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 25;
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
    var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:95, g:158, b:160, a:0.7 };
    var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:255, g:255, b:255, a:1.0 };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = "Bold " + fontsize + "px " + fontface;
    var metrics = context.measureText( message );
    var textWidth = metrics.width;

    context.rect(0, 0, 150, 100);
    context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
    context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
    context.fill();

    context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
    context.fillText( message, borderThickness, fontsize + borderThickness);


    var texture = new THREE.Texture(canvas)
    texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial( { map: texture } );
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
    sprite.position.set( lat, 10, long);

    story_texts.push(sprite)
    return sprite;
}

//loop
for (var i=0; i<stories.length; i++) {
  //tree position: -50,0,0
  var radius = 20
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var lat = (plusOrMinus * (Math.floor((Math.random() * radius) + 1))) - 50;
  var long = plusOrMinus * (Math.floor((Math.random() * radius) + 1));

  var story_text = makeTextSprite(stories[i], lat, long);
  var story_bubble = create_sprite(0xffa700, 5, lat, long);

  scene.add(story_bubble);
  scene.add(story_text);
}
