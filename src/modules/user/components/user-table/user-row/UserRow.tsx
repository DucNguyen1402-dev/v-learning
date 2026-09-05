import { USER_ROLE_LABELS } from "@modules/user/constants";
import type { PaginatedUser, User } from "@modules/user/types";
import { Navigation } from "@shared/navigation";
import { Tooltip } from "@shared/ui";
import { Button, BUTTON_SIZES } from "@shared/ui/button";
import { cn } from "@shared/utils";
import { BookOpen, SquarePen, Trash } from "lucide-react";

import { useUserTableRow } from "./hooks";
type UserRowProps = {
  user: PaginatedUser | User;
  isRecentlyAffected: boolean;
};

const getUserRole = (user: PaginatedUser | User) => {
  if ("tenLoaiNguoiDung" in user) {
    return user.tenLoaiNguoiDung;
  }
  if ("maLoaiNguoiDung" in user) {
    return USER_ROLE_LABELS[user.maLoaiNguoiDung];
  }
  return "unknown";
};

const getUserPhone = (user: PaginatedUser | User) => {
  if ("soDT" in user) {
    return user.soDT;
  }
  if ("soDt" in user) {
    return user.soDt;
  }
  return "unknown";
};
export const UserRow = ({ user, isRecentlyAffected }: UserRowProps) => {
  const { rowRef, onDeleteClick, targetUserDeletion } = useUserTableRow({
    taiKhoan: user.taiKhoan,
    isRecentlyAffected,
  });

  const role = getUserRole(user);

  return (
    <tr
      ref={rowRef}
      className={cn(
        "group border-t border-border-muted text-xs transition-colors duration-150 ease-in-out hover:bg-bg-subtle lg:text-sm",
        {
          "animate-success-row": isRecentlyAffected,
          "bg-bg-danger/50 text-text-on-feedback":
            targetUserDeletion === user.taiKhoan,
        },
      )}
    >
      <td className="py-4 pl-8 font-medium">{user.taiKhoan}</td>

      <td className="pl-4">
        <span className="block">{user.hoTen}</span>
      </td>

      <td className="pl-4">
        <span>{user.email}</span>
      </td>

      <td className="pl-4">
        <span>{getUserPhone(user)}</span>
      </td>

      <td className="pl-4">
        <div className="flex justify-center overflow-hidden rounded-pill border border-border-default bg-bg-subtle px-2 py-1 text-[10px] tracking-wider text-text-default uppercase transition-colors duration-150 group-hover:bg-bg-selected/80 group-hover:text-text-on-selected xl:text-xs">
          {role}
        </div>
      </td>

      <td>
        <div className="flex-center gap-3">
          <Tooltip content="Xem khóa học">
            <Navigation.components.ForwardWithParam
              builderRouteKey={Navigation.admin.builderKeys.USER_COURSES}
              param={user.taiKhoan}
            >
              <div className="rounded p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-brand/10 hover:text-text-brand">
                <BookOpen className="size-4" />
              </div>
            </Navigation.components.ForwardWithParam>
          </Tooltip>
          <Tooltip content="Chỉnh sửa người dùng">
            <Navigation.components.ForwardWithParam
              builderRouteKey={Navigation.admin.builderKeys.USER_EDIT}
              param={user.taiKhoan}
            >
              <div className="rounded p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-brand/10 hover:text-text-brand">
                <SquarePen className="size-4" />
              </div>
            </Navigation.components.ForwardWithParam>
          </Tooltip>

          <Tooltip content="Xóa người dùng">
            <Button onClick={onDeleteClick} size={BUTTON_SIZES.NONE}>
              <div className="rounded p-1.5 transition-colors duration-150 ease-in-out hover:bg-bg-danger/10 hover:text-text-danger">
                <Trash className="size-4" />
              </div>
            </Button>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
