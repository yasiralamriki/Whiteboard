import * as toolsManager from './tools/toolsManager.js'; // Importing tools manager to handle tool selection
import './zoom.js' // Importing zoom functionality
import './tools/pan.js' // Importing pan tool functionality
import './tools/brush.js' // Importing brush tool functionality
import './tools/eraser.js' // Importing eraser tool functionality
import './draw/draw.js' // Importing draw functionality

const toolsContainer = document.getElementById("tools-container"); // Get the tools container element
const buttons = toolsContainer.querySelectorAll("button"); // Get all buttons within the tools container

// Function to handle button clicks
function onButtonClick(event, button) {
    // Make the button fill
    button.classList.add('fill');

    // Remove fill from all other buttons
    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove("fill");
        }
    });

    // Make the tool selected according to the button
    if (button.textContent === 'pan_tool') {
        toolsManager.setSelectedTool('pan');
    } else if (button.textContent === 'brush') {
        toolsManager.setSelectedTool('brush');
    } else if (button.textContent === 'ink_eraser') {
        toolsManager.setSelectedTool('eraser');
    }
}

// Add event listeners to all buttons in the tools container
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => onButtonClick(event, buttons[i]));
}