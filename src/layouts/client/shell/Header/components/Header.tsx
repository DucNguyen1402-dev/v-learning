import { useLocation } from "react-router-dom";

import { findRouteKey } from "@routes/client";
import type { CurrentUser } from "@shared/auth";
import { getCurrentUser } from "@shared/auth";
import { CircleUser } from "lucide-react";

import { loginButtonHiddenRoutes } from "../loginButtonHiddenRoutes";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import LoginButton from "./LoginButton";
import ProfileMenu from "./ProfileMenu";
import ThemeModeButton from "./ThemeModeButton";

const Header = () => {
  const currentUser: null | CurrentUser = getCurrentUser();
  const { pathname } = useLocation();
  const routeKey = findRouteKey(pathname);
  const shouldShowLoginButton =
    routeKey && loginButtonHiddenRoutes.has(routeKey);

  return (
    <header className="sticky top-0 z-50">
      <div className="header mx-auto flex h-28 max-w-7xl items-center justify-between">
        <HeaderLogo />
        <HeaderNav />

        <div className="flex items-center gap-4">
          {currentUser ? (
            <div className="group relative flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 transition">
              <CircleUser className="text-text-secondary" />
              <span className="text-sm font-medium">
                {currentUser.taiKhoan}
              </span>

              <div className="pointer-events-none absolute top-full left-0 z-50 rounded-lg border border-zinc-300 bg-surface-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                <ProfileMenu />
              </div>
            </div>
          ) : (
            <>
              <ThemeModeButton />
              <div className={`${shouldShowLoginButton ? "invisible" : ""}`}>
                <LoginButton />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
