import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection

const canvas = document.getElementById('canvas'); // Canvas element

// Mouse drag functionality
let isPanning = false;
let startX, startY;
let bgPosX = 0, bgPosY = 0;

canvas.addEventListener('mousedown', (e) => {
    if (toolsManager.getSelectedTool() !== 'pan') return;
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
    canvas.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!isPanning || toolsManager.getSelectedTool() !== 'pan') return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    canvas.style.backgroundPosition = `${bgPosX + dx}px ${bgPosY + dy}px`;
    canvas.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', (e) => {
    if (!isPanning || toolsManager.getSelectedTool() !== 'pan') return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    bgPosX += dx;
    bgPosY += dy;
    isPanning = false;
    canvas.style.cursor = 'default';
});