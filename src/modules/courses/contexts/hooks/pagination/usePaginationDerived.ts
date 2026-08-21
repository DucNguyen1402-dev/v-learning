import { useMemo } from "react";

import { createArray } from "@shared/utils";
type UsePaginationDerivedProps = {
  pagination: { page: number; pageSize: number };
  totalPages: number;
};

export const usePaginationDerived = ({
  totalPages,
  pagination,
}: UsePaginationDerivedProps) =>
  useMemo(() => {
    const displayStart =
      totalPages === 0 ? 0 : (pagination.page - 1) * pagination.pageSize + 1;
    const displayEnd = Math.min(
      pagination.page * pagination.pageSize,
      totalPages * pagination.pageSize,
    );

    const pageNumbers = createArray(totalPages, (_, index) => index + 1);

    return {
      displayStart,
      displayEnd,
      pageNumbers,
      isPrevDisabled: pagination.page === 1,
      isNextDisabled: pagination.page >= totalPages,
    };
  }, [totalPages, pagination.page, pagination.pageSize]);
