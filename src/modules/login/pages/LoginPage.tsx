import { useEffect } from "react";

import {
  LoginActions,
  LoginFooter,
  LoginForm,
  LoginHeader,
} from "@modules/login/components";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";

export const LoginPage = () => {
  //1. Scroll on route change to the login block
  const { scrollRef } = Navigation.useScrollOnRouteChange();

  //2. Show toast message if there's a payload in the location state
  const { show: showToast } = Toast.use();

  const [toast] = State.useTemporary(Navigation.usePayload());
  const consumePayload = Navigation.useConsumePayload();

  useEffect(() => {
    if (!toast) return;
    showToast(toast);
    //3. Consume the location state to prevent showing the toast again on re-render
    consumePayload();
  }, [toast, showToast, consumePayload]);

  return (
    <div className="flex-center min-h-screen md:p-4">
      <div
        className="flex w-full max-w-md scroll-target flex-col gap-6 rounded-surface border border-border-subtle bg-bg-default p-6 shadow-sm md:p-8"
        ref={scrollRef}
      >
        <LoginHeader previousRouteKey={"REGISTER"} />

        <div className="mt-5">
          <LoginForm />
        </div>

        <div className="mt-2">
          <LoginActions />
        </div>

        <div className="mt-2">
          <LoginFooter />
        </div>
      </div>
    </div>
  );
};
