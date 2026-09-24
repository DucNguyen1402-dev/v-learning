import { useLayoutEffect, useState } from "react";

import { Navigation } from "@shared/navigation";
import { Skeleton, SKELETON_HEIGHTS } from "@shared/ui";
import { SquarePen } from "lucide-react";

import {
  NotFoundUser,
  UpdateUserForm,
  UpdateUserFormSkeleton,
} from "../components";
import { useEditUserContext } from "../contexts";

// Fetches user details via the user search API before updating.
// The keyword-based search may return incorrect or no results, so a fallback UI is required.
export const UpdateUserPage = () => {
  Navigation.hooks.useScrollToTopOnRouteChange();

  const [loading, setLoading] = useState(false);
  const {
    hasUserData,
    status: { isLoading },
  } = useEditUserContext();

  useLayoutEffect(() => {
    if (isLoading) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(true);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="flex justify-center pt-6 lg:pt-10">
      <div
        className={`flex w-full flex-col items-center gap-8 select-none ${hasUserData ? "max-w-md" : "max-w-5xl"}`}
      >
        {loading ? (
          <Skeleton fullWidth height={SKELETON_HEIGHTS.MD} />
        ) : hasUserData ? (
          <div className="flex-center gap-2 text-sm text-text-subtle">
            <SquarePen className="hidden size-4 md:block" />
            <p className="text-center">
              Thay đổi thông tin trong form để cập nhật người dùng.
            </p>
          </div>
        ) : null}

        {loading ? (
          <UpdateUserFormSkeleton />
        ) : hasUserData ? (
          <UpdateUserForm />
        ) : (
          <NotFoundUser />
        )}
      </div>
    </div>
  );
};
