import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LoginPage } from "./log-in.page";
import { useAuth } from "../../context/auth.context";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../context/auth.context", () => ({
  useAuth: vi.fn().mockReturnValue({ signUp: vi.fn(), login: vi.fn() }),
}));

vi.mock("react-i18next", () => ({
  useTranslation: vi.fn().mockReturnValue({ t: (id: string) => id }),
}));

const setup = () =>
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

describe("LoginPage", () => {
  it("should render login form", () => {
    setup();

    expect(screen.getByLabelText("auth.email")).toBeInTheDocument();
    expect(screen.getByLabelText("auth.password")).toBeInTheDocument();
    expect(screen.getByText("auth.login.continue")).toBeInTheDocument();
  });

  it("should handle input changes", () => {
    setup();

    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const passwordInput = screen.getByRole("password", { name: "fpassword" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("should handle form submission", async () => {
    const loginSpy = vi.spyOn(useAuth(), "login");

    setup();

    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const passwordInput = screen.getByRole("password", { name: "fpassword" });
    const submitButton = screen.getByText("auth.login.continue");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(loginSpy).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });

  it("should display error message on login failure", async () => {
    const loginSpy = vi.spyOn(useAuth(), "login");
    loginSpy.mockRejectedValue(new Error("login-failed"));

    setup();

    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const passwordInput = screen.getByRole("password", { name: "fpassword" });
    const submitButton = screen.getByText("auth.login.continue");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("auth.errors.login-failed")
    ).toBeInTheDocument();
  });
});
