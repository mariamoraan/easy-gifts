import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WishCard } from "./wish-card.component";
import { Wish } from "../../../domain/entities/wish.entity";

describe("WishCard", () => {
  const mockWish: Wish = {
    id: "1",
    name: "Test Wish",
    description: "This is a test wish",
    owner: "user1",
    imagesUrls: ["http://test.com/image1.jpg", "http://test.com/image2.jpg"],
    links: [
      { name: "Link 1", url: "http://link1.com" },
      { name: "Link 2", url: "http://link2.com" },
    ],
  };

  it("should render wish name and description", () => {
    render(<WishCard wish={mockWish} />);

    expect(screen.getByText("Test Wish")).toBeInTheDocument();
    expect(screen.getByText("This is a test wish")).toBeInTheDocument();
  });

  it("should render images list", () => {
    render(<WishCard wish={mockWish} />);

    expect(
      screen.getByRole("img", { name: "http://test.com/image1.jpg" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "http://test.com/image2.jpg" })
    ).toBeInTheDocument();
  });

  it("should render links", () => {
    render(<WishCard wish={mockWish} />);

    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
  });

  it("should not render description if not provided", () => {
    const wishWithoutDescription: Wish = { ...mockWish, description: "" };
    render(<WishCard wish={wishWithoutDescription} />);

    expect(screen.queryByText("This is a test wish")).not.toBeInTheDocument();
  });

  it("should not render images list if not provided", () => {
    const wishWithoutImages: Wish = { ...mockWish, imagesUrls: [] };
    render(<WishCard wish={wishWithoutImages} />);

    expect(screen.queryByAltText("Image 1")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Image 2")).not.toBeInTheDocument();
  });

  it("should not render links if not provided", () => {
    const wishWithoutLinks: Wish = { ...mockWish, links: [] };
    render(<WishCard wish={wishWithoutLinks} />);

    expect(screen.queryByText("Link 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Link 2")).not.toBeInTheDocument();
  });
});
