import { useQuery } from "@tanstack/react-query";

import { getEnrolledUsers } from "./api";

export const useEnrolledUsersQuery = (maKhoaHoc: string) => {
  return useQuery({
    queryKey: ["enrolledUsers", maKhoaHoc],
    queryFn: () => getEnrolledUsers(maKhoaHoc),
    refetchOnWindowFocus: false,
  });
};
