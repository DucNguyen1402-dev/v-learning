import type { ModalType } from "@shared/overlays/modal/constants";

export type ModalContextValues = {
  open: (modalState: ModalState) => void;
  close: () => void;
  internal: {
    state: {
      modalState: ModalState;
      isLoading: boolean;
    };
    actions: {
      startLoading: () => void;
      closeModal: () => void;
    };
  };
};

export type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  title: string;
  subtitle: string;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
};
