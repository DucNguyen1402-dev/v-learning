import { Navigate, Route } from "react-router-dom";

import { AdminMainLayout } from "@layouts/admin";
import { AdminProvider } from "@providers/AdminProvider";

import { AdminRouteGuard } from "./AdminRouteGuard";
import { adminRoutes } from "./adminRoutes";
export const adminRouteTree = (
  <Route
    path="/admin"
    element={
      <AdminRouteGuard>
        <AdminProvider>
          <AdminMainLayout />
        </AdminProvider>
      </AdminRouteGuard>
    }
  >
    <Route index element={<Navigate to="/admin/courses" replace />} />
    {adminRoutes}
  </Route>
);
