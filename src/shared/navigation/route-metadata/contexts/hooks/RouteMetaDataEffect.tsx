import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { clientFavicon } from "@assets/favicon";

function getRouteMetadata(pathname: string) {
  const mappings = [
    {
      routes: Navigation.client,
      titles: Navigation.client.titles,
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
const setFavicon = (favicon: string) => {
  const faviconElement =
    document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
    document.createElement("link");

  faviconElement.rel = "icon";
  faviconElement.href = favicon;

  if (!faviconElement.parentNode) {
    document.head.appendChild(faviconElement);
  }
};
type RouteMetaDataEffectProps = {
  optionTitle?: string;
  optionFavicon?: string;
};
export const RouteMetaDataEffect = ({
  optionTitle,
  optionFavicon = clientFavicon,
}: RouteMetaDataEffectProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (optionTitle && optionFavicon) {
      document.title = optionTitle;
      setFavicon(optionFavicon);
    }
    const { title, favicon } = getRouteMetadata(pathname);

    document.title = title;

    setFavicon(favicon);
  }, [optionFavicon, optionTitle, pathname]);

  return null;
};
