import { useRef, useState } from "react";

type UsePaginationStateProps = {
  pageSize?: number;
};

export function usePaginationState({ pageSize = 10 }: UsePaginationStateProps) {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize,
  });
  const skipNextPageResetRef = useRef(true);
  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);
  const skipNextScrollToTargetRef = useRef(true);
  const setSkipNextScrollToTargetRef = (value: boolean) =>
    (skipNextScrollToTargetRef.current = value);
  const setSkipNextPageResetRef = (value: boolean) =>
    (skipNextPageResetRef.current = value);

  return {
    pagination,
    setPagination,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
    scrollToTargetRef,
    skipNextScrollToTargetRef,
    setSkipNextScrollToTargetRef,
  };
}
