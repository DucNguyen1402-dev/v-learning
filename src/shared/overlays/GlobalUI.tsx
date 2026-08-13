import { DualRingLoading, ToastView } from "@shared/overlays";

export const GlobalUI = () => {
  return (
    <>
      <DualRingLoading />
      {/* <ModalShell /> */}

      <ToastView />
    </>
  );
};
