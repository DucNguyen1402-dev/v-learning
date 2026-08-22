import { useMemo } from "react";

import { usePaginationActions } from "./usePaginationActions";
import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationEffect } from "./usePaginationEffect";
import { usePaginationState } from "./usePaginationState";

type UsePaginationProps<T> = {
  pageSize?: number;
  items: readonly T[];
  enabled?: boolean;
  resetDeps?: readonly unknown[];
  entityName?: string;
};

export type PaginationResult<T> = {
  actions: {
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageClick: (page: number) => void;
    setSize: (size: number) => void;
    setPage: (page: number) => void;
    preventNextResetPage: () => void;
  };
  state: {
    entityName?: string;
    currentPage: number;
    totalItems: number;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
    pageNumbers: number[];
    displayStart: number;
    displayEnd: number;
    paginatedList: readonly T[];
    pageOffset: number;
    currentSize: number;
  };
};
export const usePagination = <T>({
  pageSize,
  items,
  enabled,
  resetDeps,
  entityName,
}: UsePaginationProps<T>) => {
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

  const {
    paginatedList,
    displayStart,
    totalItems,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
    totalPages,
  } = usePaginationDerived({ pagination, items });

  usePaginationEffect({
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    enabled,
    resetDeps,
    setPagination,
    currentPage: pagination.page,
    totalPages,
  });

  return useMemo(
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
        currentSize: pagination.pageSize,
      },
    }),
    [
      displayEnd,
      displayStart,
      entityName,
      isNextDisabled,
      isPrevDisabled,
      onNextClick,
      onPageClick,
      onPrevClick,
      pageNumbers,
      paginatedList,
      pagination.page,
      pagination.pageSize,
      preventNextResetPage,
      setPage,
      setSize,
      totalItems,
    ],
  );
};
