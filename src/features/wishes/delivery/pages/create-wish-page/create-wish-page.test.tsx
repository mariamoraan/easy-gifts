import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CreateWishPage } from "./create-wish-page.page";
import { useAuth } from "../../../../auth/delivery/context/auth.context";
import { AppRoutes } from "../../../../../core/router/routes";

// Mock the useAuth hook
vi.mock("../../../../auth/delivery/context/auth.context", () => ({
  useAuth: vi.fn().mockReturnValue({ logout: vi.fn(), user: { id: "1" } }),
}));

// Mock the useCreateWish hook
vi.mock("../../hooks/use-create-wish.hook", () => ({
  useCreateWish: vi.fn().mockReturnValue({ createWish: vi.fn() }),
}));

const setup = () =>
  render(
    <MemoryRouter>
      <CreateWishPage />
    </MemoryRouter>
  );

describe("CreateWishPage", () => {
  it("renders the CreateWishPage component", () => {
    setup();

    expect(screen.getByText("Create a Wish")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Logout/i })).toBeInTheDocument();
  });

  it("calls logout when the Logout button is clicked", () => {
    const mockLogout = vi.fn();
    (useAuth as jest.Mock).mockReturnValue({ logout: mockLogout });

    setup();

    fireEvent.click(screen.getByRole("button", { name: /Logout/i }));
    expect(mockLogout).toHaveBeenCalled();
  });

  it("navigates to Home when the Home link is clicked", () => {
    setup();

    fireEvent.click(screen.getByText("Home"));
    expect(window.location.pathname).toBe(AppRoutes.HOME);
  });

  it("renders the WishForm component", () => {
    setup();

    expect(screen.getByTestId("wish-form")).toBeInTheDocument();
  });
});
