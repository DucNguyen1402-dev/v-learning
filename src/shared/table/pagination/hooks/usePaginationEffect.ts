import { type RefObject } from "react";

import { usePaginationEffect as usePaginationEffectContext } from "../contexts";
type UsePaginationEffectProps = {
  scrollTriggerDeps?: readonly unknown[];
  enabled?: boolean;
  resetDeps?: readonly unknown[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
  skipNextPageResetRef?: RefObject<boolean>;
  setSkipNextPageResetRef?: (value: boolean) => void;
  nextScrollToTargetRef?: RefObject<boolean>;
  resetNextScrollToTarget?: () => void;
  enabledScrollToTarget?: boolean;
  resetPaginationPage: (newPage?: number) => void;
};
export const usePaginationEffect = ({
  resetDeps,
  currentPage,
  totalPages,
  pageSize,
  scrollToTargetRef,
  skipNextPageResetRef,
  scrollTriggerDeps,
  setSkipNextPageResetRef,
  nextScrollToTargetRef,
  enabledScrollToTarget,
  resetNextScrollToTarget,
  resetPaginationPage,
}: UsePaginationEffectProps) => {
  usePaginationEffectContext({
    resetPaginationPage,
    resetDeps,
    currentPage,
    totalPages,
    pageSize,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    scrollTriggerDeps,
    nextScrollToTargetRef,
    resetNextScrollToTarget,
    enabledScrollToTarget,
  });
};
