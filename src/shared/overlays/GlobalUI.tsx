import { AppInteractionLock } from "./interaction-lock";
import { Loading } from "./loading";
import { Modal } from "./modal";
import { Toast } from "./toast";

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
