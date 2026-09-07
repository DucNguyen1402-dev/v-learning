import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { UserPreferences } from "@shared/current-user";
import { Navigation } from "@shared/navigation";
import { Session } from "@shared/session";
import { Button, BUTTON_LAYOUTS, BUTTON_SIZES } from "@shared/ui";
import { cn } from "@shared/utils";
import { LogOut, User as UserIcon } from "lucide-react";

export const ProfileDropdown = () => {
  const { pathname } = useLocation();
  const { theme, refreshPreferences } = UserPreferences.use();
  const { go } = Navigation.hooks.useNavigateWithState();

  const currentArea = Navigation.hooks.useCurrentArea();

  const onLogoutClick = useCallback(() => {
    Session.logout();
    refreshPreferences();
    go({
      routeKey: Navigation.client.keys.LOGIN,
    });
  }, [go, refreshPreferences]);

  const menuItems = useMemo(() => {
    return [
      {
        id: "theme-toggle",
        label: `Chế độ ${theme.asset.label}`,
        onClick: theme.toggle,
        icon: theme.asset.icon,
        component: "button",
      },
      {
        id: "profile",
        label: "Hồ sơ",
        icon: UserIcon,
        routeKey: Navigation[currentArea].keys.PROFILE,
        component: "link",
      },
      {
        id: "logout",
        label: "Đăng xuất",
        onClick: onLogoutClick,
        icon: LogOut,
        component: "button",
      },
    ];
  }, [
    theme.asset.label,
    theme.asset.icon,
    theme.toggle,
    currentArea,
    onLogoutClick,
  ]);

  return (
    <ul className="profile-dropdown">
      {menuItems.map((item) => {
        const isActive = item.routeKey
          ? Navigation.utils.isRouteActive(pathname, item.routeKey)
          : false;
        const isLogout = item.id === "logout";
        return (
          <li
            key={item.id}
            className={cn("menu-button", {
              "menu-button-danger": isLogout,
              "menu-button-active": isActive,
            })}
          >
            {item.component === "link" && item.routeKey ? (
              <Navigation.components.Go
                routeKey={item.routeKey}
                className="flex items-center gap-2 py-1.5 pl-1 text-sm"
                disabled={isActive}
              >
                <item.icon className="size-5" />
                {item.label}
              </Navigation.components.Go>
            ) : (
              <Button
                onClick={item.onClick}
                icon={item.icon}
                fullWidth={true}
                size={BUTTON_SIZES.SMALL}
                disabled={isActive}
                layout={BUTTON_LAYOUTS.START}
              >
                {item.label}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
