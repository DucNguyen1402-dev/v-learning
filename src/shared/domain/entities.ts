export const ENTITIES = {
  user: "user",
};

export const ENTITY_LABELS = {
  [ENTITIES.user]: "người dùng",
};

export type Entity = keyof typeof ENTITIES;
