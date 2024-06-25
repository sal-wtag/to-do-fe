"use strict";

class ToDo {
  constructor(form) {
    this.id = Date.now();

    const fields = form.querySelectorAll("input");

    for (let field of fields) {
      this[field.name] = field.value;
    }

    this.done = false;
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
      if (!TO_DO_TEXT_INPUTS.has(key)){
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
      if (!TO_DO_SHOWABLE_FIELDS.has(key)) {
        continue;
      }

      if (key === "id") {
        li.id = this[key];
        continue;
      }

      const p = document.createElement("p");

      p.textContent = `${this.#camelToTitleCase(key)}: ${this[key]}`;
      p.style["text-decoration"] = this.done ? "line-through" : "none";

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

    if (!this.done) {
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        const form = this.toEditform(toDoList);
        editButton.parentElement.replaceWith(form);
      });

      li.appendChild(editButton);
    }

    const markAsDoneButton = document.createElement("button");

    markAsDoneButton.textContent = "Done";
    markAsDoneButton.addEventListener("click", () => {
      this.done = true;
      toDoList.render();
    });

    li.appendChild(markAsDoneButton);

    return li;
  };

  #camelToTitleCase = (camelCase) => {
    return camelCase
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };
}
