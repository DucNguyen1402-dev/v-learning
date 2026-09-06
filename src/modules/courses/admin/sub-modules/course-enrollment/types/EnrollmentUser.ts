export type EnrollmentStatus = "Đã đăng ký" | "Chờ xác nhận";

export type EnrollmentUser = {
  taiKhoan: string;
  biDanh: string;
  hoTen: string;
  trangThai: EnrollmentStatus;
};
