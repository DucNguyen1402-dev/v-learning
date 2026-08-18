import { PasswordChangeForm, PasswordChangeHeader } from "../components";

export const PasswordChangePage = () => {
  return (
    <div className="flex-center py-6">
      <div className="flex w-full max-w-md flex-col gap-10 rounded-container border border-border-subtle bg-bg-default p-8 shadow-surface">
        <PasswordChangeHeader />
        <PasswordChangeForm />
      </div>
    </div>
  );
};
