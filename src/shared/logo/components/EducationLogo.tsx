import { GraduationCap } from "lucide-react";

import { logoSize } from "../config";
import { LOGO_SIZES, type LogoSize } from "../constants";

type EducationLogoProps = {
  size?: LogoSize;
};
export const EducationLogo = ({
  size = LOGO_SIZES.MEDIUM,
}: EducationLogoProps) => (
  <div
    className={`login-logo flex-center ${logoSize[size].wrapper} rounded-full`}
  >
    <GraduationCap className={logoSize[size].icon} />
  </div>
);
