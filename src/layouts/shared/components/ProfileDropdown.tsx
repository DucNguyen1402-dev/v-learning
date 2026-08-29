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
    go(Navigation.client.keys.LOGIN);
  }, [go, refreshUser]);

  const menuItems = useMemo(() => {
    return [
      {
        id: "theme-toggle",
        label: `Chế độ ${themeAsset.label}`,
        onClick: toggleTheme,
        icon: themeAsset.icon,
        component: "button",
      },
      {
        id: "profile",
        label: "Hồ sơ",
        icon: UserIcon,
        routeKey: Navigation.client.keys.PROFILE,
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
  }, [toggleTheme, onLogoutClick, themeAsset]);

  const pathname = Navigation.hooks.usePathname();

  return (
    <ul className="profile-dropdown">
      {menuItems.map((item) => {
        const isActive = item.routeKey
          ? Navigation.client.isActive(pathname, item.routeKey)
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
