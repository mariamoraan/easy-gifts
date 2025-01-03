import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RecoverPasswordPage } from "./recover-password.page";
import { MemoryRouter } from "react-router-dom";
import { AuthLocator } from "../../auth.locator";

vi.mock("../../auth.locator", () => ({
  AuthLocator: {
    getRecoverPasswordQuery: vi.fn(),
  },
}));

vi.mock("../../context/auth.context", () => ({
  useAuth: vi.fn().mockReturnValue({ signUp: vi.fn() }),
}));

vi.mock("react-i18next", () => ({
  useTranslation: vi.fn().mockReturnValue({ t: (id: string) => id }),
}));

const setup = () =>
  render(
    <MemoryRouter>
      <RecoverPasswordPage />
    </MemoryRouter>
  );

describe("RecoverPasswordPage", () => {
  it("should render recover password form", () => {
    setup();

    expect(screen.getByRole("textbox", { name: "femail" })).toBeInTheDocument();
    expect(
      screen.getByText("auth.recover-password.send-access-link")
    ).toBeInTheDocument();
  });

  it("should handle input changes", () => {
    setup();

    const emailInput = screen.getByRole("textbox", { name: "femail" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput).toHaveValue("test@example.com");
  });

  it("should handle form submission and show success message", async () => {
    const mockHandle = vi.fn().mockResolvedValue({});
    (AuthLocator.getRecoverPasswordQuery as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    setup();

    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const submitButton = screen.getByText(
      "auth.recover-password.send-access-link"
    );

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    expect(mockHandle).toHaveBeenCalledWith("test@example.com");
    expect(
      await screen.findByText("auth.recover-password.success")
    ).toBeInTheDocument();
  });

  it("should display error message on submission failure", async () => {
    const mockHandle = vi.fn().mockRejectedValue(new Error("recover-failed"));
    (AuthLocator.getRecoverPasswordQuery as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    setup();

    const emailInput = screen.getByRole("textbox", { name: "femail" });
    const submitButton = screen.getByText(
      "auth.recover-password.send-access-link"
    );

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    expect(mockHandle).toHaveBeenCalledWith("test@example.com");
    expect(await screen.findByText("auth.errors.generic")).toBeInTheDocument();
  });
});
