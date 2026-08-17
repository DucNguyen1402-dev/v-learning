import { EducationLogo, LOGO_SIZES } from "@shared/logo";

interface LoginHeaderProps {
  isRegistrationSuccessful?: boolean;
}

export const LoginHeader = ({ isRegistrationSuccessful }: LoginHeaderProps) => {
  const title = isRegistrationSuccessful
    ? "Bắt đầu hành trình học tập cùng\u00A0V\u2011Learning!"
    : "Chào mừng bạn trở lại!";

  const subtitle = isRegistrationSuccessful
    ? "Đăng nhập ngay với tài khoản mới của bạn."
    : "Đăng nhập để tiếp tục hành trình học tập của bạn.";
  return (
    <div className="flex-center flex-col gap-6">
      <EducationLogo size={LOGO_SIZES.LARGE} />
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-1 text-center text-sm text-text-subtle">{subtitle}</p>
      </div>
    </div>
  );
};
