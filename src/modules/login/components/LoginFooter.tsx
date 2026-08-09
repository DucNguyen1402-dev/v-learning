import { Link } from "react-router-dom";

import { CLIENT_ROUTES } from "@routes/client";
export const LoginFooter = () => {
  return (
    <p className="flex-center gap-1.5 select-none">
      <span className="text-sm text-text-secondary">Chưa có tài khoản?</span>
      <Link to={CLIENT_ROUTES.register} className="link-primary">
        Đăng ký ngay
      </Link>
    </p>
  );
};
