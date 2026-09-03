import { usePersonalCoursesContext } from "@modules/personal-courses/contexts";
import { Navigation } from "@shared/navigation";

import {
  CancelEnrollmentButton,
  CancelEnrollmentModalRender,
  PersonalCourseDetailLeft,
  PersonalCourseDetailRight,
} from "../components";
import { usePersonalCourseDetailContext } from "../contexts";

export const PersonalCourseDetail = () => {
  Navigation.hooks.useScrollOnRouteChange();

  const { isCancelModalOpen } = usePersonalCourseDetailContext();
  const { maKhoaHoc } = Navigation.hooks.useParams();
  const { courses } = usePersonalCoursesContext();
  const targetCourse = courses.find(
    (course) => course.maKhoaHoc === maKhoaHoc,
  )!;
  return (
    <div className="min-h-screen p-2 lg:p-8">
      <CancelEnrollmentButton />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PersonalCourseDetailLeft targetCourse={targetCourse} />
        <PersonalCourseDetailRight targetCourse={targetCourse} />
      </div>
      <CancelEnrollmentModalRender isOpen={isCancelModalOpen} />
    </div>
  );
};
