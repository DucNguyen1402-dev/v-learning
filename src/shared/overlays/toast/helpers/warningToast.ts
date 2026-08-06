import { TOAST_VARIANT } from "@shared/overlays/toast/constants";

export const warningToast = (message: string) => ({
  variant: TOAST_VARIANT.WARNING,
  message,
});
