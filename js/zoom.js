let zoomLevel = 100; // Default zoom level in percentage

// Function to handle zoom
function zoom(multiplier) {
    const zoomLevelElement = document.getElementById('zoom-level');

    // Placeholder for zoom functionality
    console.log(`Zooming by a factor of ${multiplier}%`);

    zoomLevelElement.textContent = `${zoomLevel + multiplier}%`;
    zoomLevel = zoomLevel + multiplier;
}