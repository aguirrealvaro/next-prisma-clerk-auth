"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ICON_PROPS = {
  size: 18,
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="rounded p-2 hover:bg-bg-secondary" onClick={handleToggle}>
      {theme === "light" ? <Sun {...ICON_PROPS} /> : <Moon {...ICON_PROPS} />}
    </button>
  );
};
