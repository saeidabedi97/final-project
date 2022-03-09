import { render, screen } from "@testing-library/react";
import HideShowDiv from "./HideShowDiv";
import App from "./App";
import Comp1 from "./Comp1";
import userEvent from "@testing-library/user-event";
describe("App", () => {
  it("the API button should be visible", () => {
    render(<HideShowDiv />);
    expect(screen.getByTestId("APIButton")).toBeVisible();
    userEvent.click(screen.getByTestId("APIButton"));
    expect(screen.getByTestId("APIField")).toBeVisible();
  });
});
