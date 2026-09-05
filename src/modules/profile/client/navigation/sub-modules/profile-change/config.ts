import { PROFILE_CHANGE_ROUTE_TITLE } from "@modules/profile/shared/profile-change";

import {
  PROFILE_CHANGE_ROUTE_KEY,
  PROFILE_CHANGE_ROUTE_PATH,
} from "./constants";

export const profileChangeRouteConfig = {
  key: {
    PROFILE_CHANGE: PROFILE_CHANGE_ROUTE_KEY,
  },
  title: {
    [PROFILE_CHANGE_ROUTE_KEY]: PROFILE_CHANGE_ROUTE_TITLE,
  },
  path: {
    [PROFILE_CHANGE_ROUTE_KEY]: PROFILE_CHANGE_ROUTE_PATH,
  },
} as const;
