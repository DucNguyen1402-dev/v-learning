import { cn } from "@shared/utils";

import { useInteractionLockContext } from "../contexts";
export const InteractionLock = () => {
  const { isLocked } = useInteractionLockContext();
  return (
    <div
      className={cn("app-interaction-lock app-interaction-lock--hidden", {
        "app-interaction-lock--visible": isLocked,
      })}
    ></div>
  );
};
