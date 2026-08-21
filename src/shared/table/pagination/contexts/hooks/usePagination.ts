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
        pageOffset,
        currentSize: pagination.size,
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
      pageOffset,
      paginatedList,
      pagination.page,
      pagination.size,
      preventNextResetPage,
      setPage,
      setSize,
      totalItems,
    ],
  );
};
