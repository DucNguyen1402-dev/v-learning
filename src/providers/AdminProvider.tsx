import { Layout } from "@layouts/admin";
import { UserProfile } from "@shared/user-profile";
export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProfile.Provider>
      <Layout.Provider>{children}</Layout.Provider>
    </UserProfile.Provider>
  );
};
