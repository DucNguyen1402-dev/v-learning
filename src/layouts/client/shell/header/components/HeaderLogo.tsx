import { Link } from "react-router-dom";

import { CurrentUser } from "@shared/current-user";

export const HeaderLogo = () => {
  const {
    preferences: { theme },
  } = CurrentUser.use();

  return (
    <div className="flex items-center">
      <Link to="/client">
        <img
          src={theme.asset.logo}
          alt="V-learning Logo"
          className="w-48 md:w-56 lg:w-60"
        />
      </Link>
    </div>
  );
};
