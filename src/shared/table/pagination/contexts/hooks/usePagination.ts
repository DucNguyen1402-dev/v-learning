import { useMemo, useRef } from "react";

import { usePaginationActions } from "./usePaginationActions";
import { usePaginationDerived } from "./usePaginationDerived";
import { usePaginationEffect } from "./usePaginationEffect";
import { usePaginationState } from "./usePaginationState";

type UsePaginationProps<T> = {
  pageSize?: number;
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
    preventNextResetPage: () => void;
    preventNextScrollToTarget: () => void;
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
  pageSize,
  items,
  enabled,
  resetDeps,
  entityName,
}: UsePaginationProps<T>) => {
  const {
    pagination,
    setPagination,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    scrollToTargetRef,
    skipNextScrollToTargetRef,
    setSkipNextScrollToTargetRef,
  } = usePaginationState({ pageSize });

  const {
    preventNextResetPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
    preventNextScrollToTarget,
  } = usePaginationActions({
    setPagination,
    pagination,
    setSkipNextPageResetRef,
    setSkipNextScrollToTargetRef,
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
  } = usePaginationDerived({ pagination, items });

  const prevPaginationPage = useRef(pagination.page);
  const prevPaginationPageSize = useRef(pagination.pageSize);

  // eslint-disable-next-line react-hooks/refs
  if (prevPaginationPage.current === pagination.page) {
    preventNextScrollToTarget();
  } else {
    // eslint-disable-next-line react-hooks/refs
    prevPaginationPage.current = pagination.page;
  }
  // eslint-disable-next-line react-hooks/refs
  if (prevPaginationPageSize.current === pagination.pageSize) {
    preventNextScrollToTarget();
  } else {
    // eslint-disable-next-line react-hooks/refs
    prevPaginationPageSize.current = pagination.pageSize;
  }

  usePaginationEffect({
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    enabled,
    resetDeps,
    setPagination,
    currentPage: pagination.page,
    totalPages,
    pageSize: pagination.pageSize,
    scrollToTargetRef,
    scrollTriggerDeps: [paginatedList],
    skipNextScrollToTargetRef,
    setSkipNextScrollToTargetRef,
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
        preventNextResetPage,
        preventNextScrollToTarget,
      },
      state: {
        entityName,
        currentPage: pagination.page,
        totalItems,
        isPrevDisabled,
        isNextDisabled,
        pageNumbers,
        displayStart,
        displayEnd,
        paginatedList,
        pageSize: pagination.pageSize,
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
      pagination.page,
      pagination.pageSize,
      preventNextResetPage,
      preventNextScrollToTarget,
      scrollToTargetRef,
      setPage,
      setSize,
      totalItems,
    ],
  );
};
