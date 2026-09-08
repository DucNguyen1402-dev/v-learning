import { ENTITY_LABELS, type EntityType } from "@shared/domain";

import { MODAL_TYPES } from "../constants";
export const createUnsavedChangesModal = (entity: EntityType) => {
  const entityLabel = ENTITY_LABELS[entity];

  return {
    type: MODAL_TYPES.UNSAVED_CHANGES,
    title: `Bạn có chắc muốn hủy?`,
    subtitle: `Thông tin ${entityLabel} sẽ không được lưu lại.`,
  };
};
