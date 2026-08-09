import { ToastProvider, useToastContext } from "./contexts";
import { errorToast, successToast, warningToast } from "./helpers";

export const Toast = {
  use: useToastContext,
  config: {
    success: successToast,
    error: errorToast,
    warning: warningToast,
  },
  Provider: ToastProvider,
};
