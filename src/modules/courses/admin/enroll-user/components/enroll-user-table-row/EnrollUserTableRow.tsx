import type { UnenrolledUser } from "@modules/courses/admin/enroll-user/types";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { cn } from "@shared/utils";

import { useEnrollUserTableRow } from "./hooks";

type EnrollmentUserTableRowProps = {
  stt: number;
  user: UnenrolledUser;
  maKhoaHoc: string;
};
export const EnrollUserTableRow = ({
  stt,
  user,
  maKhoaHoc,
}: EnrollmentUserTableRowProps) => {
  const { isEnrollUserPending, onEnrollUserClick, isEnrolling } =
    useEnrollUserTableRow({
      maKhoaHoc,
      taiKhoan: user.taiKhoan,
    });

  const isMobile = window.innerWidth <= 768;
  return (
    <tr
      className={cn(
        "group border-b border-border-subtle transition-colors duration-200 hover:bg-bg-subtle",
        isEnrolling ? "bg-bg-brand/40 text-text-on-feedback" : "",
      )}
    >
      <td className="py-3 pl-8 text-left">{stt}</td>
      <td className="pl-4 text-left text-sm">{user.taiKhoan}</td>
      <td className="pl-4 text-left text-sm">{user.hoTen}</td>

      <td>
        <div className="flex justify-center">
          <Button
            intent={BUTTON_INTENTS.PRIMARY}
            appearance={BUTTON_APPEARANCES.SOLID}
            onClick={onEnrollUserClick}
            loading={isEnrollUserPending}
            size={isMobile ? BUTTON_SIZES.SMALL : BUTTON_SIZES.MEDIUM}
          >
            <span className="text-xs">Ghi danh</span>
          </Button>
        </div>
      </td>
    </tr>
  );
};
