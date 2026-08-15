export const CHECKBOX_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type CheckboxSize = (typeof CHECKBOX_SIZE)[keyof typeof CHECKBOX_SIZE];
