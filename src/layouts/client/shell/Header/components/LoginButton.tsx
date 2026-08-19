import { Link } from "react-router-dom";

import { Navigation } from "@shared/navigation";

export const LoginButton = () => (
  <Link
    to={Navigation.client.urls.LOGIN}
    className="button-primary solid button-base px-4 py-2 text-sm"
  >
    Đăng nhập
  </Link>
);
