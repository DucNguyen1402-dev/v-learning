import { cn } from "@shared/utils";

import { useAppLockContext } from "../contexts";
export const InteractionLock = () => {
  const {
    interactionLock: { isLocked },
  } = useAppLockContext();
  return (
    <div
      className={cn("app-interaction-lock app-interaction-lock--hidden", {
        "app-interaction-lock--visible": isLocked,
      })}
    ></div>
  );
};
