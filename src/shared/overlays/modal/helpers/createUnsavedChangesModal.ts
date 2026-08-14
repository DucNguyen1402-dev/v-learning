import { type Entity, ENTITY_LABELS, MODAL_TYPES } from ".";

export const createUnsavedChangesModal = (entity: Entity) => {
  const entityLabel = ENTITY_LABELS[entity];

  return {
    type: MODAL_TYPES.UNSAVED_CHANGES,
    title: `Bạn có chắc muốn hủy?`,
    subtitle: `Thông tin ${entityLabel} sẽ không được lưu lại.`,
  };
};
