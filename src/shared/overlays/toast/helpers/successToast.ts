import { ENTITY_LABELS, type EntityType } from "@shared/domain";
import { TOAST_VARIANT } from "@shared/overlays/toast/constants";

const success = (message: string) => ({
  variant: TOAST_VARIANT.SUCCESS,
  message,
});

export const successToast = {
  add: (entity: EntityType) =>
    success(`Thêm ${ENTITY_LABELS[entity]} vào hệ thống thành công.`),
  update: (entity: EntityType) =>
    success(`Cập nhật ${ENTITY_LABELS[entity]} thành công.`),
  delete: (entity: EntityType) =>
    success(`Xóa ${ENTITY_LABELS[entity]} thành công.`),
  changePassword: () => success("Đổi mật khẩu thành công."),
  login: () => success("Đăng nhập thành công!"),
  register: (entity: EntityType) =>
    success(`Đăng ký ${ENTITY_LABELS[entity]} thành công!`),
  cancelCourse: () => success("Hủy đăng ký khóa học thành công!"),
};
