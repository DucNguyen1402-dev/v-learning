import { useCallback } from "react";

import { AuthSession } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { UserPreferences } from "@shared/user";

export const LogoutButton = () => {
  const { refreshPreferences } = UserPreferences.use();
  const { go } = Navigation.hooks.useNavigateWithState();

  const onLogoutClick = useCallback(() => {
    AuthSession.logout();
    refreshPreferences();
    go({ routeKey: Navigation.client.keys.HOME });
  }, [go, refreshPreferences]);

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
