import type { ReactNode } from "react";

type BackdropProps = {
  children?: ReactNode;
};

export const Backdrop = ({ children }: BackdropProps) => {
  return <div className="backdrop">{children}</div>;
};
