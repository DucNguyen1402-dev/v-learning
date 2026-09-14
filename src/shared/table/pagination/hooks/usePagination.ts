import { useCallback, useState } from "react";

import { usePaginationEffect, usePaginationState } from "../contexts";
import { usePaginationDerived } from "./usePaginationDerived";

type PaginationMeta = {
  totalPage: number;
};

type PaginationMetaOptions = Partial<PaginationMeta>;
export const usePagination = (initialOptions?: {
  initialPageSize?: number;
}) => {
  const [meta, setMeta] = useState<PaginationMeta>({
    totalPage: 0,
  });

  const updateMeta = useCallback(
    ({ totalPage: nextTotalPage = 0 }: PaginationMetaOptions) => {
      setMeta((prev) => {
        if (prev.totalPage === nextTotalPage) {
          return prev;
        }

        return {
          totalPage: nextTotalPage,
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

  const {
    scrollToTargetRef,
    skipNextPageReset,
    setScrollToTarget,
    setEnabledResetPage,
    setResetDeps,
  } = usePaginationEffect({
    currentPage,
    totalPages: meta.totalPage,
    resetPaginationPage,
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
    setEnabledResetPage,
    setResetDeps,
    setScrollToTarget,
  };
};
