import { useForm } from "react-hook-form";

import type { AddCourseFormData } from "../types";

export function useAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
    watch,
  } = useForm<AddCourseFormData>({
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
