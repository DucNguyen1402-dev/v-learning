import type { UserCourse } from "@modules/user/user-courses/types";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";

import { useUserCoursesContext } from "../../contexts";
import { useCancelEnrolledCourse } from "./hook";

type UserCoursesTableRowProps = {
  stt: number;
  course: UserCourse;
  isEnrolled: boolean;
};
export const UserCoursesTableRow = ({
  stt,
  course,
  isEnrolled,
}: UserCoursesTableRowProps) => {
  const { taiKhoan } = useUserCoursesContext();
  const { isCancelPersonalCourseLoading, onCancelCourseClick, isCanceling } =
    useCancelEnrolledCourse({
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan,
      tenKhoaHoc: course.tenKhoaHoc,
    });

  return (
    <tr
      className={`group border-t border-border-subtle transition-colors duration-200 hover:bg-bg-subtle ${isCanceling ? "bg-bg-danger/40 text-text-on-feedback" : ""}`}
    >
      <td className="py-3 pl-8 text-left">{stt}</td>
      <td className="pl-4 text-left text-sm">{course.tenKhoaHoc}</td>
      <td className="pl-4 text-center">
        <div
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${isEnrolled ? "bg-bg-enrolled text-text-enrolled group-hover:bg-bg-enrolled-hover" : "bg-bg-enrollment-pending text-text-enrollment-pending group-hover:bg-bg-enrollment-pending-hover"}`}
        >
          {course.trangThai}
        </div>
      </td>
      <td className="pl-4 text-center">
        <Button
          intent={BUTTON_INTENTS.DESTRUCTIVE}
          appearance={BUTTON_APPEARANCES.SOLID}
          size={BUTTON_SIZES.NONE}

          onClick={onCancelCourseClick}
          loading={isCancelPersonalCourseLoading}
        >
          <span className="px-2 py-1.5 text-xs">Hủy đăng ký</span>
        </Button>
      </td>
    </tr>
  );
};
