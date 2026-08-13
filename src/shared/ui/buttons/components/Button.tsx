import type {
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";

// import { Spinner } from "@shared/overlays";
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
    appearance?: ButtonAppearance;
    disabled?: boolean;
  };

export const Button = ({
  children,
  icon: Icon,
  size = BUTTON_SIZES.MEDIUM,
  loading = false,
  fullWidth = false,
  intent = BUTTON_INTENTS.NONE,
  appearance = BUTTON_APPEARANCES.NONE,
  layout = BUTTON_LAYOUTS.CENTER,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const currentSize = buttonSizes[size];

  return (
    <button
      disabled={loading || disabled}
      className={cn(
        currentSize.button,
        fullWidth ? "w-full" : "",
        buttonVariants({ intent, appearance }),
        buttonLayouts[layout],
        disabled && "button-disabled",
      )}
      type={type}
      {...props}
    >
      {Icon && !loading && <Icon className={currentSize.icon} />}
      {/* {loading && <Spinner className={currentSize.icon} color="brand" />} */}

      {children}
    </button>
  );
};
