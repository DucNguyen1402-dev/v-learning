import { Modal } from "@shared/overlays/modal/components";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

export const DeleteModal = ({
  onCancel,
  onConfirm,
  title,
  subtitle,
  loading,
}) => {
  return (
    <Modal>
      <Modal.Header title={title} subtitle={subtitle} titleSize="sm" />

      <Modal.Footer>
        <Button variant={BUTTON_VARIANTS.SECONDARY} onClick={onCancel}>
          Hủy
        </Button>

        <Button
          variant={BUTTON_VARIANTS.DESTRUCTIVE}
          onClick={onConfirm}
          loading={loading}
        >
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
