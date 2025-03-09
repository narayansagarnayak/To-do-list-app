const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

//adding task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    //new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    //event listener for delete
    deleteBtn.addEventListener("click", function(){
        taskList.removeChild(li);
    });

    //add both element to the list 
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    //Clear the Input Field
    taskInput.value = "";
}

//add task when the button is clicked
addTaskBtn.addEventListener("click", addTask);

//add task when enter key is pressed
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});