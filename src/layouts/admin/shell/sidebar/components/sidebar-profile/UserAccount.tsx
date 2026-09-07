import { CurrentUser } from "@/shared/current-user";
export const UserAccount = () => {
  const { profile } = CurrentUser.use();

  return (
    <p className="truncate text-sm font-medium text-text-subtle">
      {profile.current.taiKhoan}
    </p>
  );
};
