import { type ReactNode } from "react";

import { usePagination } from "./hooks";
import { PaginationContext } from "./PaginationContext";

type PaginationProviderProps<T> = {
  children: ReactNode;
  enabledResetPage?: boolean;
  initialPageSize?: number;
  items: readonly T[];
  resetDeps: readonly unknown[];
  entityName?: string;
};
export const PaginationProvider = <T,>({
  children,
  enabledResetPage = true,
  initialPageSize = 10,
  items,
  resetDeps,
}: PaginationProviderProps<T>) => {
  const value = usePagination<T>({
    initialPageSize,
    items,
    enabledResetPage,
    resetDeps,
  });
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};
