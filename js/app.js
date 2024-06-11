"use strict";

const resetToDoList = () => {
    const toDoList = document.getElementById("to-do-list");

    if (toDoList.childElementCount == 1) {
        const emptyPlaceholder = document.createElement("p");
        emptyPlaceholder.textContent = "No tasks to show.";
        emptyPlaceholder.id = "empty-placeholder";
        toDoList.appendChild(emptyPlaceholder);
    }
}

const addToDo = () => {
    const toDo = document.getElementById("to-do-description");
    const toDoList = document.getElementById("to-do-list");
    const emptyPlaceholder = document.getElementById("empty-placeholder");
    let toDos;

    if (emptyPlaceholder) {
        toDoList.removeChild(emptyPlaceholder);
        toDos = document.createElement("ul");
        toDos.id = "to-dos";
        toDoList.appendChild(toDos);
    } else {
        toDos = document.getElementById("to-dos");
    }

    const prevToDo = toDos.lastElementChild;
    const newId = prevToDo ? prevToDo.id + 1 : 1;

    const newToDo = document.createElement("li");
    newToDo.textContent = toDo.value;
    newToDo.id = newId;
    toDos.appendChild(newToDo);
}

resetToDoList();
