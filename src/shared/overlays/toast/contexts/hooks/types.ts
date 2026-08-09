import type { ToastVariant } from "@shared/overlays/toast/constants";

export type ToastState = {
  isOpen: boolean;
  message: string;
  variant: ToastVariant | null;
};
