import { Field, Input } from "@shared/fields";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

export const CouponInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Field.Root>
        <Input.Root>
          <Input.Field placeholder="Mã giảm giá" />
        </Input.Root>
      </Field.Root>
      <div className="shrink-0">
        <Button
          type="button"
          appearance={BUTTON_APPEARANCES.OUTLINE}
          intent={BUTTON_INTENTS.SECONDARY}
        >
          Áp dụng
        </Button>
      </div>
    </div>
  );
};
