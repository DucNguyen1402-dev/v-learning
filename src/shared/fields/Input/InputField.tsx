import { forwardRef } from "react";

import { cn } from "@shared/utils";

export const InputField = forwardRef<HTMLInputElement>(
  ({ disabled = false, type = "text", error, id, ...props }, ref) => {
    return (
      <input
        ref={ref}
        id={id ?? props.name}
        type={type}
        disabled={disabled}

        className={cn(
          "input",
          disabled ? "input-disabled" : error ? "input-error" : "input-default",
        )}
        {...props}
      />
    );
  },
);

InputField.displayName = "InputField";
