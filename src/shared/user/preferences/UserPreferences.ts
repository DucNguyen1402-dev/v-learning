import { PreferencesProvider, usePreferencesContext } from "./contexts";

export const UserPreferences = {
  Provider: PreferencesProvider,
  use: usePreferencesContext,
};
