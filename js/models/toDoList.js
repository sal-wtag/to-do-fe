"use strict";

class ToDoList {
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

  render = () => {
    const viewSection = document.getElementById(VIEW_SECTION_ID);

    while (viewSection.firstChild) {
      viewSection.removeChild(viewSection.firstChild);
    }

    if (!this.toDos.length && !this.form) {
      this.#renderEmpty(viewSection);
    }

    if (this.form) {
      this.#renderForm(viewSection);
    }

    if (this.toDos.length) {
      this.#renderList(viewSection);
    }
  };

  #renderEmpty = (viewSection) => {
    const p = document.createElement("p");
    p.textContent = "No tasks to display.";

    viewSection.appendChild(p);
  };

  #renderList = (viewSection) => {
    const ul = document.createElement("ul");

    for (let toDo of this.toDos) {
      const li = toDo.toElement(this);

      ul.appendChild(li);
    }

    viewSection.appendChild(ul);
  };

  #renderForm = (viewSection) => {
    viewSection.appendChild(this.form);
  };
}
