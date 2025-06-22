import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection
import { draw } from '../draw/draw.js'; // Importing draw functionality

const canvas = document.getElementById('canvas'); // Canvas element
const ctx = canvas.getContext("2d"); // 2D rendering context for the canvas

// Brush tool class
const brushTool = new toolsManager.Tool('brush', false);

// Brush tool functionality
let cursorX, cursorY;

['mousedown', 'touchdown'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (toolsManager.getSelectedTool() !== 'brush') return;
        brushTool.isActive = true;
    });
});

['mousemove', 'touchmove'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (!brushTool.isActive || toolsManager.getSelectedTool() !== 'brush') return;
        cursorX = e.clientX;
        cursorY = e.clientY;
    });
});

['mouseup', 'touchup'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (!brushTool.isActive || toolsManager.getSelectedTool() !== 'brush') return;
        brushTool.isActive = false;
    });
});

function animationLoop() {
    // Get cursorX, cursorY, and tool from your app's state
    draw(cursorX, cursorY, brushTool);
    requestAnimationFrame(animationLoop);
}
animationLoop();