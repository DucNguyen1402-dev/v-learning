import { Link } from "react-router-dom";

import { AppRoutes } from "@routes";

export const LoginButton = () => (
  <Link
    to={AppRoutes.client.paths.LOGIN}
    className="button-primary button px-4 py-2 text-sm"
  >
    Đăng nhập
  </Link>
);
