import { useCallback } from "react";

import { AuthSession } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { User } from "@shared/user";

export const LogoutButton = () => {
  const { refresh: refreshUser } = User.use();
  const { go } = Navigation.hooks.useNavigate();

  const onLogoutClick = useCallback(() => {
    AuthSession.logout();
    refreshUser();
    go(Navigation.client.keys.HOME);
  }, [go, refreshUser]);

  return (
    <Button
      onClick={onLogoutClick}
      fullWidth={true}
      size={BUTTON_SIZES.NONE}
      intent={BUTTON_INTENTS.DESTRUCTIVE}
      appearance={BUTTON_APPEARANCES.GHOST}
    >
      <span className="text-sm">Đăng xuất</span>
    </Button>
  );
};
