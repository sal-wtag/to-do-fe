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

const deleteToDo = (id) => {
    const toDos = document.getElementById("to-dos");
    const toDo = document.getElementById(id);

    toDos.removeChild(toDo);

    if (toDos.childElementCount == 0) {
        const toDoList = document.getElementById("to-do-list");
        toDoList.removeChild(toDos);
        resetToDoList();
    }
}

const createToDos = () => {
    const toDos = document.createElement("ul");
    toDos.id = "to-dos";

    return toDos;
}

const createToDo = (id, description) => {
    const newToDo = document.createElement("li");
    newToDo.textContent = description;
    newToDo.id = id;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        deleteToDo(id);
    });
    newToDo.appendChild(deleteButton);

    return newToDo;
}

const addToDo = () => {
    const toDo = document.getElementById("to-do-description");
    const toDoList = document.getElementById("to-do-list");
    const emptyPlaceholder = document.getElementById("empty-placeholder");
    let toDos;

    if (emptyPlaceholder) {
        toDoList.removeChild(emptyPlaceholder);
        toDos = createToDos();
        toDoList.appendChild(toDos);
    } else {
        toDos = document.getElementById("to-dos");
    }

    const prevToDo = toDos.lastElementChild;
    const newId = prevToDo ? prevToDo.id + 1 : 1;

    const newToDo = createToDo(newId, toDo.value);
    toDos.appendChild(newToDo);
}

resetToDoList();
