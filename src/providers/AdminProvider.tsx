import { Layout } from "@layouts/admin";

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  return <Layout.Provider>{children}</Layout.Provider>;
};
