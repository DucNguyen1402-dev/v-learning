import { useState } from "react";

type UsePaginationProps = {
  items: readonly number[];
  pageSize?: number;
};
export const usePagination = ({ items, pageSize = 5 }: UsePaginationProps) => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize,
  });

  const totalPages = Math.ceil(items.length / pagination.pageSize);
  const startIndex = (pagination.page - 1) * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);

  const onPrevClick = () =>
    setPagination((prev) => ({
      ...prev,
      page: Math.max(prev.page - 1, 1),
    }));
  const onNextClick = () =>
    setPagination((prev) => ({
      ...prev,
      page: Math.min(prev.page + 1, totalPages),
    }));

  return {
    paginatedItems,
    onPrevClick,
    onNextClick,
    currentLocalPageSize: pagination.pageSize,
  };
};
