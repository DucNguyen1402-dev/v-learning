import { DualRingLoading, ModalShell, ToastView } from "@shared/overlays";

const GlobalUI = () => {
  return (
    <>
      {/* Overlay */}
      <DualRingLoading />
      <ModalShell />

      {/* Notifications */}
      <ToastView />
    </>
  );
};

export default GlobalUI;
