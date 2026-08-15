import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";
export const RegisterFormActions = () => {
  return (
    <Button
      appearance={BUTTON_APPEARANCES.SOLID}
      intent={BUTTON_INTENTS.PRIMARY}
      onClick={() => {}}
      fullWidth
    >
      <span className="uppercase">{ACTION_LABELS.SIGNUP}</span>
    </Button>
  );
};
