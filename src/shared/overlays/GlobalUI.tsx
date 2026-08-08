import { DualRingLoading, ModalShell, ToastView } from "@shared/overlays";

export const GlobalUI = () => {
  return (
    <>
      <DualRingLoading />
      <ModalShell />

      <ToastView />
    </>
  );
};
