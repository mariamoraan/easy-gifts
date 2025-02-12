import ReactDOM from "react-dom";
import { bind } from "../../styles/bind";
import styles from "./modal.module.scss";
import { useClickOutside } from "../../hooks/use-click-outside.hook";
import { useRef } from "react";
import { Button } from "../button/button.component";
import { CloseIcon } from "../../icons";
const cn = bind(styles);

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = (props: Props) => {
  const { children, isOpen, onClose } = props;
  const modalRoot = document.getElementById("modal-root");
  const modalContent = useRef(null);
  const onCloseModal = () => console.log("onCloseModal");
  useClickOutside(modalContent, onCloseModal);
  if (!modalRoot || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className={cn("modal", { "modal--open": isOpen })}>
      <div ref={modalContent} className={cn("modal__content")}>
        <div className={cn("modal__content__header")}>
          <Button outlined onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        <div className={cn("modal__content__wrapper")}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
