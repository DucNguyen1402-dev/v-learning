import {
  EDIT_USER_ROUTE_KEY,
  EDIT_USER_ROUTE_PATH_BUILDER,
  EDIT_USER_ROUTE_TITLE,
} from "./constants";

export const editUserRouteConfig = {
  builderKey: {
    EDIT_USER: EDIT_USER_ROUTE_KEY,
  },

  title: {
    [EDIT_USER_ROUTE_KEY]: EDIT_USER_ROUTE_TITLE,
  },
  pathBuilder: {
    [EDIT_USER_ROUTE_KEY]: EDIT_USER_ROUTE_PATH_BUILDER,
  },
} as const;
