import { useCurrentUserQuery } from "@shared/current-user";

export const useUserCourseInfo = () => {
  const { currentUser, isPending } = useCurrentUserQuery();
  const courses = currentUser?.chiTietKhoaHocGhiDanh || [];
  return { courses, isPending };
};
