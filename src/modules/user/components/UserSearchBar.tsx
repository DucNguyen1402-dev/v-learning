import { Input } from "@shared/fields";
import { Search, SearchX } from "lucide-react";

import { useUserContext } from "../contexts";

// - The paginated list API does not support user role filtering.
// - When filtering by role (using a separate query source), disable the search bar.
// - To search, the role filter must be set to "Tất cả".
export const UserSearchBar = () => {
  const { filter, isLocalPagination } = useUserContext();

  const shouldHideSearch = isLocalPagination;
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
          value={filter.keyword}
          onChange={(e) => filter.onSearchByUserName(e.target.value)}
        />
      </Input.Root>
    </div>
  );
};
