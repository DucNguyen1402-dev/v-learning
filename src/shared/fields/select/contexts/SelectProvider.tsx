import type { ReactNode } from "react";

import { useSelect, type UseSelectReturnType } from "./hooks";
import { SelectContext } from "./SelectContext";

type SelectProviderProps = {
  children: ReactNode;
};

export const SelectProvider = ({ children }: SelectProviderProps) => {
  const value: UseSelectReturnType = useSelect();

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};
