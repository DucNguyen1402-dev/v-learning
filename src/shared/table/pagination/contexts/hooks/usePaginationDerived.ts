import { useMemo } from "react";

type UsePaginationDerivedProps<T extends object> = {
  pagination: { page: number; size: number };
  items: readonly T[] | undefined;
};

export const usePaginationDerived = <T extends object>({
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

    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );

    const isPrevDisabled = pagination.page === 1;
    const isNextDisabled = pagination.page >= totalPages;

    const pageOffset = (pagination.page - 1) * pagination.size;

    return {
      paginatedList,
      displayStart,
      totalItems,
      displayEnd,
      pageNumbers,
      isPrevDisabled,
      isNextDisabled,
      pageOffset,
    };
  }, [pagination, items]);
