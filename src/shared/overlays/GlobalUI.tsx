import {
  DualRingLoadingRender,
  ModalRenderer,
  ToastView,
} from "@shared/overlays";

export const GlobalUI = () => {
  return (
    <>
      <DualRingLoadingRender />
      <ModalRenderer />

      <ToastView />
    </>
  );
};
