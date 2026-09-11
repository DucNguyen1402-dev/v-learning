import { usePaginationState as useContextPaginationState } from "../contexts";

export const usePaginationState = () => {
  const {
    pagination,
    setPagination,
    scrollToTargetRef,
    skipNextPageResetRef,
    skipNextPageReset,
    nextScrollToTargetRef,
    resetNextScrollToTarget,
    resetHasJustResetPage,
    resetPaginationPage,
    hasJustResetPageRef,
    setNextScrollToTarget,
  } = useContextPaginationState({
    pageSize: 10,
  });

  return {
    pagination,
    setPagination,
    scrollToTargetRef,
    skipNextPageResetRef,
    skipNextPageReset,
    nextScrollToTargetRef,
    resetNextScrollToTarget,
    resetPaginationPage,
    resetHasJustResetPage,
    hasJustResetPageRef,
    setNextScrollToTarget,
  };
};
