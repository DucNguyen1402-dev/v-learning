import type { category } from "../types";

export const categories = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Mobile", value: "didong" },
  { label: "Fullstack", value: "fullstack" },
  { label: "Fundamentals", value: "tuduy" },
  { label: "Web Design", value: "design" },
] as const satisfies ReadonlyArray<{ label: string; value: category }>;
