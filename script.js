// get elements from DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// an array to store tasks
// array to store entered text when button is pressed
let tasks = [];

// add event listener to button
addTaskButton.addEventListener('click', () => {
    // get value from input field and trim any extra whitespace
    // .value = "current value" .trim = "remove whitespace/ spaces"
    // tastName = tastInput
    const taskName = taskInput.value.trim();

    // only add the task if input is not empty
    // .length "if their's text" (checks if the input is not empty/ length greater than 0)
    if (taskName.length) {
        // entered value added tasks array
        tasks.push(taskName);
        // then clear the input field
        taskInput.value = '';
        // update the UI
        // so user can see the entered value in the list
        updateUI();
    }
});


function updateUI() {
    // clear all existing tastList values (previous entries)
    // preventing duplicated entries
    taskList.innerHTML = "";

    // create a new list item for each task
    // .foreach = loop: "do things for each array"
    // defining a callback function with two parameters: taskName and index
    tasks.forEach((taskName, index) => {
        // makes a new line for each task in the list/ listItem/ list entry
        const listItem = document.createElement('li');
        // puts the task name on the new line in the list
        listItem.textContent = taskName;

        // add a delete button for this task
        // creates a new button
        const deleteButton = document.createElement('button');
        // gives the button the label 'Delete'
        deleteButton.textContent = 'Delete';
        // sets up a function when clicked
        deleteButton.addEventListener('click', () => {
            // removes the task from the tasks list using its index
            tasks.splice(index, 1);
            // updates the list displayed on the webpage
            updateUI();
        });

        // add task and delete button to list item
        listItem.appendChild(deleteButton);

        // add this list item to the list
        taskList.appendChild(listItem);
    });
}
















