import { type RefObject, useLayoutEffect, useRef } from "react";

import { isArrayShallowEqual } from "@shared/utils";

type UsePaginationScrollEffectProps = {
  currentPage: number;
  pageSize: number;
  scrollTriggerDeps?: readonly unknown[];
  enabledScrollToTarget?: boolean;
  hasJustResetPageRef: RefObject<boolean>;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
};

export function usePaginationScrollEffect({
  currentPage,
  pageSize,
  scrollTriggerDeps = [],
  enabledScrollToTarget = true,
  hasJustResetPageRef,
  scrollToTargetRef,
}: UsePaginationScrollEffectProps) {
  const prevScrollTriggerDeps = useRef(scrollTriggerDeps);
  const prevPageSize = useRef(pageSize);
  const prevCurrentPage = useRef(currentPage);

  useLayoutEffect(() => {
    const pageSizeChanged = prevPageSize.current !== pageSize;
    const currentPageChanged = prevCurrentPage.current !== currentPage;
    if (!pageSizeChanged && !currentPageChanged) return;

    prevPageSize.current = pageSize;
    prevCurrentPage.current = currentPage;

    if (scrollTriggerDeps.length > 0) {
      const triggerDepsChanged = !isArrayShallowEqual(
        prevScrollTriggerDeps.current,
        scrollTriggerDeps,
      );
      if (!triggerDepsChanged) return;

      prevScrollTriggerDeps.current = scrollTriggerDeps;
    }

    if (hasJustResetPageRef.current) {
      hasJustResetPageRef.current = false;
      return;
    }

    const targetElement = scrollToTargetRef.current;

    if (!targetElement || !enabledScrollToTarget) {
      return;
    }

    const rect = targetElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [
    currentPage,
    pageSize,
    enabledScrollToTarget,
    hasJustResetPageRef,

    scrollToTargetRef,
    scrollTriggerDeps,
  ]);
}
