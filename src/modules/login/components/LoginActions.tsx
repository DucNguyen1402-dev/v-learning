import { useLoginContext } from "@modules/login/contexts";
import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

export const LoginActions = () => {
  const {
    actions: { onLoginClick, isLoggingIn },
  } = useLoginContext();

  return (
    <Button
      onClick={onLoginClick}
      loading={isLoggingIn}
      appearance={BUTTON_APPEARANCES.SOLID}
      intent={BUTTON_INTENTS.PRIMARY}
      fullWidth
      disabled={isLoggingIn}
    >
      <span className="uppercase">{ACTION_LABELS.LOGIN}</span>
    </Button>
  );
};
