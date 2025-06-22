/*
    * File: draw.js
    * Description: This module handles the drawing of a brush cursor on a canvas.
    * Last edited: 1446/12/26
    * Author: Yasir Al Amriki
*/

import { getZoomLevel } from "../zoom.js";

const canvas = document.getElementById('canvas'); // Canvas element
const ctx = canvas.getContext("2d"); // 2D rendering context for the canvas 

export function draw(cursorX, cursorY, tool, panOffset = { x: 0, y: 0 }) {
    if (tool && tool.isActive == true && tool.name == 'brush') {
        const zoom = getZoomLevel() / 100; // Get the current zoom level
        const offsetY = 32 / zoom; // Adjust the offset based on zoom level
        ctx.fillStyle = '#fafafa';
        ctx.beginPath();
        ctx.arc(
            cursorX + panOffset.x, // X coordinate of the center of the circle
            cursorY + offsetY + panOffset.y, // Y coordinate of the center of the circle
            5, // Radius of the circle
            0, // Starting angle in radians
            2 * Math.PI); // Ending angle in radians (360 degrees)
        ctx.fill();
    }
}