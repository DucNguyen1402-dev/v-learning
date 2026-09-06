import { useUserInforQuery } from "@shared/auth";

export const useUserCourseInfo = () => {
  const { infor: userInfo, isPending } = useUserInforQuery();
  const courses = userInfo?.chiTietKhoaHocGhiDanh || [];
  return { courses, isPending };
};
