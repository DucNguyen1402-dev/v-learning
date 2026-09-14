import { usePaginationBoundaryEffect } from "./usePaginationBoundaryEffect";
import { usePaginationResetOnDepsEffect } from "./usePaginationResetOnDepsEffect";
import { usePaginationScrollEffect } from "./usePaginationScrollEffect";

type UsePaginationEffectProps = {
  resetPaginationPage: (newPage?: number) => void;
  totalPages: number;
  currentPage: number;
  hasPaginationChanged: React.RefObject<boolean>;
  resetPaginationChanged: () => void;
  enabledResetPage?: boolean;
  resetDeps?: readonly unknown[];
};

export function usePaginationEffect({
  resetPaginationPage,
  currentPage,
  totalPages,
  hasPaginationChanged,
  resetPaginationChanged,
  enabledResetPage,
  resetDeps,
}: UsePaginationEffectProps) {
  const {
    skipNextPageReset,
    setEnabledResetPage,
    setResetDeps,
    getHasJustResetPage,
    clearPageJustReset,
  } = usePaginationResetOnDepsEffect({
    resetPaginationPage,
    enabledResetPage,
    resetDeps,
  });

  const { scrollToTarget, scrollToTargetRef } = usePaginationScrollEffect({
    getHasJustResetPage,
    clearPageJustReset,
    resetPaginationChanged,
    hasPaginationChanged,
  });
  usePaginationBoundaryEffect({
    currentPage,
    totalPages,
    resetPaginationPage,
  });

  return {
    scrollToTargetRef,
    skipNextPageReset,
    scrollToTarget,
    setEnabledResetPage,
    setResetDeps,
  };
}
