import { useParams } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { EmptyCourseState } from "../components";
import { COURSE_ENROLLMENT_STATES } from "../constants";
import { useUserCourses } from "../hooks";
export const UserCoursesPage = () => {
  const { taiKhoan } = useParams<{ taiKhoan: string }>();
  const { userCourses, isCourseEmpty } = useUserCourses(taiKhoan as string);
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  if (isCourseEmpty) {
    return (
      <div className="flex justify-center pt-10">
        <div className="w-full rounded-container border border-border-subtle bg-bg-default">
          <EmptyCourseState />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-xl font-semibold">
          Danh sách khóa học của người dùng: {taiKhoan}
        </h1>
      </div>
      <div className="mt-6 flex justify-center">
        <div
          className="max-w-130 min-w-120 scroll-target rounded-container border border-border-subtle bg-bg-default shadow-surface select-none"
          ref={scrollRef}
        >
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
                <th className="w-20 py-5 pl-8 text-left">STT</th>
                <th className="pl-4 text-left">Tên Khóa học</th>
                <th className="pl-4 text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {userCourses?.map((course, index) => {
                const isEnrolled =
                  course.trangThai === COURSE_ENROLLMENT_STATES.ENROLLED;

                return (
                  <tr key={index}>
                    <td className="border-b border-border-subtle py-3 pl-8 text-left">
                      {index + 1}
                    </td>
                    <td className="border-b border-border-subtle pl-4 text-left text-sm">
                      {course.tenKhoaHoc}
                    </td>
                    <td className="border-b border-border-subtle pl-4 text-center">
                      <div
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${isEnrolled ? "bg-bg-enrolled text-text-enrolled" : "bg-bg-enrollment-pending text-text-enrollment-pending"}`}
                      >
                        {course.trangThai}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
