import { useCurrentUserQuery } from "@shared/current-user/hooks";

export const useEnrolledCourse = () => {
  const { currentUser } = useCurrentUserQuery();

  const list = currentUser?.chiTietKhoaHocGhiDanh ?? [];
  return { list };
};
export type UseEnrolledCourseResult = ReturnType<typeof useEnrolledCourse>;
