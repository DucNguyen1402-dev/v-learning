import { useCallback, useState } from "react";

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

  const resetPaginationPage = useCallback((newPage: number = 1) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  }, []);

  return {
    currentPage: pagination.page,
    pageSize: pagination.pageSize,
    setPagination,
    setSize,
    setPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    resetPaginationPage,
  };
}
