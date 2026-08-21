import { useCallback } from "react";

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
  const setSize = useCallback(
    (value: number) => {
      setPagination({ pageSize: value, page: 1 });
    },
    [setPagination],
  );

  const setPage = useCallback(
    (value: number) => {
      setPagination((prev) => ({ ...prev, page: value }));
    },
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

  return {
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
  };
};
