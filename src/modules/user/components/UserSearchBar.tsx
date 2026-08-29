// import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Input } from "@shared/fields";
import { Search, SearchX } from "lucide-react";

// - API lấy paginated list không support filter caterory
// - Khi đang filter với category (dùng một nguồn dữ liệu query riêng) -> block search bar
// - Muốn search thì phải bỏ chọn filter category với mục "tất cả"
export const UserSearchBar = () => {
  // const {
  //   filter: { tenKhoaHoc, onSearchByCoursesName, shouldHideSearch },
  // } = useCoursesContext();

  const shouldHideSearch = false;
  const Icon = shouldHideSearch ? SearchX : Search;
  const placeholder = shouldHideSearch
    ? "Chọn tất cả vai trò để tìm kiếm"
    : "Tìm kiếm người dùng...";
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
          value={""}
          onChange={() => {}}
        />
      </Input.Root>
    </div>
  );
};
