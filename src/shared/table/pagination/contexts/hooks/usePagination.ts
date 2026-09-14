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
  enabledResetPage,
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
  } = usePaginationDerived({ currentPage, pageSize, items });

  const {
    scrollToTargetRef,
    skipNextPageReset,
    setEnabledResetPage,
    setResetDeps,
    scrollToTarget,
  } = usePaginationEffect({
    resetPaginationPage,
    currentPage,
    totalPages,
    hasPaginationChanged,
    resetPaginationChanged,
    enabledResetPage,
    resetDeps,
  });

  return useMemo(
    () => ({
      controls: {
        scrollToTarget,
        skipNextPageReset,
      },
      config: {
        setEnabledResetPage,
        setResetDeps,
      },
      flags: {
        hasPaginationChanged: () => hasPaginationChanged.current,
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
      },
    }),
    [
      scrollToTarget,
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
      pageSize,
      totalPages,
      totalItems,
      isPrevDisabled,
      isNextDisabled,
      pageNumbers,
      displayStart,
      displayEnd,
      paginatedList,
      hasPaginationChanged,
    ],
  );
};

export type PaginationResult<T> = ReturnType<typeof usePagination<T>>;
