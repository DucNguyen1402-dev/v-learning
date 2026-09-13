import { useCallback, useState } from "react";

import { isArrayShallowEqual } from "@shared/utils";

import { usePaginationEffect, usePaginationState } from "../contexts";
import { usePaginationDerived } from "./usePaginationDerived";

type PaginationMeta = {
  totalPage: number;
  resetDeps: readonly unknown[];
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
    enabledScrollToTarget: false,
    enabledResetPage: false,
  });

  const updateMeta = useCallback(
    ({
      totalPage: nextTotalPage = 0,
      resetDeps: nextResetDeps = [],
      enabledScrollToTarget: nextEnabledScrollToTarget = false,
      enabledResetPage: nextEnabledResetPage = false,
    }: PaginationMetaOptions) => {
      setMeta((prev) => {
        if (
          prev.totalPage === nextTotalPage &&
          prev.enabledScrollToTarget === nextEnabledScrollToTarget &&
          prev.enabledResetPage === nextEnabledResetPage &&
          isArrayShallowEqual(prev.resetDeps, nextResetDeps)
        ) {
          return prev;
        }

        return {
          totalPage: nextTotalPage,
          resetDeps: nextResetDeps,
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
