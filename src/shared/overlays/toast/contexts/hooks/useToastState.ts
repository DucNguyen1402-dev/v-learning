import { useRef, useState } from "react";

import type { ToastState } from "./types";

export function useToastState() {
  const [toast, setToast] = useState<ToastState>({
    isOpen: false,
    message: "",
    variant: null,
  });

  const toastRef = useRef(null);
  const autoHideTimeoutRef = useRef(null);

  return {
    isOpen: toast.isOpen,
    message: toast.message,
    variant: toast.variant,
    toastRef,
    autoHideTimeoutRef,
    setToast,
  };
}
