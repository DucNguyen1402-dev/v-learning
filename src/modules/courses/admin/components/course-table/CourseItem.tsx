import { useMemo } from "react";

import type { Course } from "@modules/courses/shared/types";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";
import {
  CalendarPlus2,
  SquarePen,
  Star,
  Trash2,
  TvMinimalPlay,
} from "lucide-react";

type CourseItemProps = {
  course: Course;
};
export const CourseItem = ({ course }: CourseItemProps) => {
  const actionButtonsConfig = useMemo(
    () => [
      {
        title: "Xem Trailer",

        onClick: () => {},
        Icon: TvMinimalPlay,
      },
      {
        title: "Sửa thông tin",

        onClick: () => {},
        Icon: SquarePen,
      },
      {
        title: "Tạo lịch chiếu",

        onClick: () => {},
        Icon: CalendarPlus2,
      },
      {
        title: "Xóa phim",

        onClick: () => {},
        Icon: Trash2,
      },
    ],
    [],
  );

  return (
    <tr
      className={`group border-t border-slate-700/80 transition-colors hover:bg-slate-700/20`}
    >
      <td className="py-4 pl-8 font-mono text-slate-400">
        #{course.maKhoaHoc}
      </td>

      <td className="flex items-center gap-3 overflow-hidden px-6 py-4">
        <span className="block text-sm font-semibold text-slate-200 transition-colors group-hover:text-yellow-400">
          {course.tenKhoaHoc}
        </span>
      </td>

      <td className="flex items-center gap-3 overflow-hidden px-6 py-4">
        <span className="font-mono text-xs text-slate-500">
          {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
        </span>
      </td>

      <td className="flex items-center gap-3 overflow-hidden px-6 py-4">
        <span className="font-mono text-xs text-slate-500">
          {course.nguoiTao.hoTen}
        </span>
      </td>

      <td className="flex items-center gap-3 overflow-hidden px-6 py-4">
        <span className="font-mono text-xs text-slate-500">
          {course.ngayTao}
        </span>
      </td>

      <td className="flex items-center gap-3 overflow-hidden px-6 py-4">
        <span className="font-mono text-xs text-slate-500">
          {course.soLuongHocVien}
        </span>
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-1.5 text-amber-400">
          <Star className="h-4 w-4 fill-current" />

          <span className="font-semibold text-slate-200">{course.danhGia}</span>
          <span className="text-xs text-slate-500">/10</span>
        </div>
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center justify-end gap-1.5">
          {actionButtonsConfig.map((actionButton) => (
            <Button
              key={actionButton.title}
              onClick={actionButton.onClick}
              title={actionButton.title}
              appearance={BUTTON_APPEARANCES.GHOST}
              intent={BUTTON_INTENTS.SECONDARY}
            >
              <actionButton.Icon className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </td>
    </tr>
  );
};
