import type { ToastVariant } from "@shared/overlays/toast/constants";

export type ToastState = {
  isOpen: boolean;
  message: string;
  variant: ToastVariant | null;
};

export type ToastShowOptions = {
  message: ToastState["message"];
  variant: NonNullable<ToastState["variant"]>;
};
