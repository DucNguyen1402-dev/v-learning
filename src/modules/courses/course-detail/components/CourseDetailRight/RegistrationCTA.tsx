import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { ArrowRight } from "lucide-react";

export const RegistrationCTA = ({ onRegister }: { onRegister: () => void }) => {
  return (
    <Button
      onClick={onRegister}
      appearance={BUTTON_APPEARANCES.SOLID}
      intent={BUTTON_INTENTS.PRIMARY}
      size={BUTTON_SIZES.LARGE}
      isGroup
      fullWidth
    >
      <div className="flex items-center gap-2">
        <span>Đăng ký tham gia ngay</span>
        <ArrowRight className="group h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
      </div>
    </Button>
  );
};
