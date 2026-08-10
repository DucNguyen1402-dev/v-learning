// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes";

// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );

import { Button } from "@shared/ui";
import { ArrowLeft } from "lucide-react";
export const App = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <Button className="back-button" size="sm" icon={ArrowLeft}></Button>
  </div>
);
