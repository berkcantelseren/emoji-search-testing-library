import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Emoji Search Test", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Title Render", () => {
    const headerTitle = screen.getByText("Emoji Search");
    expect(headerTitle).toBeInTheDocument;
  });

  test("Emoji Render", () => {
    const items = screen.getAllByText("Click to copy emoji");
    expect(items.length).toEqual(20);
  });

  test("Emoji Render after filter", () => {
    const emoji = "100";
    const input = screen.getByRole("textbox");
    userEvent.type(input, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument;
  });

  test("Emoji Copy ", () => {
    const copytext = screen.getAllByText("Click to copy emoji");
    userEvent.click(copytext);
    const input = screen.getByRole("textbox");
    userEvent.paste(input, copytext);
    expect(input.lenght === 1);
  });
});
