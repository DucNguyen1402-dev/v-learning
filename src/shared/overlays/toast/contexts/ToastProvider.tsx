import type { ReactNode } from "react";

import { useToastActions, useToastEffect, useToastState } from "./hooks";
import { ToastContext } from "./ToastContext";
import type { ToastContextValues } from "./ToastContextValues";
interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const { isOpen, variant, message, toastRef, autoHideTimeoutRef, setToast } =
    useToastState();

  const { show, hide } = useToastActions({
    autoHideTimeoutRef,
    setToast,
  });

  useToastEffect({
    toastRef,
    hideToast: hide,
    autoHideTimeoutRef,
  });

  const value: ToastContextValues = {
    state: {
      ref: toastRef,
      message,
      variant,
      isOpen,
    },
    show,
    hide,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
