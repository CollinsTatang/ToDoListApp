/**      A function for testing inputs and drag and drop events       */
import { fireEvent, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";
import { displayTasks, update } from "./test_files/index";
import { drag, drop } from "./test_files/drag_drop";

displayTasks();

describe("Functions for testing text inputs", () => {
  const textInputs = global.document.getElementsByClassName("description");
  Array.from(textInputs).forEach((textInput) => {
    test("renders an Input Text element", () => {
      expect(textInput).not.toBeNull();
      expect(textInput).toBeInTheDocument();
    });
    test("focus In , inputs a text then focus Out  ", async () => {
      const oldText = textInput.value;
      fireEvent.focusIn(textInput);
      textInput.value = "The test text";
      fireEvent.input(textInput);
      fireEvent.focusOut(textInput);
      expect(textInput.value).not.toBe(oldText);
    });
  });
});

describe("Functions for testing checkbox inputs", () => {
  const checkInputs = global.document.getElementsByTagName("input");
  Array.from(checkInputs).forEach((checkInput) => {
    if (checkInput.type === "checkbox") {
      test("renders all the input checkbox element", () => {
        expect(checkInput).not.toBeNull();
      });
      test("tests all input checkbox element ", async () => {
        const oldState = checkInput.checked;
        fireEvent.click(checkInput);
        expect(checkInput.checked).not.toBe(oldState);
      });
    }
  });
});

describe("Functions for testing drag and drop events", () => {
  const list = global.document.getElementsByTagName("li");
  Array.from(list).forEach((li) => {
    test("renders the list elements", () => {
      expect(li).not.toBeNull();
    });
  });
  const li = list[0];
  test("drags and drops the element 1 position up (index - 1) ", async () => {
    const oldIndex = li.id;
    const divIdOld = li.getElementsByTagName("div")[0].id;
    drag();
    let newIndex;

    if (oldIndex === "0") {
      newIndex = "1";
    }
    if (oldIndex === "1") {
      newIndex = "0";
    }
    drop(oldIndex, newIndex);
    setTimeout(500, () => {
      const divIdNew = li.getElementsByTagName("div")[0].id;
      expect(divIdOld).not.toBe(divIdNew);
    });
  });
});