import { Link } from "react-router-dom";

import { AppRoutes } from "@routes";
export const LoginFooter = () => {
  return (
    <p className="flex-center gap-1.5 select-none">
      <span className="text-sm text-text-secondary">Chưa có tài khoản?</span>
      <Link to={AppRoutes.client.paths.REGISTER} className="link-primary">
        Đăng ký ngay
      </Link>
    </p>
  );
};
