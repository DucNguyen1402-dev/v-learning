export const BUTTON_APPEARANCES = {
  SOLID: "solid",
} as const;

export type ButtonAppearance =
  (typeof BUTTON_APPEARANCES)[keyof typeof BUTTON_APPEARANCES];
