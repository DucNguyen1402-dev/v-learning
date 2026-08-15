import type { ReactNode } from "react";

import { useSelect } from "./hooks";
import { SelectContext } from "./SelectContext";
import type { SelectContextValues } from "./SelectContextValues";

type SelectProviderProps = {
  children: ReactNode;
};

export const SelectProvider = ({ children }: SelectProviderProps) => {
  const { isOpen, toggle, close } = useSelect();

  const value: SelectContextValues = {
    isOpen,
    toggle,
    close,
  };

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};
