import { TOAST_VARIANT } from "@shared/overlays/toast/constants";

export const errorToast = (message: string) => ({
  variant: TOAST_VARIANT.ERROR,
  message,
});
