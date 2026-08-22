import { useMemo } from "react";

import { createArray } from "@shared/utils";
type UsePaginationDerivedProps<T> = {
  pagination: { page: number; pageSize: number };
  items: readonly T[] | undefined;
};

export const usePaginationDerived = <T>({
  pagination,
  items,
}: UsePaginationDerivedProps<T>) =>
  useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.pageSize;

    const endIndex = pagination.page * pagination.pageSize;

    const paginatedList = items?.slice(startIndex, endIndex) ?? [];

    const totalItems = items?.length ?? 0;
    const displayStart =
      totalItems === 0 ? 0 : (pagination.page - 1) * pagination.pageSize + 1;
    const displayEnd = Math.min(
      pagination.page * pagination.pageSize,
      totalItems,
    );

    const totalPages = Math.max(1, Math.ceil(totalItems / pagination.pageSize));
    const pageNumbers = createArray(totalPages, (_, index) => index + 1);

    return {
      paginatedList,
      displayStart,
      totalItems,
      displayEnd,
      pageNumbers,
      isPrevDisabled: pagination.page === 1,
      isNextDisabled: pagination.page >= totalPages,
      totalPages,
    };
  }, [pagination, items]);
