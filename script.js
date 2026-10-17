// Select HTML elements
const nameInput = document.getElementById("nameInput");
const updateButton = document.getElementById("updateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

// Update the message
function updateMessage() {
    const name = nameInput.value.trim();

    // Validate user input
    if (name === "") {
        feedback.textContent = "Please enter your name.";
        nameInput.focus();
        return;
    }

    // Update webpage content dynamically
    output.textContent = `Hello, ${name}! Welcome to Smart Text Studio.`;

    // Clear the validation message
    feedback.textContent = "";
}

// Update when the button is clicked
updateButton.addEventListener("click", updateMessage);

// Also allow the Enter key to submit the name
nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        updateMessage();
    }
});

// Clear the input and restore the original message
resetButton.addEventListener("click", function () {
    nameInput.value = "";
    output.textContent = "Hello! Welcome to Smart Text Studio.";
    feedback.textContent = "";
    nameInput.focus();
});

// Clear validation feedback while typing
nameInput.addEventListener("input", function () {
    feedback.textContent = "";
});