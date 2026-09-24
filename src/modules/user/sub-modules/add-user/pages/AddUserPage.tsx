import { PenLine } from "lucide-react";

import { AddUserForm } from "../components";

export const AddUserPage = () => {
  return (
    <div className="flex min-h-screen justify-center pt-6 lg:pt-10">
      <div className="flex w-full max-w-md flex-col items-center gap-8 md:max-w-2xl">
        <div className="flex gap-2 text-sm text-text-subtle">
          <PenLine className="hidden size-4 lg:block" />
          <p className="text-center">
            Nhập đầy đủ và chính xác thông tin để thêm nguời dùng mới vào hệ
            thống
          </p>
        </div>
        <AddUserForm />
      </div>
    </div>
  );
};
