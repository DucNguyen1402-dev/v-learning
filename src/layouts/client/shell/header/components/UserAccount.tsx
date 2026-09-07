import { UserProfile } from "@shared/current-user";
export const UserAccount = () => {
  const { profile } = UserProfile.use();

  return (
    <span className="hidden text-sm font-medium lg:block">
      {profile.taiKhoan}
    </span>
  );
};
