"use client";

import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600",
        "dark:text-black dark:hover:bg-sky-400"
      )}
    >
      Toggle theme
    </button>
  );
};
