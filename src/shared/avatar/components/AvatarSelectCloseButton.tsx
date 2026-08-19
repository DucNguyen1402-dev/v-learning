import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { X } from "lucide-react";

type AvatarSelectCloseButtonProps = {
  onClose: () => void;
};
export const AvatarSelectCloseButton = ({
  onClose,
}: AvatarSelectCloseButtonProps) => (
  <Button
    onClick={onClose}
    size={BUTTON_SIZES.NONE}
    appearance={BUTTON_APPEARANCES.GHOST}
    intent={BUTTON_INTENTS.TERTIARY}
  >
    <X className="size-6" />
  </Button>
);
