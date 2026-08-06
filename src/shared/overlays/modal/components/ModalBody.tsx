import type { ReactNode } from "react";

interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

const ModalBody = ({ children, className = "" }: ModalBodyProps) => (
  <div className={`my-2 text-sm text-slate-200 ${className}`}>{children}</div>
);

export default ModalBody;
