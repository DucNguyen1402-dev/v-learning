import { Navigation } from "@shared/navigation";

import { PasswordChangeForm, PasswordChangeHeader } from "../components";

export const PasswordChangePage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  const currentArea = Navigation.hooks.useCurrentArea();

  return (
    <div
      className={`flex min-h-screen justify-center py-6 ${currentArea === "admin" ? "items-center" : "items-start"}`}
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
