import { useLocation } from "react-router-dom";

import { AppRoutes } from "@routes";
import type { CurrentUser } from "@shared/auth";
import { getCurrentUser } from "@shared/auth";
import { CircleUser } from "lucide-react";

import { loginButtonHiddenRoutes } from "../loginButtonHiddenRoutes";
import {
  HeaderLogo,
  HeaderNav,
  LoginButton,
  ProfileDropdown,
  ThemeModeButton,
} from ".";

export const Header = () => {
  const currentUser: null | CurrentUser = getCurrentUser();
  const { pathname } = useLocation();
  const routeKey = AppRoutes.client.findKey(pathname);
  const shouldHideLoginButton =
    routeKey && loginButtonHiddenRoutes.has(routeKey);

  return (
    <header className="header">
      <div className="layout-container flex items-center justify-between px-1 md:px-2 lg:px-6">
        <HeaderLogo />
        <HeaderNav />

        <div className="flex items-center gap-4">
          {currentUser ? (
            <div className="group relative flex items-center gap-2.5 p-2">
              <CircleUser className="size-8 text-text-subtle lg:size-6" />
              <span className="hidden text-sm font-medium lg:block">
                {currentUser.taiKhoan}
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
