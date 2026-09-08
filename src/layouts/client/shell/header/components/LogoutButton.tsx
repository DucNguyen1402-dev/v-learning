import { useCallback } from "react";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";
import { Session } from "@shared/session";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";

export const LogoutButton = () => {
  const { refreshCurrentUser } = CurrentUser.use();
  const { go } = Navigation.hooks.useNavigateWithState();

  const onLogoutClick = useCallback(() => {
    Session.logout();
    refreshCurrentUser();
    go({ routeKey: Navigation.client.keys.HOME });
  }, [go, refreshCurrentUser]);

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
