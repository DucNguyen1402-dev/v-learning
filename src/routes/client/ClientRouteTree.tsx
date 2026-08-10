import { Navigate, Route } from "react-router-dom";

import { ClientMainLayout } from "@layouts/index";
import { clientRoutes } from "@modules/clientRoutes";
import { ClientProvider } from "@providers/client";

export const ClientRouteTree = (
  <Route
    path="/client"
    element={
      <ClientProvider>
        <ClientMainLayout />
      </ClientProvider>
    }
  >
    <Route index element={<Navigate to="/client/home" replace />} />
    {clientRoutes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Route>
);
