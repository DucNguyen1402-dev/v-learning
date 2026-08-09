import { Link } from "react-router-dom";

import { CLIENT_ROUTES } from "@routes/client";

export const LoginButton = () => (
  <Link
    to={CLIENT_ROUTES.login}
    className="button-primary rounded-md px-4 py-2 text-sm font-medium"
  >
    Đăng nhập
  </Link>
);
