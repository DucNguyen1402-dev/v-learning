import { Navigation } from "@shared/navigation";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { MoveLeft } from "lucide-react";

export const BackButton = () => {
  const { back } = Navigation.useNavigate();

  return (
    <Button
      appearance={BUTTON_APPEARANCES.GHOST}
      intent={BUTTON_INTENTS.SECONDARY}
      size={BUTTON_SIZES.SMALL}
      icon={MoveLeft}
      onClick={() => back()}
    />
  );
};
