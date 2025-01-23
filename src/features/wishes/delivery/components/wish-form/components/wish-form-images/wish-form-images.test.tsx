import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { WishFormImages } from "./wish-form-images.component";
import { useWishForm } from "../../context/wish-form.context";

// Mock the useWishForm hook
vi.mock("../../context/wish-form.context", () => ({
  useWishForm: vi.fn(),
}));

describe("WishFormImages", () => {
  it("renders the WishFormImages component", () => {
    (useWishForm as jest.Mock).mockReturnValue({
      imageUrl: "",
      setImageUrl: vi.fn(),
      onAddImage: vi.fn(),
      imagesUrls: [],
      onDeleteImage: vi.fn(),
    });

    render(<WishFormImages />);

    expect(screen.getByText("Imágenes")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Añadir imagen" })
    ).toBeInTheDocument();
  });

  it.only("opens wish form modal when add image button is clicked", () => {
    const setIsImagesModalOpenMock = vi.fn();
    (useWishForm as jest.Mock).mockReturnValue({
      imageUrl: "https://example.com/image.jpg",
      setImageUrl: vi.fn(),
      onAddImage: vi.fn(),
      imagesUrls: [],
      onDeleteImage: vi.fn(),
      setIsImagesModalOpen: setIsImagesModalOpenMock,
    });

    render(<WishFormImages />);

    fireEvent.click(screen.getByRole("button", { name: "Añadir imagen" }));

    expect(setIsImagesModalOpenMock).toHaveBeenCalledWith(true);
  });

  it("calls onDeleteImage when the delete button is clicked", () => {
    const onDeleteImageMock = vi.fn();
    (useWishForm as jest.Mock).mockReturnValue({
      setImageUrl: vi.fn(),
      onAddImage: vi.fn(),
      imagesUrls: ["https://example.com/image1.jpg"],
      onDeleteImage: onDeleteImageMock,
    });

    render(<WishFormImages />);
    const image = screen.getByRole("img", {
      name: "https://example.com/image1.jpg",
    });
    fireEvent.click(image);
    fireEvent.click(image);

    expect(onDeleteImageMock).toHaveBeenCalledWith(
      "https://example.com/image1.jpg"
    );
  });
});
