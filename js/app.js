"use strict";

const resetToDoList = () => {
    const toDoList = document.getElementById("toDoList");

    if (toDoList.childElementCount == 0) {
        const emptyPlaceholder = document.createElement("p");
        emptyPlaceholder.textContent = "No tasks to show.";
        emptyPlaceholder.id = "emptyPlaceholder";
        toDoList.appendChild(emptyPlaceholder);
    }
}

const addToDo = () => {
    const taskDescription = document.getElementById("taskDescription");
    const toDoList = document.getElementById("toDoList");
    const emptyPlaceholder = document.getElementById("emptyPlaceholder");
    let toDos;

    if (emptyPlaceholder) {
        toDoList.removeChild(emptyPlaceholder);
        toDos = document.createElement("ul");
        toDos.id = "toDos";
        toDoList.appendChild(toDos);
    } else {
        toDos = document.getElementById("toDos");
    }

    const newId = `task${Date.now()}`;
    const newToDo = document.createElement("li");
    newToDo.textContent = taskDescription.value;
    newToDo.id = newId;
    toDos.appendChild(newToDo);
}

resetToDoList();
