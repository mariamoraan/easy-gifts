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
    creationDate: "Tue, 21 Jan 2025 18:25:30 GMT",
  };

  it("should render wish name and description", () => {
    render(<WishCard wish={mockWish} />);

    expect(screen.getByText("Test Wish")).toBeInTheDocument();
    expect(screen.getByText("This is a test wish")).toBeInTheDocument();
  });

  it("should not render description if not provided", () => {
    const wishWithoutDescription: Wish = { ...mockWish, description: "" };
    render(<WishCard wish={wishWithoutDescription} />);

    expect(screen.queryByText("This is a test wish")).not.toBeInTheDocument();
  });
});
