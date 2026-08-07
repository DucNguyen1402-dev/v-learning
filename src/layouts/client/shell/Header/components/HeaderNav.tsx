import { CLIENT_ROUTES_KEYS } from "@routes/client";
import { useRouteNavigation } from "@shared/navigation";

const HeaderNav = () => {
  const navLinks = [
    { label: "Khóa học", routeKey: CLIENT_ROUTES_KEYS.home },
    { label: "Lộ trình", routeKey: CLIENT_ROUTES_KEYS.login },
    { label: "Giới thiệu", routeKey: CLIENT_ROUTES_KEYS.about },
  ];

  const { forward, currentRouteKey } = useRouteNavigation();
  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-8">
      {navLinks.map((link) => {
        return (
          <button
            key={link.routeKey}
            className="nav-button"
            onClick={() => forward(link.routeKey)}
            data-active={currentRouteKey === link.routeKey}
          >
            {link.label}
          </button>
        );
      })}
    </nav>
  );
};

export default HeaderNav;
