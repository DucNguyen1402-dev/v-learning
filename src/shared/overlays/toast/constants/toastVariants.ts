export const TOAST_VARIANT = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
} as const;

export type ToastVariant = (typeof TOAST_VARIANT)[keyof typeof TOAST_VARIANT];
