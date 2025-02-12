import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./avatar.component";
import { User } from "../../../features/auth/domain/entities/user";

describe("Avatar", () => {
  const mockUser: User = {
    id: "1",
    name: "Test User",
    email: "test@example.com",
  };

  it("should render user initials", () => {
    render(<Avatar user={mockUser} />);

    expect(screen.getByText("TU")).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    render(<Avatar user={mockUser} className="custom-class" />);

    expect(screen.getByText("TU")).toHaveClass(/custom-class/);
  });

  it("should apply size class based on size prop", () => {
    render(<Avatar user={mockUser} size="SMALL" />);

    expect(screen.getByText("TU")).toHaveClass(/avatar--small/);
  });

  it("should default to MEDIUM size if size prop is not provided", () => {
    render(<Avatar user={mockUser} />);

    expect(screen.getByText("TU")).toHaveClass(/avatar/);
  });
});
