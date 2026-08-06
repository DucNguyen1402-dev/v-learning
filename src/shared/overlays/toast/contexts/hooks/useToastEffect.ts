import { useEffect } from "react";
import type { RefObject } from "react";

interface UseToastEffectProps {
  toastRef: RefObject<HTMLDivElement | null>;
  hideToast: () => void;
  autoHideTimeoutRef: RefObject<ReturnType<typeof setTimeout> | null>;
}

export function useToastEffect({
  toastRef,
  hideToast,
  autoHideTimeoutRef,
}: UseToastEffectProps) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        toastRef &&
        toastRef.current &&
        !toastRef.current.contains(e.target as Node)
      ) {
        hideToast();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [autoHideTimeoutRef, hideToast, toastRef]);
}
