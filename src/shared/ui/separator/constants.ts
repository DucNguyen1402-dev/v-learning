export const SEPARATOR_ORIENTATION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const;

export type SeparatorOrientation =
  (typeof SEPARATOR_ORIENTATION)[keyof typeof SEPARATOR_ORIENTATION];
