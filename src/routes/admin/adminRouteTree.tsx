import { Navigate, Route } from "react-router-dom";

import { AdminMainLayout } from "@layouts/admin";

import { AdminRouteGuard } from "./AdminRouteGuard";
import { adminRoutes } from "./adminRoutes";
export const adminRouteTree = (
  <Route
    path="/admin"
    element={
      <AdminRouteGuard>
        <AdminMainLayout />
      </AdminRouteGuard>
    }
  >
    <Route index element={<Navigate to="/admin/courses" replace />} />
    {adminRoutes}
  </Route>
);
