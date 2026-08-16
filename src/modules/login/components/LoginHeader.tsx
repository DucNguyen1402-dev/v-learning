import { EducationLogo, LOGO_SIZES } from "@shared/logo";

interface LoginHeaderProps {
  isRegistrationSuccessful?: boolean;
}

export const LoginHeader = ({ isRegistrationSuccessful }: LoginHeaderProps) => {
  const title = isRegistrationSuccessful
    ? "Chào mừng bạn đến với\u00A0V\u2011Learning!"
    : "Chào mừng bạn trở lại";

  const subtitle = isRegistrationSuccessful
    ? "Đăng nhập để bắt đầu hành trình học tập của bạn."
    : "Đăng nhập để tiếp tục hành trình học tập của bạn.";

  return (
    <div className="flex-center flex-col gap-2">
      <EducationLogo size={LOGO_SIZES.LARGE} />
      <h1 className="text-center text-2xl font-bold tracking-tight">{title}</h1>
      <p className="mt-1 text-center text-sm text-text-subtle">{subtitle}</p>
    </div>
  );
};
