import {
  AdminNavigation,
  ClientNavigation,
  isAdminRouteBuilderKey,
  isClientRouteBuilderKey,
} from "@shared/navigation/areas";
import type { AppRouteBuilderKey } from "@shared/navigation/types";

import { adminFavicon, clientFavicon } from "@assets/favicon";

export function getRouteMetadataWithBuilderKey(builderKey: AppRouteBuilderKey) {
  if (isClientRouteBuilderKey(builderKey)) {
    return {
      title: `V-learning | ${ClientNavigation.builderTitles[builderKey]}`,
      favicon: clientFavicon,
    };
  }
  if (isAdminRouteBuilderKey(builderKey)) {
    return {
      title: `Admin | ${AdminNavigation.builderTitles[builderKey]}`,
      favicon: adminFavicon,
    };
  }
  return {
    title: "V-learning",
    favicon: clientFavicon,
  };
}
