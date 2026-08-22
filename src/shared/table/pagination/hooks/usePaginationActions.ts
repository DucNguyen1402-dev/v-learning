import { usePaginationActions as usePaginationActionsContext } from "../contexts";

type UseCoursesPaginationProps = {
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; pageSize: number }>
  >;
  pagination: { page: number; pageSize: number };
};
export const usePaginationActions = ({
  setPagination,
  pagination,
}: UseCoursesPaginationProps) => {
  const { onPrevClick, onNextClick, onPageClick, setSize, setPage } =
    usePaginationActionsContext({ setPagination, pagination });

  return {
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  };
};
