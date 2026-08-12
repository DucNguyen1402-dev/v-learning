import { cva } from "class-variance-authority";

export const buttonVariants = cva("button-base", {
  variants: {
    intent: {
      primary: "button-primary",
      secondary: "button-secondary",
      tertiary: "button-tertiary",
      destructive: "button-destructive",
    },
    appearance: {
      solid: "solid",
      outline: "outline",
      ghost: "ghost",
    },
  },
  defaultVariants: {
    intent: "primary",
    appearance: "solid",
  },
});
