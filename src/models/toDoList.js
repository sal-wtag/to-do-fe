"use strict";

import ToDo from "./toDo.js";
import * as constants from "../constants.js";

const { VIEW_SECTION_ID } = constants;

export default class ToDoList {
  constructor() {
    this.toDos = [];
    this.form = null;
  }

  add = (toDo) => {
    this.toDos.push(toDo);
  };

  remove = (id) => {
    this.toDos = this.toDos.filter((toDo) => toDo.id != id);
  };

  search = (searchValue) => {
    const searchResults = this.toDos.filter((toDo) =>
      toDo.description.includes(searchValue)
    );

    return searchResults;
  };

  filterByDone = (done) => {
    const filtered = this.toDos.filter((toDo) => toDo.done === done);

    return filtered;
  };

  generateForm = () => {
    this.form = document.createElement("div");

    const description = document.createElement("input");

    description.type = "text";
    description.name = "description";
    description.placeholder = "Write here...";

    this.form.appendChild(description);

    const addButton = document.createElement("button");

    addButton.textContent = "Add";
    addButton.addEventListener("click", () => {
      const toDo = new ToDo(this.form);
      this.add(toDo);
      this.form = null;
      this.render();
    });

    this.form.appendChild(addButton);

    const cancelButton = document.createElement("button");

    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
      this.form = null;
      this.render();
    });

    this.form.appendChild(cancelButton);
  };

  render = (toDos = this.toDos) => {
    const viewSection = document.getElementById(VIEW_SECTION_ID);

    while (viewSection.firstChild) {
      viewSection.removeChild(viewSection.firstChild);
    }

    if (!toDos.length && !this.form) {
      this.#renderEmpty(viewSection);
    }

    if (this.form) {
      this.#renderForm(viewSection);
    }

    if (toDos.length) {
      this.#renderList(viewSection, toDos);
    }
  };

  #renderEmpty = (viewSection) => {
    const p = document.createElement("p");
    p.textContent = "No tasks to display.";

    viewSection.appendChild(p);
  };

  #renderList = (viewSection, toDos = this.toDos) => {
    const ul = document.createElement("ul");

    for (let toDo of toDos) {
      const li = toDo.toElement(this);

      ul.appendChild(li);
    }

    viewSection.appendChild(ul);
  };

  #renderForm = (viewSection) => {
    viewSection.appendChild(this.form);
  };
}
