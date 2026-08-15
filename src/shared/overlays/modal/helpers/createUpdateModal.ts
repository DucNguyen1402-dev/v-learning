import { ENTITY_LABELS, type EntityType, MODAL_TYPES } from ".";

export const createUpdateModal = (entity: EntityType) => {
  const entityLabel = ENTITY_LABELS[entity];

  return {
    type: MODAL_TYPES.UPDATE,
    title: `Xác nhận lưu thay đổi?`,
    subtitle: `Thông tin ${entityLabel} sẽ được thay đổi trên hệ thống.`,
  };
};
