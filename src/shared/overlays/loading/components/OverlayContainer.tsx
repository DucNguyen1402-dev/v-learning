import type { ReactNode } from "react";

type BackdropProps = {
  children?: ReactNode;
};

export const OverlayContainer = ({ children }: BackdropProps) => {
  return <div className="backdrop-container">{children}</div>;
};
