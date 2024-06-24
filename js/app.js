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
    const taskDescription = document.getElementById("taskDescription");
    const toDoList = document.getElementById("toDoList");
    const emptyPlaceholder = document.getElementById("emptyPlaceholder");
    let toDos;

    if (emptyPlaceholder) {
        toDoList.removeChild(emptyPlaceholder);
        toDos = createToDos();
        toDoList.appendChild(toDos);
    } else {
        toDos = document.getElementById("toDos");
    }

    const newId = `task${Date.now()}`;
    const newToDo = createToDo(newId, taskDescription.value);
    toDos.appendChild(newToDo);
}

resetToDoList();
