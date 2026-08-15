import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

import { Modal } from "../foundation";
import type { ModalProps } from "./types";

export const UpdateModal = ({
  onCancel,
  onConfirm,
  title,
  subtitle,
}: ModalProps) => {
  return (
    <Modal>
      <Modal.Header title={title} subtitle={subtitle} />

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
          intent={BUTTON_INTENTS.PRIMARY}
          onClick={onConfirm}
        >
          {ACTION_LABELS.CONFIRM}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
