// For Natasha to Edit

//dummy story array
stories = ['story 1', 'story 2', 'story 3']

//function for creating of story bubbles
var story_bubbles = [];
function create_sprite(hue, spritesize, lat, long, story) {
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

  //tooltip
  sprite.userData.tooltipText = stories[story];

  story_bubbles.push(sprite)
  return sprite;
}

//tooltip
var latestMouseProjection;
var hoveredObj;

var tooltipDisplayTimeout;

// This will move tooltip to the current mouse position and show it by timer.
function showTooltip() {
    var divElement = $("#tooltip");

    if (divElement && latestMouseProjection) {
        divElement.css({
            display: "block",
            opacity: 0.0
        });

        var canvasHalfWidth = renderer.domElement.offsetWidth / 2;
        var canvasHalfHeight = renderer.domElement.offsetHeight / 2;

        var tooltipPosition = latestMouseProjection.clone().project(camera);
        tooltipPosition.x = (tooltipPosition.x * canvasHalfWidth) + canvasHalfWidth + renderer.domElement.offsetLeft;
        tooltipPosition.y = -(tooltipPosition.y * canvasHalfHeight) + canvasHalfHeight + renderer.domElement.offsetTop;

        var tootipWidth = divElement[0].offsetWidth;
        var tootipHeight = divElement[0].offsetHeight;

        divElement.css({
            left: `${tooltipPosition.x - tootipWidth/2}px`,
            top: `${tooltipPosition.y - tootipHeight - 5}px`
        });

        // var position = new THREE.Vector3();
        // var quaternion = new THREE.Quaternion();
        // var scale = new THREE.Vector3();
        // hoveredObj.matrix.decompose(position, quaternion, scale);
        divElement.text(hoveredObj.userData.tooltipText);

        setTimeout(function() {
            divElement.css({
                opacity: 1.0
            });
        }, 25);
    }
}

// This will immediately hide tooltip.
function hideTooltip() {
    var divElement = $("#tooltip");
    if (divElement) {
        divElement.css({
            display: "none"
        });
    }
}

//function for creating story text
var story_texts = [];
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
  var story_bubble = create_sprite(0xffa700, 5, lat, long, i);

  scene.add(story_bubble);
}

//tooltipPosition
function handleManipulationUpdate() {
    raycaster.setFromCamera(mouse, camera); {
        var intersects = raycaster.intersectObjects(story_bubbles);
        if (intersects.length > 0) {
            latestMouseProjection = intersects[0].point;
            hoveredObj = intersects[0].object;
        }
    }

    if (tooltipDisplayTimeout || !latestMouseProjection) {
        clearTimeout(tooltipDisplayTimeout);
        tooltipDisplayTimeout = undefined;
        hideTooltip();
    }

    if (!tooltipDisplayTimeout && latestMouseProjection) {
        tooltipDisplayTimeout = setTimeout(function() {
            tooltipDisplayTimeout = undefined;
            showTooltip();
        }, 330);
    }
}

function onMouseMove(event) {
    updateMouseCoords(event, mouse);

    latestMouseProjection = undefined;
    hoveredObj = undefined;
    handleManipulationUpdate();
}

window.addEventListener( 'mousemove', onMouseMove, false );
