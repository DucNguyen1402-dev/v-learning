import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";
import { Eye, GraduationCap, Users } from "lucide-react";

import { useCoursesContext } from "../contexts";
import { mockCourses } from "../mocks";

export function CoursesList() {
  const {
    state: { isPending },
    courses,
  } = useCoursesContext();

  if (isPending) return null;
  console.log(courses);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses?.map((course) => {
        const upgradeCourse = {
          ...course,
          ...mockCourses.find((c) => c.maKhoaHoc === course.maKhoaHoc),
        };

        return (
          <article
            key={upgradeCourse.maKhoaHoc}
            className="flex h-135 flex-col overflow-hidden rounded-container border border-border-default bg-bg-default shadow-surface select-none"
          >
            <img
              src={upgradeCourse.hinhAnh}
              alt={upgradeCourse.tenKhoaHoc}
              className="aspect-video w-full object-cover"
            />

            <div className="flex flex-1 flex-col gap-5 p-4">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium tracking-wide text-text-subtle uppercase">
                  {upgradeCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                </p>

                <h2 className="line-clamp-2 text-lg font-semibold">
                  {upgradeCourse.tenKhoaHoc}
                </h2>
              </div>

              <p className="line-clamp-2 flex-1 text-sm text-text-subtle">
                {upgradeCourse.moTa}
              </p>

              <div className="mt-2 flex flex-wrap gap-6 text-sm text-text-subtle">
                <div className="flex items-center gap-1">
                  <Eye className="size-4" />
                  <span>{upgradeCourse.luotXem}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="size-4" />
                  <span>{upgradeCourse.soLuongHocVien}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-t border-border-subtle pt-4 text-sm">
                <div className="flex items-center gap-2 text-text-subtle">
                  <GraduationCap className="size-5" />
                  <p>{upgradeCourse.nguoiTao.tenLoaiNguoiDung}</p>
                </div>
                <p className="font-medium">{upgradeCourse.nguoiTao.hoTen}</p>
              </div>
              <div className="py-2">
                <Button
                  appearance={BUTTON_APPEARANCES.SOLID}
                  intent={BUTTON_INTENTS.PRIMARY}
                  fullWidth
                >
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
