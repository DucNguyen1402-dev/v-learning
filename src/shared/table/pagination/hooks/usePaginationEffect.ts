import { type Dispatch, type RefObject, type SetStateAction } from "react";

import { usePaginationEffect as usePaginationEffectContext } from "../contexts";
type UsePaginationEffectProps = {
  enabled?: boolean;
  setPagination: Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
  resetDeps?: readonly unknown[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  isFirstRender: RefObject<boolean>;
  scrollToTargetRef: RefObject<HTMLDivElement | null>;
  skipNextPageResetRef?: RefObject<boolean>;
  setSkipNextPageResetRef?: (value: boolean) => void;
};
export const usePaginationEffect = ({
  setPagination,
  resetDeps,
  currentPage,
  totalPages,
  pageSize,
  isFirstRender,
  scrollToTargetRef,
  skipNextPageResetRef,
  setSkipNextPageResetRef,
}: UsePaginationEffectProps) => {
  usePaginationEffectContext({
    setPagination,
    resetDeps,
    currentPage,
    totalPages,
    pageSize,
    isFirstRender,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
  });
};
