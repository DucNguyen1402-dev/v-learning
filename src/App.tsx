// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes";

// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );

import { Button } from "@shared/ui";

export const App = () => (
  <Button intent="primary" appearance="solid">
    Click me
  </Button>
);
