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

  save = (toDoList) => {
    toDoList.push(this);
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
}
