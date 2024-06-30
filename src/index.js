"use strict";

import * as constants from "./constants.js";
import ToDoList from "./models/toDoList.js";

const {
    TO_DO_SEARCH_BUTTON_ID,
    TO_DO_SEARCH_INPUT_ID,
    TO_DO_NO_FILTER_BUTTON_ID,
    TO_DO_DONE_FILTER_BUTTON_ID,
    TO_DO_NOT_DONE_FILTER_BUTTON_ID,
    TO_DO_CREATE_BUTTON_ID,
} = constants;

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

    const toDoNoFilterButton = document.getElementById(TO_DO_NO_FILTER_BUTTON_ID);

    toDoNoFilterButton.addEventListener("click", () => {
        toDoList.render();
    });

    const toDoDoneFilterButton = document.getElementById(TO_DO_DONE_FILTER_BUTTON_ID);

    toDoDoneFilterButton.addEventListener("click", () => {
        const filtered = toDoList.filterByDone(true);

        toDoList.render(filtered);
    });

    const toDoNotDoneFilterButton = document.getElementById(TO_DO_NOT_DONE_FILTER_BUTTON_ID);

    toDoNotDoneFilterButton.addEventListener("click", () => {
        const filtered = toDoList.filterByDone(false);

        toDoList.render(filtered);
    });

    const toDoCreateButton = document.getElementById(TO_DO_CREATE_BUTTON_ID);

    toDoCreateButton.addEventListener("click", () => {
        toDoList.generateForm();
        toDoList.render();
    });

    toDoList.render();
});
