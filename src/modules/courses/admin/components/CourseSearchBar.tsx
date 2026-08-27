import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Input } from "@shared/fields";
import { Search } from "lucide-react";

export const CourseSearchBar = () => {
  const {
    filter: { tenKhoaHoc, onSearchByCoursesName, shouldHideSearch },
  } = useCoursesContext();

  return (
    <div className={shouldHideSearch ? "pointer-events-none opacity-80" : ""}>
      <Input.Root>
        <Input.LeftAddon>
          <Search className="size-4 text-text-subtle" />
        </Input.LeftAddon>
        <Input.Field
          hasLeftAddon
          placeholder="Tìm kiếm khóa học..."
          value={tenKhoaHoc || ""}
          onChange={(e) => onSearchByCoursesName(e.target.value)}
        />
      </Input.Root>
    </div>
  );
};
