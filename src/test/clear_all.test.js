import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";
import { displayTasks } from "../index";
import { tasks } from "../add_remove";

displayTasks();

describe("Functions for testing clear all completed", () => {
  test("parses the tasks list to the clear function", () => {
    const btn = global.document.getElementById("clear-btn");
    fireEvent.click(btn);
    setTimeout(500, () => {
      expect(tasks).not.toBe(tasks);
    });
  });
});