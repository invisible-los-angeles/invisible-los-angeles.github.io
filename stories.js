// For Natasha to Edit

stories = [
'Toypurina was a renowned and wise Medicine woman of Tongva. As the oppression of Tongva by the Spanish mission worsened and tension continued to rise in 1785, Toypurina was approached by Nicolás José, a key figure in the 1785 rebellion, asking her to convince unbaptized indigenous villagers to join the revote. Toypurina agreed. With her connection, she recruited 6 of the 8 villages which participated in the rebellion. During the attack, Toypurina was captured and later found guilty of leading the attack.',

'A large part of Gabrielino material culture reflected elaborate artisanship. Even everyday items  are decorated with shell, rare minerals, carvings and painting. A lot of such items were made of steatite, including animal carvings, pipes, ritual objects, ornaments and cooking utensils. Steatite was obtained from the Indians of Santa Catalina Islands, where an industry of steatites was established. \n Baskets made with the stem of rushes, grass and squawbush were also widely used in Tongva culture. Flat baskets were used as plates, trays, and winnowers. They also serve the function of storage, serving, trinket-keeping as well as ceremonies. The baskets were hand-weaved by women, with their shape and twining method differ according to their purposes.',

'Tongva Indians regarded marriage as a diplomatic arrangement that strengthened trading and security needs. This contributed to making marriage an economic relationship, which underscored the importance of women in tribal society. \n Gabrielino villages were often located immediately adjacent to non-Gabrielino ones, and intermarriage was common . For example, at Corona, the Gabrielino village of Paxauxa lay directly across Ter Mescal Creek from a large Luiseno village, and intermarriage between the two was common. The people of the Gabrielino village of Tongva intermarried with the people of at least 13 other villages, including Yokuts, Chumash, and Serrano.'
];

//function for creating of story bubbles
var story_bubbles = [];
function create_sprite(hue, spritesize, lat, long, story) {
  var geometry = new THREE.SphereGeometry();
  var material = new THREE.MeshBasicMaterial( { color: hue } );
  var light = new THREE.Mesh ( geometry, material );

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
  sprite.position.set( lat, 5, long);


  //tooltip
  light.userData.tooltipText = stories[story];


  story_bubbles.push(light)
  return light;
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

//loop
for (var i=0; i<stories.length; i++) {
  //tree position: -50,0,0
  var radius = 20
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var lat = (plusOrMinus * (Math.floor((Math.random() * radius) + 1))) - 50;
  var long = plusOrMinus * (Math.floor((Math.random() * radius) + 1));
  // var story_bubble = create_sprite(0xffa700, 5, lat, long, i);
  var story_bubble = create_sprite(0xffffff, 5, lat, long, i);

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
