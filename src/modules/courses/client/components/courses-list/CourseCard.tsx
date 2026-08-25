import { Navigation } from "@shared/navigation";
import { Eye, GraduationCap, Users } from "lucide-react";

import type { CourseCardForm } from "@/modules/courses/shared/types";

interface CourseCardProps {
  course: CourseCardForm;
}
export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article
      key={course.maKhoaHoc}
      className="flex h-140 flex-col overflow-hidden rounded-container border border-border-subtle bg-bg-default shadow-surface transition-all duration-300 select-none hover:-translate-y-2 hover:border-border-default hover:shadow-surface-hover"
    >
      <img
        src={course.thumbnail}
        alt={course.tenKhoaHoc}
        className="aspect-video w-full object-cover"
      />

      <div className="flex flex-1 flex-col gap-5 p-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-wide text-text-subtle uppercase">
            {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </p>

          <h2 className="line-clamp-2 text-lg font-semibold">
            {course.tenKhoaHoc}
          </h2>
        </div>

        <p className="line-clamp-2 flex-1 text-sm text-text-subtle">
          {course.moTa}
        </p>

        <div className="mt-2 flex flex-wrap gap-6 text-sm text-text-subtle">
          <div className="flex items-center gap-1">
            <Eye className="size-4" />
            <span>{course.luotXem}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="size-4" />
            <span>{course.soLuongHocVien}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1 border-t border-border-subtle pt-4 text-sm">
          <div className="flex items-center gap-2 text-text-subtle">
            <GraduationCap className="size-5" />
            <p>Giảng viên</p>
          </div>
          <p className="font-medium">{course.tenGiangVien}</p>
        </div>
        <div className="py-2">
          <Navigation.components.ForwardWithParam
            routeBuilderKey={Navigation.client.buildersKeys.COURSES_DETAIL}
            param={course.maKhoaHoc}
            className="button-base button-primary solid w-full py-2 text-sm"
          >
            Xem chi tiết
          </Navigation.components.ForwardWithParam>
        </div>
      </div>
    </article>
  );
};
