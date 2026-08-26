export const SEPARATOR_ORIENTATION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const;

export type SeparatorOrientation =
  (typeof SEPARATOR_ORIENTATION)[keyof typeof SEPARATOR_ORIENTATION];

export const SEPARATOR_INTENTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

export type SeparatorIntent =
  (typeof SEPARATOR_INTENTS)[keyof typeof SEPARATOR_INTENTS];
