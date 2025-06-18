let zoomLevel = 100; // Default zoom level in percentage
const zoomLevelElement = document.getElementById('zoom-level'); // Element to display the current zoom level

// Function to handle zooming in and out
function zoom(multiplier) {
    if(zoomLevel + multiplier >= 50 && zoomLevel + multiplier <= 250) {
        // Update the zoom level element
        zoomLevelElement.textContent = `${zoomLevel + multiplier}%`;

        // Update the zoom level
        zoomLevel += multiplier;
        canvas.style.transform = `scale(${zoomLevel / 100})`;
        canvas.style.transformOrigin = '0 0'; // top-left corner
    }
}

function wheel(event) {
    event.preventDefault();

    /* Zoom in or out with mouse wheel data
    Result must be reversed otherwise it will zoom out when scrolling up.
    And divided by 10 to zoom in the same as the buttons */
    zoom(Math.ceil((-event.deltaY / 10) / 10) * 10)
}