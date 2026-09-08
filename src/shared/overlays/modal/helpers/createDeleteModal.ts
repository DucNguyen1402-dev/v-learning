import { ENTITY_LABELS, type EntityType } from "@shared/domain";

import { MODAL_TYPES } from "../constants";

export const createDeleteModal = (entity: EntityType, name?: string) => {
  const entityLabel = ENTITY_LABELS[entity];
  const target = name ? `${entityLabel} "${name}"` : entityLabel;

  return {
    type: MODAL_TYPES.DELETE,
    title: `Bạn có chắc muốn xóa ${target}?`,
    subtitle: `Thông tin ${entityLabel} sẽ bị xóa khỏi hệ thống.`,
  };
};
