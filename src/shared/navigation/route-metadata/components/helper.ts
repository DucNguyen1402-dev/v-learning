import {
  type AdminRouteBuilderKey,
  type ClientRouteBuilderKey,
  Navigation,
} from "@shared/navigation";
import { isAdminBuilderKey, isAdminRouteKey } from "@shared/navigation/admin";
import {
  isClientRouteBuilderKey,
  isClientRouteKey,
} from "@shared/navigation/client";

import { adminFavicon, clientFavicon } from "@assets/favicon";

export function getRouteMetadata(pathname: string) {
  const clientRouteKey = Navigation.client.findKey(pathname);

  if (clientRouteKey && isClientRouteKey(clientRouteKey)) {
    return {
      title: `V-learning | ${Navigation.client.titles[clientRouteKey]}`,
      favicon: clientFavicon,
    };
  }

  const adminRouteKey = Navigation.admin.findKey(pathname);

  if (adminRouteKey && isAdminRouteKey(adminRouteKey)) {
    return {
      title: `Admin | ${Navigation.admin.titles[adminRouteKey]}`,
      favicon: adminFavicon,
    };
  }
  return {
    title: "V-learning",
    favicon: clientFavicon,
  };
}

export function getRouteMetadataWithBuilderKey(
  builderKey: ClientRouteBuilderKey | AdminRouteBuilderKey,
) {
  if (isClientRouteBuilderKey(builderKey)) {
    return {
      title: `V-learning | ${Navigation.client.buildersTitles[builderKey]}`,
      favicon: clientFavicon,
    };
  }
  if (isAdminBuilderKey(builderKey)) {
    return {
      title: `Admin | ${Navigation.admin.builderTitles[builderKey]}`,
      favicon: adminFavicon,
    };
  }
  return {
    title: "V-learning",
    favicon: clientFavicon,
  };
}
