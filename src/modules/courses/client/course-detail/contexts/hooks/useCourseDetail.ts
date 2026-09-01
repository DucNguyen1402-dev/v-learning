import { useMemo } from "react";

import { EMPTY_COURSE } from "@modules/courses/shared/constants";
import { useCourseDetailQuery } from "@modules/courses/shared/hooks";

import { enrichCourseDetail } from "./utils";

type UseCourseDetailProps = {
  maKhoaHoc: string;
};
export const useCourseDetail = ({ maKhoaHoc }: UseCourseDetailProps) => {
  const { data: courseDetail = EMPTY_COURSE, isPending } =
    useCourseDetailQuery(maKhoaHoc);

  const enrichedCourseDetail = useMemo(
    () => enrichCourseDetail(courseDetail),
    [courseDetail],
  );

  return {
    courseDetail: enrichedCourseDetail,
    isPending,

    maKhoaHoc,
  };
};

export type UseCourseDetailReturn = ReturnType<typeof useCourseDetail>;
