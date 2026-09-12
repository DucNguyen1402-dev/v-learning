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
  const skipNextScrollToTargetRef = useRef(false);
  const prevPaginationPage = useRef(currentPage);
  const prevPaginationPageSize = useRef(pageSize);
  const prevScrollTriggerDeps = useRef(scrollTriggerDeps);

  useLayoutEffect(() => {
    const pageChanged = prevPaginationPage.current !== currentPage;
    const pageSizeChanged = prevPaginationPageSize.current !== pageSize;
    const triggerDepsChanged = !isArrayShallowEqual(
      prevScrollTriggerDeps.current,
      scrollTriggerDeps,
    );

    prevScrollTriggerDeps.current = scrollTriggerDeps;

    if (!pageChanged && !pageSizeChanged && !triggerDepsChanged) return;

    prevPaginationPage.current = currentPage;
    prevPaginationPageSize.current = pageSize;

    if (hasJustResetPageRef.current) {
      hasJustResetPageRef.current = false;
    } else {
      skipNextScrollToTargetRef.current = true;
    }
  }, [
    scrollTriggerDeps,
    currentPage,
    pageSize,
    hasJustResetPageRef,
    scrollToTargetRef,
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
  }, [pageSize, currentPage, enabledScrollToTarget, scrollToTargetRef]);
}
