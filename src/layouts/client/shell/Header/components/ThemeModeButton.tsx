import { useTheme } from "@shared/theme";
import { Button } from "@shared/ui";
import { MoonStar, Sun } from "lucide-react";
const ThemeModeButton = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const isDarkMode = currentTheme === "dark";
  const icon = isDarkMode ? (
    <Sun className="size-7 text-yellow-500" />
  ) : (
    <MoonStar className="size-6 text-gray-500" />
  );

  return <Button onClick={toggleTheme}>{icon}</Button>;
};
export default ThemeModeButton;
