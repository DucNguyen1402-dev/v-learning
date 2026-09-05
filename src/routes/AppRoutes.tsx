import { Navigate, Route, Routes } from "react-router-dom";

import { RouteNotFound } from "@shared/navigation/components";

import { adminRouteTree } from "./admin";
import { clientRouteTree } from "./client";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/client" replace />} />
      {clientRouteTree}
      {adminRouteTree}

      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
};
