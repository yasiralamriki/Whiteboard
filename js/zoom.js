let zoomLevel = 100; // Default zoom level in percentage
const canvas = document.getElementById('canvas'); // Canvas element
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

window.zoom = zoom; // Expose the zoom function globally
zoom(0); // Initialize zoom level to 100%