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

import type { LoginLocationPayload } from "../types";

export const LoginPage = () => {
  //1. Scroll on route change to the login block
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  //2. Show toast message if there's a payload in the location state
  const { show: showToast } = Toast.use();

  const payload: LoginLocationPayload | undefined =
    Navigation.hooks.usePayload();
  const [toast] = State.useTemporary(payload?.toast);
  const consumePayload = Navigation.hooks.useConsumePayload();

  useEffect(() => {
    if (!toast) return;
    showToast(toast);
    //3. Consume the location state to prevent showing the toast again on re-render
    consumePayload("toast");
  }, [toast, showToast, consumePayload]);

  return (
    <div className="flex-center min-h-screen md:p-4">
      <div
        className="flex w-full max-w-md scroll-target flex-col gap-6 rounded-surface border border-border-subtle bg-bg-default p-6 shadow-sm md:p-8"
        ref={scrollRef}
      >
        <LoginHeader
          isRegistrationSuccessful={payload?.isRegistrationSuccessful}
        />

        <div className="mt-5">
          <LoginForm />
        </div>

        <div className="mt-8">
          <LoginActions />
        </div>

        <div className="mt-2">
          <LoginFooter />
        </div>
      </div>
    </div>
  );
};
