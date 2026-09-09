import { useParams } from "react-router-dom";

import { CurrentUser } from "@shared/current-user";

import { PersonalCourseNotFound } from "../components";

export const PersonalCourseDetailRouteGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { maKhoaHoc } = useParams();

  const { enrolledCourse } = CurrentUser.use();
  const isCourseIdExist = enrolledCourse.list.some(
    (course) => course.maKhoaHoc === maKhoaHoc,
  );

  if (!maKhoaHoc || !isCourseIdExist) {
    return <PersonalCourseNotFound />;
  }

  return children;
};
