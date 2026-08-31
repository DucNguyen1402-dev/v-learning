import { useQuery } from "@tanstack/react-query";

import { getEnrolledCourses } from "./api";

export const useEnrolledCoursesQuery = (taiKhoan: string) => {
  return useQuery({
    queryKey: ["enrolledCourses", taiKhoan],
    queryFn: () => getEnrolledCourses(taiKhoan),
    refetchOnWindowFocus: false,
  });
};
