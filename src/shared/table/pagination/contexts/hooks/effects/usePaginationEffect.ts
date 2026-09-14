import { useRef } from "react";

import { usePaginationBoundaryEffect } from "./usePaginationBoundaryEffect";
import { usePaginationResetOnDepsEffect } from "./usePaginationResetOnDepsEffect";
import { usePaginationScrollEffect } from "./usePaginationScrollEffect";

type UsePaginationEffectProps = {
  resetPaginationPage: (newPage?: number) => void;
  totalPages: number;
  currentPage: number;
};

export function usePaginationEffect({
  resetPaginationPage,
  currentPage,
  totalPages,
}: UsePaginationEffectProps) {
  const hasJustResetPageRef = useRef(false);

  const { setScrollToTarget, scrollToTargetRef } = usePaginationScrollEffect({
    hasJustResetPageRef,
  });

  const { skipNextPageReset, setEnabledResetPage, setResetDeps } =
    usePaginationResetOnDepsEffect({
      resetPaginationPage,
      hasJustResetPageRef,
    });

  usePaginationBoundaryEffect({
    currentPage,
    totalPages,
    resetPaginationPage,
  });

  return {
    scrollToTargetRef,
    skipNextPageReset,
    setScrollToTarget,
    setEnabledResetPage,
    setResetDeps,
  };
}
