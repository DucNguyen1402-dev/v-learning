import { UserProfile } from "@shared/user-profile";
export const UserAccount = () => {
  const { profile } = UserProfile.use();

  return (
    <p className="truncate text-sm font-medium text-text-subtle">
      {profile.taiKhoan}
    </p>
  );
};
