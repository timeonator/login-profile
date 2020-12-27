// hello.test.js, again

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Login from "./login";

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

it("should render login form", () => {
  act(() => {
    render(<Login />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<form class=\\"\\">
      <div class=\\"form-group\\"><label class=\\"form-label\\" for=\\"formBasicEmail\\">Email address</label><input name=\\"email\\" placeholder=\\"Enter email\\" type=\\"email\\" id=\\"formBasicEmail\\" class=\\"form-control form-control-sm\\"><small class=\\"form-text\\">We'll never share your email with anyone else.</small></div>
      <div class=\\"form-group\\"><label class=\\"form-label\\" for=\\"formBasicPassword\\">Password</label><input name=\\"password\\" placeholder=\\"Password\\" type=\\"password\\" id=\\"formBasicPassword\\" class=\\"form-control\\"></div>
      <div class=\\"form-group\\">
        <div class=\\"form-check\\"><input type=\\"checkbox\\" id=\\"formBasicCheckbox\\" class=\\"form-check-input\\"><label title=\\"\\" for=\\"formBasicCheckbox\\" class=\\"form-check-label\\">Check me out</label></div>
      </div><button type=\\"submit\\" class=\\"btn btn-primary\\">Submit</button>
    </form>"
  `); /* ... gets filled automatically by jest ... */
});
