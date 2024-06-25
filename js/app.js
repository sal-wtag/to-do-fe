"use strict";

const toDoList = new ToDoList();

document.addEventListener("DOMContentLoaded", () => {
    const toDoSearchButton = document.getElementById(TO_DO_SEARCH_BUTTON_ID);

    toDoSearchButton.addEventListener("click", () => {
        const searchInput = document.getElementById(TO_DO_SEARCH_INPUT_ID);
        const searchValue = searchInput.value;
        console.log(searchValue);
        const searchResults = toDoList.search(searchValue);

        toDoList.render(searchResults);
    });

    const toDoCreateButton = document.getElementById(TO_DO_CREATE_BUTTON_ID);

    toDoCreateButton.addEventListener("click", () => {
        toDoList.generateForm();
        toDoList.render();
    });

    toDoList.render();
});
