import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { AboutPage } from "../pages/AboutPage";

export const aboutRoute = (
  <Route path={Navigation.client.paths.CLIENT_ABOUT} element={<AboutPage />} />
);
