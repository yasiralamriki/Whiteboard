/*
    * File: pan.js
    * Description: This file implements the pan tool for moving the canvas background.
    * Last edited: 1446/12/26
    * Author: Yasir Al Amriki
*/

import * as toolsManager from './toolsManager.js'; // Importing tools manager to handle tool selection

const canvas = document.getElementById('canvas'); // Canvas element

// Pan tool class
const panTool = new toolsManager.Tool('pan', false);

// Mouse drag functionality
let startX, startY;
let bgPosX = 0, bgPosY = 0;

['mousedown', 'touchdown'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (toolsManager.getSelectedTool() !== 'pan') return;
        panTool.isActive = true;
        startX = e.clientX;
        startY = e.clientY;
        canvas.style.cursor = 'grabbing';
    });
});

['mousemove', 'touchmove'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (!panTool.isActive || toolsManager.getSelectedTool() !== 'pan') return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        canvas.style.backgroundPosition = `${bgPosX + dx}px ${bgPosY + dy}px`;
        canvas.style.cursor = 'grabbing';
    });
});

['mouseup', 'touchup'].forEach(eventName => {
    canvas.addEventListener(eventName, (e) => {
        if (!panTool.isActive || toolsManager.getSelectedTool() !== 'pan') return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        bgPosX += dx;
        bgPosY += dy;
        panTool.isActive = false;
        canvas.style.cursor = 'default';
    });
});

// Export pan offset for other modules
export function getPanOffset() {
    return { x: bgPosX, y: bgPosY };
}