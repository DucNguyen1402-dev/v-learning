import { useParams } from "react-router-dom";

import { useEditForm, useEditUserActions, useUserInforQuery } from "./internal";

export const useEditUser = () => {
  const { taiKhoan } = useParams<{ taiKhoan: string }>();
  const { data: userInfo } = useUserInforQuery(taiKhoan as string);
  const targetUser = userInfo?.find((user) => user.taiKhoan === taiKhoan);

  const { register, handleSubmit, errors, isDirty, control } = useEditForm({
    targetUser,
  });

  const actions = useEditUserActions({
    isDirty,
    handleSubmit,
    targetUser,
  });

  return {
    hasUserData: !!targetUser,
    form: {
      register,
      errors,
      isDirty,
      control,
    },
    actions: {
      handleSubmitEvent: actions?.handleSubmitEvent,
      onCancelClick: actions?.onCancelClick,
    },
  };
};

export type UseEditUserReturn = ReturnType<typeof useEditUser>;
