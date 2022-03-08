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
  //   expect(screen.getByTestId("NavBar")).toBeVisible();
  //   userEvent.click(screen.getByTestId("Portfolio"));
  //   expect(screen.getByTestId("About-me")).toBeVisible();
  // });
});
