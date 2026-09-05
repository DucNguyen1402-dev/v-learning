import { AdminNavigation, ClientNavigation } from "@shared/navigation/areas";

import { adminFavicon, clientFavicon } from "@assets/favicon";

export function getRouteMetadata(pathname: string) {
  const clientRouteKey = ClientNavigation.findKey(pathname);

  if (clientRouteKey) {
    return {
      title: `V-learning | ${ClientNavigation.titles[clientRouteKey]}`,
      favicon: clientFavicon,
    };
  }

  const adminRouteKey = AdminNavigation.findKey(pathname);

  if (adminRouteKey) {
    return {
      title: `Admin | ${AdminNavigation.titles[adminRouteKey]}`,
      favicon: adminFavicon,
    };
  }
  return {
    title: "V-learning",
    favicon: clientFavicon,
  };
}
