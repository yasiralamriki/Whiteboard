let selectedTool = 'select'; // Default tool
const canvas = document.getElementById('main'); // Canvas element

// Mouse drag functionality
let isPanning = false;
let startX, startY;
let bgPosX = 0, bgPosY = 0;

canvas.addEventListener('mousedown', (e) => {
    if (selectedTool !== 'select' || document.elementFromPoint(e.clientX, e.clientY) !== canvas) return;
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
    canvas.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!isPanning || selectedTool !== 'select') return;
    if (document.elementFromPoint(e.clientX, e.clientY) == canvas) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        canvas.style.backgroundPosition = `${bgPosX + dx}px ${bgPosY + dy}px`;
    } else {
        canvas.style.cursor = 'default';
    }
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