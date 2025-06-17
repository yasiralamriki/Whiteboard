let zoomLevel = 100; // Default zoom level in percentage
let selectedTool = 'select'; // Default tool
const canvas = document.getElementById('main');

// Function to handle zoom
function zoom(multiplier) {
    const zoomLevelElement = document.getElementById('zoom-level');

    // Placeholder for zoom functionality
    console.log(`Zooming by a factor of ${multiplier}%`);

    zoomLevelElement.textContent = `${zoomLevel + multiplier}%`;
    zoomLevel = zoomLevel + multiplier;
}

// Mouse drag functionality
let isPanning = false;
let startX, startY;
let bgPosX = 0, bgPosY = 0;

canvas.addEventListener('mousedown', (e) => {
    if (selectedTool !== 'select') return;
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
    canvas.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!isPanning || selectedTool !== 'select') return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    canvas.style.backgroundPosition = `${bgPosX + dx}px ${bgPosY + dy}px`;
});

window.addEventListener('mouseup', (e) => {
    if (!isPanning || selectedTool !== 'select') return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    bgPosX += dx;
    bgPosY += dy;
    isPanning = false;
    canvas.style.cursor = '';
});

// Disable right click context menu
document.oncontextmenu = function () {
    return false;
}