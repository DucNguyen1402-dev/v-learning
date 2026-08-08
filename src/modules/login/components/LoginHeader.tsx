import { GraduationCap } from "lucide-react";

export const LoginHeader = () => {
  return (
    <div className="flex-center flex-col gap-2">
      <div className="login-logo flex-center size-12 rounded-full">
        <GraduationCap className="size-8" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight">Mừng bạn quay lại</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Tiếp tục hành trình học tập của bạn ngay hôm nay
      </p>
    </div>
  );
};
