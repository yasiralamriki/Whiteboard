// Placeholder for UI-related JavaScript code
const toolsContainer = document.getElementById("tools-container");
const buttons = toolsContainer.querySelectorAll("button");

// Function to handle button clicks
function onButtonClick(event, button) {
    // Make the button fill
    button.classList.add("fill");

    // Remove fill from all other buttons
    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove("fill");
        }
    });

    // Make the tool selected according to the button
    console.log('Placeholder')
}

// Add event listeners to all buttons in the tools container
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => onButtonClick(event, buttons[i]));
}