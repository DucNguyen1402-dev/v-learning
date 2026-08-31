import { useQuery } from "@tanstack/react-query";

import { getPendingEnrollmentCourses } from "./api";

export const usePendingEnrollmentCoursesQuery = (taiKhoan: string) => {
  return useQuery({
    queryKey: ["pendingEnrollmentCourses", taiKhoan],
    queryFn: () => getPendingEnrollmentCourses(taiKhoan),
    refetchOnWindowFocus: false,
  });
};
