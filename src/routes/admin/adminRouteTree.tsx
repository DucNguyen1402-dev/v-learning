import { Navigate, Route } from "react-router-dom";

import { AdminMainLayout } from "@layouts/admin";
import { AdminProvider } from "@providers/AdminProvider";

import { adminRoutes } from "./adminRoutes";

export const adminRouteTree = (
  <Route
    path="/admin"
    element={
      <AdminProvider>
        <AdminMainLayout />
      </AdminProvider>
    }
  >
    <Route index element={<Navigate to="/admin/courses" replace />} />
    {adminRoutes}
  </Route>
);
