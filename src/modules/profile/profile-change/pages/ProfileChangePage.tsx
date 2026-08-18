import { PencilLine } from "lucide-react";

import { ProfileForm } from "../components";
export const ProfileChangePage = () => {
  return (
    <div className="flex-center flex-col gap-8 pt-5">
      <div className="flex items-center justify-center gap-2">
        <PencilLine className="size-4 text-text-muted" />
        <h2 className="text-sm text-text-subtle">
          Cập nhật thông tin tài khoản của bạn bằng biểu mẫu bên dưới.
        </h2>
      </div>
      <ProfileForm />
    </div>
  );
};
