import {
  CONTACT_ROUTE_KEY,
  CONTACT_ROUTE_PATH,
  CONTACT_ROUTE_TITLE,
} from "./constants";

export const contactRouteConfig = {
  key: {
    CONTACT: CONTACT_ROUTE_KEY,
  },
  title: {
    [CONTACT_ROUTE_KEY]: CONTACT_ROUTE_TITLE,
  },
  path: {
    [CONTACT_ROUTE_KEY]: CONTACT_ROUTE_PATH,
  },
} as const;
