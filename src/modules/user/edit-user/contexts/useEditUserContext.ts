import { useContext } from "react";

import { EditUserContext } from "./EditUserContext";

export const useEditUserContext = () => {
  const context = useContext(EditUserContext);
  if (!context) {
    throw new Error(
      "useEditUserContext must be used within an EditUserProvider",
    );
  }
  return context;
};
