import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { WishList } from "./wish-list.component";
import { useFindWishes } from "../../hooks/use-find-wishes.hook";

vi.mock("../../hooks/use-find-wishes.hook");

describe("WishList", () => {
  it("should render a list of wishes", () => {
    const mockWishes = [
      {
        id: "1",
        name: "Wish 1",
        description: "Description 1",
        owner: "user1",
        imagesUrls: ["http://test.com/image1.jpg"],
        links: [{ name: "Link 1", url: "http://link1.com" }],
      },
      {
        id: "2",
        name: "Wish 2",
        description: "Description 2",
        owner: "user2",
        imagesUrls: ["http://test.com/image2.jpg"],
        links: [{ name: "Link 2", url: "http://link2.com" }],
      },
    ];

    (useFindWishes as jest.Mock).mockReturnValue({ wishes: mockWishes });

    render(<WishList />);

    expect(screen.getByText("Wish 1")).toBeInTheDocument();
    expect(screen.getByText("Wish 2")).toBeInTheDocument();
  });

  it("should render empty state when no wishes are found", () => {
    (useFindWishes as jest.Mock).mockReturnValue({ wishes: [] });

    render(<WishList />);

    expect(screen.queryByText("Wish 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Wish 2")).not.toBeInTheDocument();
  });
});
