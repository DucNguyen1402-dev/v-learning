import type { UsePaginationStateResult } from "../usePaginationState";
import { usePaginationBoundaryEffect } from "./usePaginationBoundaryEffect";
import { usePaginationResetOnDepsEffect } from "./usePaginationResetOnDepsEffect";
import { usePaginationScrollEffect } from "./usePaginationScrollEffect";

type UsePaginationEffectProps = {
  resetPagination: UsePaginationStateResult["resetPagination"];
  totalPages: number;
  currentPage: number;
  hasPaginationChanged: () => boolean;
  resetPaginationChanged: () => void;
  enabledResetPage?: boolean;
  resetDeps?: readonly unknown[];
  setPage: (value: number) => void;
};

export function usePaginationEffect({
  resetPagination,
  currentPage,
  totalPages,
  hasPaginationChanged,
  resetPaginationChanged,
  resetDeps,
  setPage,
}: UsePaginationEffectProps) {
  const { scrollToTarget, scrollToTargetRef } = usePaginationScrollEffect({
    resetPaginationChanged,
    hasPaginationChanged,
  });

  const { skipNextPageReset, setResetDeps } = usePaginationResetOnDepsEffect({
    resetPagination,
    resetDeps,
  });

  usePaginationBoundaryEffect({
    currentPage,
    totalPages,
    setPage,
  });

  return {
    scrollToTargetRef,
    skipNextPageReset,
    scrollToTarget,
    setResetDeps,
  };
}
