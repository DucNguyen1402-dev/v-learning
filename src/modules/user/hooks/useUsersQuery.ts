import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api";
import { USER_EMPTY } from "../constants";
export function useUsersQuery() {
  const {
    data = USER_EMPTY,
    isPending,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isPending,
    isFetching,
    isSuccess,
  };
}
