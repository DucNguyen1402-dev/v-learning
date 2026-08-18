import { Field, Input } from "@shared/fields";
import {
  ACTION_LABELS,
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
} from "@shared/ui";

// import { useSyncLeaveConfirmation } from "@features/admin/hooks";
import { useProfileContext } from "@features/admin/profile/contexts";
import { userValidationRules } from "@features/admin/shared/config";

const ProfileForm = () => {
  const {
    form: { register, errors, isDirty, onSubmitEvent },
  } = useProfileContext();
  const profileFields = [
    { label: "TÀI KHOẢN", name: "taiKhoan", disabled: true, required: false },
    { label: "HỌ VÀ TÊN", name: "hoTen", required: true },
    { label: "EMAIL", name: "email", type: "email", required: true },
    { label: "SỐ ĐT", name: "soDT", type: "number", required: false },
  ];

  //   useSyncLeaveConfirmation(isDirty);

  return (
    <div onSubmit={onSubmitEvent} className="space-y-10">
      {profileFields.map(({ required, ...field }) => (
        <div className="flex flex-col gap-4" key={field.name}>
          <Field.Label
            htmlFor={field.name}
            required={required}
            className="self-start text-xs"
          >
            {field.label}
          </Field.Label>
          <Input
            {...field}
            {...register(field.name, userValidationRules[field.name])}
            error={errors[field.name]?.message}
          />
        </div>
      ))}

      <div className="mt-16 flex justify-end">
        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          intent={BUTTON_INTENTS.PRIMARY}
        >
          {ACTION_LABELS.SAVE}
        </Button>
      </div>
    </div>
  );
};

export default ProfileForm;
