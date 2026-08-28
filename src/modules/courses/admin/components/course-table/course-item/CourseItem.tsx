import type { Course } from "@modules/courses/shared/types";
import { Navigation } from "@shared/navigation";
import { Button, BUTTON_SIZES } from "@shared/ui/button";
import { SquarePen, Trash } from "lucide-react";

import { useCourseDeletion } from "./hooks";
type CourseItemProps = {
  course: Course;
  isRecentlyAffected?: boolean;
};
export const CourseItem = ({ course, isRecentlyAffected }: CourseItemProps) => {
  const { onDeleteClick } = useCourseDeletion();
  return (
    <tr
      className={`group border-t border-border-muted text-sm transition-colors duration-150 ease-in-out hover:bg-bg-subtle ${isRecentlyAffected ? "animate-success-row" : ""}`}
    >
      <td className="py-4 pl-8 text-xs">#{course.maKhoaHoc}</td>

      <td className="pl-4">
        <span className="block font-medium">{course.tenKhoaHoc}</span>
      </td>

      <td className="pl-4">
        <span>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
      </td>

      <td className="pl-4">
        <span>{course.nguoiTao.hoTen}</span>
      </td>

      <td className="pl-4">
        <span className="text-[13px]">{course.ngayTao}</span>
      </td>

      <td>
        <div className="flex-center">{course.soLuongHocVien}</div>
      </td>

      <td>
        <div className="flex-center gap-1.5 text-xs">
          <span className="font-semibold">8</span>
          <span>/10</span>
        </div>
      </td>

      <td>
        <div className="flex-center gap-3">
          <Navigation.components.ForwardWithParam
            builderRouteKey={Navigation.admin.buildersKeys.COURSES_EDIT}
            param={course.maKhoaHoc}
          >
            <div className="rounded p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-brand/10 hover:text-text-brand">
              <SquarePen className="size-4" />
            </div>
          </Navigation.components.ForwardWithParam>

          <Button
            onClick={() => onDeleteClick(course.maKhoaHoc)}
            size={BUTTON_SIZES.NONE}
          >
            <div className="rounded p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-danger/10 hover:text-text-danger">
              <Trash className="size-4" />
            </div>
          </Button>
        </div>
      </td>
    </tr>
  );
};
