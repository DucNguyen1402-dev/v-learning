import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { AppInteractionLock } from "@shared/overlays";

import { BrandValueSection, RegisterForm } from "../components";
import { useRegisterContext } from "../contexts";
export const RegisterPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const {
    actions: { isRegistering },
  } = useRegisterContext();
  const { shouldLockInteraction } = AppInteractionLock.use();
  useEffect(() => {
    shouldLockInteraction(isRegistering);
  }, [isRegistering, shouldLockInteraction]);

  return (
    <div className="grid min-h-screen items-center gap-4 px-3 md:grid-cols-2 lg:gap-8 lg:px-8">
      <BrandValueSection />
      <div className="flex-center">
        <RegisterForm scrollRef={scrollRef} />
      </div>
    </div>
  );
};
