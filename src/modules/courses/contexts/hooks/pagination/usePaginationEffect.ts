import { type Dispatch, type SetStateAction, useEffect } from "react";

type UsePaginationEffectProps<T> = {
  enabled?: boolean;
  setPagination: Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
  resetDeps?: readonly unknown[];
  pagination: { page: number; pageSize: number };
  items: readonly T[];
};
export const usePaginationEffect = <T>({
  enabled,
  setPagination,
  resetDeps,
  pagination,
  items,
}: UsePaginationEffectProps<T>) => {
  useEffect(() => {
    if (!enabled) return;

    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(resetDeps ?? []), setPagination, enabled]);

  useEffect(() => {
    const totalPages = Math.max(
      1,
      Math.ceil(items.length / pagination.pageSize),
    );

    if (pagination.page > totalPages) {
      setPagination((prev) => ({
        ...prev,
        page: totalPages,
      }));
    }
  }, [items.length, pagination.page, pagination.pageSize, setPagination]);
};
