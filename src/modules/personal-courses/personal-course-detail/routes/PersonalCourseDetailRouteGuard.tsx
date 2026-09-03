import { useUserCourseInfo } from "@shared/auth/userInfor";
import { Navigation } from "@shared/navigation";

import { CourseAccessChecking, PersonalCourseNotFound } from "../components";

export const PersonalCourseDetailRouteGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { maKhoaHoc } = Navigation.hooks.useParams();

  const { courses, isPending } = useUserCourseInfo();
  const isCourseIdExist = courses.some(
    (course) => course.maKhoaHoc === maKhoaHoc,
  );

  if (isPending) {
    return <CourseAccessChecking />;
  }

  if (!maKhoaHoc || !isCourseIdExist) {
    return <PersonalCourseNotFound />;
  }

  return children;
};
