import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";

import {
  FeaturedCoursesSection,
  HeroSection,
  StatsSection,
} from "../components";
import type { HomeLocationPayload } from "../types";

export const HomePage = () => {
  //1. Scroll to top on route change
  Navigation.hooks.useScrollToTopOnRouteChange();

  //2. Show toast message if there's a payload in the location state
  const { show: showToast } = Toast.use();
  const [payload] = State.useTemporary(
    Navigation.hooks.usePayload<HomeLocationPayload>(),
  );
  const consumePayload = Navigation.hooks.useConsumePayload();
  const hasShownToast = useRef(false);
  useEffect(() => {
    if (!payload?.toastState || hasShownToast.current) return;
    showToast(payload.toastState);
    hasShownToast.current = true;
    //3. Consume the location state to prevent showing the toast again on re-render
    consumePayload();
  }, [payload?.toastState, showToast, consumePayload]);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-16">
        <HeroSection />
        <StatsSection />
        <FeaturedCoursesSection />
      </div>
    </div>
  );
};
