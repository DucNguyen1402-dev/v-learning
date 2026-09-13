import { type RefObject, useCallback, useLayoutEffect, useRef } from "react";

type UsePaginationScrollEffectProps = {
  currentPage: number;
  pageSize: number;
  hasJustResetPageRef: RefObject<boolean>;
};

export function usePaginationScrollEffect({
  currentPage,
  pageSize,
  hasJustResetPageRef,
}: UsePaginationScrollEffectProps) {
  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);

  const prevPageSize = useRef(pageSize);
  const prevCurrentPage = useRef(currentPage);
  const enabledScrollToTarget = useRef(false);
  const syncEnabledScrollToTarget = useCallback((value: boolean) => {
    enabledScrollToTarget.current = value;
  }, []);

  useLayoutEffect(() => {
    if (!scrollToTargetRef.current || !enabledScrollToTarget.current) {
      return;
    }
    enabledScrollToTarget.current = false;
    const pageSizeChanged = prevPageSize.current !== pageSize;

    const currentPageChanged = prevCurrentPage.current !== currentPage;

    if (!pageSizeChanged && !currentPageChanged) return;

    prevPageSize.current = pageSize;
    prevCurrentPage.current = currentPage;

    if (hasJustResetPageRef.current) {
      hasJustResetPageRef.current = false;
      return;
    }

    const rect = scrollToTargetRef.current.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [
    pageSize,
    currentPage,
    enabledScrollToTarget,
    hasJustResetPageRef,
    scrollToTargetRef,
  ]);

  return { scrollToTargetRef, syncEnabledScrollToTarget };
}
