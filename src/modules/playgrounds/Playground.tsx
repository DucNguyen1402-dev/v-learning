import { ACTION_LABELS, Button, BUTTON_VARIANTS } from "@shared/ui";
export const Playground = () => (
  <div className="flex min-h-screen items-center justify-center gap-2">
    <Button variant={BUTTON_VARIANTS.SECONDARY}>{ACTION_LABELS.CANCEL}</Button>
  </div>
);
