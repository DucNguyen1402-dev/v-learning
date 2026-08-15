import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

import { Modal, MODAL_HEADER_SIZES } from "../foundation";
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
        titleSize={MODAL_HEADER_SIZES.MEDIUM}
      />

      <Modal.Footer>
        <Button
          appearance={BUTTON_APPEARANCES.OUTLINE}
          intent={BUTTON_INTENTS.SECONDARY}
          onClick={onCancel}
        >
          {ACTION_LABELS.CANCEL}
        </Button>

        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          intent={BUTTON_INTENTS.DESTRUCTIVE}
          onClick={onConfirm}
          loading={loading}
        >
          {ACTION_LABELS.CONFIRM}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
