export const sizes = {
  none: {
    button: "",
    icon: "",
  },

  sm: {
    button: "button-sm",
    icon: "icon-button-sm",
  },
  md: {
    button: "button-md",
    icon: "icon-button-md",
  },
  lg: {
    button: "button-lg",
    icon: "icon-button-lg",
  },
  icon: {
    button: "button-icon",
    icon: "icon-button-icon",
  },
};

export type ButtonSize = keyof typeof sizes;
