import { Navigation } from "@shared/navigation";
import type { ClientRouteBuilderKey } from "@shared/navigation/client";

import { clientFavicon } from "@assets/favicon";
export function getRouteMetadata(pathname: string) {
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

export function getRouteMetadataWithBuilderKey(
  builderKey: ClientRouteBuilderKey,
) {
  const mappings = [
    {
      titles: Navigation.client.buildersTitles,
      favicon: clientFavicon,
    },
  ];

  for (const { titles, favicon } of mappings) {
    if (builderKey) {
      return {
        title: `V-learning | ${titles[builderKey]}`,
        favicon,
      };
    }
  }

  return {
    title: "V-learning",
    favicon: clientFavicon,
  };
}
