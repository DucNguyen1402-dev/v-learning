import { EducationLogo, LOGO_SIZES } from "@shared/logo";

import { getTitleAndSubtitle } from "./helper";

type LoginHeaderProps = {
  isRegistrationSuccessful?: boolean;
  loginRequired?: boolean;
  adminAuthRequired?: boolean;
};

export const LoginHeader = ({
  isRegistrationSuccessful = false,
  loginRequired = false,
  adminAuthRequired = false,
}: LoginHeaderProps) => {
  const { title, subtitle } = getTitleAndSubtitle({
    isRegistrationSuccessful,
    loginRequired,
    adminAuthRequired,
  });

  return (
    <div className="flex-center flex-col gap-6 select-none">
      <EducationLogo size={LOGO_SIZES.LARGE} />
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-1 text-center text-sm text-text-subtle">{subtitle}</p>
      </div>
    </div>
  );
};
