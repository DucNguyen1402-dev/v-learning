import { Navigation } from "@shared/navigation";
import { Modal } from "@shared/overlays";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { MoveLeft } from "lucide-react";

export const BackButton = () => {
  const { back } = Navigation.hooks.useNavigateWithState();
  const shouldConfirmLeave = Navigation.hooks.useShouldConfirmLeave();
  const modal = Modal.use();
  const handleBackClick = () => {
    if (!shouldConfirmLeave) {
      back();
      return;
    }
    modal.open({
      ...Modal.config.leavePage(),
      onConfirm: () => back(),
    });
  };
  return (
    <Button
      appearance={BUTTON_APPEARANCES.OUTLINE}
      intent={BUTTON_INTENTS.SECONDARY}
      size={BUTTON_SIZES.SMALL}
      icon={MoveLeft}
      onClick={handleBackClick}
    />
  );
};
