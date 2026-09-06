import { Navigation } from "@shared/navigation";
import { Loader, SquarePen } from "lucide-react";

import {
  NotFoundUser,
  UpdateUserForm,
  UpdateUserFormSkeleton,
} from "../components";
import { useEditUserContext } from "../contexts";

// Fetches user details via the user search API before updating.
// The keyword-based search may return incorrect or no results, so a fallback UI is required.
export const UpdateUserPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const {
    hasUserData,
    status: { isLoading },
  } = useEditUserContext();

  return hasUserData ? (
    <div className="flex min-h-screen justify-center pt-6 lg:pt-10">
      <div className="flex w-full max-w-md flex-col items-center gap-8 select-none">
        <div
          className="flex-center scroll-target gap-2 text-sm text-text-subtle"
          ref={scrollRef}
        >
          {isLoading ? (
            <Loader className="h-4 w-4 animate-spin" />
          ) : (
            <SquarePen className="hidden size-4 md:block" />
          )}
          <p className="text-center">
            {isLoading
              ? "Đang tải thông tin người dùng..."
              : " Thay đổi thông tin trong form để cập nhật người dùng."}
          </p>
        </div>
        {isLoading ? <UpdateUserFormSkeleton /> : <UpdateUserForm />}
      </div>
    </div>
  ) : (
    <NotFoundUser />
  );
};
