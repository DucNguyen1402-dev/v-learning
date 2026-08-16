import { useRegisterContext } from "@modules/register/contexts";
import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";
export const RegisterFormActions = () => {
  const {
    actions: { onRegisterClick, isRegistering },
  } = useRegisterContext();

  return (
    <Button
      appearance={BUTTON_APPEARANCES.SOLID}
      intent={BUTTON_INTENTS.PRIMARY}
      onClick={onRegisterClick}
      fullWidth
      loading={isRegistering}
    >
      <span className="uppercase">{ACTION_LABELS.SIGNUP}</span>
    </Button>
  );
};
