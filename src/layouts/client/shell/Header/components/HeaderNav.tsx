import { NavLink } from "react-router-dom";

import { CLIENT_ROUTES } from "@routes/client";

export const HeaderNav = () => {
  const navLinks = [
    { label: "Home", routeKey: CLIENT_ROUTES.home },
    { label: "Khóa học", routeKey: CLIENT_ROUTES.courses },
    { label: "Blogs", routeKey: CLIENT_ROUTES.blogs },
    { label: "Giới thiệu", routeKey: CLIENT_ROUTES.about },
  ];

  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-10">
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.routeKey}
            to={link.routeKey}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : "nav-link-default"}`
            }
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};
