import { useEffect } from "react";

type UsePaginationBoundaryEffectProps = {
  currentPage: number;
  totalPages: number;
  setPage: (value: number) => void;
};

export function usePaginationBoundaryEffect({
  currentPage,
  totalPages,
  setPage,
}: UsePaginationBoundaryEffectProps) {
  useEffect(() => {
    if (totalPages === 0) return;
    if (currentPage > totalPages) {
      setPage(totalPages);
    }
  }, [currentPage, setPage, totalPages]);
}
