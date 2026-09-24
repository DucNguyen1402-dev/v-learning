import { useMemo } from "react";

import { usePaginationEffect } from "./effects";
import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationState } from "./usePaginationState";

type UsePaginationProps<T> = {
  initialPageSize?: number;
  items: readonly T[];
  enabledResetPage?: boolean;
  resetDeps?: readonly unknown[];
};

export const usePagination = <T>({
  initialPageSize,
  items,
  resetDeps,
}: UsePaginationProps<T>) => {
  const {
    currentPage,
    pageSize,
    resetPagination,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
    hasPaginationChanged,
    resetPaginationChanged,
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
    pageOffset,
  } = usePaginationDerived({ currentPage, pageSize, items });

  const { scrollToTargetRef, skipNextPageReset, setResetDeps, scrollToTarget } =
    usePaginationEffect({
      resetPagination,
      currentPage,
      totalPages,
      hasPaginationChanged,
      resetDeps,
      resetPaginationChanged,
      setPage,
    });

  return useMemo(
    () => ({
      controls: {
        scrollToTarget,
        skipNextPageReset,
      },
      config: {
        setResetDeps,
      },
      flags: {
        hasPaginationChanged,
      },
      refs: {
        scrollToTarget: scrollToTargetRef,
      },
      actions: {
        onPrevClick,
        onNextClick,
        onPageClick,
        setSize,
        setPage,
      },
      state: {
        currentPage,
        pageSize,
        totalPages,
        totalItems,
        isPrevDisabled,
        isNextDisabled,
        pageNumbers,
        displayStart,
        displayEnd,
        paginatedList,
        pageOffset,
      },
    }),
    [
      scrollToTarget,
      skipNextPageReset,
      setResetDeps,
      hasPaginationChanged,
      scrollToTargetRef,
      onPrevClick,
      onNextClick,
      onPageClick,
      setSize,
      setPage,
      currentPage,
      pageSize,
      totalPages,
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
};

export type PaginationResult<T> = ReturnType<typeof usePagination<T>>;
