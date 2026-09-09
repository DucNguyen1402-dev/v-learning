import type {
  InteractionLockContextType,
  UseBodyScrollLockReturn,
} from "./internal";

export type AppLockContextValues = {
  interactionLock: InteractionLockContextType;
  bodyScrollLock: UseBodyScrollLockReturn;
};
