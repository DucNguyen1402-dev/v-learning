import { CourseDetailDescription } from "./CourseDetailDescription";
import { CourseDetailHeading } from "./CourseDetailHeading";
import { CourseDetailImage } from "./CourseDetailImage";
import { CourseDetailInfo } from "./CourseDetailInfo";

export const CourseDetailLeft = () => {
  return (
    <div className="flex flex-col gap-6 rounded-container border border-border-subtle bg-bg-default p-8 shadow-surface">
      <CourseDetailHeading />
      <CourseDetailImage />
      <CourseDetailInfo />
      <CourseDetailDescription />
    </div>
  );
};
