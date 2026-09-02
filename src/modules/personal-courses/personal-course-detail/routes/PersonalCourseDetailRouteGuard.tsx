import { useEffect } from "react";

import { UserInfor } from "@shared/auth";
import { Navigation } from "@shared/navigation";

export const PersonalCourseDetailRouteGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { maKhoaHoc } = Navigation.hooks.useParams();
  const { go } = Navigation.hooks.useNavigate();

  const { infor: userInfo } = UserInfor.useQuery();
  const courses = userInfo?.chiTietKhoaHocGhiDanh || [];
  const isCourseIdExist = courses.some(
    (course) => course.maKhoaHoc === maKhoaHoc,
  );

  console.log("isCourseIdExist", isCourseIdExist, maKhoaHoc, courses);
  useEffect(() => {
    if (!maKhoaHoc || !isCourseIdExist) {
      go(Navigation.client.keys.PERSONAL_COURSE, "client");
    }
  }, [go, maKhoaHoc, isCourseIdExist]);

  if (!maKhoaHoc || !isCourseIdExist) {
    return null;
  }

  return children;
};
