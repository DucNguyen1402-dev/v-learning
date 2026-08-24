import { useMemo } from "react";

import { enrichCoursesWithMockData } from "@modules/personal-courses/mocks";
import { UserInfor } from "@shared/auth";

export const usePersonalCourses = () => {
  const { infor, isPending } = UserInfor.useQuery();

  const registeredCourses = useMemo(
    () => infor?.chiTietKhoaHocGhiDanh ?? [],
    [infor?.chiTietKhoaHocGhiDanh],
  );

  const enrichedCourses = useMemo(
    () => enrichCoursesWithMockData(registeredCourses),
    [registeredCourses],
  );
  return {
    courses: enrichedCourses,
    isPending,
  };
};

export type UsePersonalCoursesReturn = ReturnType<typeof usePersonalCourses>;
