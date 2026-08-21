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
import { useCoursesContext } from "../contexts";

export const CoursesToolbar = () => {
  const {
    filter: { category, keyword, handleFilterChange },
  } = useCoursesContext();

  return (
    <div className="flex flex-col gap-8">
      <div className="relative max-w-100 select-none lg:min-w-100">
        <Input.Root>
          <Input.LeftAddon>
            <Search className="size-4 text-text-subtle" />
          </Input.LeftAddon>
          <Input.Field
            hasLeftAddon
            placeholder="Tìm kiếm khóa học..."
            value={keyword || ""}
            onChange={(e) => handleFilterChange({ keyword: e.target.value })}
          />
        </Input.Root>
      </div>

      <div className="flex w-full flex-wrap gap-3 select-none md:max-w-4/5 lg:w-full">
        <div className="w-26">
          <Button
            intent={BUTTON_INTENTS.SECONDARY}
            appearance={BUTTON_APPEARANCES.OUTLINE}
            size={BUTTON_SIZES.NONE}
            fullSize
            onClick={() => handleFilterChange({ category: "all" })}
            selected={category === "all"}
          >
            <span className="py-2.5 text-xs font-medium">Tất cả</span>
          </Button>
        </div>
        {categories.map((cat, idx) => (
          <div className="w-26" key={idx}>
            <Button
              intent={BUTTON_INTENTS.SECONDARY}
              appearance={BUTTON_APPEARANCES.OUTLINE}
              size={BUTTON_SIZES.NONE}
              fullSize
              onClick={() => handleFilterChange({ category: cat.value })}
              selected={category === cat.value}
            >
              <span className="py-2.5 text-xs font-medium">
                {capitalize(cat.label)}
              </span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
