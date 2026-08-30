import { useEffect } from "react";
import { useForm } from "react-hook-form";

import type {
  UpdateUserFormData,
  UserInfo,
} from "@modules/user/edit-user/types";

export function useEditForm({
  targetUser,
}: {
  targetUser: UserInfo | undefined;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
    control,
    watch,
  } = useForm<UpdateUserFormData>({
    defaultValues: {
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "",
    },
  });

  useEffect(() => {
    if (!targetUser) return;

    reset({
      hoTen: targetUser.hoTen,
      email: targetUser.email,
      soDT: targetUser.soDt,
      maLoaiNguoiDung: targetUser.maLoaiNguoiDung,
    });
  }, [reset, targetUser, watch]);

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    control,
    watch,
  };
}

export type UseEditFormReturn = ReturnType<typeof useEditForm>;
