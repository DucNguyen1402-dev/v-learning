export type ModalProps = {
  onCancel: () => void;
  onConfirm?: () => void;
  title: string;
  subtitle?: string;
};
