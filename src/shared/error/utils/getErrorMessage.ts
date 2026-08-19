import axios from "axios";

type ErrorResponse = {
  message?: string | string[];
};

export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ErrorResponse;
    const message = data?.message;

    if (typeof message === "string") {
      return message;
    }

    if (Array.isArray(message) && message.length > 0) {
      return message.join(", ");
    }

    switch (error.response?.status) {
      case 400:
        return "Yêu cầu không hợp lệ.";
      case 401:
        return "Vui lòng đăng nhập lại.";
      case 403:
        return "Bạn không có quyền thực hiện thao tác này.";
      case 404:
        return "Không tìm thấy dữ liệu.";
      case 500:
        //API trả về lỗi 500 khi đăng nhập sai, nên đổi thông báo lỗi để người dùng dễ hiểu hơn
        return "Tài khoản hoặc mật khẩu không chính xác.";
      default:
        return "Có lỗi xảy ra khi kết nối tới máy chủ.";
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "Đã có lỗi xảy ra. Vui lòng thử lại sau.";
};
