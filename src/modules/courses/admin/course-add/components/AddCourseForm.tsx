import { Field, Input, Select } from "@shared/fields";
import { Navigation } from "@shared/navigation";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

import { useAddCourseActions } from "../hooks";
import { addCoursesRules } from "../validation";
import { FileImageField } from "./FileImageField";

import { categories } from "@/modules/courses/shared/config";

export const AddCourseForm = () => {
  const {
    register,
    handleSubmitEvent,
    errors,
    handleFileChange,
    imgPreview,
    onCancelClick,
    isDirty,
    control,
  } = useAddCourseActions();

  Navigation.hooks.useSyncLeaveConfirmation(isDirty);

  return (
    <div
      onSubmit={handleSubmitEvent}
      className="rounded-container border border-border-subtle p-6 shadow-surface"
    >
      <div className="flex flex-col gap-8">
        <Field.Root>
          <Field.Label target="tenKhoaHoc" text="Tên khóa học" />

          <Input.Root>
            <Input.Field
              id="tenKhoaHoc"
              {...register("tenKhoaHoc", addCoursesRules.tenKhoaHoc)}
            />
          </Input.Root>
          <Field.ErrorMessage message={errors.tenKhoaHoc?.message} />
        </Field.Root>

        <Field.Root>
          <Field.Label target="moTa" text="Mô tả" />

          <Input.Root>
            <Input.Field
              id="moTa"
              {...register("moTa", addCoursesRules.moTa)}
            />
          </Input.Root>
          <Field.ErrorMessage message={errors.moTa?.message} />
        </Field.Root>

        <FileImageField
          register={register}
          error={errors.hinhAnh}
          handleFileChange={handleFileChange}
          imgPreview={imgPreview}
        />

        <Select.Root>
          <Select.Trigger
            id="select"
            labels={{
              disabled: "Disabled",
              required: "Required",
            }}
          />

          <Field.Controller
            name="maDanhMucKhoaHoc"
            control={control}
            rules={{ required: "Vui lòng chọn danh mục khóa học" }}
          >
            {({ field }) => (
              <Select.Content
                value={field.value}
                onChange={field.onChange}
                options={categories}
              />
            )}
          </Field.Controller>
        </Select.Root>
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
        >
          Thêm Khóa Học
        </Button>
      </div>

      <p className="mt-4 text-xs text-text-subtle italic select-none">
        <span className="text-text-required">*</span> Kiểm tra kỹ thông tin
        trước khi thêm khóa học.
      </p>
    </div>
  );
};
