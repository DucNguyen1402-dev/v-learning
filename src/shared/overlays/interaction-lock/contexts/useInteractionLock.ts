import { useState } from "react";

export function useInteractionLock() {
  const [isLocked, setIsLocked] = useState(false);

  const shouldLockInteraction = (enabled: boolean) => setIsLocked(enabled);
  return {
    isLocked,
    lock: () => setIsLocked(true),
    unlock: () => setIsLocked(false),
    shouldLockInteraction,
  };
}

export type InteractionLockContextType = ReturnType<typeof useInteractionLock>;
