import { MODAL_TYPE_CONFIG } from "../config";
import type { ModalType } from "../constants";
import { useModalContext } from "../contexts";

export const ModalContainer = () => {
  const {
    internal: {
      state: { modalState, isLoading },
      actions: { startLoading, closeModal },
    },
  } = useModalContext();

  if (!modalState.isOpen) return;

  const modalConfig = MODAL_TYPE_CONFIG[modalState.type as ModalType] || null;

  if (!modalConfig) {
    if (import.meta.env.DEV) {
      console.error(`[Modal] Unknown modal type: "${modalState.type}"`);
    }

    return;
  }

  const { ModalComponent, loading } = modalConfig;
  const { title, subtitle } = modalState;

  const onConfirmClick = () => {
    if (typeof modalState?.onConfirm !== "function") {
      if (import.meta.env.DEV) {
        console.error("Modal onConfirm is not a function.");
      }
      return;
    }
    if (loading) {
      startLoading();

      modalState.onConfirm();
      closeModal();
      return;
    }
    closeModal();
    modalState.onConfirm();
  };

  const onCancelClick = () => {
    closeModal();

    modalState?.onCancel?.();
  };

  return (
    <ModalComponent
      onCancel={onCancelClick}
      onConfirm={onConfirmClick}
      title={title || "Xác nhận?"}
      subtitle={subtitle ?? ""}
      loading={isLoading}
    />
  );
};
