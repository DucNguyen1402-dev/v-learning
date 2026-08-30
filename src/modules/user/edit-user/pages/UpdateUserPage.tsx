import { Navigation } from "@shared/navigation";
import { SquarePen } from "lucide-react";

import { UpdateUserForm } from "../components";

export const UpdateUserPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  return (
    <div className="flex min-h-screen justify-center pt-6 lg:pt-10">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8">
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
  );
};
