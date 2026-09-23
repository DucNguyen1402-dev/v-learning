import { categories } from "@modules/courses/shared/config";
import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Input } from "@shared/fields";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { cn } from "@shared/utils";
import { capitalize } from "@shared/utils";
import { Search, SearchX } from "lucide-react";

export const CoursesToolbar = () => {
  const {
    filter: {
      tenKhoaHoc,
      onSearchByCoursesName,
      shouldDisableSearch,
      category,
      onChangeCategory,
    },
  } = useCoursesContext();

  const Icon = shouldDisableSearch ? SearchX : Search;
  const placeholder = shouldDisableSearch
    ? "Chọn tất cả danh mục để tìm kiếm"
    : "Tìm kiếm khóa học...";

  return (
    <div className="flex flex-col gap-8">
      <div
        className={cn(
          "relative max-w-100 select-none lg:min-w-100",
          shouldDisableSearch && "pointer-events-none select-none",
        )}
      >
        <Input.Root>
          <Input.LeftAddon>
            <Icon className="size-4 text-text-subtle" />
          </Input.LeftAddon>
          <Input.Field
            hasLeftAddon
            placeholder={placeholder}
            value={tenKhoaHoc || ""}
            onChange={(e) => onSearchByCoursesName(e.target.value)}
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
            selected={category === null}
            onClick={() => onChangeCategory(null)}
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
              selected={category === cat.value}
              onClick={() => onChangeCategory(cat.value)}
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
