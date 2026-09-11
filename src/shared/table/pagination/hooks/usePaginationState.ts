import { usePaginationState as useContextPaginationState } from "../contexts";

type UsePaginationStateProps = {
  initialPageSize?: number;
};
export const usePaginationState = ({
  initialPageSize = 10,
}: UsePaginationStateProps) => {
  const { currentPage, pageSize, setPagination, resetPaginationPage } =
    useContextPaginationState({
      initialPageSize,
    });

  return {
    currentPage,
    pageSize,
    setPagination,
    resetPaginationPage,
  };
};
