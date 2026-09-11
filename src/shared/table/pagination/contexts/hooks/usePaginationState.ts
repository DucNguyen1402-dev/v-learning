import { useCallback, useState } from "react";

type UsePaginationStateProps = {
  initialPageSize?: number;
};

export function usePaginationState({
  initialPageSize = 10,
}: UsePaginationStateProps) {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: initialPageSize,
  });

  const resetPaginationPage = useCallback((newPage: number = 1) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  }, []);

  return {
    currentPage: pagination.page,
    setPagination,
    pageSize: pagination.pageSize,
    resetPaginationPage,
  };
}
