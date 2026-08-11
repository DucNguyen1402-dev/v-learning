export const BUTTON_INTENTS = {
  PRIMARY: "primary",
} as const;

export type ButtonIntent = (typeof BUTTON_INTENTS)[keyof typeof BUTTON_INTENTS];
