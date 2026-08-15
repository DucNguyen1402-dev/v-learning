import type { ReactNode } from "react";

interface ModalFooterProps {
  children: ReactNode;
}

export const ModalFooter = ({ children }: ModalFooterProps) => (
  <div className="modal-footer">{children}</div>
);
