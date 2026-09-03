import { Navigation } from "@shared/navigation";
import { SquarePen } from "lucide-react";

import { NotFoundUser, UpdateUserForm } from "../components";
import { useEditUserContext } from "../contexts";

// Fetches user details via the user search API before updating.
// The keyword-based search may return incorrect or no results, so a fallback UI is required.
export const UpdateUserPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const { hasUserData } = useEditUserContext();

  return hasUserData ? (
    <div className="flex min-h-screen justify-center pt-6 lg:pt-10">
      <div className="flex w-full max-w-md flex-col items-center gap-8 select-none">
        <div
          className="flex-center scroll-target gap-2 text-sm text-text-subtle"
          ref={scrollRef}
        >
          <SquarePen className="hidden size-4 md:block" />
          <p className="text-center">
            Thay đổi thông tin trong form để cập nhật người dùng.
          </p>
        </div>
        <UpdateUserForm />
      </div>
    </div>
  ) : (
    <NotFoundUser />
  );
};
