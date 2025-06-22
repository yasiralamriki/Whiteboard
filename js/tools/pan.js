import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection

const canvas = document.getElementById('canvas'); // Canvas element

// Pan tool class
const panTool = new toolsManager.Tool('pan', false);

// Mouse drag functionality
let startX, startY;
let bgPosX = 0, bgPosY = 0;

canvas.addEventListener('mousedown', (e) => {
    if (toolsManager.getSelectedTool() !== 'pan') return;
    panTool.isActive = true;
    startX = e.clientX;
    startY = e.clientY;
    canvas.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!panTool.isActive || toolsManager.getSelectedTool() !== 'pan') return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    canvas.style.backgroundPosition = `${bgPosX + dx}px ${bgPosY + dy}px`;
    canvas.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', (e) => {
    if (!panTool.isActive || toolsManager.getSelectedTool() !== 'pan') return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    bgPosX += dx;
    bgPosY += dy;
    panTool.isActive = false;
    canvas.style.cursor = 'default';
});