import { AppLock } from "./app-lock";
import { Loading } from "./loading";
import { Modal } from "./modal";
import { Toast } from "./toast";

export const GlobalUI = () => {
  return (
    <>
      <Loading.components.DualRingLoadingRender />
      <Modal.Component />
      <AppLock.Component />
      <Toast.Component />
    </>
  );
};
