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

      p.textContent = `${key}: ${this[key]}`;

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
}

class ToDoList {
  constructor() {
    this.toDos = [];
  }

  add = (toDo) => {
    this.toDos.push(toDo);
  }

  remove = (id) => {
    this.toDos = this.toDos.filter(toDo => toDo.id != id);
  }

  render = () => {
    const viewSection = document.getElementById(VIEW_SECTION_ID);

    while (viewSection.firstChild) {
      viewSection.removeChild(viewSection.firstChild);
    }

    if (this.toDos.length) {
      this.#renderList(viewSection);
    } else {
      this.#renderEmpty(viewSection);
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
}
