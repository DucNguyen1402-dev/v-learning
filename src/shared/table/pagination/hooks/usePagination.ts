import { useCallback, useState } from "react";

import { isArrayShallowEqual } from "@shared/utils";

import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationEffect } from "./usePaginationEffect";
import { usePaginationState } from "./usePaginationState";

type PaginationMeta = {
  totalPage: number;
  resetDeps: readonly unknown[];
  scrollTriggerDeps: readonly unknown[];
  enabledScrollToTarget: boolean;
  enabledResetPage: boolean;
};

type PaginationMetaOptions = Partial<PaginationMeta>;
export const usePagination = (initialOptions?: {
  initialPageSize?: number;
}) => {
  const [meta, setMeta] = useState<PaginationMeta>({
    totalPage: 0,
    resetDeps: [],
    scrollTriggerDeps: [],
    enabledScrollToTarget: false,
    enabledResetPage: false,
  });

  const updateMeta = useCallback(
    ({
      totalPage: nextTotalPage = 0,
      resetDeps: nextResetDeps = [],
      scrollTriggerDeps: nextScrollTriggerDeps = [],
      enabledScrollToTarget: nextEnabledScrollToTarget = false,
      enabledResetPage: nextEnabledResetPage = false,
    }: PaginationMetaOptions) => {
      setMeta((prev) => {
        if (
          prev.totalPage === nextTotalPage &&
          prev.enabledScrollToTarget === nextEnabledScrollToTarget &&
          prev.enabledResetPage === nextEnabledResetPage &&
          isArrayShallowEqual(prev.resetDeps, nextResetDeps) &&
          isArrayShallowEqual(prev.scrollTriggerDeps, nextScrollTriggerDeps)
        ) {
          return prev;
        }

        return {
          totalPage: nextTotalPage,
          resetDeps: nextResetDeps,
          scrollTriggerDeps: nextScrollTriggerDeps,
          enabledScrollToTarget: nextEnabledScrollToTarget,
          enabledResetPage: nextEnabledResetPage,
        };
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
  } = usePaginationState({ initialPageSize: initialOptions?.initialPageSize });

  const {
    displayStart,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
  } = usePaginationDerived({
    currentPage,
    pageSize,
    totalPages: meta.totalPage,
  });

  const { scrollToTargetRef, skipNextPageReset } = usePaginationEffect({
    currentPage,
    totalPages: meta.totalPage,
    pageSize,
    resetPaginationPage,
    resetDeps: meta.resetDeps,
    scrollTriggerDeps: meta.scrollTriggerDeps,
    enabledResetPage: meta.enabledResetPage,
    enabledScrollToTarget: meta.enabledScrollToTarget,
  });

  return {
    ref: {
      scrollToTarget: scrollToTargetRef,
    },
    state: {
      currentPage,
      pageSize,
      totalPage: meta.totalPage ?? 0,
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
    updateMeta,
  };
};
