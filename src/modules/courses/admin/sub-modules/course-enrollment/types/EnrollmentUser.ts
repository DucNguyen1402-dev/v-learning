export type EnrollmentStatus = "registered" | "pending";

export type EnrollmentUser = {
  taiKhoan: string;
  biDanh: string;
  hoTen: string;
  trangThai: EnrollmentStatus;
};
