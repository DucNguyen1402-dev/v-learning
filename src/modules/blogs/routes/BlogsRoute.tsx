import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { BlogsPage } from "../pages/BlogsPage";
export const BlogsRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.blogs,
  element: <BlogsPage />,
};
