import { PASSWORD_CHANGE_ROUTE_TITLE } from "@modules/profile/shared/password-change";

import {
  PASSWORD_CHANGE_ROUTE_KEY,
  PASSWORD_CHANGE_ROUTE_PATH,
} from "./constants";

export const passwordChangeRouteConfig = {
  key: {
    PASSWORD_CHANGE: PASSWORD_CHANGE_ROUTE_KEY,
  },
  title: {
    [PASSWORD_CHANGE_ROUTE_KEY]: PASSWORD_CHANGE_ROUTE_TITLE,
  },
  path: {
    [PASSWORD_CHANGE_ROUTE_KEY]: PASSWORD_CHANGE_ROUTE_PATH,
  },
} as const;
