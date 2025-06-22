import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection

const canvas = document.getElementById('canvas'); // Canvas element

// Eraser tool class
const eraserTool = new toolsManager.Tool('eraser', false);

// Eraser tool functionality
let cursorX, cursorY;

['mousedown', 'touchdown'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (toolsManager.getSelectedTool !== 'eraser') return;
        // Placeholder
    });
});

['mousemove', 'touchmove'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (!eraserTool.isActive || toolsManager.getSelectedTool !== 'eraser') return;
        // Placeholder
    });
});

['mouseup', 'touchup'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (!eraserTool.isActive || toolsManager.getSelectedTool !== 'eraser') return;
        // Placeholder
    });
});