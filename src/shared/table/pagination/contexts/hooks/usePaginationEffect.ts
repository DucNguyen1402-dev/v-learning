import { type RefObject, useEffect, useLayoutEffect } from "react";

type UsePaginationEffectProps = {
  skipNextPageResetRef?: RefObject<boolean>;
  setSkipNextPageResetRef?: (value: boolean) => void;
  enabled?: boolean;
  resetPaginationPage: (newPage?: number) => void;
  resetDeps?: readonly unknown[];
  totalPages: number;
  currentPage: number;
  pageSize: number;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
  scrollTriggerDeps?: readonly unknown[];
  nextScrollToTargetRef?: RefObject<boolean>;
  resetNextScrollToTarget?: () => void;
  enabledScrollToTarget?: boolean;
};
export function usePaginationEffect({
  skipNextPageResetRef,
  setSkipNextPageResetRef,
  enabled = true,
  resetPaginationPage,
  resetDeps = [],
  currentPage,
  pageSize,
  totalPages,
  scrollToTargetRef,
  scrollTriggerDeps = [],
  nextScrollToTargetRef,
  enabledScrollToTarget = false,
  resetNextScrollToTarget,
}: UsePaginationEffectProps) {
  useEffect(() => {
    if (skipNextPageResetRef?.current) {
      setSkipNextPageResetRef?.(false);
      return;
    }
    if (!enabled) return;

    resetPaginationPage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...resetDeps, resetPaginationPage, enabled]);

  useEffect(() => {
    if (totalPages === 0) return;
    if (currentPage > totalPages) {
      resetPaginationPage(totalPages);
    }
  }, [currentPage, resetPaginationPage, totalPages]);

  useLayoutEffect(() => {
    const targetElement = scrollToTargetRef?.current;
    if (
      !targetElement ||
      !nextScrollToTargetRef?.current ||
      !enabledScrollToTarget
    ) {
      return;
    }
    const rect = targetElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: targetTop, behavior: "instant" });

    resetNextScrollToTarget?.();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, currentPage, ...scrollTriggerDeps]);
}
