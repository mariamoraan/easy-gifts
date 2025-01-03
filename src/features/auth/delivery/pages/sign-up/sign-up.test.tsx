import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SignUpPage } from "./sign-up.page";
import { useAuth } from "../../context/auth.context";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../context/auth.context", () => ({
  useAuth: vi.fn().mockReturnValue({ signUp: vi.fn() }),
}));

vi.mock("react-i18next", () => ({
  useTranslation: vi.fn().mockReturnValue({ t: (id: string) => id }),
}));

const setup = () =>
  render(
    <MemoryRouter>
      <SignUpPage />
    </MemoryRouter>
  );

describe("SignUpPage", () => {
  it("should render sign-up form", () => {
    setup();
    expect(screen.getByLabelText("auth.name")).toBeInTheDocument();
    expect(screen.getByLabelText("auth.email")).toBeInTheDocument();
    expect(screen.getByLabelText("auth.password")).toBeInTheDocument();
    expect(screen.getByText("auth.sign-up.create-account")).toBeInTheDocument();
  });

  it("should handle input changes", () => {
    setup();

    const nameInput = screen.getByRole("textbox", { name: "fname" });
    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const passwordInput = screen.getByRole("password", { name: "fpassword" });

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(nameInput).toHaveValue("Test User");
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("should handle form submission", async () => {
    const mockSignUp = vi.fn();
    (useAuth as jest.Mock).mockReturnValue({ signUp: mockSignUp });

    setup();
    const nameInput = screen.getByRole("textbox", { name: "fname" });
    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const passwordInput = screen.getByRole("password", { name: "fpassword" });
    const submitButton = screen.getByText("auth.sign-up.create-account");

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(mockSignUp).toHaveBeenCalledWith(
      { name: "Test User", email: "test@example.com", password: "password123" },
      { name: "Test User", email: "test@example.com", password: "password123" }
    );
  });

  it("should display error message on sign-up failure", async () => {
    const mockSignUp = vi.fn().mockRejectedValue(new Error("sign-up-failed"));
    (useAuth as jest.Mock).mockReturnValue({ signUp: mockSignUp });

    setup();
    const nameInput = screen.getByRole("textbox", { name: "fname" });
    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const passwordInput = screen.getByRole("password", { name: "fpassword" });
    const submitButton = screen.getByText("auth.sign-up.create-account");

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("auth.errors.sign-up-failed")
    ).toBeInTheDocument();
  });
});
