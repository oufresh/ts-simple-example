import * as React from "react";
import {
  render,
  cleanup
  /*fireEvent,
  cleanup,
  waitForElement*/
} from "@testing-library/react";
import "jest-dom/extend-expect";
import { MyComponent } from "../MyComponent";

afterEach(cleanup);

test("Test MyComponent", () => {
  const { asFragment, getByText } = render(<MyComponent text={"PROVA"} />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByText("Hello, the text is: PROVA")).not.toBeUndefined();
});
