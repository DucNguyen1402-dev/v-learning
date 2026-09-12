import { usePaginationState as useContextPaginationState } from "../contexts";

type UsePaginationStateProps = {
  initialPageSize?: number;
};
export const usePaginationState = ({
  initialPageSize = 10,
}: UsePaginationStateProps = {}) => {
  return useContextPaginationState({
    initialPageSize,
  });
};
