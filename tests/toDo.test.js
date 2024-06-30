import ToDo from "../src/models/toDo";
import ToDoList from "../src/models/toDoList";
import { describe, it, expect } from "vitest";

describe("ToDo", () => {
  it("should create a new ToDo", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    expect(toDo.id).toBeGreaterThan(0);
    expect(toDo.description).toBe("Buy milk");
    expect(toDo.done).toBe(false);
    expect(toDo.createdAt).toBeInstanceOf(Date);
  });

  it("should update a ToDo", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    const newForm = document.createElement("form");
    const newInput = document.createElement("input");
    newInput.name = "description";
    newInput.value = "Buy eggs";
    newForm.appendChild(newInput);

    toDo.update(newForm);

    expect(toDo.description).toBe("Buy eggs");
  });

  it("should create an element", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    const element = toDo.toElement();
    expect(element.querySelector("p").textContent).toContain("Buy milk");
    expect(element.querySelectorAll("button").length).toBe(3);
  });

  it("should create an edit form", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    const toDoList = new ToDoList();
    toDoList.add(toDo);

    const editForm = toDo.toEditForm(toDoList);
    expect(editForm.querySelector("input").value).toBe("Buy milk");
    expect(editForm.querySelector("button").textContent).toBe("Update");
    expect(editForm.querySelectorAll("button").length).toBe(2);
  });
});
