import { type ReactNode } from "react";

import { usePagination } from "./hooks";
import { PaginationContext } from "./PaginationContext";

type PaginationProviderProps<T> = {
  children: ReactNode;
  enabled?: boolean;
  pageSize?: number;
  items: readonly T[];
  resetDeps?: readonly unknown[];
  entityName?: string;
};
export const PaginationProvider = <T,>({
  children,
  enabled,
  pageSize = 10,
  items,
  resetDeps,
  entityName = "items",
}: PaginationProviderProps<T>) => {
  const value = usePagination<T>({
    pageSize,
    items,
    enabled,
    resetDeps,
    entityName,
  });
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};
