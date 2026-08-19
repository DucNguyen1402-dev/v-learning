import { useCallback, useMemo } from "react";

import { AuthSession } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import { Button, BUTTON_LAYOUTS, BUTTON_SIZES } from "@shared/ui";
import { User } from "@shared/user";
import { cn } from "@shared/utils";
import { LogOut, User as UserIcon } from "lucide-react";

export const ProfileDropdown = () => {
  const {
    theme: { toggle: toggleTheme, asset: themeAsset },
    refresh: refreshUser,
  } = User.use();
  const { go } = Navigation.hooks.useNavigate();

  const onLogoutClick = useCallback(() => {
    AuthSession.logout();
    refreshUser();
    go(Navigation.client.keys.HOME);
  }, [go, refreshUser]);

  const onProfileClick = useCallback(() => {
    go(Navigation.client.keys.PROFILE);
  }, [go]);

  const menuItems = useMemo(() => {
    return [
      {
        id: "theme-toggle",
        label: `Chế độ ${themeAsset.label}`,
        onClick: toggleTheme,
        icon: themeAsset.icon,
        routeKey: null,
      },
      {
        id: "profile",
        label: "Hồ sơ",
        onClick: onProfileClick,
        icon: UserIcon,
        routeKey: Navigation.client.keys.PROFILE,
      },
      {
        id: "logout",
        label: "Đăng xuất",
        onClick: onLogoutClick,
        icon: LogOut,
        routeKey: null,
      },
    ];
  }, [toggleTheme, onLogoutClick, onProfileClick, themeAsset]);

  const pathname = Navigation.hooks.usePathname();

  return (
    <ul className="profile-dropdown">
      {menuItems.map((item) => {
        const isActive = Navigation.client.isActive(pathname, item.routeKey);
        const isLogout = item.id === "logout";
        return (
          <li
            key={item.id}
            className={cn("menu-button", {
              "menu-button-danger": isLogout,
              "menu-button-active": isActive,
            })}
          >
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
          </li>
        );
      })}
    </ul>
  );
};
