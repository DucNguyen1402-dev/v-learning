import { useCallback, useRef, useState } from "react";

type UsePaginationStateProps = {
  pageSize?: number;
};

export function usePaginationState({ pageSize = 10 }: UsePaginationStateProps) {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize,
  });

  const hasJustResetPageRef = useRef(false);
  const skipNextPageResetRef = useRef(true);

  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);
  const nextScrollToTargetRef = useRef(false);

  const resetPaginationPage = useCallback(
    (newPage: number = 1) => {
      setPagination((prev) => ({ ...prev, page: newPage }));
      hasJustResetPageRef.current = true;
    },
    [setPagination],
  );
  const skipNextPageReset = () => (skipNextPageResetRef.current = true);

  const resetHasJustResetPage = () => (hasJustResetPageRef.current = false);

  const resetNextScrollToTarget = () => (nextScrollToTargetRef.current = false);
  const setNextScrollToTarget = () => (nextScrollToTargetRef.current = true);

  return {
    pagination,
    setPagination,
    skipNextPageResetRef,
    skipNextPageReset,
    scrollToTargetRef,
    nextScrollToTargetRef,
    resetNextScrollToTarget,
    setNextScrollToTarget,
    resetPaginationPage,
    resetHasJustResetPage,
    hasJustResetPageRef,
  };
}
