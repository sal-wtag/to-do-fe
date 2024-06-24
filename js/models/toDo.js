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

  update(form) {
    const fields = form.querySelectorAll("input");

    for (let field of fields) {
      this[field.name] = field.value;
    }
  }

  toEditform = (toDoList) => {
    const form = document.createElement("div");

    for (let key in this) {
      if (typeof this[key] === "function") {
        continue;
      }

      if (key === "id" || key === "createdAt") {
        continue;
      }

      const input = document.createElement("input");

      input.type = "text";
      input.name = key;
      input.value = this[key];

      form.appendChild(input);
    }

    const updateButton = document.createElement("button");

    updateButton.textContent = "Update";
    updateButton.addEventListener("click", () => {
      this.update(form);
      toDoList.render();
    });

    form.appendChild(updateButton);

    const cancelButton = document.createElement("button");

    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
      toDoList.render();
    });

    form.appendChild(cancelButton);

    return form;
  };

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

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      toDoList.remove(this.id);
      toDoList.render();
    });

    li.appendChild(removeButton);

    const editButton = document.createElement("button");

    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const form = this.toEditform(toDoList);
      editButton.parentElement.replaceWith(form);
    });

    li.appendChild(editButton);

    return li;
  };

  #camelToTitleCase = (camelCase) => {
    return camelCase
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };
}
