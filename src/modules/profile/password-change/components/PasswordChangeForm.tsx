import { Field, Input } from "@shared/fields";
import { Navigation } from "@shared/navigation";
import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

const passwordFieldsConfig = [
  { label: "Mật khẩu hiện tại", name: "matKhauHienTai" },
  { label: "Mật khẩu mới", name: "matKhauMoi" },
  { label: "Xác nhận mật khẩu mới", name: "xacNhanMatKhauMoi" },
];

const PasswordChangeForm = () => {
  const {
    form: { register, errors, onPasswordSubmitEvent, isDirty },
    profile: { onCancelPasswordChangeClick },
  } = useProfileContext();

  Navigation.hooks.useSyncLeaveConfirmation(isDirty);

  return (
    <form className="space-y-10" onSubmit={onPasswordSubmitEvent}>
      {passwordFieldsConfig.map((field) => (
        <Field.Root key={field.name}>
          <Field.Label required={true} target={field.name} text={field.label} />
          <Input.Root>
            <Input.Field
              {...register(field.name, passwordRules)}
              error={errors[field.name]?.message}
            />
            <Input.PasswordVisibilityToggle />
          </Input.Root>
          <Field.ErrorMessage message={errors[field.name]?.message} />
        </Field.Root>
      ))}

      <div className="flex justify-end gap-3 pt-8">
        <Button
          onClick={onCancelPasswordChangeClick}
          appearance={BUTTON_APPEARANCES.OUTLINE}
          intent={BUTTON_INTENTS.SECONDARY}
        >
          {ACTION_LABELS.CANCEL}
        </Button>
        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          intent={BUTTON_INTENTS.PRIMARY}
        >
          {ACTION_LABELS.SAVE}
        </Button>
      </div>
    </form>
  );
};

export default PasswordChangeForm;
