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
      <label className="flex-center gap-2 select-none">
        <CheckboxPrimitive.Root
          ref={ref}
          checked={checked}
          id={id}
          disabled={disabled}
          onCheckedChange={onCheckedChange}
          className={cn(
            "checkbox",
            disabled ? "checkbox-disabled" : "checkbox-default",
            checkboxClassName,
            checkboxSizeClasses[size].container,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator>
            <Check
              className={cn(
                "checkbox-indicator",
                checkboxSizeClasses[size].indicator,
              )}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {children && (
          <span
            className={cn(
              "checkbox-label",
              disabled ? "checkbox-label-disabled" : "checkbox-label-default",
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
