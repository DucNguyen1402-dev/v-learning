import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

import { Modal } from "../foundation";
import type { ModalProps } from "./types";
export const AddModal = ({
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
          intent={BUTTON_INTENTS.SECONDARY}
          appearance={BUTTON_APPEARANCES.OUTLINE}
          onClick={onCancel}
        >
          {ACTION_LABELS.CANCEL}
        </Button>

        <Button
          intent={BUTTON_INTENTS.PRIMARY}
          appearance={BUTTON_APPEARANCES.SOLID}
          onClick={onConfirm}
        >
          {ACTION_LABELS.CONFIRM}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
