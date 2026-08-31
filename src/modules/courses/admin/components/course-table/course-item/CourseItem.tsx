import type { Course } from "@modules/courses/shared/types";
import { Navigation } from "@shared/navigation";
import { Tooltip } from "@shared/ui";
import { Button, BUTTON_SIZES } from "@shared/ui/button";
import { cn } from "@shared/utils";
import { BookSearch, ClipboardPenLine, SquarePen, Trash } from "lucide-react";

import { useCourseDeletion } from "./hooks";
type CourseItemProps = {
  course: Course;
  isRecentlyAffected?: boolean;
};
export const CourseItem = ({ course, isRecentlyAffected }: CourseItemProps) => {
  const { onDeleteClick, targetCourseDeletion } = useCourseDeletion({
    tenKhoaHoc: course.tenKhoaHoc,
  });

  //Some courses have empty maKhoaHoc, which will cause the edit button to navigate to an invalid route.
  // Therefore, I block the edit button for those courses.
  const shouldBlockAction = course.maKhoaHoc === "";
  return (
    <tr
      className={cn(
        "group border-t border-border-muted text-sm transition-colors duration-150 ease-in-out hover:bg-bg-subtle",
        {
          "animate-success-row": isRecentlyAffected,
          "bg-bg-danger/50 text-text-on-feedback":
            targetCourseDeletion === course.maKhoaHoc,
        },
      )}
    >
      <td className="py-5 pl-8 text-xs">{course.maKhoaHoc}</td>
      <td className="pl-8">
        <span className="block font-medium">{course.tenKhoaHoc}</span>
      </td>
      <td className="pl-8">
        <span>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
      </td>
      <td className="pl-8">
        <span>{course.nguoiTao.hoTen}</span>
      </td>
      <td className="pl-8">
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
          <div
            className={
              shouldBlockAction ? "pointer-events-none opacity-50" : "flex"
            }
          >
            <Tooltip content="Quản lý học viên ghi danh">
              <Navigation.components.ForwardWithParam
                builderRouteKey={
                  Navigation.admin.buildersKeys.COURSE_ENROLLMENT
                }
                param={course.maKhoaHoc}
                className="rounded-control p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-brand/10 hover:text-text-brand"
              >
                <BookSearch className="size-4" />
              </Navigation.components.ForwardWithParam>
            </Tooltip>
          </div>

          <div
            className={
              shouldBlockAction ? "pointer-events-none opacity-50" : "flex"
            }
          >
            <Tooltip content="Chỉnh sửa khóa học">
              <Navigation.components.ForwardWithParam
                builderRouteKey={Navigation.admin.buildersKeys.COURSE_EDIT}
                param={course.maKhoaHoc}
                className="rounded-control p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-brand/10 hover:text-text-brand"
              >
                <SquarePen className="size-4" />
              </Navigation.components.ForwardWithParam>
            </Tooltip>
          </div>

          <div
            className={
              shouldBlockAction ? "pointer-events-none opacity-50" : "flex"
            }
          >
            <Tooltip content="Ghi danh học viên">
              <Navigation.components.Forward
                routeKey={Navigation.admin.keys.ENROLL_USER}

                className="rounded-control p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-brand/10 hover:text-text-brand"
              >
                <ClipboardPenLine className="size-4" />
              </Navigation.components.Forward>
            </Tooltip>
          </div>

          <Tooltip content="Xóa khóa học">
            <Button
              onClick={() => onDeleteClick(course.maKhoaHoc)}
              size={BUTTON_SIZES.NONE}
            >
              <div className="rounded-control p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-danger/10 hover:text-text-danger">
                <Trash className="size-4" />
              </div>
            </Button>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
