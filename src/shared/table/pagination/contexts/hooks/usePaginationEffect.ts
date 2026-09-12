import { useCallback, useRef } from "react";

import {
  usePaginationBoundaryEffect,
  usePaginationResetOnDepsEffect,
  usePaginationScrollEffect,
} from "./effects";

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
  const skipNextPageResetRef = useRef(false);

  const skipNextPageReset = useCallback(() => {
    skipNextPageResetRef.current = true;
  }, []);

  usePaginationScrollEffect({
    currentPage,
    pageSize,
    scrollTriggerDeps,
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
