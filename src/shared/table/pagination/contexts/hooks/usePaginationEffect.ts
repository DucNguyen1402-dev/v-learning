import { type RefObject, useEffect } from "react";

type UsePaginationEffectProps = {
  skipNextPageResetRef?: RefObject<boolean>;
  setSkipNextPageResetRef?: (value: boolean) => void;
  enabled?: boolean;
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; pageSize: number }>
  >;
  resetDeps?: readonly unknown[];
  totalPages: number;
  currentPage: number;
};
export function usePaginationEffect({
  skipNextPageResetRef,
  setSkipNextPageResetRef,
  enabled = true,
  setPagination,
  resetDeps,
  currentPage,
  totalPages,
}: UsePaginationEffectProps) {
  useEffect(() => {
    if (skipNextPageResetRef?.current) {
      setSkipNextPageResetRef?.(false);
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
    if (totalPages === 0) return;
    if (currentPage > totalPages) {
      setPagination((prev) => ({
        ...prev,
        page: totalPages,
      }));
    }
  }, [currentPage, setPagination, totalPages]);
}
