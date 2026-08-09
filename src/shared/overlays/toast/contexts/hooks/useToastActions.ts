import { useCallback, useMemo } from "react";
import type { RefObject } from "react";

import type { ToastState } from "./types";

type UseToastActionsProps = {
  autoHideTimeoutRef: RefObject<ReturnType<typeof setTimeout> | null>;
  setToast: React.Dispatch<React.SetStateAction<ToastState>>;
};
export function useToastActions({
  autoHideTimeoutRef,
  setToast,
}: UseToastActionsProps) {
  const show = useCallback(
    ({
      variant,
      message,
    }: {
      variant: ToastState["variant"];
      message: ToastState["message"];
    }) => {
      setToast({ isOpen: true, variant, message });

      clearTimeout(autoHideTimeoutRef.current as ReturnType<typeof setTimeout>);

      autoHideTimeoutRef.current = setTimeout(() => {
        setToast({
          isOpen: false,
          message: "",
          variant: null,
        });
      }, 2500);
    },
    [setToast, autoHideTimeoutRef],
  );

  const hide = useCallback(
    () =>
      setToast({
        isOpen: false,
        message: "",
        variant: null,
      }),
    [setToast],
  );

  return useMemo(
    () => ({
      show,
      hide,
    }),
    [show, hide],
  );
}
