import { usePaginationState as useContextPaginationState } from "../contexts";

export const usePaginationState = () => {
  const {
    pagination,
    setPagination,
    isFirstRender,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
  } = useContextPaginationState({
    pageSize: 10,
  });

  return {
    pagination,
    setPagination,
    isFirstRender,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
  };
};
