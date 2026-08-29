import { Select } from "@shared/fields";

import { userRoleOptions } from "../config";
import type { UserRole } from "../types";

export const UserRoleFilter = () => {
  // const { filter } = useCoursesContext();

  return (
    <div className="w-full max-w-50">
      <Select.Root>
        <Select.Trigger
          id="select"
          labels={{
            disabled: "Disabled",
            required: "Required",
          }}
        />

        <Select.Content
          value={""}
          onChange={() => {}}
          options={userRoleOptions}
        />
      </Select.Root>
    </div>
  );
};
