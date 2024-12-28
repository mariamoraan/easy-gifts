import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./hello-world";

describe("Hello world", () => {
  test("Should display hello world", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
