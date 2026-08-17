import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";
import { Eye, EyeOff } from "lucide-react";

import { useInputContext } from "../contexts";

export const PasswordVisibilityToggle = () => {
  const {
    password: { showPassword, togglePasswordVisibility },
  } = useInputContext();

  const Icon = showPassword ? Eye : EyeOff;
  return (
    <div className="addon-position">
      <Button
        size="none"
        intent={BUTTON_INTENTS.TERTIARY}
        appearance={BUTTON_APPEARANCES.GHOST}
        aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        onClick={() => togglePasswordVisibility()}
      >
        <Icon className="password-visibility-toggle" />
      </Button>
    </div>
  );
};
