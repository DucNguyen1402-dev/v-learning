import { useUserInforQuery } from "./useUserInforQuery";

export const useUserCourseInfo = () => {
  const { infor: userInfo, isPending } = useUserInforQuery();
  const courses = userInfo?.chiTietKhoaHocGhiDanh || [];
  return { courses, isPending };
};
