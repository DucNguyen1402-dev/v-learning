import { Route } from "react-router-dom";

import { BLOGS_ROUTE_SEGMENT } from "../navigation/constants";
import { BlogsPage } from "../pages/BlogsPage";
export const blogsRoute = (
  <Route path={BLOGS_ROUTE_SEGMENT} element={<BlogsPage />} />
);
