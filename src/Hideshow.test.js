import { render, screen } from "@testing-library/react";
import HideShowDiv from "./HideShowDiv";
import userEvent from "@testing-library/user-event";
describe("App", () => {
  it("the API button should open the API field", () => {
    render(<HideShowDiv />);
    expect(screen.queryByTestId("APIField")).toBeNull();
    expect(screen.getByTestId("APIButton")).toBeVisible();
    userEvent.click(screen.getByTestId("APIButton"));
    expect(screen.getByTestId("APIField")).toBeVisible();
  });

  it("the API should be closed when clicked", () => {
    render(<HideShowDiv />);
    userEvent.click(screen.getByTestId("APIButton"));
    expect(screen.getByTestId("exitbuttonTest")).toBeVisible();
    userEvent.click(screen.getByTestId("exitbuttonTest"));
    expect(screen.queryByTestId("APIField")).toBeNull();
  });

  it("The No button should display a message when clicked", () => {
    render(<HideShowDiv />);
    expect(screen.queryByTestId("APIField")).toBeNull();
    userEvent.click(screen.getByTestId("APIButton"));
    expect(screen.queryByTestId("nobuttonTest")).toBeVisible();
    userEvent.click(screen.getByTestId("nobuttonTest"));
    expect(screen.queryByTestId("noTextTest")).toBeVisible();
  });

  it("The yes button should display the select option when clicked", () => {
    render(<HideShowDiv />);
    expect(screen.queryByTestId("APIField")).toBeNull();
    userEvent.click(screen.getByTestId("APIButton"));
    expect(screen.queryByTestId("yesbuttonTest")).toBeVisible();
    expect(screen.queryByTestId("selectTest")).toBeNull();
    userEvent.click(screen.getByTestId("yesbuttonTest"));
    expect(screen.getByTestId("selectTest")).toBeVisible();
  });

  it("the select option should show the API when clicked", () => {
    render(<HideShowDiv />);
    expect(screen.queryByTestId("APIField")).toBeNull();
    userEvent.click(screen.getByTestId("APIButton"));
    expect(screen.queryByTestId("yesbuttonTest")).toBeVisible();
    expect(screen.queryByTestId("selectTest")).toBeNull();
    userEvent.click(screen.getByTestId("yesbuttonTest"));
    expect(screen.getByTestId("selectTest")).toBeVisible();
    userEvent.selectOptions(screen.getByTestId("selectTest"), "en");
    
  });
});
