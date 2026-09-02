import { EducationLogo, LOGO_SIZES } from "@shared/logo";

interface LoginHeaderProps {
  isRegistrationSuccessful?: boolean;
  loginRequired?: boolean;
}

export const LoginHeader = ({
  isRegistrationSuccessful,
  loginRequired,
}: LoginHeaderProps) => {
  const getTitleAndSubtitle = () => {
    if (isRegistrationSuccessful) {
      return {
        title: "Bắt đầu hành trình học tập cùng\u00A0V-Learning!",
        subtitle: "Đăng nhập ngay với tài khoản mới của bạn.",
      };
    }

    if (loginRequired) {
      return {
        title: "Vui lòng đăng nhập để tiếp tục",
        subtitle: "Đăng nhập để tiếp tục hành trình học tập của bạn.",
      };
    }

    return {
      title: "Chào mừng bạn trở lại!",
      subtitle: "Đăng nhập để tiếp tục hành trình học tập của bạn.",
    };
  };

  const { title, subtitle } = getTitleAndSubtitle();

  return (
    <div className="flex-center flex-col gap-6 select-none">
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
