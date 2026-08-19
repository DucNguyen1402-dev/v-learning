import { useQuery } from "@tanstack/react-query";

import { userInfor } from "./api";

export const useUserInforQuery = () => {
  const query = useQuery({
    queryKey: ["userInfor"],
    queryFn: userInfor,
    staleTime: 5 * 60 * 1000,
  });

  return {
    infor: query.data,
    isPending: query.isPending,
    isFetching: query.isFetching,
  };
};
