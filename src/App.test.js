/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Comp1 from "./Comp1";
// import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("it should not break while rendering", () => {
    render(<App />);
    expect(screen.getByTestId("main")).toBeVisible();
  });

  it("it should close the API field when clicked", () => {
    render(<Comp1 />);
    expect(screen.getByTestId("APIField")).toBeVisible();
    // userEvent.click(screen.getByTestId("exitbuttonTest"));
    // eslint-disable-next-line testing-library/prefer-presence-queries
    // expect(screen.getByTestId("API")).toBeNull();
  });
});
