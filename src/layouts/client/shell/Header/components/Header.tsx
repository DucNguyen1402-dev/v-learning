import { useLocation } from "react-router-dom";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import { User } from "@shared/user";

import { routesHideLoginButton, routesShowLogoutButton } from "../uiRules";
import {
  HeaderLogo,
  HeaderNav,
  LoginButton,
  ProfileDropdown,
  ThemeModeButton,
} from ".";
import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  const { avatar } = User.use();
  const currentUser = CurrentUserStorage.tryGet();
  const { pathname } = useLocation();
  const routeKey = Navigation.client.findKey(pathname);
  const shouldHideLoginButton = routeKey && routesHideLoginButton.has(routeKey);
  const shouldShowLogoutButton =
    routeKey && routesShowLogoutButton.has(routeKey) && window.innerWidth < 640;

  const { type, value } = avatar.current;
  const avatarRender =
    type === "image" ? (
      <img
        src={value}
        alt="avatar"
        className="size-10 rounded-full lg:size-8"
      />
    ) : (
      <div className="group relative flex-center size-10 overflow-hidden rounded-pill border border-border-subtle bg-bg-subtle font-bold text-text-default lg:size-8">
        {value}
      </div>
    );

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
              {shouldShowLogoutButton ? (
                <LogoutButton />
              ) : (
                <div className="lg:pointer-events-none lg:cursor-default">
                  <Navigation.components.Forward
                    routeKey={Navigation.client.keys.PROFILE}
                  >
                    {avatarRender}
                  </Navigation.components.Forward>
                </div>
              )}
              <span className="hidden text-sm font-medium lg:block">
                {currentUser?.taiKhoan}
              </span>
              <div className="absolute top-full left-0 z-popover hidden -translate-y-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 lg:block">
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
