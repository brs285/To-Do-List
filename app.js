console.log("app.js loaded");

// stop refresh + read input value
const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");

function handleFormSubmit(event) {
    event.preventDefault(); // stop page refresh

    const taskText = input.value;
    console.log("Submitted task: ", taskText);

    input.value = ""; // clear input after submit
}

form.addEventListener("submit", handleFormSubmit);