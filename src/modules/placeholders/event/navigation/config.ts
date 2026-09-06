import {
  EVENT_ROUTE_KEY,
  EVENT_ROUTE_PATH,
  EVENT_ROUTE_TITLE,
} from "./constants";

export const eventRouteConfig = {
  key: {
    EVENT: EVENT_ROUTE_KEY,
  },
  title: {
    [EVENT_ROUTE_KEY]: EVENT_ROUTE_TITLE,
  },
  path: {
    [EVENT_ROUTE_KEY]: EVENT_ROUTE_PATH,
  },
} as const;
