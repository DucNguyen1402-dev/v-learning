import type { ToastShowOptions } from "@shared/overlays/toast";
export type LoginLocationPayload = {
  toastState: ToastShowOptions;
  isRegistrationSuccessful: boolean;
  loginRequired: boolean;
  adminAuthRequired: boolean;
};

export type HeaderLoginState = Omit<LoginLocationPayload, "toastState">;
