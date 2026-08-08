import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
  type ReactNode,
} from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@shared/utils";
import { Check } from "lucide-react";

const checkboxSizeClasses = {
  sm: {
    container: " w-4 h-4",
    indicator: "w-3 h-3",
  },
  md: {
    container: " w-5 h-5",
    indicator: "w-4 h-4",
  },
  lg: {
    container: " w-6 h-6",
    indicator: "w-5 h-5",
  },
};

type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "children"
> & {
  children?: ReactNode;
  checkboxClassName?: string;
  labelClassName?: string;
  size?: CheckboxSize;
};

export const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      checked,
      onCheckedChange,
      children,
      disabled,
      checkboxClassName,
      labelClassName,
      id,
      size = "md",
      ...props
    },
    ref,
  ) => {
    return (
      <label className="flex cursor-pointer items-center gap-2 select-none">
        <CheckboxPrimitive.Root
          ref={ref}
          checked={checked}
          id={id}
          disabled={disabled}
          onCheckedChange={onCheckedChange}
          className={cn(
            "checkbox",
            checkboxClassName,
            checkboxSizeClasses[size].container,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator>
            <Check
              className={cn(
                "text-slate-50",
                checkboxSizeClasses[size].indicator,
              )}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {children && (
          <span
            className={cn(
              "text-secondary select-none",
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
              labelClassName,
            )}
          >
            {children}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
