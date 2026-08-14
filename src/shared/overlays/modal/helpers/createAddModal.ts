import { type Entity, ENTITY_LABELS, MODAL_TYPES } from ".";

export const createAddModal = (entity: Entity) => {
  const entityLabel = ENTITY_LABELS[entity];

  return {
    type: MODAL_TYPES.ADD,
    title: `Xác nhận tạo ${entityLabel} mới.`,
    subtitle: `Hệ thống sẽ tạo ${entityLabel} mới với thông tin bạn đã nhập`,
  };
};
