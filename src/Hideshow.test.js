import { render, screen } from "@testing-library/react";
import HideShowDiv from "./HideShowDiv";
import userEvent from "@testing-library/user-event";
describe("App", () => {
  it("the API button should open the API field", () => {
    render(<HideShowDiv />);
    expect(screen.getByTestId("APIButton")).toBeVisible();
    userEvent.click(screen.getByTestId("APIButton"));
    expect(screen.getByTestId("APIField")).toBeVisible();
  });
});
