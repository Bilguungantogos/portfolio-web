"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

const Header = () => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between items-center max-md:flex-col max-md:gap-4 lg:mx-20 md:mx-20 py-4 mt-4 dark:text-white text-black">
      {theme === "light" ? (
        <img
          src="logo.png"
          className="max-lg:h-[30px] max-lg:w-[160px] w-[160px] h-[30px] object-cover"
          alt="Light logo"
        />
      ) : (
        <img
          src="logowhite.png"
          className="max-lg:h-[30px] max-lg:w-[160px] w-[160px] h-[30px] object-cover"
          alt="Dark logo"
        />
      )}

      <div className="flex items-center justify-center lg:gap-8 h-10 border-2 border-[#31363d] border-opacity-50 rounded-full px-2 lg:text-lg md:text-md sm:text-sm xs:text-xs shadow-2xl">
        <p className="hover:bg-slate-300 rounded-full px-3 ">All</p>
        <p className="hover:bg-slate-300 rounded-full px-2">About</p>
        <p className="hover:bg-slate-300 rounded-full px-2">Project</p>
        <p className="hover:bg-slate-300 rounded-full px-2">Media</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="max-md:text-xl max-md:hidden"
      >
        <a href="mailto:gantogos.bilguun48@gmail.com">Contact me</a>
      </motion.button>
    </div>
  );
};

export default Header;
