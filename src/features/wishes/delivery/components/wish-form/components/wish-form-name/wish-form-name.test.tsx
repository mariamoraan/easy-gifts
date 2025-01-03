import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import WishFormName from "./wish-form-name.component";
import { useWishForm } from "../../context/wish-form.context";

// Mock the useWishForm hook
vi.mock("../../context/wish-form.context", () => ({
  useWishForm: vi.fn(),
}));

describe("WishFormName", () => {
  it("renders the WishFormName component", () => {
    (useWishForm as jest.Mock).mockReturnValue({
      name: "",
      setName: vi.fn(),
    });

    render(<WishFormName />);

    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "fname" })).toBeInTheDocument();
  });

  it("calls setName when the input value changes", () => {
    const mockSetName = vi.fn();
    (useWishForm as jest.Mock).mockReturnValue({
      name: "",
      setName: mockSetName,
    });

    render(<WishFormName />);

    fireEvent.change(screen.getByRole("textbox", { name: "fname" }), {
      target: { value: "Nuevo Nombre" },
    });

    expect(mockSetName).toHaveBeenCalledWith("Nuevo Nombre");
  });
});
