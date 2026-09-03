import { useEffect } from "react";

import { UserInfor } from "@shared/auth";
import { Navigation } from "@shared/navigation";

import { CheckingCourseLoading } from "../components";

export const PersonalCourseDetailRouteGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { maKhoaHoc } = Navigation.hooks.useParams();
  const { go } = Navigation.hooks.useNavigate();

  const { infor: userInfo, isPending } = UserInfor.useQuery();
  const courses = userInfo?.chiTietKhoaHocGhiDanh || [];
  const isCourseIdExist = courses.some(
    (course) => course.maKhoaHoc === maKhoaHoc,
  );

  useEffect(() => {
    if (isPending) return;
    if (!maKhoaHoc || !isCourseIdExist) {
      go(Navigation.client.keys.PERSONAL_COURSE, "client");
    }
  }, [go, maKhoaHoc, isCourseIdExist, isPending]);

  if (true) {
    return <CheckingCourseLoading />;
  }

  if (!maKhoaHoc || !isCourseIdExist) {
    return null;
  }

  return children;
};
