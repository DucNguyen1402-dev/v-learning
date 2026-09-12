import { useCallback, useState } from "react";

import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationEffect } from "./usePaginationEffect";
import { usePaginationState } from "./usePaginationState";

type ResetPaginationParams = {
  totalPage: number;
  resetDeps: readonly unknown[];
  scrollTriggerDeps: readonly unknown[];
  enabledScrollToTarget: boolean;
};

export const usePagination = () => {
  const [paginationParams, setPaginationParams] =
    useState<ResetPaginationParams>({
      totalPage: 0,
      resetDeps: [],
      scrollTriggerDeps: [],
      enabledScrollToTarget: false,
    });

  const resetPagination = useCallback(
    ({
      totalPage,
      resetDeps,
      scrollTriggerDeps,
      enabledScrollToTarget,
    }: ResetPaginationParams) => {
      setPaginationParams({
        totalPage,
        resetDeps,
        scrollTriggerDeps,
        enabledScrollToTarget,
      });
    },
    [],
  );

  const {
    currentPage,
    pageSize,
    resetPaginationPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  } = usePaginationState();

  const {
    displayStart,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
  } = usePaginationDerived({
    currentPage,
    pageSize,
    totalPages: paginationParams.totalPage,
  });

  const { scrollToTargetRef, skipNextPageReset } = usePaginationEffect({
    currentPage,
    totalPages: paginationParams.totalPage,
    pageSize,
    resetPaginationPage,
    resetDeps: paginationParams.resetDeps,
    scrollTriggerDeps: paginationParams.scrollTriggerDeps,
    enabledResetPage: true,
    enabledScrollToTarget: paginationParams.enabledScrollToTarget,
  });

  return {
    ref: {
      scrollToTarget: scrollToTargetRef,
    },
    state: {
      currentPage,
      pageSize,
      totalPage: paginationParams.totalPage,
      displayStart,
      displayEnd,
      pageNumbers,
      isPrevDisabled,
      isNextDisabled,
    },
    actions: {
      onPrevClick,
      onNextClick,
      onPageClick,
      setSize,
      setPage,
      skipNextPageReset,
    },
    resetPagination,
  };
};
