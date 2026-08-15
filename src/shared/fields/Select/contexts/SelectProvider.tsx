import type { ReactNode } from "react";

import { useSelect } from "./hooks";
import { SelectContext } from "./SelectContext";
import type { SelectContextValues } from "./SelectContextValues";

type SelectProviderProps = {
  children: ReactNode;
};

export const SelectProvider = ({ children }: SelectProviderProps) => {
  const { isOpen, toggle, close, value: selectValue, setValue } = useSelect();

  const value: SelectContextValues = {
    isOpen,
    toggle,
    close,
    value: selectValue,
    setValue,
  };

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};
