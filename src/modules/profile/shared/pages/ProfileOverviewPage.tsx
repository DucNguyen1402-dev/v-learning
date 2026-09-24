import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { useTemporaryState } from "@shared/state";
import { cn } from "@shared/utils";

import { ProfileCard } from "../components";
import type { ProfileLocationPayload } from "../types";
export const ProfileOverviewPage = () => {
  Navigation.hooks.useScrollToTopOnRouteChange();

  //1. Show toast message if there's a payload in the location state
  const { show: showToast } = Toast.use();
  const [payload] = useTemporaryState(
    Navigation.hooks.usePayload<ProfileLocationPayload>(),
  );
  const consumePayload =
    Navigation.hooks.useConsumePayload<ProfileLocationPayload>();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!payload?.toastState || hasShownToast.current) return;
    showToast(payload.toastState);
    hasShownToast.current = true;
    //2. Consume the location state to prevent showing the toast again on re-render
    consumePayload();
  }, [payload, showToast, consumePayload]);

  const currentArea = Navigation.hooks.useCurrentArea();

  return (
    <div
      className={cn(
        "flex justify-center gap-6 py-8 md:px-4",
        currentArea === "admin"
          ? "min-h-[calc(100dvh-10rem)] items-center"
          : "items-start",
      )}
    >
      <ProfileCard />
    </div>
  );
};
