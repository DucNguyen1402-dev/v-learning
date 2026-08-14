import { useCallback, useMemo } from "react";

import { AppRoutes } from "@routes";
import { Auth } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import { Theme } from "@shared/theme";
import { Button, BUTTON_LAYOUTS, BUTTON_SIZES } from "@shared/ui";
import { cn } from "@shared/utils";
import { LogOut, User } from "lucide-react";

export const ProfileDropdown = () => {
  const { toggleTheme, assets } = Theme.use();
  const { go } = Navigation.useNavigate();

  const onLogoutClick = useCallback(() => {
    Auth.logout();
    go(AppRoutes.client.keys.HOME);
  }, [go]);

  const onProfileClick = useCallback(() => {
    go(AppRoutes.client.keys.PROFILE);
  }, [go]);

  const menuItems = useMemo(() => {
    return [
      {
        id: "theme-toggle",
        label: `Chế độ ${assets.label}`,
        onClick: toggleTheme,
        icon: assets.icon,
        routeKey: null,
      },
      {
        id: "profile",
        label: "Hồ sơ",
        onClick: onProfileClick,
        icon: User,
        routeKey: AppRoutes.client.keys.PROFILE,
      },
      {
        id: "logout",
        label: "Đăng xuất",
        onClick: onLogoutClick,
        icon: LogOut,
        routeKey: null,
      },
    ];
  }, [toggleTheme, onLogoutClick, onProfileClick, assets]);

  const pathname = Navigation.usePathname();

  return (
    <ul className="profile-dropdown">
      {menuItems.map((item) => {
        const isActive = AppRoutes.client.isActive(pathname, item.routeKey);
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
