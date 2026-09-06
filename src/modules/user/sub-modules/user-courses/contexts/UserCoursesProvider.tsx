import type { ReactNode } from "react";

import { useUserCourses } from "./hooks";
import { UserCoursesContext } from "./UserCoursesContext";

interface UserCoursesProviderProps {
  children: ReactNode;
  taiKhoan: string;
}

export const UserCoursesProvider = ({
  children,
  taiKhoan,
}: UserCoursesProviderProps) => {
  const userCourses = useUserCourses(taiKhoan);
  return (
    <UserCoursesContext.Provider value={userCourses}>
      {children}
    </UserCoursesContext.Provider>
  );
};
