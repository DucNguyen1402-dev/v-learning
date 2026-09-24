import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";
import { PencilLine } from "lucide-react";

import { ProfileForm } from "../components";
export const ProfileChangePage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  const currentArea = Navigation.hooks.useCurrentArea();
  const isMobile = window.innerWidth < 640;
  return (
    <div
      className={cn(`flex flex-col items-center gap-8 pt-5 md:px-4`, {
        "justify-center": currentArea === "admin",
        "justify-start": currentArea !== "admin",
        "min-h-[calc(100dvh-16rem)]": !isMobile && currentArea === "admin",
      })}
    >
      <div
        className="flex scroll-target items-start justify-center gap-1 select-none md:items-center md:gap-2"
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
