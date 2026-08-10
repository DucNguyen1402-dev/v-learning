export const TOAST_VARIANT = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  DEFAULT: "default",
} as const;

export type ToastVariant = (typeof TOAST_VARIANT)[keyof typeof TOAST_VARIANT];
