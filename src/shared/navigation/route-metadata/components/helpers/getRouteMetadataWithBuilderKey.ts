import {
  AdminNavigation,
  isAdminRouteBuilderKey,
} from "@shared/navigation/admin";
import {
  ClientNavigation,
  isClientRouteBuilderKey,
} from "@shared/navigation/client";
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
  throw new Error(`No route metadata found for builderKey: ${builderKey}`);
}
