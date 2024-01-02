"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ICON_PROPS = {
  size: 18,
};

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isLightTheme = resolvedTheme === "light";

  const handleToggle = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <button className="rounded p-2 hover:bg-bg-secondary" onClick={handleToggle}>
      {isLightTheme ? <Moon {...ICON_PROPS} /> : <Sun {...ICON_PROPS} />}
    </button>
  );
};
