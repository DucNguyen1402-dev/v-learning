import { type Dispatch, type RefObject, type SetStateAction } from "react";

import { usePaginationEffect as usePaginationEffectContext } from "../contexts";
type UsePaginationEffectProps = {
  scrollTriggerDeps?: readonly unknown[];
  enabled?: boolean;
  setPagination: Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
  resetDeps?: readonly unknown[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
  skipNextPageResetRef?: RefObject<boolean>;
  setSkipNextPageResetRef?: (value: boolean) => void;
  skipNextScrollToTargetRef?: RefObject<boolean>;
  setSkipNextScrollToTargetRef?: (value: boolean) => void;
};
export const usePaginationEffect = ({
  setPagination,
  resetDeps,
  currentPage,
  totalPages,
  pageSize,
  scrollToTargetRef,
  skipNextPageResetRef,
  scrollTriggerDeps,
  setSkipNextPageResetRef,
  skipNextScrollToTargetRef,
  setSkipNextScrollToTargetRef,
}: UsePaginationEffectProps) => {
  usePaginationEffectContext({
    setPagination,
    resetDeps,
    currentPage,
    totalPages,
    pageSize,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    scrollTriggerDeps,
    skipNextScrollToTargetRef,
    setSkipNextScrollToTargetRef,
  });
};
