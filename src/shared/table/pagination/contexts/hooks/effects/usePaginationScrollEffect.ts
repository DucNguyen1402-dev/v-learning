import { type RefObject, useLayoutEffect, useRef } from "react";

type UsePaginationScrollEffectProps = {
  currentPage: number;
  pageSize: number;
  enabledScrollToTarget?: boolean;
  hasJustResetPageRef: RefObject<boolean>;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
};

export function usePaginationScrollEffect({
  currentPage,
  pageSize,
  enabledScrollToTarget = true,
  hasJustResetPageRef,
  scrollToTargetRef,
}: UsePaginationScrollEffectProps) {
  const prevPageSize = useRef(pageSize);
  const prevCurrentPage = useRef(currentPage);

  useLayoutEffect(() => {
    const pageSizeChanged = prevPageSize.current !== pageSize;
    const currentPageChanged = prevCurrentPage.current !== currentPage;
    if (!pageSizeChanged && !currentPageChanged) return;

    prevPageSize.current = pageSize;
    prevCurrentPage.current = currentPage;

    if (hasJustResetPageRef.current) {
      hasJustResetPageRef.current = false;
      return;
    }

    if (!scrollToTargetRef.current || !enabledScrollToTarget) {
      return;
    }

    const rect = scrollToTargetRef.current.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [
    currentPage,
    pageSize,
    enabledScrollToTarget,
    hasJustResetPageRef,
    scrollToTargetRef,
  ]);
}
