import { useState } from "react";

export const usePaginationState = (
  initialPage: number,
  initialSize: number,
) => {
  const [pagination, setPagination] = useState({
    page: initialPage,
    pageSize: initialSize,
  });

  return { pagination, setPagination };
};
