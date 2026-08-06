export const TOAST_VARIANT = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SYSTEM: "system",
} as const;

export type ToastVariant = (typeof TOAST_VARIANT)[keyof typeof TOAST_VARIANT];
