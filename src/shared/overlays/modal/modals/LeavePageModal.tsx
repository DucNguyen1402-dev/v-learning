import { Modal } from "@shared/overlays/modal/components";
import { Button, BUTTON_VARIANTS } from "@shared/ui";

export const LeavePageModal = ({ onCancel, onConfirm }) => {
  return (
    <Modal>
      <Modal.Header
        title="Rời khỏi trang?"
        subtitle="Các thay đổi chưa được lưu sẽ bị mất."
      />

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
