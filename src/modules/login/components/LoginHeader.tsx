import { CLIENT_ROUTE_KEYS } from "@routes/client";
import { EducationLogo, LOGO_SIZES } from "@shared/logo";

interface LoginHeaderProps {
  previousRouteKey?: string;
}

export const LoginHeader = ({ previousRouteKey }: LoginHeaderProps) => {
  const title =
    previousRouteKey === CLIENT_ROUTE_KEYS.REGISTER
      ? "Chào mừng bạn đến với\u00A0V-Learning!"
      : "Chào mừng bạn trở lại";

  const subtitle =
    previousRouteKey === CLIENT_ROUTE_KEYS.REGISTER
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
