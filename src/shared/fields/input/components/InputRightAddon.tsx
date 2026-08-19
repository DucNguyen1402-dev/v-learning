import type { ReactNode } from "react";

type InputRightAddonProps = {
  children: ReactNode;
};
export const InputRightAddon = ({ children }: InputRightAddonProps) => (
  <div className="addon addon-right-position">{children}</div>
);
