import { useContext } from "react";

import { EnrollUserContext } from "./EnrollUserContext";

export const useEnrollUserContext = () => {
  const context = useContext(EnrollUserContext);
  if (!context) {
    throw new Error(
      "useEnrollUserContext must be used within an EnrollUserProvider",
    );
  }
  return context;
};
