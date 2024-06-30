import ToDo from "../src/models/toDo";
import ToDoList from "../src/models/toDoList";
import { describe, it, expect } from "vitest";

describe("ToDoList", () => {
  it("should create a new ToDoList", () => {
    const toDoList = new ToDoList();
    expect(toDoList.toDos).toEqual([]);
    expect(toDoList.form).toBeNull();
  });

  it("should add a new ToDo", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    const toDoList = new ToDoList();
    toDoList.add(toDo);

    expect(toDoList.toDos.length).toBe(1);
    expect(toDoList.toDos[0].description).toBe("Buy milk");
  });

  it("should remove a ToDo", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    const toDoList = new ToDoList();
    toDoList.add(toDo);

    toDoList.remove(toDo.id);

    expect(toDoList.toDos.length).toBe(0);
  });

  it("should search for a ToDo", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    const toDoList = new ToDoList();
    toDoList.add(toDo);

    const searchResults = toDoList.search("milk");

    expect(searchResults.length).toBe(1);
    expect(searchResults[0].description).toBe("Buy milk");
  });

  it("should filter by done", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.name = "description";
    input.value = "Buy milk";
    form.appendChild(input);

    const toDo = new ToDo(form);

    const toDoList = new ToDoList();
    toDoList.add(toDo);

    const filtered = toDoList.filterByDone(false);

    expect(filtered.length).toBe(1);
    expect(filtered[0].description).toBe("Buy milk");
  });
});
