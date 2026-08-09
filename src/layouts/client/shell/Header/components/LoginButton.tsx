import { Link } from "react-router-dom";

import { CLIENT_ROUTES } from "@routes/client";

export const LoginButton = () => (
  <Link
    to={CLIENT_ROUTES.login}
    className="button-primary button px-4 py-2 text-sm"
  >
    Đăng nhập
  </Link>
);
