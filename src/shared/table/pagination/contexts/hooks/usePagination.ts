import { useMemo } from "react";

import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationEffect } from "./usePaginationEffect";
import { usePaginationState } from "./usePaginationState";

type UsePaginationProps<T> = {
  initialPageSize?: number;
  items: readonly T[];
  enabledResetPage?: boolean;
  resetDeps: readonly unknown[];
};

export const usePagination = <T>({
  initialPageSize,
  items,
  enabledResetPage = true,
  resetDeps,
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

  const { scrollToTargetRef, skipNextPageReset } = usePaginationEffect({
    enabledResetPage,
    resetDeps,
    resetPaginationPage,
    currentPage,
    totalPages,
    pageSize,
    scrollTriggerDeps: [items],
  });

  return useMemo(
    () => ({
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
      displayEnd,
      displayStart,
      isNextDisabled,
      isPrevDisabled,
      onNextClick,
      onPageClick,
      onPrevClick,
      pageNumbers,
      paginatedList,
      currentPage,
      pageSize,
      scrollToTargetRef,
      setPage,
      setSize,
      skipNextPageReset,
      totalItems,
    ],
  );
};

export type PaginationResult<T> = ReturnType<typeof usePagination<T>>;
