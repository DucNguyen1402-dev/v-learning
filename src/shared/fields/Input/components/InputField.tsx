import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@shared/utils";

import { useInputContext } from "../contexts";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  hasLeftAddon?: boolean;
  hasRightAddon?: boolean;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      disabled = false,
      type = "password",
      isError = false,
      hasLeftAddon = false,
      hasRightAddon = false,
      id,
      ...props
    },
    ref,
  ) => {
    const {
      password: { showPassword },
    } = useInputContext();
    return (
      <input
        ref={ref}
        id={id ?? props.name}
        type={showPassword ? "text" : type}
        disabled={disabled}

        className={cn(
          "input-base",
          {
            "input-disabled": disabled,
            "input-error": !disabled && isError,
            "input-default": !disabled && !isError,
            "input-with-left-addon": hasLeftAddon,
            "input-with-right-addon": hasRightAddon,
          },
          props.className,
        )}
        {...props}
      />
    );
  },
);

InputField.displayName = "InputField";
