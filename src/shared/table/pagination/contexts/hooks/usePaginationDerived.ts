import { useMemo } from "react";

import { createArray } from "@shared/utils";
type UsePaginationDerivedProps<T> = {
  currentPage: number;
  pageSize: number;
  items: readonly T[] | undefined;
};

export const usePaginationDerived = <T>({
  currentPage,
  pageSize,
  items,
}: UsePaginationDerivedProps<T>) =>
  useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;

    const endIndex = currentPage * pageSize;

    const paginatedList = items?.slice(startIndex, endIndex) ?? [];

    const totalItems = items?.length ?? 0;
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
