import { useLoginActions } from "./useLoginActions";
import { useLoginForm } from "./useLoginForm";
import { useLoginState } from "./useLoginState";

export const useLogin = () => {
  const form = useLoginForm();
  const state = useLoginState();

  const actions = useLoginActions({
    handleSubmit: form.handleSubmit,
    remember: state.remember,
  });

  return {
    form,
    state,
    actions,
  };
};

export type UseLoginReturn = ReturnType<typeof useLogin>;
