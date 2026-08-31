import { useParams } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { UserCoursesTable } from "../components/UserCoursesTable";
import { UserCoursesProvider } from "../contexts";

export const UserCoursesPage = () => {
  const { taiKhoan } = useParams<{ taiKhoan: string }>();

  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  return (
    <UserCoursesProvider taiKhoan={taiKhoan as string}>
      <div className="min-h-screen pt-5">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-center text-lg font-semibold md:text-xl">
            Danh sách khóa học của người dùng: {taiKhoan}
          </h1>
        </div>
        <div className="mt-6 flex justify-center">
          <div
            className="w-full scroll-target rounded-container border border-border-subtle bg-bg-default shadow-surface select-none md:max-w-130"
            ref={scrollRef}
          >
            <UserCoursesTable />
          </div>
        </div>
      </div>
    </UserCoursesProvider>
  );
};
