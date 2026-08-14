import { DualRingLoading, ModalRenderer, ToastView } from "@shared/overlays";

export const GlobalUI = () => {
  return (
    <>
      <DualRingLoading />
      <ModalRenderer />

      <ToastView />
    </>
  );
};
