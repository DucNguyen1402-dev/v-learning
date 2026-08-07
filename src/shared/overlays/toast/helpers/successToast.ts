import { type Entity, ENTITY_LABELS } from "@shared/domain";
import { TOAST_VARIANT } from "@shared/overlays/toast/constants";

const success = (message: string) => ({
  variant: TOAST_VARIANT.SUCCESS,
  message,
});

export const successToast = {
  add: (entity: Entity) =>
    success(`Thêm ${ENTITY_LABELS[entity]} vào hệ thống thành công.`),
  update: (entity: Entity) =>
    success(`Cập nhật ${ENTITY_LABELS[entity]} thành công.`),
  delete: (entity: Entity) =>
    success(`Xóa ${ENTITY_LABELS[entity]} thành công.`),
  changePassword: () =>
    success("Mật khẩu của bạn đã được thay đổi thành công."),
  login: () => success("Đăng nhập thành công."),
};
