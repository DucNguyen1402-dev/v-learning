import { useContext } from "react";

import { SelectContext } from "./SelectContext";

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a <SelectProvider>");
  }
  return context;
};
