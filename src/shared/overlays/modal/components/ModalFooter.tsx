import type { ReactNode } from "react";

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export const ModalFooter = ({ children, className = "" }: ModalFooterProps) => (
  <div className={`mt-3 flex justify-end gap-3 ${className}`}>{children}</div>
);
