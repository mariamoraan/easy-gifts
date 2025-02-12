import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BurgerMenu } from "./burger-menu.component";
import { useAuth } from "../../../features/auth/delivery/context/auth.context";
import { UserMother } from "@/features/auth/domain/__tests__/user.mother";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../features/auth/delivery/context/auth.context");

const setup = () =>
  render(
    <MemoryRouter>
      <BurgerMenu />
    </MemoryRouter>
  );

describe("BurgerMenu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useAuth).mockReturnValue({
      user: UserMother.andrea(),
      signUp: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
      isAuthenticated: true,
    });
  });
  it("should render burger menu button", () => {
    setup();
    expect(screen.getByRole("button", { name: "Menu" })).toBeInTheDocument();
  });

  it("should toggle menu visibility on button click", () => {
    setup();
    const button = screen.getByRole("button", { name: "Menu" });
    fireEvent.click(button);

    expect(screen.getByRole("menu")).not.toHaveClass(
      /burger-menu__dropdown--hidden/
    );

    fireEvent.click(button);
    expect(screen.getByRole("menu")).toHaveClass(
      /burger-menu__dropdown--hidden/
    );
  });
});
