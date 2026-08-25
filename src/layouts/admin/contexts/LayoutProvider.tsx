import type { ReactNode } from "react";

import { useLayout } from "./hooks";
import { LayoutContext } from "./LayoutContext";
type LayoutProviderProps = {
  children: ReactNode;
};
export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const value = useLayout();
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
