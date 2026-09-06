import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "./api";

export const useCurrentUserQuery = () => {
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: 5 * 60 * 1000,
  });

  return {
    currentUser: query.data,
    isPending: query.isPending,
    isFetching: query.isFetching,
  };
};
