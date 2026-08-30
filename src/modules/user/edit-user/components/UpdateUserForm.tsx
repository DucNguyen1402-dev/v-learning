import { userValidationRules } from "@modules/user/shared/validation";
import { Field, Input, Select } from "@shared/fields";
import { Navigation } from "@shared/navigation";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

import { userUpdateFormFields } from "../config";
import { useEditUserContext } from "../contexts";
import { NotFoundUser } from "./NotFoundUser";

export const UpdateUserForm = () => {
  const {
    hasUserData,
    form: { register, errors, isDirty, control },
    actions: { handleSubmitEvent, onCancelClick },
  } = useEditUserContext();

  Navigation.hooks.useSyncLeaveConfirmation(isDirty);

  if (!hasUserData) return <NotFoundUser />;

  return (
    <div
      onSubmit={handleSubmitEvent}
      className="col-span-2 min-w-md rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface"
    >
      <div className="flex flex-col gap-6">
        {userUpdateFormFields.map((field) => (
          <Field.Root key={field.name}>
            <Field.Label target={field.name} text={field.label} />

            <Input.Root>
              <Input.Field
                id={field.name}
                type={field.type}

                {...register(field.name, userValidationRules[field.name])}
              />
            </Input.Root>
            <Field.ErrorMessage message={errors[field.name]?.message} />
          </Field.Root>
        ))}

        <Field.Root>
          <Field.Label target="maLoaiNguoiDung" text="Loại người dùng" />
          <Select.Root>
            <Select.Trigger
              id="maLoaiNguoiDung"
              labels={{
                placeholder: "Chọn loại người dùng",
                disabled: "Disabled",
                required: "Required",
              }}
              shouldShowPlaceholder
            />

            <Field.Controller
              name="maLoaiNguoiDung"
              control={control}
              rules={{ required: "Vui lòng chọn loại người dùng" }}
            >
              {({ field }) => (
                <Select.Content
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { value: "HV", label: "Học viên" },
                    { value: "GV", label: "Giáo viên" },
                  ]}
                  hideAllOption
                />
              )}
            </Field.Controller>
          </Select.Root>
          <Field.ErrorMessage message={errors.maLoaiNguoiDung?.message} />
        </Field.Root>
      </div>
      <div className="mt-20 flex justify-end gap-4">
        <Button
          type="button"
          onClick={onCancelClick}
          appearance={BUTTON_APPEARANCES.OUTLINE}
          intent={BUTTON_INTENTS.SECONDARY}
        >
          Hủy
        </Button>
        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          intent={BUTTON_INTENTS.PRIMARY}
          onClick={handleSubmitEvent}
        >
          Lưu Người dùng
        </Button>
      </div>

      <p className="mt-6 text-xs text-text-subtle italic select-none">
        <span className="text-text-required">*</span> Kiểm tra kỹ thông tin
        trước khi cập nhật người dùng.
      </p>
    </div>
  );
};
