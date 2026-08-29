import { coursesFormRules } from "@modules/courses/admin/shared/validation";
import { Field, Input, Select, Textarea } from "@shared/fields";
import { Navigation } from "@shared/navigation";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

import { useEditCourse } from "../hooks";
import { FileImageField } from "./FileImageField";

import { categories } from "@/modules/courses/shared/config";

export const EditCourseForm = () => {
  const { form, actions } = useEditCourse();

  Navigation.hooks.useSyncLeaveConfirmation(form.isDirty);

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-4">
      <div
        onSubmit={actions.handleSubmitEvent}
        className="col-span-2 rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface"
      >
        <div className="flex flex-col gap-6">
          <Field.Root>
            <Field.Label target="tenKhoaHoc" text="Tên khóa học" />

            <Input.Root>
              <Input.Field
                id="tenKhoaHoc"
                {...form.register("tenKhoaHoc", coursesFormRules.tenKhoaHoc)}
              />
            </Input.Root>
            <Field.ErrorMessage message={form.errors.tenKhoaHoc?.message} />
          </Field.Root>

          <Field.Root>
            <Field.Label target="moTa" text="Mô tả" />

            <Textarea
              id="moTa"
              {...form.register("moTa", coursesFormRules.moTa)}
            />
            <Field.ErrorMessage message={form.errors.moTa?.message} />
          </Field.Root>

          <Field.Root>
            <Field.Label target="danhMucKhoaHoc" text="Danh mục khóa học" />
            <Select.Root>
              <Select.Trigger
                id="danhMucKhoaHoc"
                labels={{
                  placeholder: "Chọn danh mục",
                  disabled: "Disabled",
                  required: "Required",
                }}
                shouldShowPlaceholder
              />

              <Field.Controller
                name="maDanhMucKhoaHoc"
                control={form.control}
                rules={{ required: "Vui lòng chọn danh mục khóa học" }}
              >
                {({ field }) => (
                  <Select.Content
                    value={field.value}
                    onChange={field.onChange}
                    options={categories}
                    hideAllOption
                  />
                )}
              </Field.Controller>
            </Select.Root>
            <Field.ErrorMessage
              message={form.errors.maDanhMucKhoaHoc?.message}
            />
          </Field.Root>
        </div>
        <div className="mt-20 flex justify-end gap-4">
          <Button
            type="button"
            onClick={actions.onCancelClick}
            appearance={BUTTON_APPEARANCES.OUTLINE}
            intent={BUTTON_INTENTS.SECONDARY}
          >
            Hủy
          </Button>
          <Button
            appearance={BUTTON_APPEARANCES.SOLID}
            intent={BUTTON_INTENTS.PRIMARY}
            onClick={actions.handleSubmitEvent}
          >
            Lưu Khóa Học
          </Button>
        </div>

        <p className="mt-6 text-xs text-text-subtle italic select-none">
          <span className="text-text-required">*</span> Kiểm tra kỹ thông tin
          trước khi lưu khóa học.
        </p>
      </div>

      <div className="col-span-2">
        <FileImageField
          register={form.register}
          handleFileChange={actions.handleFileChange}
          imgPreview={actions.imgPreview}
        />
      </div>
    </div>
  );
};
