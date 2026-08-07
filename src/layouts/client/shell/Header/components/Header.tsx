import { useLocation } from "react-router-dom";

import { findRouteKey } from "@routes/client";
import type { CurrentUser } from "@shared/auth";
import { getCurrentUser } from "@shared/auth";
import { CircleUser } from "lucide-react";

import { authRoutes } from "../authRoutes";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import LoginButton from "./LoginButton";

const Header = () => {
  const currentUser: null | CurrentUser = getCurrentUser();
  const { pathname } = useLocation();
  const routeKey = findRouteKey(pathname);
  const shouldShowLoginButton = routeKey && authRoutes.has(routeKey);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-300 bg-zinc-50/60 backdrop-blur">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between">
        <HeaderLogo />
        <HeaderNav />
        <div
          className={`flex items-center gap-4 ${shouldShowLoginButton ? "invisible" : ""}`}
        >
          {currentUser ? (
            <div className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 transition">
              <CircleUser />
              <span className="text-sm font-medium text-gray-700">
                {currentUser.taiKhoan}
              </span>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
