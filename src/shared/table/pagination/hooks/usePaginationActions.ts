import { usePaginationActions as usePaginationActionsContext } from "../contexts";

type UseCoursesPaginationProps = {
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; pageSize: number }>
  >;
  pagination: { page: number; pageSize: number };

  setSkipNextScrollToTargetRef: (value: boolean) => void;
};
export const usePaginationActions = ({
  setPagination,
  pagination,
  setSkipNextScrollToTargetRef,
}: UseCoursesPaginationProps) => {
  const {
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
    preventNextResetPage,
    preventNextScrollToTarget,
  } = usePaginationActionsContext({
    setPagination,
    pagination,
    setSkipNextScrollToTargetRef,
  });

  return {
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
    preventNextResetPage,
    preventNextScrollToTarget,
  };
};
