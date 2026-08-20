import { UpdateAuth } from "@shared/auth";
import { Field, Input } from "@shared/fields";
import { Navigation } from "@shared/navigation";
import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

import { passwordChangeFields } from "../config";
import { usePasswordChange } from "../hooks";

const PasswordChangeForm = () => {
  const { form, actions } = usePasswordChange();
  const { register, isDirty, isValid, getFieldWithFormState } = form;
  const { onSaveClick, onCancelClick } = actions;

  const { password: passwordRules } = UpdateAuth.validation;
  Navigation.hooks.useSyncLeaveConfirmation(isDirty);

  return (
    <div className="flex flex-col gap-10 select-none">
      {passwordChangeFields.map((field) => (
        <Field.Root key={field.name}>
          <Field.Label required={true} target={field.name} text={field.label} />
          <Input.Root>
            <Input.Field
              {...register(field.name, {
                ...passwordRules,
                required: field.requiredRules,
              })}
              type="password"
              invalid={getFieldWithFormState(field.name).invalid}
            />
            <Input.PasswordVisibilityToggle />
          </Input.Root>
          <Field.ErrorMessage
            message={getFieldWithFormState(field.name).errorMessage}
          />
        </Field.Root>
      ))}

      <div className="flex justify-end gap-3">
        <Button
          onClick={onCancelClick}
          appearance={BUTTON_APPEARANCES.OUTLINE}
          intent={BUTTON_INTENTS.SECONDARY}
        >
          {ACTION_LABELS.CANCEL}
        </Button>
        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          onClick={onSaveClick}
          intent={BUTTON_INTENTS.PRIMARY}
          disabled={!isDirty || !isValid}
        >
          {ACTION_LABELS.SAVE}
        </Button>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
