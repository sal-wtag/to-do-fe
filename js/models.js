"use strict";

class ToDo {
  constructor(form) {
    this.id = Date.now();
    
    const fields = form.querySelectorAll("input");

    for (let field of fields) {
      this[field.name] = field.value;
    }
  }

  save = (toDoList) => {
    toDoList.push(this);
  }
}
