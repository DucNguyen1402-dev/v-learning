export const BUTTON_INTENTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DESTRUCTIVE: "destructive",
} as const;

export type ButtonIntent = (typeof BUTTON_INTENTS)[keyof typeof BUTTON_INTENTS];
