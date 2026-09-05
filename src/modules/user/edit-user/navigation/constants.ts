export const EDIT_USER_ROUTE_KEY = "ADMIN_EDIT_USER";
export const EDIT_USER_ROUTE_SEGMENT = "edit/:taiKhoan";
export const EDIT_USER_ROUTE_TITLE = "Chỉnh sửa người dùng";
export const EDIT_USER_ROUTE_PATH_BUILDER = (taiKhoan: string) =>
  `/admin/users/edit/${taiKhoan}`;
