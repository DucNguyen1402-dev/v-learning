import { clearSession } from "./clearSession";
import { saveSession } from "./saveSession";

export const Session = {
  logout: clearSession,
  save: saveSession,
};
