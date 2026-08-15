import { type ReactNode, useMemo } from "react";

import {
  usePaginationActions,
  usePaginationDerived,
  usePaginationEffect,
  usePaginationState,
} from "./hooks";
import { PaginationContext } from "./PaginationContext";
import type { PaginationContextValues } from "./PaginationContextValues";

type PaginationProviderProps<T extends object> = {
  children: ReactNode;
  enabled?: boolean;
  pageSize?: number;
  items: readonly T[];
  resetDeps?: readonly unknown[];
  entityName?: string;
};
export const PaginationProvider = <T extends object>({
  children,
  enabled,
  pageSize = 10,
  items,
  resetDeps,
  entityName = "items",
}: PaginationProviderProps<T>) => {
  const {
    pagination,
    setPagination,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
  } = usePaginationState({ pageSize });

  const {
    preventNextResetPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  } = usePaginationActions({
    setPagination,
    pagination,
    setSkipNextPageResetRef,
  });

  usePaginationEffect({
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    items,
    enabled,
    resetDeps,
    setPagination,
    pagination,
  });

  const {
    paginatedList,
    displayStart,
    totalItems,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
    pageOffset,
  } = usePaginationDerived({ pagination, items });

  const value: PaginationContextValues<T> = useMemo(
    () => ({
      actions: {
        onPrevClick,
        onNextClick,
        onPageClick,
        setSize,
        setPage,
        preventNextResetPage,
      },
      state: {
        entityName,
        currentPage: pagination.page,
        totalItems,
        isPrevDisabled,
        isNextDisabled,
        pageNumbers,
        displayStart,
        displayEnd,
        paginatedList,
        pageOffset,
        currentSize: pagination.size,
      },
    }),
    [
      onPrevClick,
      onNextClick,
      onPageClick,
      setSize,
      setPage,
      preventNextResetPage,
      entityName,
      pagination.page,
      pagination.size,
      totalItems,
      isPrevDisabled,
      isNextDisabled,
      pageNumbers,
      displayStart,
      displayEnd,
      paginatedList,
      pageOffset,
    ],
  );

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};
