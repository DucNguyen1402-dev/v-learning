import { BUTTON_SIZES } from "../constants";
export const buttonSizes = {
  [BUTTON_SIZES.NONE]: {
    button: "",
    icon: "",
  },

  [BUTTON_SIZES.SMALL]: {
    button: "button-sm",
    icon: "icon-button-sm",
  },
  [BUTTON_SIZES.MEDIUM]: {
    button: "button-md",
    icon: "icon-button-md",
  },
  [BUTTON_SIZES.LARGE]: {
    button: "button-lg",
    icon: "icon-button-lg",
  },
};
