import { useCallback, useMemo } from "react";

import { AppRoutes } from "@routes";
import { Auth } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import { Theme } from "@shared/theme";
import { Button } from "@shared/ui";
import { LogOut, MoonStar, Sun, User } from "lucide-react";

export const ProfileDropdown = () => {
  const { toggleTheme, theme } = Theme.use();
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
        label: `Chế độ ${theme === "dark" ? "sáng" : "tối"}`,
        onClick: toggleTheme,
        icon: theme === "dark" ? Sun : MoonStar,
        routeKey: null,
      },
      {
        label: "Hồ sơ",
        onClick: onProfileClick,
        icon: User,
        routeKey: AppRoutes.client.keys.PROFILE,
      },
      {
        label: "Đăng xuất",
        onClick: onLogoutClick,
        icon: LogOut,
        routeKey: null,
      },
    ];
  }, [toggleTheme, onLogoutClick, onProfileClick, theme]);

  const pathname = Navigation.usePathname();

  return (
    <ul className="profile-dropdown">
      {menuItems.map((item, index) => {
        const isActive = AppRoutes.client.isActive(pathname, item.routeKey);
        return (
          <li key={index}>
            <Button
              onClick={item.onClick}
              icon={item.icon}
              className={`justify-start ${isActive ? "menu-button-active" : "menu-button-default"}`}
              fullWidth={true}
              size="sm"
              disabled={isActive}
            >
              {item.label}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
