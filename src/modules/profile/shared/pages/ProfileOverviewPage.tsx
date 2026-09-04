import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";

import { ProfileCard } from "../components";
import type { ProfileLocationPayload } from "../types";
export const ProfileOverviewPage = () => {
  Navigation.hooks.useScrollToTopOnRouteChange();

  //1. Show toast message if there's a payload in the location state
  const { show: showToast } = Toast.use();
  const [payload] = State.useTemporary(
    Navigation.hooks.usePayload<ProfileLocationPayload>(),
  );
  const consumePayload = Navigation.hooks.useConsumePayload();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!payload?.toastState || hasShownToast.current) return;
    showToast(payload.toastState);
    hasShownToast.current = true;
    //2. Consume the location state to prevent showing the toast again on re-render
    consumePayload();
  }, [payload, showToast, consumePayload]);

  return (
    <div className="flex min-h-screen items-start justify-center gap-6 py-8 md:px-4">
      <ProfileCard />
    </div>
  );
};
