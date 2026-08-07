import { CLIENT_ROUTES_KEYS } from "@routes/client";
import type { CurrentUser } from "@shared/auth";
import { clearAuthSession, getCurrentUser } from "@shared/auth";
import { useRouteNavigation } from "@shared/navigation";
import { CircleUser } from "lucide-react";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const { forward } = useRouteNavigation();
  const currentUser: null | CurrentUser = getCurrentUser();

  const onLogoutCLick = () => {
    clearAuthSession();
    forward(CLIENT_ROUTES_KEYS.login);
  };

  const onLoginClick = () => forward(CLIENT_ROUTES_KEYS.login);
  return (
    <header className="sticky top-0 z-50 border-b bg-zinc-50/60 backdrop-blur">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between">
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
