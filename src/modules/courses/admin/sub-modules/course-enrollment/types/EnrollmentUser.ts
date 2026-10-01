export type EnrollmentStatus = "enrolled" | "pending";

export type EnrollmentUser = {
  taiKhoan: string;
  biDanh: string;
  hoTen: string;
  trangThai: EnrollmentStatus;
};
