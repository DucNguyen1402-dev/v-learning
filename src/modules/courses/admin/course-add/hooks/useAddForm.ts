import { useForm } from "react-hook-form";

import { UserProfile } from "@shared/user-profile";
import { format } from "date-fns";

import type { AddCourseFormData } from "../types";

export function useAddForm() {
  const { profile } = UserProfile.use();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
    watch,
  } = useForm<AddCourseFormData>({
    defaultValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: [],
      maNhom: "GP01",
      ngayTao: format(new Date(), "yyyy-MM-dd"),
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: profile.taiKhoan,
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
