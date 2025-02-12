import ReactDOM from "react-dom";
import { bind } from "../../styles/bind";
import styles from "./modal.module.scss";
import { useClickOutside } from "../../hooks/use-click-outside.hook";
import { useEffect, useRef } from "react";
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
  const portalNode = useRef(document.createElement("div"));
  const modalContent = useRef(null);
  const onCloseModal = () => {
    if (!isOpen) return;
    onClose();
  };
  useClickOutside(modalContent, onCloseModal);

  useEffect(() => {
    const portalRoot = document.getElementById("modal-root");
    if (!portalRoot) return;
    portalRoot.appendChild(portalNode.current);
    return () => {
      portalRoot.removeChild(portalNode.current);
    };
  }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={cn("modal", { "modal--open": isOpen })}>
      <div ref={modalContent} className={cn("modal__content")}>
        <div className={cn("modal__content__header")}>
          <Button name="Close" outlined onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        <div className={cn("modal__content__wrapper")}>{children}</div>
      </div>
    </div>,
    portalNode.current
  );
};
