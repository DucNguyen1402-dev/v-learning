import { Link } from "react-router-dom";

import { Navigation } from "@shared/navigation";
export const RegisterFooter = () => {
  return (
    <p className="flex-center gap-1.5 select-none">
      <span className="text-sm text-text-subtle"> Đã có tài khoản?</span>
      <Link to={Navigation.client.urls.LOGIN} className="link link-primary">
        Đăng nhập ngay
      </Link>
    </p>
  );
};
