import { CLIENT_ROUTES_KEYS } from "@routes/client";
import { clearAuthSession } from "@shared/auth";
import { useRouteNavigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

const LogoutButton = () => {
  const { go } = useRouteNavigation();

  const onLogoutCClick = () => {
    clearAuthSession();
    go(CLIENT_ROUTES_KEYS.login, Toast.config.success.logout());
  };

  return (
    <button
      onClick={onLogoutCClick}
      className="rounded-md bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
    >
      Đăng Xuất
    </button>
  );
};

export default LogoutButton;
