import { useCallback, useRef } from "react";

import { usePaginationBoundaryEffect } from "./usePaginationBoundaryEffect";
import { usePaginationResetOnDepsEffect } from "./usePaginationResetOnDepsEffect";
import { usePaginationScrollEffect } from "./usePaginationScrollEffect";

type UsePaginationEffectProps = {
  enabledResetPage?: boolean;
  resetPaginationPage: (newPage?: number) => void;
  resetDeps?: readonly unknown[];
  totalPages: number;
  currentPage: number;
  pageSize: number;
  enabledScrollToTarget?: boolean;
};

export function usePaginationEffect({
  enabledResetPage = true,
  resetPaginationPage,
  resetDeps = [],
  currentPage,
  pageSize,
  totalPages,
  enabledScrollToTarget = true,
}: UsePaginationEffectProps) {
  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);

  const hasJustResetPageRef = useRef(false);
  const skipNextPageResetRef = useRef(false);

  const skipNextPageReset = useCallback(() => {
    skipNextPageResetRef.current = true;
  }, []);

  usePaginationScrollEffect({
    currentPage,
    pageSize,
    enabledScrollToTarget,
    hasJustResetPageRef,
    scrollToTargetRef,
  });

  usePaginationResetOnDepsEffect({
    enabledResetPage,
    resetPaginationPage,
    resetDeps,
    hasJustResetPageRef,
    skipNextPageResetRef,
  });

  usePaginationBoundaryEffect({
    currentPage,
    totalPages,
    resetPaginationPage,
  });

  return {
    scrollToTargetRef,
    skipNextPageReset,
  };
}
