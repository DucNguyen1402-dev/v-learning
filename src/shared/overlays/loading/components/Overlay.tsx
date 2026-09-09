import type { ReactNode } from "react";

type BackdropProps = {
  children?: ReactNode;
};

export const Overlay = ({ children }: BackdropProps) => {
  return <div className="backdrop">{children}</div>;
};
