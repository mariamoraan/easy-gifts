import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ImagesList } from "./images-list.component";

describe("ImagesList", () => {
  const imagesUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
  ];

  it("renders the ImagesList component", () => {
    render(<ImagesList imagesUrls={imagesUrls} />);

    imagesUrls.forEach((url) => {
      expect(screen.getByRole("img", { name: url })).toBeInTheDocument();
    });
  });

  it("calls onDelete when an image is clicked twice", () => {
    const mockOnDelete = vi.fn();
    render(<ImagesList imagesUrls={imagesUrls} onDelete={mockOnDelete} />);

    const image = screen.getByRole("img", { name: imagesUrls[0] });
    fireEvent.click(image);
    fireEvent.click(image);

    expect(mockOnDelete).toHaveBeenCalledWith(imagesUrls[0]);
  });

  it("shows delete button when an image is clicked once", () => {
    render(<ImagesList imagesUrls={imagesUrls} onDelete={vi.fn()} />);

    const image = screen.getByRole("img", { name: imagesUrls[0] });
    fireEvent.click(image);

    expect(
      screen.getByRole("button", { name: /delete image/i })
    ).toBeInTheDocument();
  });

  it("hides delete button when clicked outside", () => {
    render(<ImagesList imagesUrls={imagesUrls} onDelete={vi.fn()} />);

    const image = screen.getByRole("img", { name: imagesUrls[0] });
    fireEvent.click(image);
    fireEvent.click(document);

    expect(
      screen.queryByRole("button", { name: /delete image/i })
    ).not.toBeInTheDocument();
  });
});
