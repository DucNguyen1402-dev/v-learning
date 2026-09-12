import { useEffect } from "react";

type UsePaginationBoundaryEffectProps = {
  currentPage: number;
  totalPages: number;
  resetPaginationPage: (newPage?: number) => void;
};

export function usePaginationBoundaryEffect({
  currentPage,
  totalPages,
  resetPaginationPage,
}: UsePaginationBoundaryEffectProps) {
  useEffect(() => {
    if (totalPages === 0) return;
    if (currentPage > totalPages) {
      resetPaginationPage(totalPages);
    }
  }, [currentPage, resetPaginationPage, totalPages]);
}
