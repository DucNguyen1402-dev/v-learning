import { useContext } from "react";

import { RegisterContext } from "./RegisterContext";

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error(
      "useRegisterContext must be used within a <RegisterProvider>",
    );
  }
  return context;
};
