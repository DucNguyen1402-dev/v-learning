import type { ReactNode } from "react";

import { ModalHeader } from "./modal-header";
import { ModalFooter } from "./ModalFooter";

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return <div className="modal-container">{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
