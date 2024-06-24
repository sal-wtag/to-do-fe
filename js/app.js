"use strict";

const toDoList = new ToDoList();

document.addEventListener("DOMContentLoaded", () => {
    const toDoAddButton = document.getElementById(TO_DO_ADD_BUTTON_ID);

    toDoAddButton.addEventListener("click", () => {
        const toDoForm = document.getElementById(TO_DO_FORM_ID);
        const toDo = new ToDo(toDoForm);

        toDoList.add(toDo);
        toDoList.render();
    });

    toDoList.render();
});
