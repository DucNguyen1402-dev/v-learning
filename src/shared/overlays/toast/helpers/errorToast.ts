import { TOAST_VARIANT } from "../constants";

export const errorToast = (message: string) => ({
  variant: TOAST_VARIANT.ERROR,
  message,
});
