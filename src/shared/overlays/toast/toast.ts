import { ToastProvider, useToastContext } from "./contexts";
import { errorToast, successToast, warningToast } from "./helpers";

const Toast = {
  use: useToastContext,
  config: {
    success: successToast,
    error: errorToast,
    warning: warningToast,
  },
  Provider: ToastProvider,
};

export default Toast;
