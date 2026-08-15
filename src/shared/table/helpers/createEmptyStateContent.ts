import { ENTITY_LABELS, type EntityType } from "@shared/domain";

type createEmptyStateContentProps = {
  entity: EntityType;
  keyword: string;
};
export const createEmptyStateContent = ({
  entity,
  keyword,
}: createEmptyStateContentProps) => {
  const entityLabel = ENTITY_LABELS[entity];

  return {
    title: `Không tìm thấy ${entityLabel}`,
    description: `Không có ${entityLabel} nào khớp với từ khóa "${keyword}".`,
  };
};
