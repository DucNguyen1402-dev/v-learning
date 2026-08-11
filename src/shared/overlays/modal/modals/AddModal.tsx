import { Modal } from "@shared/overlays/modal/components";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

export const AddModal = ({ onCancel, onConfirm, title, subtitle }) => {
  return (
    <Modal>
      <Modal.Header title={title} subtitle={subtitle} />

      <Modal.Footer>
        <Button
          intent={BUTTON_INTENTS.PRIMARY}
          appearance={BUTTON_APPEARANCES.SOLID}
          onClick={onCancel}
        >
          Hủy
        </Button>

        <Button
          intent={BUTTON_INTENTS.PRIMARY}
          appearance={BUTTON_APPEARANCES.SOLID}
          onClick={onConfirm}
        >
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
