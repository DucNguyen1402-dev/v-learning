import { type ReactNode } from "react";

import { usePagination } from "./hooks";
import { PaginationContext } from "./PaginationContext";

type PaginationProviderProps<T> = {
  children: ReactNode;
  enabled?: boolean;
  initialPageSize?: number;
  items: readonly T[];
  resetDeps?: readonly unknown[];
  entityName?: string;
};
export const PaginationProvider = <T,>({
  children,
  enabled = true,
  initialPageSize = 10,
  items,
  resetDeps,
  entityName = "items",
}: PaginationProviderProps<T>) => {
  const value = usePagination<T>({
    initialPageSize,
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
