import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { StyledModalContainer } from "./Modal.styled";

interface ModalType {
  toggleModal: (value: boolean) => void;
  children: ReactNode;
}

export default function Modal({ children, toggleModal }: ModalType) {
  const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        toggleModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  const backdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      toggleModal(false);
    }
  };

  return createPortal(
    <StyledModalContainer onClick={backdropClick}>
      {children}
    </StyledModalContainer>,
    modalRoot
  );
}
