import { InteractionLock } from "./components";
import { InteractionLockProvider, useInteractionLockContext } from "./contexts";

export const AppInteractionLock = {
  use: useInteractionLockContext,
  Provider: InteractionLockProvider,
  Component: InteractionLock,
};
