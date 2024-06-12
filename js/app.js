"use strict";

const resetToDoList = () => {
    const toDoList = document.getElementById("toDoList");

    if (toDoList.childElementCount == 1) {
        const emptyPlaceholder = document.createElement("p");
        emptyPlaceholder.textContent = "No tasks to show.";
        emptyPlaceholder.id = "emptyPlaceholder";
        toDoList.appendChild(emptyPlaceholder);
    }
}

const addToDo = () => {
    const toDo = document.getElementById("toDoDescription");
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

    const prevToDo = toDos.lastElementChild;
    const newId = prevToDo ? prevToDo.id + 1 : 1;

    const newToDo = document.createElement("li");
    newToDo.textContent = toDo.value;
    newToDo.id = newId;
    toDos.appendChild(newToDo);
}

resetToDoList();
