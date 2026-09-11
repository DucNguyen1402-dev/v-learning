import { usePaginationEffect as usePaginationEffectContext } from "../contexts";

type UsePaginationEffectProps = {
  enabledResetPage?: boolean;
  resetPaginationPage: (newPage?: number) => void;
  resetDeps?: readonly unknown[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  scrollTriggerDeps?: readonly unknown[];
  enabledScrollToTarget?: boolean;
};
export const usePaginationEffect = ({
  enabledResetPage = true,
  resetPaginationPage,
  resetDeps,
  currentPage,
  totalPages,
  pageSize,
  scrollTriggerDeps,
  enabledScrollToTarget,
}: UsePaginationEffectProps) =>
  usePaginationEffectContext({
    enabledResetPage,
    resetPaginationPage,
    resetDeps,
    currentPage,
    pageSize,
    totalPages,
    scrollTriggerDeps,
    enabledScrollToTarget,
  });
