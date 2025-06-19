import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection

const canvas = document.getElementById('canvas'); // Canvas element

// Eraser tool functionality
let isErasing = false;
let startX, startY;
let bgPosX = 0, bgPosY = 0;

canvas.addEventListener('mousedown', (e) => {
    if (toolsManager.getSelectedTool() !== 'eraser') return;
    isErasing = true;
    startX = e.clientX;
    startY = e.clientY;
});

window.addEventListener('mousemove', (e) => {
    if (!isErasing || toolsManager.getSelectedTool() !== 'eraser') return;
    /*const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    canvas.style.backgroundPosition = `${bgPosX + dx}px ${bgPosY + dy}px`;*/
});

window.addEventListener('mouseup', (e) => {
    if (!isErasing || toolsManager.getSelectedTool() !== 'eraser') return;
    /*const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    bgPosX += dx;
    bgPosY += dy;*/
    isErasing = false;
});