import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
  useState,
} from "react";

import { Button } from "@shared/ui";
import { Eye, EyeOff } from "lucide-react";

import { Input } from ".";

type PasswordFieldProps = ComponentPropsWithoutRef<typeof Input>;

export const PasswordField = forwardRef<
  ComponentRef<typeof Input>,
  PasswordFieldProps
>(({ disabled, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const shouldShowRightIcon = !disabled;
  return (
    <Input
      ref={ref}
      {...props}
      disabled={disabled}
      rightSlot={
        <Button
          type="button"
          size="none"
          aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {shouldShowRightIcon &&
            (showPassword ? (
              <Eye className="size-4.5 text-tertiary" />
            ) : (
              <EyeOff className="size-4.5 text-tertiary" />
            ))}
        </Button>
      }
      type={showPassword ? "text" : "password"}
    />
  );
});
