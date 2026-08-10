import { Navigate, Route, Routes } from "react-router-dom";

import { ClientMainLayout } from "@layouts/index";
import { clientRoutes } from "@modules/clientRoutes";
import { ClientProvider } from "@providers/client";

export const ClientRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/client" replace />} />

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
  </Routes>
);
