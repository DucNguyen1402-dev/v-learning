import { Input } from "@shared/fields";
import { Search } from "lucide-react";

import { useCourseEnrollmentContext } from "../contexts";
export const CourseEnrollmentUserSearchBar = () => {
  const {
    filter: { keyword, handleSearch },
  } = useCourseEnrollmentContext();
  return (
    <Input.Root>
      <Input.LeftAddon>
        <Search className="size-4 text-text-subtle" />
      </Input.LeftAddon>
      <Input.Field
        hasLeftAddon
        placeholder="Search user..."
        value={keyword || ""}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Input.Root>
  );
};
