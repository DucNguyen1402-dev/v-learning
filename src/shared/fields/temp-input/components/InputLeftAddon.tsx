import type { ReactNode } from "react";

type InputLeftAddonProps = {
  children: ReactNode;
};

export const InputLeftAddon = ({ children }: InputLeftAddonProps) => (
  <div className="addon-position">{children}</div>
);
