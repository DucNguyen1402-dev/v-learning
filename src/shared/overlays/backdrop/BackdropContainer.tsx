import type { ReactNode } from "react";

type BackdropProps = {
  children?: ReactNode;
};

export const BackdropContainer = ({ children }: BackdropProps) => {
  return <div className="backdrop-container">{children}</div>;
};
