import type { ReactNode } from "react";

import { InteractionLockContext } from "./InteractionLockContext";
import { useInteractionLock } from "./useInteractionLock";

interface InteractionProviderProps {
  children: ReactNode;
}

export function InteractionLockProvider({
  children,
}: InteractionProviderProps) {
  const value = useInteractionLock();

  return (
    <InteractionLockContext.Provider value={value}>
      {children}
    </InteractionLockContext.Provider>
  );
}
