import { useQuery } from "@tanstack/react-query";

import { getPaginatedUsers } from "../api";
import { PAGINATED_USER_EMPTY } from "../constants";

type PaginatedUserQueryParams = {
  tuKhoa?: string;
  page?: number;
  pageSize?: number;
  role?: null | string;
};

export const usePaginatedUserQuery = ({
  tuKhoa = "",
  page = 1,
  pageSize = 10,
  role,
}: PaginatedUserQueryParams) => {
  const {
    data = PAGINATED_USER_EMPTY,
    isPending,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["paginatedUsers", tuKhoa, page, pageSize],
    queryFn: () => getPaginatedUsers({ tuKhoa, page, pageSize }),
    refetchOnWindowFocus: false,
    enabled: role === null,
  });
  return {
    data,
    isPending,
    isFetching,
    isSuccess,
  };
};
