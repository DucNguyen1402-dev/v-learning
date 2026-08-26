import { Navigate, Route } from "react-router-dom";

import { AdminMainLayout } from "@layouts/admin";
import { clientRoutes } from "@modules/clientRoutes";

export const adminRouteTree = (
  <Route path="/admin" element={<AdminMainLayout />}>
    <Route index element={<Navigate to="/admin/dashboard" replace />} />
    {clientRoutes}
  </Route>
);
