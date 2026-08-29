import type { UseFormRegister } from "react-hook-form";

import type { CourseFormData } from "@modules/courses/admin/shared/types";
import { Field, Input } from "@shared/fields";

type FileImageFieldProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<CourseFormData>;
  imgPreview?: string;
};
export const FileImageField = ({
  handleFileChange,
  register,
  imgPreview,
}: FileImageFieldProps) => {
  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-control border border-border-subtle bg-bg-default p-6 shadow-surface">
      <div className="rounded-container border border-border-default p-2 lg:p-4">
        <Field.Root>
          <Field.Label target="hinhAnh" text="Hình ảnh khóa học" />

          <Input.Root>
            <Input.Field
              type="file"
              id="hinhAnh"
              {...register("hinhAnh", {
                onChange: handleFileChange,
              })}

              className="input-file"
              accept="image/*"
            />
          </Input.Root>
        </Field.Root>
      </div>

      {imgPreview && (
        <div className="w-70 overflow-hidden rounded-container border border-border-subtle md:w-80 lg:w-90">
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
