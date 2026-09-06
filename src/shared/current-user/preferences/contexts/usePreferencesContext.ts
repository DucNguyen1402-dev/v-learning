import { useContext } from "react";

import { PreferencesContext } from "./PreferencesContext";

export const usePreferencesContext = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error(
      "usePreferencesContext must be used within a <PreferencesProvider>",
    );
  }
  return context;
};
