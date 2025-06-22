/*
    * File: brush.js
    * Description: This file implements the brush tool for drawing on a canvas.
    * Last edited: 1446/12/26
    * Author: Yasir Al Amriki
*/

import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection
import { draw } from '../draw/draw.js'; // Importing draw functionality
import { getPanOffset } from './pan.js'; // Importing pan offset functionality
import { getZoomLevel } from '../zoom.js'; // Importing zoom level functionality

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
        const rect = canvas.getBoundingClientRect();
        const zoom = getZoomLevel() / 100;
        cursorX = (e.clientX - rect.left) / zoom;
        cursorY = (e.clientY - rect.top) / zoom;
    });
});

['mouseup', 'touchup'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (!brushTool.isActive || toolsManager.getSelectedTool() !== 'brush') return;
        brushTool.isActive = false;
    });
});

function animationLoop() {
    const panOffset = getPanOffset(); // Get the current pan offset
    // Get cursorX, cursorY, and tool from your app's state
    draw(cursorX, cursorY, brushTool, panOffset);
    requestAnimationFrame(animationLoop);
}
animationLoop();