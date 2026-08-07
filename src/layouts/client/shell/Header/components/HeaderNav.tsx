import { NavLink } from "react-router-dom";

import { CLIENT_ROUTES } from "@routes/client";

const HeaderNav = () => {
  const navLinks = [
    { label: "Home", routeKey: CLIENT_ROUTES.home },
    { label: "Lộ trình", routeKey: CLIENT_ROUTES.login },
    { label: "Giới thiệu", routeKey: CLIENT_ROUTES.about },
  ];

  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-8">
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.routeKey}
            to={link.routeKey}
            className={({ isActive }) =>
              `nav-button ${isActive ? "nav-button-active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default HeaderNav;
