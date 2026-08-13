export const BUTTON_LAYOUTS = {
  CENTER: "center",
  START: "start",
  END: "end",
} as const;

export type ButtonLayout = (typeof BUTTON_LAYOUTS)[keyof typeof BUTTON_LAYOUTS];
