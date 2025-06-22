/*
    * File: toolsManager.js
    * Description: This module manages the selection and state of drawing tools in a canvas application.
    * Last edited: 1446/12/26
    * Author: Yasir Al Amriki
*/

let selectedTool = 'pan'; // Default tool
const canvas = document.getElementById('canvas'); // Canvas element

// Tool class
export class Tool {
    constructor(name, isActive = false) {
        this.name = name;
        this.isActive = isActive;
    }
}

// Get selected tool
export function getSelectedTool() {
    return selectedTool;
}

// Set selected tool
export function setSelectedTool(tool) {
    selectedTool = tool;
    // Make the cursor change to the selected tool except for pan
    if (tool == 'pan') {
        canvas.style.cursor = 'default';
    }
    else if (tool == 'brush') {
        canvas.style.cursor = "url('../../resources/cursors/brush.svg'), auto";
    } else if (tool == 'eraser') {
        canvas.style.cursor = "url('../../resources/cursors/eraser.svg'), auto";
    }
}