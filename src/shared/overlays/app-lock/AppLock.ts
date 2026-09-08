import { InteractionLock } from "./components";
import { AppLockProvider, useAppLockContext } from "./contexts";

export const AppLock = {
  use: useAppLockContext,
  Provider: AppLockProvider,
  Component: InteractionLock,
};
