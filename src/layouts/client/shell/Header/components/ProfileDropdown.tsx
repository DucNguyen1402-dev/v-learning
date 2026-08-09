import { useCallback, useMemo } from "react";

import { CLIENT_ROUTES_KEYS } from "@routes/client";
import { clearAuthSession } from "@shared/auth";
import { useRouteNavigation } from "@shared/navigation";
import { Theme } from "@shared/theme";
import { Button } from "@shared/ui";
import { LogOut, MoonStar, Settings, Sun, User } from "lucide-react";

export const ProfileDropdown = () => {
  const { toggleTheme, theme } = Theme.use();
  const { go } = useRouteNavigation();

  const onLogoutClick = useCallback(() => {
    clearAuthSession();
    go(CLIENT_ROUTES_KEYS.home);
  }, [go]);

  const menuItems = useMemo(() => {
    return [
      {
        label: `Chế độ ${theme === "dark" ? "sáng" : "tối"}`,
        onClick: toggleTheme,
        icon: theme === "dark" ? Sun : MoonStar,
      },
      { label: "Hồ sơ", onClick: () => {}, icon: User },
      { label: "Cài đặt", onClick: () => {}, icon: Settings },
      { label: "Đăng xuất", onClick: onLogoutClick, icon: LogOut },
    ];
  }, [toggleTheme, onLogoutClick, theme]);

  return (
    <ul className="profile-dropdown">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Button
            onClick={item.onClick}
            icon={item.icon}
            className="menu-button justify-start"
            fullWidth={true}
            size="sm"
          >
            {item.label}
          </Button>
        </li>
      ))}
    </ul>
  );
};
