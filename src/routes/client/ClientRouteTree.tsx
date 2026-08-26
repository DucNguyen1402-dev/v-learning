import { Navigate, Route } from "react-router-dom";

import { ClientMainLayout } from "@layouts/index";
import { clientRoutes } from "@modules/clientRoutes";

export const ClientRouteTree = (
  <Route path="/client" element={<ClientMainLayout />}>
    <Route index element={<Navigate to="/client/home" replace />} />
    {clientRoutes}
  </Route>
);
