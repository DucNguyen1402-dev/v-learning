import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@shared/utils";
import { Check } from "lucide-react";

import { checkboxSizeClasses } from "./config";
import { CHECKBOX_SIZE, type CheckboxSize } from "./constants";

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "children"
> & {
  size?: CheckboxSize;
  roundedFull?: boolean;
  hideIndicator?: boolean;
};

export const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      checked,
      onCheckedChange,
      disabled,
      id,
      size = CHECKBOX_SIZE.MEDIUM,
      ...props
    },
    ref,
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={checked}
      id={id}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      className={cn(
        "checkbox",
        {
          "checkbox-disabled": disabled,
          "checkbox-default": !disabled,
        },
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
  ),
);

Checkbox.displayName = "Checkbox";
