import type { ModalType } from "../constants";

export type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  title: string;
  subtitle: string;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
};

export type ModalConfig = Omit<ModalState, "isOpen" | "subtitle" | "onCancel"> &
  Partial<Pick<ModalState, "subtitle" | "onCancel">>;

export type ModalContextValues = {
  open: (modalState: ModalConfig) => void;
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
