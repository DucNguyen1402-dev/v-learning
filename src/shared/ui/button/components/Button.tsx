import type {
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";

import { Spinner } from "@shared/overlays";
import { cn } from "@shared/utils";
import { type VariantProps } from "class-variance-authority";

import { buttonLayouts, buttonSizes, buttonVariants } from "../config";
import {
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_LAYOUTS,
  BUTTON_SIZES,
  type ButtonAppearance,
  type ButtonIntent,
  type ButtonLayout,
  type ButtonSize,
} from "../constants";

type ButtonIcon = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode;
    icon?: ButtonIcon;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    intent?: ButtonIntent;
    layout?: ButtonLayout;
    fullSize?: boolean;
    appearance?: ButtonAppearance;
    disabled?: boolean;
    selected?: boolean;
  };

export const Button = ({
  children,
  icon: Icon,
  size = BUTTON_SIZES.MEDIUM,
  loading = false,
  fullWidth = false,
  fullSize = false,
  intent = BUTTON_INTENTS.NONE,
  appearance = BUTTON_APPEARANCES.NONE,
  layout = BUTTON_LAYOUTS.CENTER,
  type = "button",
  disabled = false,
  selected = false,
  ...props
}: ButtonProps) => {
  const currentSize = buttonSizes[size];

  return (
    <button
      disabled={loading || disabled}
      className={cn(
        "button-base",
        currentSize.button,
        buttonLayouts[layout],
        fullWidth ? "w-full" : "",
        fullSize ? "size-full" : "",
        {
          "button-disabled": disabled,
          "button-selected": selected,
          [buttonVariants({ intent, appearance })]: !selected,
        },
      )}
      type={type}
      {...props}
    >
      {Icon && !loading && <Icon className={currentSize.icon} />}
      {loading && <Spinner />}

      {children}
    </button>
  );
};
