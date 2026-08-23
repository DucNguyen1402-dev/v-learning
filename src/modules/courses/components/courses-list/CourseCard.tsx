import { useNavigate } from "react-router-dom";

import type { CourseCardForm } from "@modules/courses/types";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";
import { Eye, GraduationCap, Users } from "lucide-react";
interface CourseCardProps {
  course: CourseCardForm;
}
export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();
  return (
    <article
      key={course.maKhoaHoc}
      className="flex h-140 flex-col overflow-hidden rounded-container border border-border-default bg-bg-default shadow-surface select-none"
    >
      <img
        src={course.hinhAnh}
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
          <Button
            appearance={BUTTON_APPEARANCES.SOLID}
            intent={BUTTON_INTENTS.PRIMARY}
            fullWidth
            onClick={() => navigate(`/client/courses/${course.maKhoaHoc}`)}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>
    </article>
  );
};
