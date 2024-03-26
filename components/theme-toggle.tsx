"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative"
    >
      {theme === "light" ? (
        <>
          <Sun
            size="80"
            className="absolute transition-all scale-100 rotate-0 text-slate-100"
          />
          <Moon
            size="80"
            className="absolute transition-all scale-0 rotate-90"
            style={{ visibility: "hidden" }}
          />
        </>
      ) : (
        <>
          <Sun
            size="80"
            className="absolute transition-all scale-0 rotate-90"
            style={{ visibility: "hidden" }}
          />
          <Moon
            size="80"
            className="absolute transition-all scale-100 rotate-0 text-slate-100"
          />
        </>
      )}
    </button>
  );
}
