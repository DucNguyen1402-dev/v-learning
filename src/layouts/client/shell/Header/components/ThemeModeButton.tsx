import { Theme } from "@shared/theme";
import { Button } from "@shared/ui";
import { cn } from "@shared/utils";
import { MoonStar, Sun } from "lucide-react";

export const ThemeModeButton = () => {
  const { isDarkMode, toggleTheme } = Theme.use();

  const iconClass = "absolute transition-all duration-300 ease-in-out";
  const visible = "scale-100 rotate-0 opacity-100";
  const hidden = "scale-0 -rotate-90 opacity-0";

  return (
    <Button
      onClick={toggleTheme}
      className="relative"
      variant="tertiary"
      size="lg"
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
  );
};
