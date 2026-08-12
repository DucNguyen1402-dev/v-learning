import type { ReactNode } from "react";

type BackdropProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Backdrop = ({ children, ...props }: BackdropProps) => {
  return (
    <div {...props} className="backdrop">
      {children}
    </div>
  );
};
