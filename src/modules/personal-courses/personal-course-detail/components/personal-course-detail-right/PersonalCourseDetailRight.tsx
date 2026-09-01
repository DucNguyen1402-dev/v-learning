import type { EnrichedPersonalCourse } from "@modules/personal-courses/types";

import { LessonListCard } from "./LessonListCard";
import { LessonProgress } from "./LessonProgress";

export const PersonalCourseDetailRight = ({
  targetCourse,
}: {
  targetCourse: EnrichedPersonalCourse;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <LessonProgress baiHoc={targetCourse?.baiHoc} />
      <LessonListCard
        danhSachBaiHoc={targetCourse?.danhSachBaiHoc}
        maKhoaHoc={targetCourse?.maKhoaHoc}
      />
    </div>
  );
};
