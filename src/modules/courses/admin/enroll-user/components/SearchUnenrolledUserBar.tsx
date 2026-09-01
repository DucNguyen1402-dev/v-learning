import { Input } from "@shared/fields";
import { Search } from "lucide-react";

import { useEnrollUserContext } from "../context";
export const SearchUnenrolledUserBar = () => {
  const {
    filter: { keyword, handleSearch },
  } = useEnrollUserContext();
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
