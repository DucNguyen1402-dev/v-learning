import { Input } from "@shared/fields";
import { Search } from "lucide-react";

export const CoursesToolbar = () => {
  return (
    <div className="flex flex-col items-stretch justify-between gap-4 pb-6 sm:flex-row sm:items-center">
      <div className="relative min-w-80">
        <Input.Root>
          <Input.LeftAddon>
            <Search className="size-4 text-text-subtle" />
          </Input.LeftAddon>
          <Input.Field hasLeftAddon placeholder="Tìm kiếm khóa học..." />
        </Input.Root>
      </div>

      <div className="flex gap-2 pb-2 text-xs">
        {["Tất cả", "Frontend", "Backend", "Architecture", "UI/UX"].map(
          (cat, idx) => (
            <button
              key={idx}
              className={`rounded-md px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                idx === 0
                  ? "bg-neutral-900 text-white"
                  : "border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {cat}
            </button>
          ),
        )}
      </div>
    </div>
  );
};
