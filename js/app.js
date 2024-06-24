"use strict";

const toDoList = new ToDoList();

document.addEventListener("DOMContentLoaded", () => {
    const toDoCreateButton = document.getElementById(TO_DO_CREATE_BUTTON_ID);

    toDoCreateButton.addEventListener("click", () => {
        toDoList.generateForm();
        toDoList.render();
    });

    toDoList.render();
});
