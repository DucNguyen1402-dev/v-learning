import { CHECKBOX_SIZE } from "./constants";
export const checkboxSizeClasses = {
  [CHECKBOX_SIZE.SMALL]: {
    container: "checkbox-sm",
    indicator: "checkbox-indicator-sm",
  },
  [CHECKBOX_SIZE.MEDIUM]: {
    container: "checkbox-md",
    indicator: "checkbox-indicator-md",
  },
  [CHECKBOX_SIZE.LARGE]: {
    container: "checkbox-lg",
    indicator: "checkbox-indicator-lg",
  },
} as const;
