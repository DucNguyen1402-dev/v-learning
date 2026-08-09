import { useLocation } from "react-router-dom";

import { findRouteKey } from "@routes/client";
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
  const routeKey = findRouteKey(pathname);
  const shouldShowLoginButton =
    routeKey && loginButtonHiddenRoutes.has(routeKey);

  return (
    <header className="header sticky top-0 z-sticky h-28 px-1 lg:px-8">
      <div className="header-content flex items-center justify-between">
        <HeaderLogo />
        <HeaderNav />

        <div className="flex items-center gap-4">
          {currentUser ? (
            <div className="group relative flex cursor-pointer items-center gap-2.5 rounded-lg p-2">
              <CircleUser className="text-text-secondary" />
              <span className="text-sm font-medium">
                {currentUser.taiKhoan}
              </span>

              <div className="absolute top-full left-0 z-popover -translate-y-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <ProfileDropdown />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <ThemeModeButton />
              <div className={`${shouldShowLoginButton ? "invisible" : ""}`}>
                <LoginButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
