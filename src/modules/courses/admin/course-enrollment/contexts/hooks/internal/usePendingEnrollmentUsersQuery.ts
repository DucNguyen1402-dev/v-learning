import { useQuery } from "@tanstack/react-query";

import { getPendingEnrollmentUsers } from "./api";

export const usePendingEnrollmentUsersQuery = (maKhoaHoc: string) => {
  return useQuery({
    queryKey: ["pendingEnrollmentUsers", maKhoaHoc],
    queryFn: () => getPendingEnrollmentUsers(maKhoaHoc),
    refetchOnWindowFocus: false,
  });
};
