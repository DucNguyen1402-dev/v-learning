import { useCallback, useRef, useState } from "react";

import { isArrayShallowEqual } from "@shared/utils";

import { usePaginationEffect, usePaginationState } from "../contexts";
import { usePaginationDerived } from "./usePaginationDerived";

type PaginationMeta = {
  totalPage: number;
  resetDeps: readonly unknown[];
};

type PaginationMetaOptions = Partial<PaginationMeta>;
export const usePagination = (initialOptions?: {
  initialPageSize?: number;
}) => {
  const [meta, setMeta] = useState<PaginationMeta>({
    totalPage: 0,
    resetDeps: [],
  });

  const enabledResetPage = useRef(false);

  const syncEnabledResetPage = (value: boolean) => {
    enabledResetPage.current = value;
  };

  const updateMeta = useCallback(
    ({
      totalPage: nextTotalPage = 0,
      resetDeps: nextResetDeps = [],
    }: PaginationMetaOptions) => {
      setMeta((prev) => {
        if (
          prev.totalPage === nextTotalPage &&
          isArrayShallowEqual(prev.resetDeps, nextResetDeps)
        ) {
          return prev;
        }

        return {
          totalPage: nextTotalPage,
          resetDeps: nextResetDeps,
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

  const { scrollToTargetRef, skipNextPageReset, syncEnabledScrollToTarget } =
    usePaginationEffect({
      currentPage,
      totalPages: meta.totalPage,
      pageSize,
      resetPaginationPage,
      // eslint-disable-next-line react-hooks/refs
      enabledResetPage: enabledResetPage.current,
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
    syncEnabledResetPage,
    syncEnabledScrollToTarget,
  };
};
