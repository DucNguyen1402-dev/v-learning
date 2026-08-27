import { Input } from "@shared/fields";
import { Search } from "lucide-react";

export const CourseSearchBar = () => {
  return (
    <Input.Root>
      <Input.LeftAddon>
        <Search className="size-4 text-text-subtle" />
      </Input.LeftAddon>
      <Input.Field
        hasLeftAddon
        placeholder="Tìm kiếm khóa học..."
        value={""}
        onChange={() => {}}
      />
    </Input.Root>
  );
};
