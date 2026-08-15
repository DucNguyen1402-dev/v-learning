export const BUTTON_APPEARANCES = {
  SOLID: "solid",
  OUTLINE: "outline",
  GHOST: "ghost",
  NONE: "none",
} as const;

export type ButtonAppearance =
  (typeof BUTTON_APPEARANCES)[keyof typeof BUTTON_APPEARANCES];
