import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./modal.component";

const mockOnClose = vi.fn();

const setup = ({ isOpen }: { isOpen: boolean }) => {
  return render(
    <>
      <div id="modal-root"></div>
      <Modal isOpen={isOpen} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>
    </>
  );
};

describe("Modal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should render modal content when open", () => {
    setup({ isOpen: true });

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should not render modal content when closed", () => {
    setup({ isOpen: false });

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    setup({ isOpen: true });

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should call onClose when clicking outside the modal content", () => {
    setup({ isOpen: true });

    fireEvent.click(document.body);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should not call onClose when clicking inside the modal content", () => {
    setup({ isOpen: true });

    const content = screen.getByText("Modal Content");
    fireEvent.click(content);

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
