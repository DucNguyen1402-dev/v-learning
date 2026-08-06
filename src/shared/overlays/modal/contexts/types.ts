export type ModalContextValues = {
  open: () => void;
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
  type: string | null;
  title: string;
  subtitle: string;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
};
