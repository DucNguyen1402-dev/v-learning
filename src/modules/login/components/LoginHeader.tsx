import { GraduationCap } from "lucide-react";

const LoginHeader = () => {
  return (
    <div className="flex-center flex-col gap-2">
      <div className="flex-center size-12 rounded-full bg-slate-900 bg-linear-to-br from-blue-600 to-blue-500 text-slate-100 dark:bg-slate-100">
        <GraduationCap className="size-8" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight">Mừng bạn quay lại</h1>
      <p className="mt-1 text-sm text-slate-500">
        Tiếp tục hành trình học tập của bạn ngay hôm nay
      </p>
    </div>
  );
};

export default LoginHeader;
