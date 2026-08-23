import { EMPTY_COURSE_DETAIL } from "./constants";
import { useCourseDetailQuery } from "./useCouseDetailQuery";
import { enrichCourseDetail } from "./utils";

type UseCourseDetailProps = {
  maKhoaHoc: string;
};
export const useCourseDetail = ({ maKhoaHoc }: UseCourseDetailProps) => {
  const { data: courseDetail = EMPTY_COURSE_DETAIL, isPending } =
    useCourseDetailQuery(maKhoaHoc);

  const enrichedCourseDetail = enrichCourseDetail(courseDetail);
  return {
    enrichedCourseDetail,
    isPending,
  };
};

export type UseCourseDetailReturn = ReturnType<typeof useCourseDetail>;
