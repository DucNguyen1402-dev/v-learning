import { ProfileCard, ProfileContent } from "../components";
export const ProfilePage = () => {
  return (
    <div className="flex-center flex-col gap-6 px-4 py-8">
      <ProfileCard />

      <ProfileContent />
    </div>
  );
};
