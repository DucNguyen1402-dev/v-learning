import { useQuery } from "@tanstack/react-query";

import { getUnenrolledUsers } from "./api";

export const useUnenrollUsersQuery = ({ maKhoaHoc }: { maKhoaHoc: string }) => {
  return useQuery({
    queryKey: ["unenrolledUsers", maKhoaHoc],
    queryFn: () => getUnenrolledUsers({ maKhoaHoc }),
    refetchOnWindowFocus: false,
  });
};
