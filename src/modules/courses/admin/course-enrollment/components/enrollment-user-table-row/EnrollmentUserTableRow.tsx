import type { EnrollmentUser } from "@modules/courses/admin/course-enrollment/types";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { cn } from "@shared/utils";

import { USER_ENROLLMENT_STATUS } from "../../constants";
import { useCourseEnrollmentContext } from "../../contexts";
import { useEnrollmentUserTableRow } from "./hook";

type EnrollmentUserTableRowProps = {
  stt: number;
  user: EnrollmentUser;
  isEnrolled: boolean;
};
export const EnrollmentUserTableRow = ({
  stt,
  user,
  isEnrolled,
}: EnrollmentUserTableRowProps) => {
  const { maKhoaHoc } = useCourseEnrollmentContext();
  const {
    isCancelPersonalCourseLoading,
    onCancelCourseClick,
    isCanceling,
    isEnrollUserPending,
    onConfirmEnrollUserClick,
    isEnrolling,
  } = useEnrollmentUserTableRow({
    maKhoaHoc,
    taiKhoan: user.taiKhoan,
  });

  return (
    <tr
      className={cn(
        "group border-t border-border-subtle transition-colors duration-200 hover:bg-bg-subtle",
        isCanceling ? "bg-bg-danger/40 text-text-on-feedback" : "",
        isEnrolling ? "bg-bg-brand/40 text-text-on-feedback" : "",
      )}
    >
      <td className="py-3 pl-8 text-left">{stt}</td>
      <td className="pl-4 text-left text-sm">{user.taiKhoan}</td>
      <td className="pl-4 text-left text-sm">{user.hoTen}</td>
      <td className="pl-4 text-center">
        <div
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${isEnrolled ? "bg-bg-enrolled text-text-enrolled group-hover:bg-bg-enrolled-hover" : "bg-bg-enrollment-pending text-text-enrollment-pending group-hover:bg-bg-enrollment-pending-hover"}`}
        >
          {user.trangThai}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          <div className="w-24">
            {user.trangThai === USER_ENROLLMENT_STATUS.PENDING && (
              <Button
                intent={BUTTON_INTENTS.PRIMARY}
                appearance={BUTTON_APPEARANCES.SOLID}
                size={BUTTON_SIZES.NONE}
                fullWidth
                onClick={onConfirmEnrollUserClick}
                loading={isEnrollUserPending}
              >
                <span className="py-1.5 text-xs">Xác nhận</span>
              </Button>
            )}

            {user.trangThai === USER_ENROLLMENT_STATUS.ENROLLED && (
              <Button
                intent={BUTTON_INTENTS.DESTRUCTIVE}
                appearance={BUTTON_APPEARANCES.SOLID}
                size={BUTTON_SIZES.NONE}
                fullWidth
                onClick={onCancelCourseClick}
                loading={isCancelPersonalCourseLoading}
              >
                <span className="py-1.5 text-xs">Hủy đăng ký</span>
              </Button>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};
