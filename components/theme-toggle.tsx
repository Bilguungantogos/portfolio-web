"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="dark:bg-slate-800 max-[481px]:w-[3rem] max-[481px]:h-[3rem] w-[5rem] h-[5rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all bg-black"
      onMouseDown={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="text-[white] " />
      ) : (
        <BsMoon className="text-[#FBE2A1]" />
      )}
    </button>
  );
}
