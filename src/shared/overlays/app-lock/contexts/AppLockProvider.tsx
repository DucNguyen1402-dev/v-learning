import type { ReactNode } from "react";

import { AppLockContext } from "./AppLockContext";
import { useBodyScrollLock, useInteractionLock } from "./internal";

interface ProviderProps {
  children: ReactNode;
}

export function AppLockProvider({ children }: ProviderProps) {
  const interactionLock = useInteractionLock();
  const bodyScrollLock = useBodyScrollLock();
  const value = { interactionLock, bodyScrollLock };

  return (
    <AppLockContext.Provider value={value}>{children}</AppLockContext.Provider>
  );
}
