/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("it should not break while rendering", () => {
    render(<App />);
    expect(screen.getByTestId("main")).toBeVisible();
  });
  // it("the navigation bar should work ", () => {
  //   render(<App />);
  //   expect(screen.getByTestId("navigation")).toBeVisible();
  //   expect(screen.queryByTestId("About")).toBeNull();
  //   userEvent.click(screen.getByTestId("biography"));
  //   expect(screen.getByTestId("About")).toBeVisible();
  // });
});
