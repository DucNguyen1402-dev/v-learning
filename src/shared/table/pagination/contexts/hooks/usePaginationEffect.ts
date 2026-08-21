import { type RefObject, useEffect } from "react";

type UsePaginationEffectProps<T> = {
  skipNextPageResetRef: RefObject<boolean>;
  setSkipNextPageResetRef: (value: boolean) => void;
  enabled?: boolean;
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; size: number }>
  >;
  resetDeps?: readonly unknown[];
  pagination: { page: number; size: number };
  items: readonly T[];
};
export function usePaginationEffect<T>({
  skipNextPageResetRef,
  setSkipNextPageResetRef,
  enabled,
  setPagination,
  resetDeps,
  pagination,
  items,
}: UsePaginationEffectProps<T>) {
  useEffect(() => {
    if (skipNextPageResetRef.current) {
      setSkipNextPageResetRef(false);
      return;
    }
    if (!enabled) return;

    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(resetDeps ?? []), setPagination, enabled]);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(items.length / pagination.size));

    if (pagination.page > totalPages) {
      setPagination((prev) => ({
        ...prev,
        page: totalPages,
      }));
    }
  }, [items.length, pagination.page, pagination.size, setPagination]);
}
