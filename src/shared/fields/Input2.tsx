import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentType } from "react";

import { ErrorMessage } from "@shared/fields";
import { cn } from "@shared/utils";

type IconComponent = ComponentType<{ className?: string }>;

type InputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
  inputClassName?: string;
  disabledClassName?: string;
  showDisabledIcon?: boolean;
  wrapperClassName?: string;
  errorClassName?: string;
  leftAddon?: IconComponent;
  rightAddon?: IconComponent;
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
      wrapperClassName,
      errorClassName,
      leftAddon: LeftAddon,
      rightAddon: RightAddon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("flex flex-col gap-2", wrapperClassName)}>
        <div className="relative">
          {LeftAddon && (
            <div className="absolute top-1/2 left-2 -translate-y-1/2">
              <LeftAddon />
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
              LeftAddon && "pl-7",
            )}
            {...props}
          />
          {RightAddon && (
            <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center justify-center">
              <RightAddon />
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
