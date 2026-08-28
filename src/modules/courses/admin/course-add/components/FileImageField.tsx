import type { UseFormRegister } from "react-hook-form";

import { Field, Input } from "@shared/fields";

import type { AddCourseFormData } from "../types";

type FileImageFieldProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: { message?: string };
  register: UseFormRegister<AddCourseFormData>;
  imgPreview?: string;
};
export const FileImageField = ({
  handleFileChange,
  error,
  register,
  imgPreview,
}: FileImageFieldProps) => {
  return (
    <div className="flex justify-between rounded-sm border border-gray-600 px-5 py-3">
      <div className="flex flex-col gap-4">
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
        <div>
          <img
            src={imgPreview}
            alt="Preview"
            className="h-full w-32 rounded border border-neutral-200 object-cover"
          />
        </div>
      )}
    </div>
  );
};
