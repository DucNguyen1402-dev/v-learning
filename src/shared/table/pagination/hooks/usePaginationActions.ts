import { usePaginationActions as usePaginationActionsContext } from "../contexts";

type UsePaginationActionsProps = {
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; pageSize: number }>
  >;
  currentPage: number;
};
export const usePaginationActions = ({
  setPagination,
  currentPage,
}: UsePaginationActionsProps) => {
  const { onPrevClick, onNextClick, onPageClick, setSize, setPage } =
    usePaginationActionsContext({
      setPagination,
      currentPage,
    });

  return {
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  };
};
