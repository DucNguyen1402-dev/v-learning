import { Theme } from "@shared/theme";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { cn } from "@shared/utils";
import { MoonStar, Sun } from "lucide-react";

export const ThemeModeButton = () => {
  const { isDarkMode, toggleTheme } = Theme.use();

  const iconClass = "absolute transition-all duration-300 ease-in-out";
  const visible = "scale-100 rotate-0 opacity-100";
  const hidden = "scale-0 -rotate-90 opacity-0";

  return (
    <div className="relative flex-center">
      <Button
        onClick={toggleTheme}
        appearance={BUTTON_APPEARANCES.GHOST}
        intent={BUTTON_INTENTS.TERTIARY}
        size={BUTTON_SIZES.LARGE}
      >
        <MoonStar
          className={cn(
            iconClass + " text-zinc-500",
            isDarkMode ? hidden : visible,
          )}
        />

        <Sun
          className={cn(
            iconClass + " text-yellow-500",
            isDarkMode ? visible : hidden,
          )}
        />
      </Button>
    </div>
  );
};
