import { useCallback, useMemo } from "react";

import { CLIENT_ROUTES_KEYS } from "@routes/client";
import { clearAuthSession } from "@shared/auth";
import { useRouteNavigation } from "@shared/navigation";
import { useTheme } from "@shared/theme";
import { Button } from "@shared/ui";
import { LogOut, MoonStar, Settings, Sun, User } from "lucide-react";

const ProfileMenu = () => {
  const { toggleTheme, currentTheme } = useTheme();
  const { go } = useRouteNavigation();

  const onLogoutClick = useCallback(() => {
    clearAuthSession();
    go(CLIENT_ROUTES_KEYS.home);
  }, [go]);

  const menuItems = useMemo(() => {
    return [
      {
        label: `Chế độ ${currentTheme === "dark" ? "sáng" : "tối"}`,
        onClick: toggleTheme,
        icon: currentTheme === "dark" ? Sun : MoonStar,
      },
      { label: "Profile", onClick: () => {}, icon: User },
      { label: "Cài đặt", onClick: () => {}, icon: Settings },
      { label: "Đăng xuất", onClick: onLogoutClick, icon: LogOut },
    ];
  }, [toggleTheme, onLogoutClick, currentTheme]);

  return (
    <ul className="w-40 cursor-pointer gap-4 space-y-3 rounded-lg pt-2 pb-3 pl-2">
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

export default ProfileMenu;
