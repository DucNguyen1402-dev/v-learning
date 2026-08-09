import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentType } from "react";

import { ErrorMessage } from "@shared/fields";
import { cn } from "@shared/utils";
import { LockKeyhole } from "lucide-react";

type IconComponent = ComponentType<{ className?: string }>;

type InputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
  inputClassName?: string;
  disabledClassName?: string;
  showDisabledIcon?: boolean;
  wrapperClassName?: string;
  errorClassName?: string;
  leftAddon?: IconComponent;
  leftIcon?: IconComponent;
  rightIcon?: IconComponent;
  rightSlot?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled = false,
      type = "text",
      error,
      id,
      inputClassName,
      disabledClassName,
      showDisabledIcon = true,
      wrapperClassName,
      errorClassName,
      leftAddon: LeftAddon,
      rightIcon: RightIcon,
      leftIcon: LeftIcon,
      rightSlot,
      ...props
    },
    ref,
  ) => {
    const shouldShowDisabledIcon = disabled && showDisabledIcon;
    const Icon = shouldShowDisabledIcon ? LockKeyhole : RightIcon;
    return (
      <div className={cn("flex flex-col gap-2", wrapperClassName)}>
        <div className="relative">
          {LeftAddon && (
            <div className="absolute top-1/2 left-2 -translate-y-1/2">
              <LeftAddon className="size-4 text-text-tertiary" />
            </div>
          )}
          {LeftIcon && (
            <div className="absolute top-1/2 left-2 -translate-y-1/2">
              <LeftIcon className="size-4 text-text-tertiary" />
            </div>
          )}

          <input
            ref={ref}
            id={id ?? props.name}
            type={type}
            disabled={disabled}

            className={cn(
              "input",
              disabled
                ? "input-disabled"
                : error
                  ? "input-error"
                  : "input-default",
              inputClassName,
              disabled && disabledClassName,
              LeftIcon && "pl-7",
            )}
            {...props}
          />
          {rightSlot && (
            <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center justify-center">
              {rightSlot}
            </div>
          )}

          {Icon && (
            <div className="absolute top-1/2 right-2 -translate-y-1/2">
              <Icon className="size-4 text-text-tertiary" />
            </div>
          )}
        </div>
        {error && (
          <ErrorMessage className={errorClassName}>{error}</ErrorMessage>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
