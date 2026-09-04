import { Navigation } from "@shared/navigation";
import { GraduationCap } from "lucide-react";

import type { CourseCardForm } from "@/modules/courses/shared/types";

interface CourseCardProps {
  course: CourseCardForm;
  shouldHideCategory: boolean;
}
export const CourseCard = ({ course, shouldHideCategory }: CourseCardProps) => {
  const image =
    "thumbnail" in course
      ? (course.thumbnail ?? course.hinhAnh)
      : course.hinhAnh;

  const tenGiangVien =
    "tenGiangVien" in course ? course.tenGiangVien : course.nguoiTao.hoTen;
  const shouldDisabledCourseDetailButton = !course.maKhoaHoc;
  return (
    <article
      key={course.maKhoaHoc}
      className="flex flex-col overflow-hidden rounded-container border border-border-subtle bg-bg-default shadow-surface transition-all duration-300 select-none hover:-translate-y-2 hover:border-border-default hover:shadow-surface-hover"
    >
      <img
        src={image}
        alt={course.tenKhoaHoc}
        className="aspect-video w-full object-cover"
      />

      <div className="flex flex-1 flex-col gap-5 p-4">
        <div className="flex flex-col gap-2">
          {!shouldHideCategory && (
            <p className="text-xs font-medium tracking-wide text-text-subtle uppercase">
              {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
            </p>
          )}

          <h2 className="line-clamp-2 text-lg font-semibold">
            {course.tenKhoaHoc}
          </h2>
        </div>
        <div className="flex items-center justify-between gap-1 border-t border-border-subtle pt-4 text-sm">
          <div className="flex items-center gap-2 text-text-subtle">
            <GraduationCap className="size-5" />
            <p>Giảng viên</p>
          </div>
          <p className="font-medium">{tenGiangVien}</p>
        </div>
        {/*Some courses don't have maKhoaHoc, so disable the button. */}
        <div
          className={
            shouldDisabledCourseDetailButton
              ? "pointer-events-none opacity-50"
              : ""
          }
        >
          <div className="py-2">
            <Navigation.components.ForwardWithParam
              builderRouteKey={Navigation.client.builderKeys.COURSES_DETAIL}
              param={course.maKhoaHoc}
              className="button-base button-primary solid w-full py-2 text-sm"
            >
              Xem chi tiết
            </Navigation.components.ForwardWithParam>
          </div>
        </div>
      </div>
    </article>
  );
};
