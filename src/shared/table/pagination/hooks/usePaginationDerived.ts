import { useMemo } from "react";

import { createArray } from "@shared/utils";

type UsePaginationDerivedProps = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
};

export const usePaginationDerived = ({
  totalPages,
  currentPage,
  pageSize,
}: UsePaginationDerivedProps) =>
  useMemo(() => {
    const displayStart =
      totalPages === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const displayEnd = Math.min(currentPage * pageSize, totalPages * pageSize);

    const pageNumbers = createArray(totalPages, (_, index) => index + 1);

    return {
      displayStart,
      displayEnd,
      pageNumbers,
      isPrevDisabled: currentPage === 1,
      isNextDisabled: currentPage >= totalPages,
    };
  }, [totalPages, currentPage, pageSize]);
