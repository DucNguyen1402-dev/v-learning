import { useState } from "react";

import { useLoginActions } from "./useLoginActions";
import { useLoginForm } from "./useLoginForm";

export const useLogin = () => {
  const form = useLoginForm();

  const [remember, setRemember] = useState(false);

  const toggleRemember = () => setRemember((prev) => !prev);

  const actions = useLoginActions({
    handleSubmit: form.handleSubmit,
    remember: remember,
  });

  return {
    form,
    state: {
      remember,
      toggleRemember,
    },
    actions,
  };
};

export type UseLoginReturn = ReturnType<typeof useLogin>;
