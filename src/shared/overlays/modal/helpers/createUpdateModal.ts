import { type Entity, ENTITY_LABELS, MODAL_TYPES } from ".";

export const createUpdateModal = (entity: Entity) => {
  const entityLabel = ENTITY_LABELS[entity];

  return {
    type: MODAL_TYPES.UPDATE,
    title: `Xác nhận lưu thay đổi?`,
    subtitle: `Thông tin ${entityLabel} sẽ được thay đổi trên hệ thống.`,
  };
};
