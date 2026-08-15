import { EducationLogo, LOGO_SIZES } from "@shared/logo";
export const LoginHeader = () => {
  return (
    <div className="flex-center flex-col gap-2">
      <EducationLogo size={LOGO_SIZES.LARGE} />
      <h1 className="text-2xl font-bold tracking-tight">Mừng bạn quay lại</h1>
      <p className="mt-1 text-center text-sm text-text-subtle">
        Tiếp tục hành trình học tập của bạn ngay hôm nay
      </p>
    </div>
  );
};
