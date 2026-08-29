import { Navigate, Route } from "react-router-dom";

import { ClientMainLayout } from "@layouts/client";

import { clientRoutes } from "./clientRoutes";

export const clientRouteTree = (
  <Route path="/client" element={<ClientMainLayout />}>
    <Route index element={<Navigate to="/client/home" replace />} />
    {clientRoutes}
  </Route>
);
