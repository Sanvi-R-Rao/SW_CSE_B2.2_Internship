function addTask() {

    // Get the input element

    let input =
        document.getElementById("taskInput");


    // Get the task entered by the user

    let task =
        input.value;


    // Check if input is empty

    if (task === "") {

        alert("Please enter a task!");

        return;
    }


    // Create a new list item

    let li =
        document.createElement("li");


    // Add the task text

    li.innerText = task;


    // Create delete button

    let deleteButton =
        document.createElement("button");


    deleteButton.innerText = "Delete";


    // Delete the task when button is clicked

    deleteButton.onclick = function() {

        li.remove();

    };


    // Add delete button to the task

    li.appendChild(deleteButton);


    // Add task to the list

    document
        .getElementById("taskList")
        .appendChild(li);


    // Clear input box

    input.value = "";

}