import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

type UsePaginationEffectProps = {
  enabledResetPage?: boolean;
  resetPaginationPage: (newPage?: number) => void;
  resetDeps?: readonly unknown[];
  totalPages: number;
  currentPage: number;
  pageSize: number;
  scrollTriggerDeps?: readonly unknown[];
  enabledScrollToTarget?: boolean;
};

// Owns every ref needed to drive the reset-page / scroll-into-view effects;
// only `scrollToTargetRef` (for DOM attachment) and `skipNextPageReset` (public
// escape hatch) ever leave this hook.
export function usePaginationEffect({
  enabledResetPage = true,
  resetPaginationPage,
  resetDeps = [],
  currentPage,
  pageSize,
  totalPages,
  scrollTriggerDeps = [],
  enabledScrollToTarget = true,
}: UsePaginationEffectProps) {
  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);

  const hasJustResetPageRef = useRef(false);
  const skipNextScrollToTargetRef = useRef(false);
  const skipNextPageResetRef = useRef(false);

  const skipNextPageReset = useCallback(() => {
    skipNextPageResetRef.current = true;
  }, []);

  const prevPaginationPage = useRef(currentPage);
  const prevPaginationPageSize = useRef(pageSize);

  useLayoutEffect(() => {
    const pageChanged = prevPaginationPage.current !== currentPage;
    const pageSizeChanged = prevPaginationPageSize.current !== pageSize;

    if (!pageChanged && !pageSizeChanged) return;

    prevPaginationPage.current = currentPage;
    prevPaginationPageSize.current = pageSize;

    if (hasJustResetPageRef.current) {
      hasJustResetPageRef.current = false;
    } else {
      skipNextScrollToTargetRef.current = true;
    }
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...scrollTriggerDeps,
    currentPage,
    pageSize,
  ]);

  useLayoutEffect(() => {
    const targetElement = scrollToTargetRef.current;
    if (
      !targetElement ||
      !skipNextScrollToTargetRef.current ||
      !enabledScrollToTarget
    ) {
      return;
    }

    const rect = targetElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: targetTop, behavior: "instant" });

    skipNextScrollToTargetRef.current = false;
  }, [pageSize, currentPage, enabledScrollToTarget]);

  useEffect(() => {
    if (skipNextPageResetRef.current) {
      skipNextPageResetRef.current = false;
      return;
    }
    if (!enabledResetPage) return;

    resetPaginationPage();
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...resetDeps,
    resetPaginationPage,
    enabledResetPage,
  ]);

  useEffect(() => {
    if (totalPages === 0) return;
    if (currentPage > totalPages) {
      resetPaginationPage(totalPages);
    }
  }, [currentPage, resetPaginationPage, totalPages]);

  return {
    scrollToTargetRef,
    skipNextPageReset,
  };
}
