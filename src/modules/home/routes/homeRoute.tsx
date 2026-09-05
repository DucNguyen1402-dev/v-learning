import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { HomePage } from "../pages/HomePage";

export const homeRoute = (
  <Route path={Navigation.client.paths.CLIENT_HOME} element={<HomePage />} />
);
