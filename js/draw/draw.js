const canvas = document.getElementById('canvas'); // Canvas element
const ctx = canvas.getContext("2d"); // 2D rendering context for the canvas 

export function draw(cursorX, cursorY, tool) {
    if (tool && tool.isActive == true && tool.name == 'brush') {
        ctx.fillStyle = '#fafafa';
        ctx.beginPath();
        ctx.arc(cursorX, cursorY+32, 5, 0, (360 * Math.PI / 180), false);
        ctx.fill();
    }
}