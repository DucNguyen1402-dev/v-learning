import type { Category } from "../types";

export const categories = [
  { label: "Frontend", value: "FrontEnd" },
  { label: "Backend", value: "BackEnd" },
  { label: "Mobile", value: "DiDong" },
  { label: "Fullstack", value: "FullStack" },
  { label: "Fundamentals", value: "TuDuy" },
  { label: "Web Design", value: "Design" },
] as const satisfies ReadonlyArray<{ label: string; value: Category }>;
