import type {
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";

// import { Spinner } from "@shared/overlays";
import { cn } from "@shared/utils";
import { type VariantProps } from "class-variance-authority";

import { type ButtonSize, buttonVariants, sizes } from "../config";
import {
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  type ButtonAppearance,
  type ButtonIntent,
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
    appearance?: ButtonAppearance;
  };

export const Button = ({
  children,
  icon: Icon,
  size = "md",
  loading = false,
  fullWidth = false,
  intent = BUTTON_INTENTS.PRIMARY,
  appearance = BUTTON_APPEARANCES.SOLID,
  type = "button",
  ...props
}: ButtonProps) => {
  const currentSize = sizes[size];

  return (
    <button
      disabled={loading || props.disabled}
      className={cn(
        currentSize.button,
        fullWidth ? "w-full" : "",
        buttonVariants({ intent, appearance }),
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
