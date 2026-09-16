import { useState } from "react";
import type { UseFormRegister } from "react-hook-form";

import type { CourseFormData } from "@modules/courses/admin/shared/types";
import { Field, Input } from "@shared/fields";
import { Image } from "lucide-react";

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
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  const [hasError, setHasError] = useState(false);

  if (imgPreview !== imgSrc) {
    setHasError(false);
    setImgSrc(imgPreview);
  }
  return (
    <div className="flex h-full min-w-0 flex-col items-center gap-4 rounded-control border border-border-subtle bg-bg-default p-4 shadow-surface sm:p-6">
      <div className="w-full max-w-full min-w-0 rounded-container border border-border-default p-2 lg:p-4">
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

      {!hasError && imgSrc ? (
        <div className="w-full max-w-full overflow-hidden rounded-container border border-border-default sm:w-90">
          <img
            src={imgSrc}
            alt="Preview"
            className="h-full w-full object-cover"
            onLoad={() => setHasError(false)}
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div className="flex-center h-60 w-full max-w-full flex-col gap-2 rounded-container bg-bg-subtle text-text-subtle sm:w-90">
          <Image />
          <span className="text-xs">Không tải được ảnh</span>
        </div>
      )}
    </div>
  );
};
