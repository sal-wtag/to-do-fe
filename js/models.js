"use strict";

class ToDo {
  constructor(form) {
    this.id = Date.now();
    
    const fields = form.querySelectorAll("input");

    for (let field of fields) {
      this[field.name] = field.value;
    }

    this.createdAt = new Date();
  }

  toElement = (toDoList) => {
    const li = document.createElement("li");

    for (let key in this) {
      if (typeof this[key] === "function") {
        continue;
      }

      if (key === "id") {
        li.id = this[key];
        continue;
      }

      const p = document.createElement("p");

      p.textContent = `${this.#camelToTitleCase(key)}: ${this[key]}`;

      li.appendChild(p);
    }

    const button = document.createElement("button");

    button.textContent = "Remove";
    button.addEventListener("click", () => {
      toDoList.remove(this.id);
      toDoList.render();
    });

    li.appendChild(button);

    return li;
  }

  #camelToTitleCase = (camelCase) => {
    return camelCase.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
  };
}

class ToDoList {
  constructor() {
    this.toDos = [];
    this.form = null;
  }

  add = (toDo) => {
    this.toDos.push(toDo);
  }

  remove = (id) => {
    this.toDos = this.toDos.filter(toDo => toDo.id != id);
  }

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
  }

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
  }

  #renderEmpty = (viewSection) => {
    const p = document.createElement("p");
    p.textContent = "No tasks to display.";

    viewSection.appendChild(p);
  }

  #renderList = (viewSection) => {
    const ul = document.createElement("ul");

    for (let toDo of this.toDos) {
      const li = toDo.toElement(this);

      ul.appendChild(li);
    }

    viewSection.appendChild(ul);
  }

  #renderForm = (viewSection) => {
    viewSection.appendChild(this.form);
  }
}
