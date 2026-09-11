import { useCallback } from "react";

type UsePaginationActionsProps = {
  setPagination: React.Dispatch<
    React.SetStateAction<{
      page: number;
      pageSize: number;
    }>
  >;
  currentPage: number;
};

export function usePaginationActions({
  setPagination,
  currentPage,
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
    setPage(currentPage - 1);
  }, [currentPage, setPage]);

  const onNextClick = useCallback(() => {
    setPage(currentPage + 1);
  }, [currentPage, setPage]);

  const onPageClick = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage],
  );

  return {
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  };
}
