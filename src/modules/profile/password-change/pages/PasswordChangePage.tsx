import { PasswordChangeForm, PasswordChangeHeader } from "../components";

export const PasswordChangePage = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="w-full max-w-md space-y-10 rounded-2xl border border-slate-700/50 bg-slate-800 p-8 shadow-2xl">
        <PasswordChangeHeader />
        <PasswordChangeForm />
      </div>
    </div>
  );
};
