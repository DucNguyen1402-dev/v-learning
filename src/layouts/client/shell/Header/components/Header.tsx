import { useLocation } from "react-router-dom";

import { ProfileDropdown, UserAvatar } from "@layouts/shared/components";
import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

import { routesHideLoginButton, routesShowLogoutButton } from "../uiRules";
import { HeaderLogo, HeaderNav, LoginButton, ThemeModeButton } from ".";
import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  const currentUser = CurrentUserStorage.tryGet();
  const { pathname } = useLocation();
  const routeKey = Navigation.client.findKey(pathname);
  const shouldHideLoginButton = routeKey && routesHideLoginButton.has(routeKey);
  const shouldShowLogoutButton =
    routeKey && routesShowLogoutButton.has(routeKey) && window.innerWidth < 640;

  return (
    <header className="header">
      <div className="layout-container flex items-center justify-between pr-2 md:px-2 lg:px-4">
        <HeaderLogo />
        <HeaderNav />

        <div className="flex items-center gap-4">
          {currentUser ? (
            <div className="group relative flex items-center gap-3 p-2 lg:gap-2.5">
              <div className="lg:hidden">
                <ThemeModeButton />
              </div>
              {shouldShowLogoutButton ? <LogoutButton /> : <UserAvatar />}
              <span className="hidden text-sm font-medium lg:block">
                {currentUser?.taiKhoan}
              </span>
              <div className="dropdown-container dropdown-position-down hidden lg:block">
                <ProfileDropdown />
              </div>
            </div>
          ) : (
            <div
              className={`flex items-center justify-center gap-4 lg:gap-8 ${shouldHideLoginButton ? "w-32" : ""}`}
            >
              <ThemeModeButton />
              {!shouldHideLoginButton && (
                <div>
                  <LoginButton />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
