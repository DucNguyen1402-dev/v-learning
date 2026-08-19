import { UpdateAuth } from "@shared/auth";
import { Field, Input } from "@shared/fields";
import { Navigation } from "@shared/navigation";
import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

import { profileChangeFields } from "../config";
import { useProfileChangeActions } from "../hooks";

export const ProfileForm = () => {
  const {
    form: { register, getFieldWithFormState, isDirty, isValid },
    actions: { onSaveClick, onCancelClick },
  } = useProfileChangeActions();

  Navigation.hooks.useSyncLeaveConfirmation(isDirty);

  return (
    <div className="flex w-full max-w-md flex-col gap-16 rounded-xl border border-border-subtle bg-bg-default p-6">
      <div className="space-form-lg">
        {profileChangeFields.map(
          ({ required, name, label, type, leftAddon: LeftAddon }) => (
            <Field.Root key={name}>
              <Field.Label target={name} required={required} text={label} />

              <Input.Root>
                {LeftAddon && (
                  <Input.LeftAddon>
                    <LeftAddon className="size-4.5 text-text-muted" />
                  </Input.LeftAddon>
                )}
                <Input.Field
                  hasLeftAddon={!!LeftAddon}
                  type={type}
                  invalid={getFieldWithFormState(name).invalid}
                  {...register(name, UpdateAuth.validation[name])}
                />
              </Input.Root>
              <Field.ErrorMessage
                message={getFieldWithFormState(name).errorMessage}
              />
            </Field.Root>
          ),
        )}
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button
          appearance={BUTTON_APPEARANCES.OUTLINE}
          intent={BUTTON_INTENTS.SECONDARY}
          onClick={onCancelClick}
        >
          {ACTION_LABELS.CANCEL}
        </Button>
        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          intent={BUTTON_INTENTS.PRIMARY}
          onClick={onSaveClick}
          disabled={!isDirty || !isValid}
        >
          {ACTION_LABELS.SAVE}
        </Button>
      </div>
    </div>
  );
};
