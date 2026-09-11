import { useMemo } from "react";

import { usePaginationActions } from "./usePaginationActions";
import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationEffect } from "./usePaginationEffect";
import { usePaginationState } from "./usePaginationState";

type UsePaginationProps<T> = {
  initialPageSize?: number;
  items: readonly T[];
  enabled?: boolean;
  resetDeps?: readonly unknown[];
  entityName?: string;
};

export type PaginationResult<T> = {
  refs: {
    scrollToTarget: React.RefObject<HTMLDivElement | null>;
  };
  actions: {
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageClick: (page: number) => void;
    setSize: (size: number) => void;
    setPage: (page: number) => void;
    skipNextPageReset: () => void;
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
    pageSize: number;
  };
};
export const usePagination = <T>({
  initialPageSize,
  items,
  enabled = true,
  resetDeps,
  entityName,
}: UsePaginationProps<T>) => {
  const { currentPage, pageSize, setPagination, resetPaginationPage } =
    usePaginationState({ initialPageSize });

  const { onPrevClick, onNextClick, onPageClick, setSize, setPage } =
    usePaginationActions({
      setPagination,
      currentPage,
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
  } = usePaginationDerived({ currentPage, pageSize, items });

  const { scrollToTargetRef, skipNextPageReset } = usePaginationEffect({
    enabledResetPage: enabled,
    resetDeps,
    resetPaginationPage,
    currentPage,
    totalPages,
    pageSize,
    scrollTriggerDeps: [paginatedList],
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
        entityName,
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
      entityName,
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
