import { useParams } from "react-router-dom";

import { UserCoursesProvider } from "../contexts";

type UserCoursesLocationProviderProps = {
  children: React.ReactNode;
};
export const UserCoursesLocationProvider = ({
  children,
}: UserCoursesLocationProviderProps) => {
  const { taiKhoan } = useParams<{ taiKhoan: string }>();

  return (
    <UserCoursesProvider taiKhoan={taiKhoan as string}>
      {children}
    </UserCoursesProvider>
  );
};
