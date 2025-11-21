"use strict";
let taskInput = document.getElementById("taskInput");
let taskAdd = document.getElementById("taskAdd");
let taskRemove = document.getElementById("taskRemove");
let taskList = document.getElementById("taskList");



// Event listener to add new tasks
taskAdd.addEventListener("click", function() {
  let newTask = taskInput.value.trim();
  if (newTask !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = newTask;
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});

// Event listener to remove tasks on click
taskRemove.addEventListener("click", function() {
  taskList.lastChild?.remove();
});