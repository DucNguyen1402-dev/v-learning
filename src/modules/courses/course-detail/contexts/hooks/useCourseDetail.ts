import { useMemo } from "react";

import { EMPTY_COURSE } from "@modules/courses/constants";

import { useCourseRegister } from "./useCourseRegister";
import { useCourseDetailQuery } from "./useCouseDetailQuery";
import { enrichCourseDetail } from "./utils";

type UseCourseDetailProps = {
  maKhoaHoc: string;
};
export const useCourseDetail = ({ maKhoaHoc }: UseCourseDetailProps) => {
  const { data: courseDetail = EMPTY_COURSE, isPending } =
    useCourseDetailQuery(maKhoaHoc);

  const { handleRegisterCourse, isRegistering } = useCourseRegister({
    maKhoaHoc,
  });
  const enrichedCourseDetail = useMemo(
    () => enrichCourseDetail(courseDetail),
    [courseDetail],
  );

  return {
    courseDetail: enrichedCourseDetail,
    isPending,
    handleRegisterCourse,
    isRegistering,
    maKhoaHoc,
  };
};

export type UseCourseDetailReturn = ReturnType<typeof useCourseDetail>;
