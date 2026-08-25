import { usePersonalCoursesContext } from "@modules/personal-courses/contexts";
import { Navigation } from "@shared/navigation";

import {
  CancelEnrollmentButton,
  CancelEnrollmentModal,
  PersonalCourseDetailLeft,
  PersonalCourseDetailRight,
} from "../components";
import { usePersonalCourseDetailContext } from "../contexts";

export const PersonalCourseDetail = () => {
  Navigation.hooks.useScrollOnRouteChange();
  const { courses } = usePersonalCoursesContext();

  const { maKhoaHoc } = Navigation.hooks.useParams();
  const targetCourse = courses.find(
    (course) => course.maKhoaHoc === maKhoaHoc,
  )!;

  const { isCancelModalOpen, setIsCancelModalOpen, handleModalConfirm } =
    usePersonalCourseDetailContext();

  return (
    <>
      <div className="min-h-screen p-2 lg:p-8">
        <CancelEnrollmentButton />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PersonalCourseDetailLeft targetCourse={targetCourse} />
          <PersonalCourseDetailRight targetCourse={targetCourse} />
        </div>
      </div>
      {isCancelModalOpen && (
        <CancelEnrollmentModal
          onClose={() => setIsCancelModalOpen(false)}
          onConfirm={handleModalConfirm}
          tenKhoaHoc={targetCourse.tenKhoaHoc}
        />
      )}
    </>
  );
};
