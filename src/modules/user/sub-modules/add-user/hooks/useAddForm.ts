import { useForm } from "react-hook-form";

import type { UserPayload } from "@modules/user/types";

export function useAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
    watch,
  } = useForm<UserPayload>({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "",
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
