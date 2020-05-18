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
window.requestAnimationFrame(render);
