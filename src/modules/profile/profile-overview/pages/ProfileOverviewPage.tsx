import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";

import { ProfileCard } from "../components";
export const ProfileOverviewPage = () => {
  //1. Show toast message if there's a payload in the location state
  const { show: showToast } = Toast.use();
  const [toastState] = State.useTemporary(Navigation.hooks.usePayload());
  const consumePayload = Navigation.hooks.useConsumePayload();

  useEffect(() => {
    if (!toastState) return;
    showToast(toastState);
    //2. Consume the location state to prevent showing the toast again on re-render
    consumePayload();
  }, [toastState, showToast, consumePayload]);

  return (
    <div className="flex-center flex-col gap-6 px-4 py-8">
      <ProfileCard />

      {/* <ProfileContent /> */}
    </div>
  );
};
