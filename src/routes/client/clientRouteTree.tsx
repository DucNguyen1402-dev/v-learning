import { Navigate, Route } from "react-router-dom";

import { ClientMainLayout } from "@layouts/client";

import { ClientRouteGuard } from "./ClientRouteGuard";
import { clientRoutes } from "./clientRoutes";

export const clientRouteTree = (
  <Route
    path="/client"
    element={
      <ClientRouteGuard>
        <ClientMainLayout />
      </ClientRouteGuard>
    }
  >
    <Route index element={<Navigate to="/client/home" replace />} />
    {clientRoutes}
  </Route>
);
