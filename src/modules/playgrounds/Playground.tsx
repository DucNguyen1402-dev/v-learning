import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

export const Playground = () => (
  <div className="flex items-center justify-center gap-2 border border-red-500">
    <Button
      appearance={BUTTON_APPEARANCES.SOLID}
      intent={BUTTON_INTENTS.PRIMARY}
    >
      {ACTION_LABELS.CONFIRM}
    </Button>
  </div>
);
