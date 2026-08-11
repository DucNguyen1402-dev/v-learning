import type {
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";

import { Spinner } from "@shared/overlays";
import { cn } from "@shared/utils";

import { type ButtonSize, sizes, variants } from "../config";
import { BUTTON_VARIANTS, type ButtonVariant } from "../constants";

type ButtonIcon = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: ButtonIcon;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  variant?: ButtonVariant;
};

export const Button = ({
  children,
  icon: Icon,
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
  variant = BUTTON_VARIANTS.PRIMARY,
  type = "button",
  ...props
}: ButtonProps) => {
  const currentSize = sizes[size];

  return (
    <button
      disabled={loading || props.disabled}
      className={cn(
        "button",
        currentSize.button,
        fullWidth ? "w-full" : "",
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {Icon && !loading && <Icon className={currentSize.icon} />}
      {loading && <Spinner className={currentSize.icon} color="brand" />}

      {children}
    </button>
  );
};
