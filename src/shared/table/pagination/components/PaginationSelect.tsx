import { Select } from "@shared/fields";

import { PAGE_SIZE_OPTIONS } from "../config";

type PaginationSelectProps = {
  id: string;
  value: number | string;
  onChange: (value: number | string) => void;
  options?: { label: string; value: number | string }[];
};

export const PaginationSelect = ({
  id,
  value,
  onChange,
  options = PAGE_SIZE_OPTIONS,
}: PaginationSelectProps) => (
  <div className="pagination-select-container">
    <Select.Root>
      <Select.Trigger
        id={id}
        labels={{
          placeholder: "Chọn phân trang",
          disabled: "Disabled",
          required: "Required",
          selected: "Phân trang đã chọn: ",
        }}
      />

      <Select.Content value={value} onChange={onChange} options={options} />
    </Select.Root>
  </div>
);
