import { useCallback, useLayoutEffect, useRef, useState } from "react";

type UsePaginationStateProps = {
  initialPageSize?: number;
};

export function usePaginationState({
  initialPageSize = 10,
}: UsePaginationStateProps = {}) {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: initialPageSize,
  });

  const prevPagination = useRef(pagination);
  // Notifies that the next change in pagination is due to a reset, so the effect should ignore it when recording changes
  const isResetPendingRef = useRef(false);
  const [resetTick, setResetTick] = useState(0);

  const requestReset = useCallback(() => {
    setResetTick((prev) => prev + 1);
    isResetPendingRef.current = true;
  }, []);

  const paginationChangedRef = useRef(false);
  const resetPaginationChanged = useCallback(() => {
    paginationChangedRef.current = false;
  }, []);

  useLayoutEffect(() => {
    if (isResetPendingRef.current) {
      isResetPendingRef.current = false;
      prevPagination.current = pagination;
      return;
    }

    const hasChanged =
      prevPagination.current.page !== pagination.page ||
      prevPagination.current.pageSize !== pagination.pageSize;

    if (!hasChanged) return;
    prevPagination.current = pagination;

    paginationChangedRef.current = true;
  }, [pagination, resetTick]);

  const setSize = useCallback((value: number) => {
    setPagination((prev) => ({ ...prev, pageSize: value, page: 1 }));
  }, []);

  const setPage = useCallback((value: number) => {
    setPagination((prev) => ({ ...prev, page: value }));
  }, []);

  const onPrevClick = useCallback(() => {
    setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
  }, []);

  const onNextClick = useCallback(() => {
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
  }, []);

  const onPageClick = useCallback((page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  }, []);

  const resetPaginationPage = useCallback(() => {
    setPagination((prev) => ({ ...prev, page: 1 }));
    requestReset();
  }, [requestReset]);

  const resetPagination = useCallback(() => {
    setPagination({
      page: 1,
      pageSize: initialPageSize,
    });
    requestReset();
  }, [requestReset, initialPageSize]);

  return {
    currentPage: pagination.page,
    pageSize: pagination.pageSize,
    setPagination,
    setSize,
    setPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    hasPaginationChanged: useCallback(() => paginationChangedRef.current, []),
    resetPaginationChanged,
    resetPagination: {
      all: resetPagination,
      page: resetPaginationPage,
    },
  };
}

export type UsePaginationStateResult = ReturnType<typeof usePaginationState>;
