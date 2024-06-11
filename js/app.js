"use strict";

const resetToDoList = () => {
    const toDoList = document.getElementById("to-do-list");

    if (toDoList.childElementCount == 1) {
        const paragraph = document.createElement("p");
        paragraph.textContent = "No tasks to show.";
        toDoList.appendChild(paragraph);
    }
}

resetToDoList();
