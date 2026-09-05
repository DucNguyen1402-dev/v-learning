import { Link } from "react-router-dom";

import { Navigation } from "@shared/navigation";
export const LoginFooter = () => {
  return (
    <p className="flex-center gap-1.5 select-none">
      <span className="text-sm text-text-subtle">Chưa có tài khoản?</span>
      <Link
        to={Navigation.client.urls.CLIENT_REGISTER}
        className="link link-primary"
      >
        Đăng ký ngay
      </Link>
    </p>
  );
};
