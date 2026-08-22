import type { Category } from "../types";

export const categories = [
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Mobile", value: "Didong" },
  { label: "Fullstack", value: "Fullstack" },
  { label: "Fundamentals", value: "Tuduy" },
  { label: "Web Design", value: "Design" },
] as const satisfies ReadonlyArray<{ label: string; value: Category }>;
