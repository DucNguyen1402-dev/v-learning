import type {
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";

import { Spinner } from "@shared/overlays";
import { cn } from "@shared/utils";

const sizes = {
  none: {
    button: "",
    icon: "",
  },

  sm: {
    button: "button-sm",
    icon: "size-4",
  },
  md: {
    button: "button-md",
    icon: "size-5",
  },
  lg: {
    button: "button-lg",
    icon: "size-6",
  },
};

type ButtonSize = "none" | "sm" | "md" | "lg";

type ButtonIcon = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: ButtonIcon;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
};

export const Button = ({
  children,
  icon: Icon,
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
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
        className,
      )}
      {...props}
    >
      {Icon && !loading && <Icon className={currentSize.icon} />}
      {loading && <Spinner className={currentSize.icon} color="brand" />}

      {children}
    </button>
  );
};
