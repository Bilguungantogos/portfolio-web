"use client";

import React, { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="flex justify-between items-center lg:mx-20 py-4 mt-4 dark:text-white text-black">
      {theme === "light" ? (
        <img
          src="logo.png"
          className="lg:h-[30px] lg:w-[160px] md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-4 xs:h-4 object-cover"
          alt="Light logo"
        />
      ) : (
        <img
          src="logowhite.png"
          className="lg:h-[30px] lg:w-[160px] md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-4 xs:h-4 object-cover"
          alt="Dark logo"
        />
      )}

      <div className="flex items-center justify-center lg:gap-8 h-10 border-2 border-[#31363d] border-opacity-50 rounded-full px-2 lg:text-lg md:text-md sm:text-sm xs:text-xs shadow-2xl">
        <p className="hover:bg-slate-300 rounded-full px-3 ">All</p>
        <p className="hover:bg-slate-300 rounded-full px-2">About</p>
        <p className="hover:bg-slate-300 rounded-full px-2">Project</p>
        <p className="hover:bg-slate-300 rounded-full px-2">Media</p>
      </div>
      <button className="text-xl" onClick={() => {}}>
        Contact me
      </button>
    </div>
  );
};

export default Header;
