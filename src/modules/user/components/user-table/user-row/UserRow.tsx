import { USER_ROLE_LABELS } from "@modules/user/constants";
import type { User } from "@modules/user/types";
import { Navigation } from "@shared/navigation";
import { Button, BUTTON_SIZES } from "@shared/ui/button";
import { cn } from "@shared/utils";
import { SquarePen, Trash } from "lucide-react";

import { useUserDeletion } from "./hooks";
type UserRowProps = {
  user: User;
  isRecentlyAffected?: boolean;
};
export const UserRow = ({ user, isRecentlyAffected }: UserRowProps) => {
  const { onDeleteClick, targetUserDeletion } = useUserDeletion({
    taiKhoan: user.taiKhoan,
  });
  return (
    <tr
      className={cn(
        "group border-t border-border-muted text-sm transition-colors duration-150 ease-in-out hover:bg-bg-subtle",
        {
          "animate-success-row": isRecentlyAffected,
          "bg-bg-danger/50 text-text-on-feedback":
            targetUserDeletion === user.taiKhoan,
        },
      )}
    >
      <td className="py-4 pl-8 font-medium">#{user.taiKhoan}</td>

      <td className="pl-4">
        <span className="block">{user.hoTen}</span>
      </td>

      <td className="pl-4">
        <span>{user.email}</span>
      </td>

      <td className="pl-4">
        <span>{user.soDt}</span>
      </td>

      <td className="pl-4">
        <div className="flex justify-center overflow-hidden rounded-pill border border-border-default bg-bg-subtle px-2 py-1 text-xs tracking-wider uppercase group-hover:bg-bg-selected/80 group-hover:text-text-on-selected transition-colors duration-150">
          {USER_ROLE_LABELS[user.maLoaiNguoiDung]}
        </div>
      </td>

      <td>
        <div className="flex-center gap-3">
          <Navigation.components.ForwardWithParam
            builderRouteKey={Navigation.admin.buildersKeys.COURSE_EDIT}
            param={user.taiKhoan}
          >
            <div className="rounded p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-brand/10 hover:text-text-brand">
              <SquarePen className="size-4" />
            </div>
          </Navigation.components.ForwardWithParam>

          <Button onClick={onDeleteClick} size={BUTTON_SIZES.NONE}>
            <div className="rounded p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-danger/10 hover:text-text-danger">
              <Trash className="size-4" />
            </div>
          </Button>
        </div>
      </td>
    </tr>
  );
};
