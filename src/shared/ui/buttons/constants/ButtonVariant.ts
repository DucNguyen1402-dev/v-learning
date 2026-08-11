export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  DESTRUCTIVE: "destructive",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
} as const;

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
