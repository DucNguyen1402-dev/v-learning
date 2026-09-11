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

  const setNextScrollToTargetRef = (value: boolean) =>
    (nextScrollToTargetRef.current = value);

  const resetNextScrollToTarget = () => (nextScrollToTargetRef.current = false);

  const resetHasJustResetPage = () => (hasJustResetPageRef.current = false);

  const setSkipNextPageResetRef = (value: boolean) =>
    (skipNextPageResetRef.current = value);

  const prevPaginationPage = useRef(pagination.page);
  const prevPaginationPageSize = useRef(pagination.pageSize);

  // eslint-disable-next-line react-hooks/refs
  if (prevPaginationPage.current !== pagination.page) {
    // eslint-disable-next-line react-hooks/refs
    prevPaginationPage.current = pagination.page;
    // eslint-disable-next-line react-hooks/refs
    if (hasJustResetPageRef.current) {
      // eslint-disable-next-line react-hooks/refs
      resetHasJustResetPage();
    } else {
      // eslint-disable-next-line react-hooks/refs
      setNextScrollToTargetRef(true);
    }
  }

  // eslint-disable-next-line react-hooks/refs
  if (prevPaginationPageSize.current !== pagination.pageSize) {
    // eslint-disable-next-line react-hooks/refs
    prevPaginationPageSize.current = pagination.pageSize;

    // eslint-disable-next-line react-hooks/refs
    if (hasJustResetPageRef.current) {
      // eslint-disable-next-line react-hooks/refs
      resetHasJustResetPage();
    } else {
      // eslint-disable-next-line react-hooks/refs
      setNextScrollToTargetRef(true);
    }
  }

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
