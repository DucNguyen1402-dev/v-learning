export type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  title: string;
  subtitle: string;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
};
