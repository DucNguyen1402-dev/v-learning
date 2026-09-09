import { useContext } from "react";

import { AppLockContext } from "./AppLockContext";

export function useAppLockContext() {
  const context = useContext(AppLockContext);
  if (!context) {
    throw new Error(
      "useAppLockContext must be used within an <AppLockProvider>",
    );
  }
  return context;
}
