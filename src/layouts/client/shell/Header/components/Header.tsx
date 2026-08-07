import { useNavigate } from "react-router-dom";

import { CLIENT_ROUTES } from "@routes/client";
import type { CurrentUser } from "@shared/auth";
import { clearAuthSession, getCurrentUser } from "@shared/auth";
import { CircleUser } from "lucide-react";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const navigate = useNavigate();
  const currentUser: null | CurrentUser = getCurrentUser();

  const onLogoutCLick = () => {
    clearAuthSession();
    navigate(CLIENT_ROUTES.login);
  };

  const onLoginClick = () => navigate(CLIENT_ROUTES.login);
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-26 max-w-7xl items-center justify-between">
        <HeaderLogo />
        <HeaderNav />
        <div className="flex items-center gap-4">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <div className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 transition hover:bg-gray-100">
                <CircleUser />
                <span className="text-sm font-medium text-gray-700">
                  {currentUser.taiKhoan}
                </span>
              </div>
              <button
                onClick={onLogoutCLick}
                className="rounded-md bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
              >
                Đăng Xuất
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="px-3 py-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              Đăng nhập
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
