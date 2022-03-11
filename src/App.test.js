import { render, screen } from "@testing-library/react";

import App from "./App";
// import Comp1 from "./Comp1";
// import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should not break while rendering", () => {
    render(<App />);
    expect(screen.getByTestId("main")).toBeVisible();
  });
});
