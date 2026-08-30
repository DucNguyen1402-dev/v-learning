import { Select } from "@shared/fields";

import { userRoleOptions } from "../config";
import { useUserContext } from "../contexts";
import type { UserRole } from "../types";
export const UserRoleFilter = () => {
  const { filter } = useUserContext();

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
          value={filter.role}
          onChange={(value: UserRole | null) => filter.onChangeRole(value)}
          options={userRoleOptions}
        />
      </Select.Root>
    </div>
  );
};
