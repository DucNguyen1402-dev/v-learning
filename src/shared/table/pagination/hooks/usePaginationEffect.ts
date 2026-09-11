import { type RefObject } from "react";

import { usePaginationEffect as usePaginationEffectContext } from "../contexts";
type UsePaginationEffectProps = {
  resetHasJustResetPage: () => void;
  enabledResetPage: boolean;
  scrollTriggerDeps: readonly unknown[];
  resetDeps?: readonly unknown[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
  skipNextPageResetRef?: RefObject<boolean>;
  skipNextPageReset: () => void;
  nextScrollToTargetRef: RefObject<boolean>;
  resetNextScrollToTarget: () => void;
  enabledScrollToTarget?: boolean;
  resetPaginationPage: (newPage?: number) => void;

  setNextScrollToTarget: () => void;
  hasJustResetPageRef: RefObject<boolean>;
};
export const usePaginationEffect = ({
  resetDeps,
  currentPage,
  totalPages,
  pageSize,
  scrollToTargetRef,
  skipNextPageResetRef,
  resetHasJustResetPage,
  scrollTriggerDeps,
  skipNextPageReset,
  nextScrollToTargetRef,
  enabledScrollToTarget,
  resetNextScrollToTarget,
  resetPaginationPage,
  setNextScrollToTarget,
  hasJustResetPageRef,
  enabledResetPage,
}: UsePaginationEffectProps) => {
  usePaginationEffectContext({
    skipNextPageResetRef,
    skipNextPageReset,
    enabledResetPage,
    resetPaginationPage,
    resetDeps,
    currentPage,
    pageSize,
    totalPages,
    scrollToTargetRef,
    scrollTriggerDeps,
    nextScrollToTargetRef,
    enabledScrollToTarget,
    hasJustResetPageRef,
    resetNextScrollToTarget,
    setNextScrollToTarget,
    resetHasJustResetPage,
  });
};
