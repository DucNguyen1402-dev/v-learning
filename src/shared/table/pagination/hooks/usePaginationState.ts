import { usePaginationState as useContextPaginationState } from "../contexts";

export const usePaginationState = () => {
  const {
    pagination,
    setPagination,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    nextScrollToTargetRef,
    resetNextScrollToTarget,
    resetPaginationPage,
  } = useContextPaginationState({
    pageSize: 10,
  });

  return {
    pagination,
    setPagination,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    nextScrollToTargetRef,
    resetNextScrollToTarget,
    resetPaginationPage,
  };
};
