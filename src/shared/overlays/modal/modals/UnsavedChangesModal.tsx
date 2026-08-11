import { Button, BUTTON_VARIANTS } from "@shared/ui";

const DEFAULT_TITLE = "Bạn có chắc muốn rời trang?";
const DEFAULT_SUBTITLE = "Những thay đổi chưa lưu sẽ bị mất.";

import { Modal } from "@shared/overlays/modal/components";

export const UnsavedChangesModal = ({
  onCancel,
  onConfirm,
  title,
  subtitle,
}) => {
  return (
    <Modal>
      <Modal.Header
        title={title ?? DEFAULT_TITLE}
        subtitle={subtitle ?? DEFAULT_SUBTITLE}
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
