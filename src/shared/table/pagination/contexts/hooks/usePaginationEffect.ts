import { type RefObject, useEffect, useLayoutEffect } from "react";

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
  pageSize: number;
  isFirstRender: RefObject<boolean>;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
};
export function usePaginationEffect({
  skipNextPageResetRef,
  setSkipNextPageResetRef,
  enabled = true,
  setPagination,
  resetDeps,
  currentPage,
  pageSize,
  totalPages,
  isFirstRender,
  scrollToTargetRef,
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

  // eslint-disable-next-line react-hooks/immutability
  useLayoutEffect(() => {
    const targetElement = scrollToTargetRef?.current;
    if (!targetElement) return;
    if (isFirstRender.current) {
      // eslint-disable-next-line react-hooks/immutability
      isFirstRender.current = false;
      return;
    }

    const rect = targetElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;

    window.scrollTo({ top: targetTop, behavior: "instant" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, currentPage]);
}
