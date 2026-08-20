import { useState } from "react";

import { Input } from "@shared/fields";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { capitalize } from "@shared/utils";
import { Search } from "lucide-react";

import { categories } from "../config";
import type { category } from "../types";

export const CoursesToolbar = () => {
  const [filter, setFilter] = useState<category | null>(null);

  const handleFilterChange = (cat: category) => {
    setFilter(cat);
  };
  return (
    <div className="flex justify-between">
      <div className="relative min-w-80 select-none">
        <Input.Root>
          <Input.LeftAddon>
            <Search className="size-4 text-text-subtle" />
          </Input.LeftAddon>
          <Input.Field hasLeftAddon placeholder="Tìm kiếm khóa học..." />
        </Input.Root>
      </div>

      <div className="flex gap-2 select-none">
        {categories.map((cat, idx) => (
          <div className="w-26" key={idx}>
            <Button
              intent={BUTTON_INTENTS.SECONDARY}
              appearance={BUTTON_APPEARANCES.OUTLINE}
              size={BUTTON_SIZES.NONE}
              fullSize
              onClick={() => handleFilterChange(cat)}
              selected={filter === cat}
            >
              <span className="text-xs font-medium">{capitalize(cat)}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
