import { useCallback, useRef, useState } from "react";

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

  const paginationChangedRef = useRef(false);
  const resetPaginationChanged = useCallback(() => {
    paginationChangedRef.current = false;
  }, []);

  const setSize = useCallback((value: number) => {
    setPagination((prev) => {
      if (prev.pageSize === value) return prev;
      paginationChangedRef.current = true;
      prevPagination.current = { page: 1, pageSize: value };
      return { pageSize: value, page: 1 };
    });
  }, []);

  const setPage = useCallback((value: number) => {
    setPagination((prev) => {
      if (prev.page === value) return prev;
      return { ...prev, page: value };
    });
  }, []);

  const onPrevClick = useCallback(() => {
    setPagination((prev) => {
      paginationChangedRef.current = true;
      prevPagination.current = { ...prev, page: prev.page - 1 };
      return { ...prev, page: prev.page - 1 };
    });
  }, []);

  const onNextClick = useCallback(() => {
    setPagination((prev) => {
      paginationChangedRef.current = true;
      prevPagination.current = { ...prev, page: prev.page + 1 };
      return { ...prev, page: prev.page + 1 };
    });
  }, []);

  const onPageClick = useCallback((page: number) => {
    setPagination((prev) => {
      paginationChangedRef.current = true;
      prevPagination.current = { ...prev, page };
      return { ...prev, page };
    });
  }, []);

  const resetPagination = useCallback(() => {
    setPagination((prev) => {
      if (prev.page === 1 && prev.pageSize === initialPageSize) return prev;
      return { pageSize: initialPageSize, page: 1 };
    });
  }, [initialPageSize]);

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
    resetPagination,
  };
}

export type UsePaginationStateResult = ReturnType<typeof usePaginationState>;
