export const LoginNavigationPayload = {
  required() {
    return {
      loginRequired: true,
    };
  },
  registrationSuccess() {
    return {
      isRegistrationSuccessful: true,
    };
  },
  adminAuthRequired() {
    return {
      adminAuthRequired: true,
    };
  },
};
