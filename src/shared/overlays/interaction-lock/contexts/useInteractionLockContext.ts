import { useContext } from "react";

import { InteractionLockContext } from "./InteractionLockContext";

export function useInteractionLockContext() {
  const context = useContext(InteractionLockContext);
  if (!context) {
    throw new Error(
      "useInteractionLockContext must be used within an <InteractionProvider>",
    );
  }
  return context;
}
