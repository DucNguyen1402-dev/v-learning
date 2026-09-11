import { useCallback, useLayoutEffect, useRef, useState } from "react";

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

  const resetNextScrollToTarget = () => (nextScrollToTargetRef.current = false);

  const setSkipNextPageResetRef = (value: boolean) =>
    (skipNextPageResetRef.current = value);

  const prevPaginationPage = useRef(pagination.page);
  const prevPaginationPageSize = useRef(pagination.pageSize);

  useLayoutEffect(() => {
    const pageChanged = prevPaginationPage.current !== pagination.page;
    const pageSizeChanged =
      prevPaginationPageSize.current !== pagination.pageSize;

    if (!pageChanged && !pageSizeChanged) return;

    prevPaginationPage.current = pagination.page;
    prevPaginationPageSize.current = pagination.pageSize;

    if (hasJustResetPageRef.current) {
      hasJustResetPageRef.current = false;
    } else {
      nextScrollToTargetRef.current = true;
    }
  }, [pagination.page, pagination.pageSize]);

  return {
    pagination,
    setPagination,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    scrollToTargetRef,
    nextScrollToTargetRef,
    resetNextScrollToTarget,
    resetPaginationPage,
  };
}
