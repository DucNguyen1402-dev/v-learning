export type EnrollmentStatus = "đã đăng ký" | "chờ xác nhận";

export type UserCourse = {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  trangThai: EnrollmentStatus;
};
