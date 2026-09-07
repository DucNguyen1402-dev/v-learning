import { CurrentUser } from "@shared/current-user";
export const UserAccount = () => {
  const { profile } = CurrentUser.use();

  return (
    <span className="hidden text-sm font-medium lg:block">
      {profile.current.taiKhoan}
    </span>
  );
};
