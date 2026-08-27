import { useMemo } from "react";

import type { Course } from "@modules/courses/shared/types";
import { Navigation } from "@shared/navigation";
import { SquarePen, Trash2 } from "lucide-react";

type CourseItemProps = {
  course: Course;
};
export const CourseItem = ({ course }: CourseItemProps) => {
  const actionButtonsConfig = useMemo(
    () => [
      {
        title: "Sửa khóa học",

        onClick: () => {},
        Icon: SquarePen,
      },

      {
        title: "Xóa khóa học",

        onClick: () => {},
        Icon: Trash2,
      },
    ],
    [],
  );

  return (
    <tr
      className={`group border-t border-border-muted text-sm transition-colors duration-150 ease-in-out hover:bg-bg-subtle`}
    >
      <td className="py-4 pl-8 text-xs">#{course.maKhoaHoc}</td>

      <td className="py-4 pl-8">
        <span className="block font-medium">{course.tenKhoaHoc}</span>
      </td>

      <td className="py-4 pl-8">
        <span>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
      </td>

      <td className="py-4 pl-8">
        <span>{course.nguoiTao.hoTen}</span>
      </td>

      <td className="py-4 pl-8">
        <span className="text-[13px]">{course.ngayTao}</span>
      </td>

      <td className="py-4 pl-8">
        <span>{course.soLuongHocVien}</span>
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-semibold">8</span>
          <span>/10</span>
        </div>
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-1.5">
          {actionButtonsConfig.map((actionButton) => (
            <button
              key={actionButton.title}
              className="rounded border border-border-muted p-1 transition-colors duration-150 ease-in-out hover:bg-bg-subtle hover:text-text-default"
            >
              <actionButton.Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </td>
    </tr>
  );
};
