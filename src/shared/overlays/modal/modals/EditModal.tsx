import { Modal } from "@shared/overlays/modal/components";
import { Button, BUTTON_VARIANTS } from "@shared/ui";

export const EditModal = ({ onCancel, onConfirm, title, subtitle }) => {
  return (
    <Modal>
      <Modal.Header title={title} subtitle={subtitle} />

      <Modal.Footer>
        <Button variant={BUTTON_VARIANTS.SECONDARY} onClick={onCancel}>
          Hủy
        </Button>

        <Button variant={BUTTON_VARIANTS.PRIMARY} onClick={onConfirm}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
