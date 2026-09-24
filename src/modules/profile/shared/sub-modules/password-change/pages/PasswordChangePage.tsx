import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";

import { PasswordChangeForm, PasswordChangeHeader } from "../components";

export const PasswordChangePage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  const currentArea = Navigation.hooks.useCurrentArea();
  const isMobile = window.innerWidth < 640;
  return (
    <div
      className={cn(`flex justify-center py-6`, {
        "items-center": currentArea === "admin",
        "items-start": currentArea !== "admin",
        "min-h-[calc(100dvh-10rem)]": !isMobile && currentArea === "admin",
      })}
    >
      <div
        ref={scrollRef}
        className="flex w-full max-w-md scroll-target flex-col gap-10 rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface md:p-8"
      >
        <PasswordChangeHeader />
        <PasswordChangeForm />
      </div>
    </div>
  );
};
