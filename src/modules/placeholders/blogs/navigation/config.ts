import {
  BLOGS_ROUTE_KEY,
  BLOGS_ROUTE_PATH,
  BLOGS_ROUTE_TITLE,
} from "./constants";

export const blogsRouteConfig = {
  key: {
    BLOGS: BLOGS_ROUTE_KEY,
  },
  title: {
    [BLOGS_ROUTE_KEY]: BLOGS_ROUTE_TITLE,
  },
  path: {
    [BLOGS_ROUTE_KEY]: BLOGS_ROUTE_PATH,
  },
} as const;
