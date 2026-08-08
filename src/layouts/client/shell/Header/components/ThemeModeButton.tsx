import { useTheme } from "@shared/theme";
import { Button } from "@shared/ui";
import { Moon, Sun } from "lucide-react";
const ThemeModeButton = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const isDarkMode = currentTheme === "dark";
  const icon = isDarkMode ? (
    <Sun className="text-yellow-500" />
  ) : (
    <Moon className="text-gray-500" />
  );

  return <Button onClick={toggleTheme}>{icon}</Button>;
};
export default ThemeModeButton;
