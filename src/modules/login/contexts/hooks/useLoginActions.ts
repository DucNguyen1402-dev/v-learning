import type { UseFormHandleSubmit } from "react-hook-form";

import type { LoginFormValues } from "@modules/login/type";

type UseLoginActionsParams = {
  handleSubmit: UseFormHandleSubmit<LoginFormValues>;
};

export const useLoginActions = ({ handleSubmit }: UseLoginActionsParams) => {
  const onValid = () => {};
  const onLoginClick = () => handleSubmit(onValid)();

  return {
    onLoginClick,
  };
};
