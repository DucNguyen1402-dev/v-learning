import { useForm } from "react-hook-form";

import type { CourseFormData } from "@modules/courses/admin/shared/types";

export function useAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
    watch,
  } = useForm<CourseFormData>({
    defaultValues: {
      tenKhoaHoc: "",
      moTa: "",
      hinhAnh: [],
      maDanhMucKhoaHoc: "",
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    control,
    watch,
  };
}
