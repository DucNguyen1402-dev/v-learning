import {
  COMMUNITY_ROUTE_KEY,
  COMMUNITY_ROUTE_PATH,
  COMMUNITY_ROUTE_TITLE,
} from "./constants";

export const communityRouteConfig = {
  key: {
    COMMUNITY: COMMUNITY_ROUTE_KEY,
  },
  title: {
    [COMMUNITY_ROUTE_KEY]: COMMUNITY_ROUTE_TITLE,
  },
  path: {
    [COMMUNITY_ROUTE_KEY]: COMMUNITY_ROUTE_PATH,
  },
} as const;
