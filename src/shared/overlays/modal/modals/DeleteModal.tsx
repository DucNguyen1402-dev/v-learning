import { Modal, MODAL_HEADER_SIZES } from "@shared/overlays/modal/components";
import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

import type { ModalProps } from "./types";

export const DeleteModal = ({
  onCancel,
  onConfirm,
  title,
  subtitle,
  loading,
}: ModalProps & { loading?: boolean }) => {
  return (
    <Modal>
      <Modal.Header
        title={title}
        subtitle={subtitle}
        titleSize={MODAL_HEADER_SIZES.SMALL}
      />

      <Modal.Footer>
        <Button appearance={BUTTON_APPEARANCES.OUTLINE} onClick={onCancel}>
          {ACTION_LABELS.CANCEL}
        </Button>

        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          onClick={onConfirm}
          loading={loading}
        >
          {ACTION_LABELS.CONFIRM}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
