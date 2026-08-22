import { useContext } from "react";

import type { PaginationResult } from "./hooks";
import { PaginationContext } from "./PaginationContext";

export const usePaginationContext = <T>() => {
  const context = useContext(PaginationContext) as PaginationResult<T> | null;
  if (!context) {
    throw new Error(
      "Pagination.use() must be used within a <PaginationProvider>",
    );
  }
  return context;
};
