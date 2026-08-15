import { EducationLogo, LOGO_SIZES } from "@shared/logo";
export const RegisterFormHeader = () => {
  return (
    <div className="flex-center flex-col gap-5">
      <EducationLogo size={LOGO_SIZES.LARGE} />
      <div className="flex-center flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Tạo tài khoản mới</h2>
        <p className="text-sm text-text-subtle">
          Nhập thông tin cá nhân của bạn để tiếp tục
        </p>
      </div>
    </div>
  );
};
