import { useContext } from "react";

import { PaginationContext } from "./PaginationContext";
import type { PaginationContextValues } from "./PaginationContextValues";

export const usePaginationContext = <T extends object>() => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider",
    );
  }
  return context as PaginationContextValues<T>;
};
