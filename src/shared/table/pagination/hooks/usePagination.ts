import { useCallback, useState } from "react";

import { usePaginationEffect, usePaginationState } from "../contexts";
import { usePaginationDerived } from "./usePaginationDerived";

type PaginationMeta = {
  totalPages: number;
  totalItems: number;
};

type PaginationMetaOptions = Partial<PaginationMeta>;
export const usePagination = (initialOptions?: {
  initialPageSize?: number;
}) => {
  const [meta, setMeta] = useState<PaginationMeta>({
    totalPages: 0,
    totalItems: 0,
  });

  const syncPaginationMeta = useCallback(
    ({
      totalPages: nextTotalPages,
      totalItems: nextTotalItems,
    }: PaginationMetaOptions) => {
      setMeta((prev) => {
        const resolvedTotalPages = nextTotalPages ?? prev.totalPages;
        const resolvedTotalItems = nextTotalItems ?? prev.totalItems;

        if (
          prev.totalPages === resolvedTotalPages &&
          prev.totalItems === resolvedTotalItems
        ) {
          return prev;
        }

        return {
          totalPages: resolvedTotalPages,
          totalItems: resolvedTotalItems,
        };
      });
    },
    [],
  );

  const {
    currentPage,
    pageSize,
    resetPaginationPage,
    hasPaginationChanged,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
    resetPaginationChanged,
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
    totalPages: meta.totalPages,
    totalItems: meta.totalItems,
  });

  const {
    scrollToTargetRef,
    skipNextPageReset,
    scrollToTarget,
    setEnabledResetPage,
    setResetDeps,
  } = usePaginationEffect({
    currentPage,
    totalPages: meta.totalPages,
    resetPaginationPage,
    hasPaginationChanged,
    resetPaginationChanged,
  });

  return {
    flags: {
      hasPaginationChanged: () => hasPaginationChanged.current,
    },
    refs: {
      scrollToTarget: scrollToTargetRef,
    },
    state: {
      currentPage,
      pageSize,
      totalPages: meta.totalPages,
      totalItems: meta.totalItems,
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
    },
    config: {
      syncPaginationMeta,
      setEnabledResetPage,
      setResetDeps,
    },
    controls: {
      scrollToTarget,
      skipNextPageReset,
    },
  };
};
