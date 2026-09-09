import { Mail, Phone } from "lucide-react";

import { PROFILE_CHANGE_FIELD_NAMES } from "../constants";
export const profileChangeFields = [
  {
    label: "HỌ VÀ TÊN",
    name: PROFILE_CHANGE_FIELD_NAMES.NAME,
    required: true,
    leftAddon: null,
    type: "text",
  },
  {
    label: "EMAIL",
    name: PROFILE_CHANGE_FIELD_NAMES.EMAIL,
    type: "email",
    required: true,
    leftAddon: Mail,
  },
  {
    label: "SỐ ĐIỆN THOẠI",
    name: PROFILE_CHANGE_FIELD_NAMES.PHONE,
    type: "number",
    required: false,
    leftAddon: Phone,
  },
];

export const profileChangeFieldNames = Object.values(
  PROFILE_CHANGE_FIELD_NAMES,
);
