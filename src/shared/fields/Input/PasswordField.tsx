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
  const Icon = showPassword ? Eye : EyeOff;
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
          {shouldShowRightIcon && (
            <Icon className="size-4.5 text-text-tertiary transition-colors duration-150 ease-in-out hover:text-text-primary" />
          )}
        </Button>
      }
      type={showPassword ? "text" : "password"}
    />
  );
});
