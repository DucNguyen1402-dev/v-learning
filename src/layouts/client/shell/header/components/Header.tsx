import { useLocation } from "react-router-dom";

import { ProfileDropdown, UserAvatar } from "@layouts/shared/components";
import { hasStoredCurrentUser } from "@shared/current-user";
import { UserProfile } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

import { isRouteHideLoginButton, isRouteShowLogoutButton } from "../ui";
import { HeaderLogo, HeaderNav, LoginButton, ThemeModeButton } from ".";
import { LogoutButton } from "./LogoutButton";
import { UserAccount } from "./UserAccount";

export const Header = () => {
  const currentUser = hasStoredCurrentUser();
  const { pathname } = useLocation();
  const routeKey = Navigation.client.findKey(pathname);
  const shouldHideLoginButton = routeKey && isRouteHideLoginButton(routeKey);
  const shouldShowLogoutButton =
    routeKey && isRouteShowLogoutButton(routeKey) && window.innerWidth < 640;

  return (
    <header className="header">
      <div className="layout-container-md flex items-center justify-between pr-2 md:px-2 lg:px-4">
        <HeaderLogo />
        <HeaderNav />

        <div className="flex items-center gap-4">
          {currentUser ? (
            <div className="group relative flex items-center gap-3 p-2 lg:gap-2.5">
              <div className="lg:hidden">
                <ThemeModeButton />
              </div>
              {shouldShowLogoutButton ? <LogoutButton /> : <UserAvatar />}
              <UserProfile.Provider>
                <UserAccount />
              </UserProfile.Provider>

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
