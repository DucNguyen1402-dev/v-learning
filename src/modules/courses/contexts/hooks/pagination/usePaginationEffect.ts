import { type Dispatch, type SetStateAction, useEffect } from "react";

type UsePaginationEffectProps = {
  enabled?: boolean;
  setPagination: Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
  resetDeps?: readonly unknown[];
  pagination: { page: number; pageSize: number };
  totalPages: number;
};
export const usePaginationEffect = ({
  setPagination,
  resetDeps,
  pagination,
  totalPages,
}: UsePaginationEffectProps) => {
  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(resetDeps ?? []), setPagination]);

  useEffect(() => {
    if (totalPages === 0) return;
    if (pagination.page > totalPages) {
      setPagination((prev) => ({
        ...prev,
        page: totalPages,
      }));
    }
  }, [pagination.page, pagination.pageSize, setPagination, totalPages]);
};
