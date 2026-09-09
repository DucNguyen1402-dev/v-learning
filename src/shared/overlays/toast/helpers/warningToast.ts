import { TOAST_VARIANT } from "../constants";

export const warningToast = (message: string) => ({
  variant: TOAST_VARIANT.WARNING,
  message,
});
