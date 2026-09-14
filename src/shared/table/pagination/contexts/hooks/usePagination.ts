import { useMemo } from "react";

import { usePaginationEffect } from "./effects";
import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationState } from "./usePaginationState";

type UsePaginationProps<T> = {
  initialPageSize?: number;
  items: readonly T[];
};

export const usePagination = <T>({
  initialPageSize,
  items,
}: UsePaginationProps<T>) => {
  const {
    currentPage,
    pageSize,
    resetPaginationPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  } = usePaginationState({ initialPageSize });

  const {
    paginatedList,
    displayStart,
    totalItems,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
    totalPages,
  } = usePaginationDerived({ currentPage, pageSize, items });

  const {
    scrollToTargetRef,
    skipNextPageReset,
    setEnabledResetPage,
    setResetDeps,
  } = usePaginationEffect({
    resetPaginationPage,
    currentPage,
    totalPages,
  });

  return useMemo(
    () => ({
      setEnabledResetPage,
      setResetDeps,
      refs: {
        scrollToTarget: scrollToTargetRef,
      },
      actions: {
        onPrevClick,
        onNextClick,
        onPageClick,
        setSize,
        setPage,
        skipNextPageReset,
      },
      state: {
        currentPage,
        totalItems,
        isPrevDisabled,
        isNextDisabled,
        pageNumbers,
        displayStart,
        displayEnd,
        paginatedList,
        pageSize,
      },
    }),
    [
      setEnabledResetPage,
      setResetDeps,
      scrollToTargetRef,
      onPrevClick,
      onNextClick,
      onPageClick,
      setSize,
      setPage,
      skipNextPageReset,
      currentPage,
      totalItems,
      isPrevDisabled,
      isNextDisabled,
      pageNumbers,
      displayStart,
      displayEnd,
      paginatedList,
      pageSize,
    ],
  );
};

export type PaginationResult<T> = ReturnType<typeof usePagination<T>>;
