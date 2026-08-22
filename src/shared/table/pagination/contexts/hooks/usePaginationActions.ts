import { useCallback } from "react";

type UsePaginationActionsProps = {
  setPagination: React.Dispatch<
    React.SetStateAction<{
      page: number;
      pageSize: number;
    }>
  >;
  pagination: { page: number; pageSize: number };
  setSkipNextPageResetRef?: (value: boolean) => void;
};

export function usePaginationActions({
  setPagination,
  pagination,
  setSkipNextPageResetRef,
}: UsePaginationActionsProps) {
  const setSize = useCallback(
    (value: number) => setPagination({ pageSize: value, page: 1 }),
    [setPagination],
  );

  const setPage = useCallback(
    (value: number) => setPagination((prev) => ({ ...prev, page: value })),
    [setPagination],
  );

  const onPrevClick = useCallback(() => {
    setPage(pagination.page - 1);
  }, [pagination.page, setPage]);

  const onNextClick = useCallback(() => {
    setPage(pagination.page + 1);
  }, [pagination.page, setPage]);

  const onPageClick = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage],
  );

  const preventNextResetPage = useCallback(
    () => setSkipNextPageResetRef?.(true),
    [setSkipNextPageResetRef],
  );

  return {
    preventNextResetPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  };
}
