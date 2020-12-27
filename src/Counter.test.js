// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Counter from "./Counter";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders counter initialized to 0", () => {
  act(() => {
    render(<Counter />, container);
  });
  expect(container.textContent).toBe("You clicked 0 timesClick me");
});