import { type RefObject, useEffect, useLayoutEffect, useRef } from "react";

type UsePaginationEffectProps = {
  skipNextPageResetRef?: RefObject<boolean>;
  skipNextPageReset: () => void;
  enabledResetPage: boolean;
  resetPaginationPage: (newPage?: number) => void;
  resetDeps?: readonly unknown[];
  totalPages: number;
  currentPage: number;
  pageSize: number;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
  scrollTriggerDeps?: readonly unknown[];
  nextScrollToTargetRef: RefObject<boolean>;
  resetNextScrollToTarget: () => void;
  enabledScrollToTarget?: boolean;
  hasJustResetPageRef: RefObject<boolean>;
  setNextScrollToTarget: () => void;
  resetHasJustResetPage: () => void;
};
export function usePaginationEffect({
  skipNextPageResetRef,
  skipNextPageReset,
  enabledResetPage = true,
  resetPaginationPage,
  resetDeps = [],
  currentPage,
  pageSize,
  totalPages,
  scrollToTargetRef,
  scrollTriggerDeps = [],
  nextScrollToTargetRef,
  enabledScrollToTarget = true,
  hasJustResetPageRef,
  resetNextScrollToTarget,
  setNextScrollToTarget,
  resetHasJustResetPage,
}: UsePaginationEffectProps) {
  const prevPaginationPage = useRef(currentPage);
  const prevPaginationPageSize = useRef(pageSize);

  useLayoutEffect(() => {
    const pageChanged = prevPaginationPage.current !== currentPage;
    const pageSizeChanged = prevPaginationPageSize.current !== pageSize;

    if (!pageChanged && !pageSizeChanged) return;

    prevPaginationPage.current = currentPage;
    prevPaginationPageSize.current = pageSize;

    if (hasJustResetPageRef.current) {
      resetHasJustResetPage();
    } else {
      setNextScrollToTarget();
    }
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...scrollTriggerDeps,
    currentPage,
    hasJustResetPageRef,
    nextScrollToTargetRef,
    pageSize,
    resetHasJustResetPage,
    setNextScrollToTarget,
  ]);

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

    resetNextScrollToTarget();
  }, [
    pageSize,
    currentPage,
    scrollToTargetRef,
    nextScrollToTargetRef,
    enabledScrollToTarget,
    resetNextScrollToTarget,
  ]);

  useEffect(() => {
    if (skipNextPageResetRef?.current) {
      skipNextPageReset();
      return;
    }
    if (!enabledResetPage) return;

    resetPaginationPage();
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...resetDeps,
    resetPaginationPage,
    enabledResetPage,
    skipNextPageResetRef,
    skipNextPageReset,
  ]);

  useEffect(() => {
    if (totalPages === 0) return;
    if (currentPage > totalPages) {
      resetPaginationPage(totalPages);
    }
  }, [currentPage, resetPaginationPage, totalPages]);
}
