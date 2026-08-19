import { createContext } from "react";

import type { InteractionLockContextType } from "./useInteractionLock";

export const InteractionLockContext =
  createContext<InteractionLockContextType | null>(null);
