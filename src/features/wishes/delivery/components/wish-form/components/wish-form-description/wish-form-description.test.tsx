import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import WishFormDescription from "./wish-form-description.component";
import { useWishForm } from "../../context/wish-form.context";

// Mock the useWishForm hook
vi.mock("../../context/wish-form.context", () => ({
  useWishForm: vi.fn(),
}));

describe("WishFormDescription", () => {
  it("renders the WishFormDescription component", () => {
    (useWishForm as jest.Mock).mockReturnValue({
      description: "",
      setDescription: vi.fn(),
    });

    render(<WishFormDescription />);

    expect(screen.getByLabelText("Descripción")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "fdescription" })
    ).toBeInTheDocument();
  });

  it("calls setDescription when the textarea value changes", () => {
    const mockSetDescription = vi.fn();
    (useWishForm as jest.Mock).mockReturnValue({
      description: "",
      setDescription: mockSetDescription,
    });

    render(<WishFormDescription />);

    fireEvent.change(screen.getByRole("textbox", { name: "fdescription" }), {
      target: { value: "Nueva Descripción" },
    });

    expect(mockSetDescription).toHaveBeenCalledWith("Nueva Descripción");
  });
});
