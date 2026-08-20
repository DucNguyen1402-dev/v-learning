import { useState } from "react";

type UsePaginationProps = {
  items: number[];
  pageSize: number;
  page?: number;
};
export const usePagination = ({
  items,
  pageSize,
  page,
}: UsePaginationProps) => {
  const [pagination, setPagination] = useState({
    page: page ?? 1,
    pageSize,
  });

  const totalPages = Math.ceil(items.length / pageSize);
  const paginatedItems = items.slice(
    (pagination.page - 1) * pageSize,
    pagination.page * pageSize,
  );
  const onPrevClick = () => {
    setPagination((prev) => ({ ...prev, page: Math.max(prev.page - 1, 1) }));
  };

  const onNextClick = () => {
    setPagination((prev) => ({
      ...prev,
      page: Math.min(prev.page + 1, totalPages),
    }));
  };

  const onPageClick = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  return {
    currentPage: pagination.page,
    paginatedItems,
    totalPages,
    onPrevClick,
    onNextClick,
    onPageClick,
  };
};
