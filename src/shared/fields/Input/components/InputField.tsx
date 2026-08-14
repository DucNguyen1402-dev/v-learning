import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@shared/utils";

import { useInputContext } from "../contexts";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  hasLeftAddon?: boolean;
  hasRightAddon?: boolean;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      disabled = false,
      type = "text",
      invalid = false,
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
          "field-base",
          {
            "field-disabled": disabled,
            "field-invalid": !disabled && invalid,
            "field-with-left-addon": hasLeftAddon,
            "field-with-right-addon": hasRightAddon,
          },
          props.className,
        )}
        {...props}
      />
    );
  },
);

InputField.displayName = "InputField";
