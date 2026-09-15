import { useMemo } from "react";

import { createArray } from "@shared/utils";
type UsePaginationDerivedProps<T> = {
  currentPage: number;
  pageSize: number;
  items: readonly T[];
};

export const usePaginationDerived = <T>({
  currentPage,
  pageSize,
  items,
}: UsePaginationDerivedProps<T>) =>
  useMemo(() => {
    const paginatedList =
      items.slice((currentPage - 1) * pageSize, currentPage * pageSize) ?? [];

    const totalItems = items.length;
    const displayStart =
      totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const displayEnd = Math.min(currentPage * pageSize, totalItems);

    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const pageNumbers = createArray(totalPages, (_, index) => index + 1);

    return {
      paginatedList,
      displayStart,
      totalItems,
      displayEnd,
      pageNumbers,
      isPrevDisabled: currentPage === 1,
      isNextDisabled: currentPage >= totalPages,
      totalPages,
    };
  }, [currentPage, pageSize, items]);
