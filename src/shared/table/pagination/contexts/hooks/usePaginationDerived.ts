import { useMemo } from "react";

import { createArray } from "@shared/utils";
type UsePaginationDerivedProps<T> = {
  pagination: { page: number; size: number };
  items: readonly T[] | undefined;
};

export const usePaginationDerived = <T>({
  pagination,
  items,
}: UsePaginationDerivedProps<T>) =>
  useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.size;

    const endIndex = pagination.page * pagination.size;

    const paginatedList = items?.slice(startIndex, endIndex) ?? [];

    const totalItems = items?.length ?? 0;
    const displayStart =
      totalItems === 0 ? 0 : (pagination.page - 1) * pagination.size + 1;
    const displayEnd = Math.min(pagination.page * pagination.size, totalItems);

    const totalPages = Math.ceil(totalItems / pagination.size);
    const pageNumbers = createArray(totalPages, (_, index) => index + 1);

    const pageOffset = (pagination.page - 1) * pagination.size;

    return {
      paginatedList,
      displayStart,
      totalItems,
      displayEnd,
      pageNumbers,
      isPrevDisabled: pagination.page === 1,
      isNextDisabled: pagination.page >= totalPages,
      pageOffset,
    };
  }, [pagination, items]);
