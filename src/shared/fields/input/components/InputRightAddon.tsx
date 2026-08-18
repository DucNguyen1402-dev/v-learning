import type { ReactNode } from "react";

type InputRightAddonProps = {
  children: ReactNode;
};
export const InputRightAddon = ({ children }: InputRightAddonProps) => (
  <div className="addon right-addon-position">{children}</div>
);
