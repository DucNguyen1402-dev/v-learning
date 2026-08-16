import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "@shared/navigation";
import { CLIENT_ROUTE_TITLES } from "@routes/client";

import { clientFavicon } from "@assets/favicon";
function getRouteMetadata(pathname: string) {
  const mappings = [
    {
      routes: Navigation.client,
      titles: CLIENT_ROUTE_TITLES,
      favicon: clientFavicon,
    },
    // {
    //   routes: AppRoutes.admin,
    //   titles: ADMIN_ROUTE_TITLES,
    //   favicon: adminFavicon,
    // },
  ];

  for (const { routes, titles, favicon } of mappings) {
    const routeKey = routes.findKey(pathname);

    if (routeKey) {
      return {
        title: `V-learning | ${titles[routeKey]}`,
        favicon,
      };
    }
  }

  return {
    title: "V-learning",
    favicon: clientFavicon,
  };
}

export const FaviconManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, favicon } = getRouteMetadata(pathname);

    document.title = title;

    const faviconElement =
      document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
      document.createElement("link");

    faviconElement.rel = "icon";
    faviconElement.href = favicon;

    if (!faviconElement.parentNode) {
      document.head.appendChild(faviconElement);
    }
  }, [pathname]);

  return null;
};
