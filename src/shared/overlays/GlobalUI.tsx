import { AppInteractionLock, Loading, Modal, Toast } from "@shared/overlays";

export const GlobalUI = () => {
  return (
    <>
      <Loading.Component />
      <Modal.Component />
      <AppInteractionLock.Component />
      <Toast.Component />
    </>
  );
};
