import { Navigate, Route, Routes } from "react-router-dom";

import { adminRouteTree } from "./admin";
import { clientRouteTree } from "./client";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/client" replace />} />
      {clientRouteTree}
      {adminRouteTree}
    </Routes>
  );
};
