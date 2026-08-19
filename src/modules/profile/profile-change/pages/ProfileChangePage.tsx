import { Navigation } from "@shared/navigation";
import { PencilLine } from "lucide-react";

import { ProfileForm } from "../components";
export const ProfileChangePage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  return (
    <div className="flex-center min-h-screen flex-col gap-8 pt-5 md:px-4">
      <div
        className="flex scroll-target items-start justify-center gap-1 md:items-center md:gap-2"
        ref={scrollRef}
      >
        <PencilLine className="size-4 text-text-muted" />
        <h2 className="text-center text-sm text-text-subtle">
          Cập nhật thông tin tài khoản của bạn bằng biểu mẫu bên dưới.
        </h2>
      </div>
      <ProfileForm />
    </div>
  );
};
