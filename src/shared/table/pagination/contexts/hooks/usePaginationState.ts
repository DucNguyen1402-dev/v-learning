import { useRef, useState } from "react";

type UsePaginationStateProps = {
  pageSize?: number;
};

export function usePaginationState({ pageSize = 10 }: UsePaginationStateProps) {
  const [pagination, setPagination] = useState<{ page: number; size: number }>({
    page: 1,
    size: pageSize,
  });
  const skipNextPageResetRef = useRef(true);

  const setSkipNextPageResetRef = (value: boolean) =>
    (skipNextPageResetRef.current = value);

  return {
    pagination,
    setPagination,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
  };
}
