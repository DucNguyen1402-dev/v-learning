import type { UseFormRegister } from "react-hook-form";

import type { CourseFormData } from "@modules/courses/admin/shared/types";
import { Field, Input } from "@shared/fields";

type FileImageFieldProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: { message?: string };
  register: UseFormRegister<CourseFormData>;
  imgPreview?: string;
};
export const FileImageField = ({
  handleFileChange,
  error,
  register,
  imgPreview,
}: FileImageFieldProps) => {
  return (
    <div className="flex min-w-0 min-h-80 flex-col items-center gap-4 rounded-control border border-border-subtle bg-bg-default p-4 shadow-surface sm:p-6 md:h-full">
      <div className="w-full min-w-0 max-w-full rounded-container border border-border-default p-2 lg:p-4">
        <Field.Root>
          <Field.Label target="hinhAnh" text="Hình ảnh khóa học" />

          <Input.Root>
            <Input.Field
              type="file"
              id="hinhAnh"
              {...register("hinhAnh", {
                required: "Vui lòng chọn hình ảnh",
                onChange: handleFileChange,
              })}

              className="input-file"
              accept="image/*"
            />
            <Field.ErrorMessage message={error?.message} />
          </Input.Root>
        </Field.Root>
      </div>

      {imgPreview && (
        <div className="w-full max-w-full overflow-hidden rounded-container border border-border-subtle sm:w-70 md:w-80 lg:w-90">
          <img
            src={imgPreview}
            alt="Preview"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};
