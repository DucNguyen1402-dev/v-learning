import { cn } from "@shared/utils";
import { GraduationCap } from "lucide-react";

import { logoSizes, logoVariants } from "../config";
import {
  LOGO_SIZES,
  LOGO_VARIANTS,
  type LogoSize,
  type LogoVariant,
} from "../constants";

type EducationLogoProps = {
  size?: LogoSize;
  variant?: LogoVariant;
};
export const EducationLogo = ({
  size = LOGO_SIZES.MEDIUM,
  variant = LOGO_VARIANTS.PRIMARY,
}: EducationLogoProps) => (
  <div
    className={cn(
      "login-logo-container",
      logoSizes[size].wrapper,
      logoVariants[variant],
    )}
  >
    <GraduationCap className={logoSizes[size].icon} />
  </div>
);
