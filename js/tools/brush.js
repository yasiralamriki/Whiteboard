import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection

const canvas = document.getElementById('canvas'); // Canvas element
const ctx = canvas.getContext("2d"); // 2D rendering context for the canvas

// Brush tool functionality
let isDrawing = false;
let cursorX, cursorY;

canvas.addEventListener('mousedown', (e) => {
    if (toolsManager.getSelectedTool() !== 'brush') return;
    isDrawing = true;
});

window.addEventListener('mousemove', (e) => {
    if (!isDrawing || toolsManager.getSelectedTool() !== 'brush') return;
    cursorX = e.clientX;
    cursorY = e.clientY;
});

window.addEventListener('mouseup', (e) => {
    if (!isDrawing || toolsManager.getSelectedTool() !== 'brush') return;
    isDrawing = false;
});

function draw() {
    if (isDrawing) {
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.beginPath();
        ctx.arc(cursorX, cursorY+32, 5, 0, (360 * Math.PI / 180), false);
        ctx.fill();
    }

    requestAnimationFrame(draw);
}

draw();