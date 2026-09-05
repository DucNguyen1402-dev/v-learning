import type { HeaderLoginState } from "@modules/login/types";

export const getTitleAndSubtitle = ({
  isRegistrationSuccessful,
  loginRequired,
  adminAuthRequired,
}: HeaderLoginState) => {
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

  if (adminAuthRequired) {
    return {
      title: "Xác thực quản trị viên yêu cầu",
      subtitle: "Vui lòng đăng nhập với tài khoản quản trị viên của bạn.",
    };
  }

  return {
    title: "Chào mừng bạn trở lại!",
    subtitle: "Đăng nhập để tiếp tục hành trình học tập của bạn.",
  };
};
