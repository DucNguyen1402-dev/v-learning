import type { ChangeEvent } from "react";

import { Select } from "@shared/fields";

import { PAGE_SIZE_OPTIONS } from "../constants";

type PaginationSelectProps = {
  value: number | string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: { label: string; value: number | string }[];
};

export const PaginationSelect = ({
  value,
  onChange,
  options = PAGE_SIZE_OPTIONS,
}: PaginationSelectProps) => (
  <div className="pagination-select-container">
    <Select
      value={value}
      onChange={onChange}
      options={options}
      defaultOptionLabel="Select page size"
      disabledDefaultOption={true}
    />
  </div>
);
