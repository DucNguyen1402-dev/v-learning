import { usePaginationState as useContextPaginationState } from "../contexts";

export const usePaginationState = () => {
  const { pagination, setPagination } = useContextPaginationState({
    pageSize: 10,
  });

  return { pagination, setPagination };
};
