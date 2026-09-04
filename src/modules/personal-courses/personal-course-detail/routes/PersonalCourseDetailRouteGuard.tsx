import { useParams } from "react-router-dom";

import { useUserCourseInfo } from "@shared/auth/userInfor";

import { CourseAccessChecking, PersonalCourseNotFound } from "../components";

export const PersonalCourseDetailRouteGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { maKhoaHoc } = useParams();

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
