import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Input } from "@shared/fields";
import { Search, SearchX } from "lucide-react";

// - API lấy paginated list không support filter caterory
// - Khi đang filter với category (dùng một nguồn dữ liệu query riêng) -> block search bar
// - Muốn search thì phải bỏ chọn filter category với mục "tất cả"
export const CourseSearchBar = () => {
  const {
    filter: { tenKhoaHoc, onSearchByCoursesName, shouldHideSearch },
  } = useCoursesContext();

  const Icon = shouldHideSearch ? SearchX : Search;
  const placeholder = shouldHideSearch
    ? "Chọn tất cả danh mục để tìm kiếm"
    : "Tìm kiếm khóa học...";
  return (
    <div
      className={
        shouldHideSearch ? "pointer-events-none opacity-80 select-none" : ""
      }
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
  );
};
