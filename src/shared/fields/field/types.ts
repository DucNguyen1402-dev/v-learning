import { FIELD_LAYOUT } from "./constants";

export type FieldLayout = (typeof FIELD_LAYOUT)[keyof typeof FIELD_LAYOUT];
