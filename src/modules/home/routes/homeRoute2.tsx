import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { HomePage } from "../pages/HomePage";

export const homeRoute = (
  <Route path={Navigation.client.paths.HOME} element={<HomePage />} />
);
